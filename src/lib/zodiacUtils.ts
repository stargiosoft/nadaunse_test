/**
 * 띠(12지지) & 별자리 관련 유틸리티 함수
 * 이미지 프리페칭 & 캐싱 기능 포함
 */

import { storageBaseUrl } from '../utils/supabase/info';

// Supabase Storage URL (스테이징 Storage 공용 사용)
const SUPABASE_STORAGE_URL = storageBaseUrl;

// 띠 이미지 매핑 (Supabase Storage)
const ZODIAC_IMAGE_MAP: Record<string, string> = {
  '쥐띠': 'rat.webp',
  '소띠': 'ox.webp',
  '호랑이띠': 'tiger.webp',
  '토끼띠': 'rabbit.webp',
  '용띠': 'dragon.webp',
  '뱀띠': 'snake.webp',
  '말띠': 'horse.webp',
  '양띠': 'sheep.webp',
  '원숭이띠': 'monkey.webp',
  '닭띠': 'rooster.webp',
  '개띠': 'dog.webp',
  '돼지띠': 'pig.webp',
};

// 🔥 메모리 캐시 (object URL)
const imageCache = new Map<string, string>();

// 🔥 프리페칭 상태
let isPrefetching = false;
let prefetchPromise: Promise<void> | null = null;

/**
 * 띠 이미지 파일명 가져오기
 * @param zodiac 띠 이름 (예: "원숭이띠")
 * @returns 이미지 파일명 또는 null
 */
export function getZodiacImage(zodiac: string): string | null {
  return ZODIAC_IMAGE_MAP[zodiac] || null;
}

/**
 * 🔥 모든 띠 이미지 프리페칭 (백그라운드)
 * - 앱 시작 시 또는 로그인 시 호출
 * - 이미지를 blob으로 다운로드하고 object URL로 캐싱
 */
