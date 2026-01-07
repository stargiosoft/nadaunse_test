/**
 * 환경별 로깅 유틸리티
 * - 프로덕션: 민감 정보 마스킹, 에러만 출력
 * - 개발: 전체 로그 출력
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// 프로덕션에서는 warn 이상만 출력
const CURRENT_LEVEL: LogLevel = import.meta.env.PROD ? 'warn' : 'debug';

/**
 * 민감 정보 마스킹 패턴
 */
const SENSITIVE_PATTERNS: Array<{ pattern: RegExp; replacement: string }> = [
  // 이메일 마스킹: test@example.com → t***@e***.com
  {
    pattern: /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})/g,
    replacement: (match: string) => {
      const [local, domain] = match.split('@');
      const domainParts = domain.split('.');
      return `${local[0]}***@${domainParts[0][0]}***.${domainParts.slice(1).join('.')}`;
    }
  },
  // UUID 마스킹: 12345678-1234-1234-1234-123456789012 → 1234****-****-****-****-********9012
  {
    pattern: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,
    replacement: (match: string) => `${match.slice(0, 4)}****-****-****-****-********${match.slice(-4)}`
  },
  // 전화번호 마스킹: 010-1234-5678 → 010-****-5678
  {
    pattern: /(\d{2,3})-(\d{3,4})-(\d{4})/g,
    replacement: '$1-****-$3'
  },
];

/**
 * 값을 문자열로 변환하고 민감 정보 마스킹
 */
function maskSensitiveData(value: unknown): string {
  // 프로덕션이 아니면 마스킹 안함
  if (!import.meta.env.PROD) {
    return formatValue(value);
  }

  let str = formatValue(value);

  for (const { pattern, replacement } of SENSITIVE_PATTERNS) {
    if (typeof replacement === 'function') {
      str = str.replace(pattern, replacement as (match: string) => string);
    } else {
      str = str.replace(pattern, replacement);
    }
  }

  return str;
}

/**
 * 값을 로그용 문자열로 포맷팅
 */
function formatValue(value: unknown): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (value instanceof Error) return `${value.name}: ${value.message}`;

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

/**
 * 로그 레벨 체크
 */
function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[CURRENT_LEVEL];
}

/**
 * 로그 출력
 */
function log(level: LogLevel, ...args: unknown[]): void {
  if (!shouldLog(level)) return;

  const maskedArgs = args.map(maskSensitiveData);
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

  switch (level) {
    case 'debug':
      console.debug(prefix, ...maskedArgs);
      break;
    case 'info':
      console.info(prefix, ...maskedArgs);
      break;
    case 'warn':
      console.warn(prefix, ...maskedArgs);
      break;
    case 'error':
      console.error(prefix, ...maskedArgs);
      break;
  }
}

/**
 * Logger 인스턴스
 */
export const logger = {
  debug: (...args: unknown[]) => log('debug', ...args),
  info: (...args: unknown[]) => log('info', ...args),
  warn: (...args: unknown[]) => log('warn', ...args),
  error: (...args: unknown[]) => log('error', ...args),

  /**
   * 그룹 로그 (개발환경 전용)
   */
  group: (label: string) => {
    if (!import.meta.env.PROD) {
      console.group(label);
    }
  },

  groupEnd: () => {
    if (!import.meta.env.PROD) {
      console.groupEnd();
    }
  },
};

export default logger;
