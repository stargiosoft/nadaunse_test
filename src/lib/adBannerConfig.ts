/**
 * 광고 배너 설정
 *
 * Supabase Storage의 PNG 이미지를 사용하는 광고 배너 설정입니다.
 * 5개의 배너가 페이지 이동/새로고침마다 랜덤으로 노출됩니다.
 */

import { storageBaseUrl } from '../utils/supabase/info';
import { isProduction } from './env';

/**
 * 광고 배너 아이템 타입
 */
export interface AdBannerItem {
  id: number;
  imageFileName: string;         // Storage 파일명
  productName: string;           // 상품명 (참조용)
  productIdStaging: string;      // 스테이징 환경 상품 ID
  productIdProduction: string;   // 프로덕션 환경 상품 ID
  alt: string;                   // 접근성용 대체 텍스트
}

/**
 * 광고 배너 목록
 */
export const AD_BANNERS: AdBannerItem[] = [
  {
    id: 1,
    imageFileName: 'saju_psychology.png',
    productName: 'MBTI보다 100배 정확한 사주 심리학',
    productIdStaging: '0d3d4d9c-f269-40ea-ad74-fc6687f23cb8',
    productIdProduction: '7279bf2c-67fb-4d88-973f-66db5b39847c',
    alt: '사주 심리학 광고',
  },
  {
    id: 2,
    imageFileName: 'marriage.png',
    productName: '나는 과연 결혼할 수 있을까?',
    productIdStaging: '897cce70-eaa6-4877-a9bc-b72493ac7711',
    productIdProduction: '6eb78154-eb7c-438e-965a-b4e57de4be62',
    alt: '결혼운 광고',
  },
  {
    id: 3,
    imageFileName: 'golden_time.png',
    productName: '내 인생, 리즈시절은 언제?',
    productIdStaging: '2e35df47-6f85-4d7a-ac2c-ab5ecca27060',
    productIdProduction: 'b6c273f8-c098-4a28-826a-ca93b5eeb10a',
    alt: '리즈시절 광고',
  },
  {
    id: 4,
    imageFileName: 'dating_solution.png',
    productName: '솔로연애 해법',
    productIdStaging: '3b71c38b-cf51-4ba1-97d6-c77dc0db505d',
    productIdProduction: '24170b0e-c09f-42a9-a9aa-aeb19b09da0f',
    alt: '솔로연애 광고',
  },
  {
    id: 5,
    imageFileName: '2006_fortune.png',
    productName: '2026년, 대박나는 신년운세',
    productIdStaging: 'b02097aa-397e-4f51-babc-1a08c5e3d705',
    productIdProduction: 'd340a9ed-5628-4f79-810d-e563796e89f7',
    alt: '신년운세 광고',
  },
];

/**
 * 배너 이미지 URL 생성
 * Storage의 "ad banners" 폴더에서 이미지 로드
 */
export function getBannerImageUrl(fileName: string): string {
  // "ad banners" 폴더명에 공백이 있으므로 URL 인코딩 필요
  return `${storageBaseUrl}/assets/ad%20banners/${fileName}`;
}

/**
 * 환경에 따른 상품 ID 반환
 */
export function getProductIdForEnvironment(banner: AdBannerItem): string {
  return isProduction() ? banner.productIdProduction : banner.productIdStaging;
}

/**
 * 랜덤 배너 선택
 * 페이지 이동/새로고침마다 새로운 배너가 선택됨 (저장 없음)
 */
export function getRandomBanner(): AdBannerItem {
  const randomIndex = Math.floor(Math.random() * AD_BANNERS.length);
  return AD_BANNERS[randomIndex];
}
