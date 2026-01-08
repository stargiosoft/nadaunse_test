// Supabase Edge Function: ?�림??발송 (TalkDream API)
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// TalkDream API ?�정
const TALKDREAM_CONFIG = {
  authToken: 'tOFI8RZQD2qibU/ggEWvqw==',
  serverName: 'starsaju1',
  paymentType: 'P', // ?�불충전?�원 ?�라미터 (?�수)
  service: '2500109900', // ?�림??Service No
  baseUrl: 'https://talkapi.lgcns.com',
  templateId: '10002' // 구매 결과 ?�내 ?�플�?
}

// ?�시???�정 (�?4�??�도: 1??+ 3???�시??
const RETRY_CONFIG = {
  maxRetries: 3, // ?�시???�수 (1�??�패 + 3�??�시??= �?4�?
  delays: [5000, 15000, 30000] // 5�? 15�? 30�?
}

// ?�시???�외 ?�러 코드
const NO_RETRY_ERRORS = [
  'KKO_3016', // ?�플�?불일�?
  'KKO_3018', // 발송 불�?
  'KKO_3020', // ?�신 차단
  'ERR_AUTH'  // ?�증 ?�류
]

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { 
      orderId,
      userId,
      mobile,
      customerName,
      contentId
    } = await req.json()

    if (!orderId || !userId || !mobile || !customerName || !contentId) {
      return new Response(
        JSON.stringify({ success: false, error: '?�수 ?�보가 ?�락?�었?�니??' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('?�� ?�림??발송 ?�작')
    console.log('?�� ?�신??', mobile)
    console.log('?�� 주문 ID:', orderId)

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 1. ?�림??로그 ?�성
    const { data: logData, error: logError } = await supabase
      .from('alimtalk_logs')
      .insert({
        order_id: orderId,
        user_id: userId,
        phone_number: mobile,
        template_code: TALKDREAM_CONFIG.templateId,
        message_content: null,
        variables: {
          customerName: customerName,
          contentId: contentId
        },
        status: 'pending',
        retry_count: 0
      })
      .select()
      .single()

    if (logError) {
      console.error('??로그 ?�성 ?�패:', logError)
      throw new Error('?�림??로그 ?�성???�패?�습?�다.')
    }

    const logId = logData.id

    // 2. 메시지 본문 구성 (검?�된 ?�플릿과 ?�확???�치?�야 ??
    // ?�️ ?�플�?ID: 10002 (구매 결과 ?�내)
    // ?�️ ?�인?? 2026/01/08 - ?�모지, ?�어?�기, 줄바�?모두 ?�확???�치?�야 ??
    // ?�️ 변?�는 ?�라?�언?�에??직접 치환?�서 ?�송 (TalkDream API 문서 기�?)
    // ?�️ 카카?�는 ?�플릿과 비교 ??변???�치�??�른 �??�용
    const message = `${customerName}?? 구매?�신 ?�세가 준비됐?�요 ?��

?�늘???�신?�게, ?�하�??�어??
?�떤 ?�루??괜찮?�요
천천??가??충분?�니까요 ??

?�번???�떤 가?�성??기다릴까??
지�?바로 ?�인??보세??

*�?메시지???�림???�신???�의?�신 분께 발송?�는 ?�보??메시지?�니??

?��?지?�소?�트
010-7442-1815`

    // 3. ?�림??발송 (?�시??로직 ?�함)
    // ⭐️ ?�시???�책:
    // - �?4�??�도 (1??+ 3???�시??
    // - ?�시??간격: 5�? 15�? 30�?
    // - ?�시??불�????�러 (?�플�?불일�? 발송 불�?, ?�신 차단 ????즉시 ?�패 처리
    let lastError = null
    let retryCount = 0

    for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
      try {
        console.log(`?�� 발송 ?�도 ${attempt + 1}/${RETRY_CONFIG.maxRetries + 1}`)

        // TalkDream API ?�출
        // ?�️ Header: authToken, serverName, paymentType (?�증 ?�보)
        // ?�️ Body: service, message, mobile, template, buttons (발송 ?�보)
        // TalkDream API 호출
        // ⭐ URL 직접 치환 방식 사용 (TalkDream API 문서 기준)
        // ⭐ 버튼 URL: 운세풀이 결과 페이지로 이동 (/result/saju)
        const payload = {
          service: Number(TALKDREAM_CONFIG.service), // number 타입으로 변환
          messageType: 'AT', // 알림톡
          template: TALKDREAM_CONFIG.templateId,
          mobile: mobile,
          message: message,
          buttons: [
            {
              type: 'AC', // 채널추가
              name: '채널 추가'
            },
            {
              type: 'WL', // 웹링크
              name: '나만의 이야기 보기',
              // ⭐ 운세풀이 결과 페이지로 이동 (orderId, contentId 직접 치환)
              url_mobile: `https://nadaunse.com/result/saju?orderId=${orderId}&contentId=${contentId}&from=purchase`,
              url_pc: `https://nadaunse.com/result/saju?orderId=${orderId}&contentId=${contentId}&from=purchase`
            }
          ]
        }

        const response = await fetch(
          `${TALKDREAM_CONFIG.baseUrl}/request/kakao.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              'authToken': TALKDREAM_CONFIG.authToken,
              'serverName': TALKDREAM_CONFIG.serverName,
              'paymentType': TALKDREAM_CONFIG.paymentType
            },
            body: JSON.stringify(payload)
          }
        )

        const result = await response.json()

        console.log('?�� TalkDream ?�답 ?�태:', response.status)
        console.log('?�� TalkDream ?�답 ?�체:', JSON.stringify(result, null, 2))
        console.log('?�� ?�청 payload:', JSON.stringify(payload, null, 2))

        // ?�공 처리 (code ?�는 status ?�드 ?�인)
        const resultCode = result.code || result.status || result.resultCode
        const resultMessage = result.message || result.msg || result.resultMsg || '?�답 메시지 ?�음'

        if (response.ok && (resultCode === '0000' || resultCode === 'OK' || resultCode === 'SUCCESS')) {
          console.log('???�림??발송 ?�공')

          await supabase
            .from('alimtalk_logs')
            .update({
              status: 'success',
              message_content: message,
              sent_at: new Date().toISOString(),
              retry_count: retryCount
            })
            .eq('id', logId)

          return new Response(
            JSON.stringify({ 
              success: true, 
              messageId: result.messageId,
              logId: logId 
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        // ?�러 처리
        const errorCode = resultCode || 'UNKNOWN'
        const errorMessage = resultMessage

        console.error(`???�림??발송 ?�패 (${errorCode}): ${errorMessage}`)

        // ?�시???�외 ?�러??경우 즉시 ?�패 처리
        if (NO_RETRY_ERRORS.includes(errorCode)) {
          console.error('?�️ ?�시??불�??�한 ?�러, 즉시 ?�패 처리')

          await supabase
            .from('alimtalk_logs')
            .update({
              status: 'failed',
              error_code: errorCode,
              error_message: errorMessage,
              retry_count: retryCount
            })
            .eq('id', logId)

          return new Response(
            JSON.stringify({ 
              success: false, 
              error: errorMessage,
              errorCode: errorCode,
              logId: logId
            }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        lastError = { code: errorCode, message: errorMessage }
        retryCount++

        // 마�?�??�도가 ?�니�??�시???��?
        if (attempt < RETRY_CONFIG.maxRetries) {
          const delay = RETRY_CONFIG.delays[attempt]
          console.log(`??${delay / 1000}�????�시??..`)
          await new Promise(resolve => setTimeout(resolve, delay))
        }

      } catch (error) {
        console.error(`??발송 ?�류 (?�도 ${attempt + 1}):`, error)
        lastError = { 
          code: 'NETWORK_ERROR', 
          message: error instanceof Error ? error.message : '?�트?�크 ?�류' 
        }
        retryCount++

        // 마�?�??�도가 ?�니�??�시???��?
        if (attempt < RETRY_CONFIG.maxRetries) {
          const delay = RETRY_CONFIG.delays[attempt]
          console.log(`??${delay / 1000}�????�시??..`)
          await new Promise(resolve => setTimeout(resolve, delay))
        }
      }
    }

    // 모든 ?�시???�패
    console.error('??모든 ?�시???�패')

    await supabase
      .from('alimtalk_logs')
      .update({
        status: 'failed',
        error_code: lastError?.code || 'UNKNOWN',
        error_message: lastError?.message || '?????�는 ?�류',
        retry_count: retryCount
      })
      .eq('id', logId)

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: lastError?.message || '?�림??발송???�패?�습?�다.',
        errorCode: lastError?.code || 'UNKNOWN',
        logId: logId
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('?�수 ?�행 ?�류:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : '?????�는 ?�류' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
