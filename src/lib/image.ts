/**
 * 이미지 크기 타입
 */
export type ImageSize = 'list' | 'detail' | 'original';

/**
 * Supabase Storage 썸네일 URL 생성
 * @param url - 원본 이미지 URL
 * @param size - 'list' | 'detail' | 'original'
 * @returns 최적화된 이미지 URL
 */
export const getThumbnailUrl = (url: string | null | undefined, size: ImageSize = 'list'): string | null => {
  if (!url) return null;
  
  // URL 파싱: base URL과 기존 쿼리 파라미터 분리
  const urlParts = url.split('?');
  const baseUrl = urlParts[0];
  
  const sizes: Record<ImageSize, string> = {
    // 리스트: 230x154 WebP 포맷
    list: 'width=230&height=154&quality=80&format=webp',
    
    // 상세: 동일한 크기로 캐시 히트! (레티나 대응은 CSS로 처리)
    detail: 'width=230&height=154&quality=80&format=webp',
    
    // 원본: 쿼리 없음
    original: '',
  };
  
  const sizeQuery = sizes[size];
  
  // 🔥 타임스탬프 제거: 브라우저 HTTP 캐시 활용
  // Supabase Storage는 기본적으로 Cache-Control 헤더를 제공함
  if (sizeQuery) {
    return `${baseUrl}?${sizeQuery}`;
  } else {
    return baseUrl;
  }
};

/**
 * 플레이스홀더 이미지 URL
 */
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"230\" height=\"154\"%3E%3Crect width=\"230\" height=\"154\" fill=\"%23f0f0f0\"/%3E%3C/svg%3E';