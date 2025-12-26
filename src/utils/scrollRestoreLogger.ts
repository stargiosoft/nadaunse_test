/**
 * 스크롤 복원 디버깅 전용 로거
 * 모든 로그에 scroll_restore_id를 포함하여 추적 가능하도록 함
 */

interface ScrollRestoreLog {
  scroll_restore_id: string;
  timestamp: string;
  phase: 'SAVE' | 'MOUNT' | 'RESTORE_ATTEMPT' | 'RESTORE_SUCCESS' | 'RESTORE_FAIL';
  data: {
    scrollY?: number;
    contentCount?: number;
    actualScrollY?: number;
    pageHeight?: number;
    viewportHeight?: number;
    allContentsLength?: number;
    isInitialLoading?: boolean;
    shouldRestoreScroll?: boolean;
    error?: string;
  };
}

class ScrollRestoreLogger {
  private sessionId: string;

  constructor() {
    // 페이지 로드 시마다 새로운 세션 ID 생성
    this.sessionId = `scroll_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  log(phase: ScrollRestoreLog['phase'], data: ScrollRestoreLog['data']) {
    const logEntry: ScrollRestoreLog = {
      scroll_restore_id: this.sessionId,
      timestamp: new Date().toISOString(),
      phase,
      data: {
        ...data,
        // 현재 페이지 상태 자동 포함
        actualScrollY: window.scrollY,
        pageHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
      }
    };

    // 콘솔 출력 (개발용)
    console.log(`[ScrollRestore:${phase}]`, logEntry);

    // 운영 환경에서는 Sentry로 전송 (선택사항)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.addBreadcrumb({
        category: 'scroll-restore',
        message: `ScrollRestore ${phase}`,
        level: phase.includes('FAIL') ? 'error' : 'info',
        data: logEntry
      });
    }

    return logEntry;
  }

  // 스크롤 복원 실패 시 상세 진단
  diagnoseFailure(savedScrollY: number, contentCount: number, allContentsLength: number) {
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxScrollY = pageHeight - viewportHeight;

    const diagnosis = {
      issue: [] as string[],
      pageHeight,
      maxScrollY,
      savedScrollY,
      contentCount,
      allContentsLength,
      canScroll: savedScrollY <= maxScrollY
    };

    if (savedScrollY > maxScrollY) {
      diagnosis.issue.push(`페이지 높이 부족: 목표 ${savedScrollY}px > 최대 ${maxScrollY}px`);
    }

    if (allContentsLength < contentCount) {
      diagnosis.issue.push(`콘텐츠 부족: ${allContentsLength}개 < 필요 ${contentCount}개`);
    }

    this.log('RESTORE_FAIL', {
      error: diagnosis.issue.join(', '),
      ...diagnosis
    });

    return diagnosis;
  }
}

export const scrollRestoreLogger = new ScrollRestoreLogger();