export async function prefetchZodiacImages(): Promise<void> {
  if (isPrefetching || prefetchPromise) {
    return prefetchPromise || Promise.resolve();
  }

  isPrefetching = true;
  
  prefetchPromise = (async () => {
    console.log('🖼️ [zodiacUtils] 띠 이미지 프리페칭 시작...');
    const startTime = performance.now();

    const fetchPromises = Object.entries(ZODIAC_IMAGE_MAP).map(async ([zodiac, fileName]) => {
      try {
        // 이미 캐시에 있으면 스킵
        if (imageCache.has(zodiac)) {
          return;
        }

        const url = `${SUPABASE_STORAGE_URL}/assets/monthly-images/${fileName}`;
        
        // Fetch image as blob
        const response = await fetch(url, { 
          cache: 'force-cache',
          mode: 'cors'
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        // 메모리 캐시에 저장
        imageCache.set(zodiac, objectUrl);
        
        console.log(`✅ [zodiacUtils] ${zodiac} 이미지 캐싱 완료`);
      } catch (error) {
        console.error(`❌ [zodiacUtils] ${zodiac} 이미지 로드 실패:`, error);
      }
    });

    await Promise.all(fetchPromises);

    const endTime = performance.now();
    console.log(`🎉 [zodiacUtils] 띠 이미지 프리페칭 완료! (${Math.round(endTime - startTime)}ms)`);
    console.log(`📦 [zodiacUtils] 캐시된 이미지: ${imageCache.size}개`);
    
    isPrefetching = false;
  })();

  return prefetchPromise;
}

/**
 * 띠 이름으로 Supabase Storage 이미지 URL 반환 (캐싱 최적화)
 * @param zodiac 띠 이름 (예: "원숭이띠")
 * @returns 캐시된 object URL 또는 Supabase Storage URL
 */
export function getZodiacImageUrl(zodiac: string): string {
  // 🔥 Step 1: 메모리 캐시 확인
  if (imageCache.has(zodiac)) {
    return imageCache.get(zodiac)!;
  }

  // 🔥 Step 2: 캐시 없으면 Supabase URL 반환 (브라우저 캐싱 활용)
  const fileName = ZODIAC_IMAGE_MAP[zodiac];
  
  if (!fileName) {
    console.warn(`⚠️ 알 수 없는 띠: ${zodiac}`);
    // 기본 이미지 반환
    return `${SUPABASE_STORAGE_URL}/assets/monthly-images/rat.webp`;
  }
  
  // Supabase Storage에서 원본 이미지 사용
  const url = `${SUPABASE_STORAGE_URL}/assets/monthly-images/${fileName}`;
  
  // 🔥 Step 3: 백그라운드에서 이미지 캐싱 (다음번에는 캐시 사용)
  cacheImageInBackground(zodiac, url);
  
  return url;
}

/**
 * 🔥 백그라운드에서 이미지 캐싱 (비동기)
 */
async function cacheImageInBackground(zodiac: string, url: string): Promise<void> {
  // 이미 캐싱 중이거나 캐시에 있으면 스킵
  if (imageCache.has(zodiac)) return;

  try {
    const response = await fetch(url, { 
      cache: 'force-cache',
      mode: 'cors'
    });
    
    if (!response.ok) return;
    
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    
    imageCache.set(zodiac, objectUrl);
    console.log(`✅ [zodiacUtils] ${zodiac} 이미지 백그라운드 캐싱 완료`);
  } catch (error) {
    // 에러 무시 (백그라운드 작업)
  }
}

/**
 * 🔥 캐시 클리어 (메모리 해제)
 */
export function clearZodiacImageCache(): void {
  imageCache.forEach((objectUrl) => {
    URL.revokeObjectURL(objectUrl);
  });
  imageCache.clear();
  console.log('🗑️ [zodiacUtils] 이미지 캐시 클리어 완료');
}

/**
 * 별자리 범위 정의 (양력 기준)
 */
const CONSTELLATION_RANGES = [
  { name: '염소자리', start: [12, 22], end: [1, 19] },
  { name: '물병자리', start: [1, 20], end: [2, 18] },
  { name: '물고기자리', start: [2, 19], end: [3, 20] },
  { name: '양자리', start: [3, 21], end: [4, 19] },
  { name: '황소자리', start: [4, 20], end: [5, 20] },
  { name: '쌍둥이자리', start: [5, 21], end: [6, 21] },
  { name: '게자리', start: [6, 22], end: [7, 22] },
  { name: '사자자리', start: [7, 23], end: [8, 22] },
  { name: '처녀자리', start: [8, 23], end: [9, 22] },
  { name: '천칭자리', start: [9, 23], end: [10, 22] },
  { name: '전갈자리', start: [10, 23], end: [11, 21] },
  { name: '사수자리', start: [11, 22], end: [12, 21] },
];

/**
 * 별자리 계산 (양력 월/일 기준)
 * @param month 월 (1~12)
 * @param day 일 (1~31)
 * @returns 별자리 이름
 */
export function getConstellation(month: number, day: number): string {
  const mmdd = month * 100 + day;
  
  for (const c of CONSTELLATION_RANGES) {
    const start = c.start[0] * 100 + c.start[1];
    const end = c.end[0] * 100 + c.end[1];
    
    if (c.name === '염소자리') {
      // 염소자리는 연말-연초에 걸쳐 있음
      if (mmdd >= start || mmdd <= end) return c.name;
    } else {
      if (mmdd >= start && mmdd <= end) return c.name;
    }
  }
  
  return '염소자리'; // 기본값
}

/**
 * 관계 텍스트 한글 변환
 */
export function getRelationshipText(relationship: string): string {
  const relationshipMap: Record<string, string> = {
    'self': '본인',
    'spouse': '배우자',
    'child': '자녀',
    'parent': '부모',
    'sibling': '형제자매',
    'friend': '친구',
    'lover': '연인',
    'other': '기타'
  };
  
  return relationshipMap[relationship] || relationship;
}