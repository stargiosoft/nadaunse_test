/**
 * Sentry 에러 추적 설정
 * - 프로덕션에서만 활성화
 * - 민감 정보 필터링
 */

import * as Sentry from '@sentry/react';

// Sentry DSN은 환경변수로 관리
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

/**
 * Sentry 초기화
 * main.tsx에서 앱 시작 시 호출
 */
export function initSentry() {
  // 프로덕션 환경 + DSN이 있을 때만 활성화
  if (!import.meta.env.PROD || !SENTRY_DSN) {
    console.log('[Sentry] 비활성화 (개발 환경 또는 DSN 미설정)');
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: import.meta.env.VITE_APP_VERSION || '1.0.0',

    // 샘플링 설정
    tracesSampleRate: 0.1, // 성능 트레이스 10%
    replaysSessionSampleRate: 0.1, // 세션 리플레이 10%
    replaysOnErrorSampleRate: 1.0, // 에러 발생 시 100% 리플레이

    // 민감 정보 필터링
    beforeSend(event) {
      // 이메일 마스킹
      if (event.user?.email) {
        const [local, domain] = event.user.email.split('@');
        event.user.email = `${local[0]}***@${domain}`;
      }

      // user_id 앞 8자만 유지
      if (event.user?.id && event.user.id.length > 8) {
        event.user.id = `${event.user.id.slice(0, 8)}...`;
      }

      // request body에서 민감 정보 제거
      if (event.request?.data) {
        const sensitiveFields = ['password', 'token', 'secret', 'apiKey', 'api_key'];
        for (const field of sensitiveFields) {
          if (typeof event.request.data === 'object' && field in event.request.data) {
            (event.request.data as Record<string, unknown>)[field] = '[FILTERED]';
          }
        }
      }

      return event;
    },

    // 에러 무시 패턴
    ignoreErrors: [
      // 네트워크 에러 (일시적)
      'Failed to fetch',
      'NetworkError',
      'Load failed',
      // 사용자 취소
      'AbortError',
      // 브라우저 확장 에러
      'ResizeObserver loop',
      // 소셜 로그인 팝업 닫힘
      'popup_closed_by_user',
    ],

    // 통합 설정
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true, // 모든 텍스트 마스킹
        blockAllMedia: true, // 미디어 블록
      }),
    ],
  });

  console.log('[Sentry] 초기화 완료');
}

/**
 * 에러 캡처 헬퍼
 */
export function captureError(error: Error, context?: Record<string, unknown>) {
  if (!import.meta.env.PROD || !SENTRY_DSN) {
    console.error('[Sentry:Dev]', error, context);
    return;
  }

  Sentry.captureException(error, {
    extra: context,
  });
}

/**
 * 사용자 컨텍스트 설정
 */
export function setUser(userId: string | null, email?: string) {
  if (!import.meta.env.PROD || !SENTRY_DSN) return;

  if (userId) {
    Sentry.setUser({
      id: userId,
      email: email,
    });
  } else {
    Sentry.setUser(null);
  }
}

/**
 * 커스텀 태그 설정
 */
export function setTag(key: string, value: string) {
  if (!import.meta.env.PROD || !SENTRY_DSN) return;
  Sentry.setTag(key, value);
}

/**
 * 브레드크럼 추가 (이벤트 추적)
 */
export function addBreadcrumb(
  message: string,
  category: string,
  level: 'debug' | 'info' | 'warning' | 'error' = 'info'
) {
  if (!import.meta.env.PROD || !SENTRY_DSN) return;

  Sentry.addBreadcrumb({
    message,
    category,
    level,
    timestamp: Date.now() / 1000,
  });
}

export { Sentry };
