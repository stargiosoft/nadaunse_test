/**
 * Sentry → Slack Webhook 중계 Edge Function
 * Sentry에서 보내는 이벤트를 Slack 형식으로 변환하여 전달
 */

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SLACK_WEBHOOK_URL = Deno.env.get("SLACK_WEBHOOK_URL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, sentry-hook-resource, sentry-hook-timestamp, sentry-hook-signature",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const payload = await req.json();
    console.log("[Sentry Webhook] Received:", JSON.stringify(payload, null, 2));

    // Sentry 이벤트 타입 확인
    const resource = req.headers.get("sentry-hook-resource") || "unknown";

    // Slack 메시지 포맷팅
    const slackMessage = formatSlackMessage(payload, resource);

    if (!SLACK_WEBHOOK_URL) {
      console.error("[Sentry Webhook] SLACK_WEBHOOK_URL not configured");
      return new Response(JSON.stringify({ error: "Slack webhook not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Slack으로 전송
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error("[Sentry Webhook] Slack error:", errorText);
      return new Response(JSON.stringify({ error: "Failed to send to Slack" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("[Sentry Webhook] Successfully sent to Slack");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("[Sentry Webhook] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

/**
 * Sentry payload를 Slack 메시지 형식으로 변환
 */
function formatSlackMessage(payload: any, resource: string): object {
  // Issue Alert (가장 일반적)
  if (resource === "issue" || payload.event || payload.issue) {
    const issue = payload.issue || {};
    const event = payload.event || {};
    const project = payload.project?.name || payload.project_name || "nadaunse";

    const title = issue.title || event.title || payload.message || "New Sentry Alert";
    const culprit = issue.culprit || event.culprit || "";
    const url = payload.url || issue.web_url || `https://sentry.io`;
    const level = event.level || issue.level || "error";

    // 에러 레벨에 따른 색상
    const color = level === "error" ? "#E74C3C" :
                  level === "warning" ? "#F39C12" : "#3498DB";

    return {
      attachments: [
        {
          color: color,
          pretext: `:rotating_light: *Sentry Alert* - ${project}`,
          title: title,
          title_link: url,
          text: culprit,
          fields: [
            {
              title: "Level",
              value: level.toUpperCase(),
              short: true,
            },
            {
              title: "Project",
              value: project,
              short: true,
            },
          ],
          footer: "Sentry",
          footer_icon: "https://sentry.io/_static/getsentry/images/favicon.ico",
          ts: Math.floor(Date.now() / 1000),
        },
      ],
    };
  }

  // Metric Alert
  if (resource === "metric_alert" || payload.metric_alert) {
    const alert = payload.metric_alert || payload;
    return {
      attachments: [
        {
          color: "#E74C3C",
          pretext: `:chart_with_upwards_trend: *Sentry Metric Alert*`,
          title: alert.alert_rule?.name || "Metric Alert Triggered",
          text: payload.description_text || "A metric alert has been triggered.",
          footer: "Sentry",
          ts: Math.floor(Date.now() / 1000),
        },
      ],
    };
  }

  // 기본 포맷
  return {
    text: `:warning: Sentry Event (${resource})`,
    attachments: [
      {
        color: "#9B59B6",
        text: JSON.stringify(payload, null, 2).slice(0, 500),
        footer: "Sentry Webhook",
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };
}
