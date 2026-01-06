// Google Analytics 4 Utility Functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// GA Measurement ID (환경변수 또는 기본값)
const GA_MEASUREMENT_ID = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) || 'G-XXXXXXXXXX';

// 개발환경 체크
const isDevelopment = typeof import.meta !== 'undefined' && import.meta.env?.DEV;

// GA 초기화
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // gtag 함수 초기화
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  // GA 스크립트 로드
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // GA 설정
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // 수동으로 페이지뷰 전송
  });

  if (isDevelopment) {
    console.log('🔍 GA4 initialized:', GA_MEASUREMENT_ID);
  }
};

// 페이지뷰 트래킹
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  });

  if (isDevelopment) {
    console.log('📄 Page View:', { path, title });
  }
};

// 사용자 ID 설정
export const setUserId = (userId: string) => {
  if (!window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    user_id: userId,
  });

  if (isDevelopment) {
    console.log('👤 User ID Set:', userId);
  }
};

// 사용자 속성 설정
export const setUserProperties = (properties: Record<string, any>) => {
  if (!window.gtag) return;

  window.gtag('set', 'user_properties', properties);

  if (isDevelopment) {
    console.log('👤 User Properties:', properties);
  }
};

// 이벤트 트래킹 헬퍼
const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!window.gtag) return;

  window.gtag('event', eventName, eventParams);

  if (isDevelopment) {
    console.log(`📊 Event: ${eventName}`, eventParams);
  }
};

// 1. 로그인
export const trackLogin = (method: string = 'kakao') => {
  trackEvent('login', { method });
};

// 2. 회원가입
export const trackSignUp = (method: string = 'kakao') => {
  trackEvent('sign_up', { method });
};

// 3. 상품 목록 조회
export const trackViewItemList = (items: any[], listName: string = 'product_list') => {
  trackEvent('view_item_list', {
    item_list_id: listName,
    item_list_name: listName,
    items: items.map((item, index) => ({
      item_id: item.id?.toString(),
      item_name: item.title,
      item_category: item.category,
      item_variant: item.type === 'paid' ? '심화 해석판' : '무료 체험판',
      price: item.type === 'paid' ? item.discountPrice : 0,
      index,
    })),
  });
};

// 4. 상품 선택 (카드 클릭)
export const trackSelectItem = (item: any, listName: string = 'product_list') => {
  trackEvent('select_item', {
    item_list_id: listName,
    item_list_name: listName,
    items: [
      {
        item_id: item.id?.toString(),
        item_name: item.title,
        item_category: item.category,
        item_variant: item.type === 'paid' ? '심화 해석판' : '무료 체험판',
        price: item.type === 'paid' ? item.discountPrice : 0,
      },
    ],
  });
};

// 5. 상품 상세 조회
export const trackViewItem = (item: any) => {
  trackEvent('view_item', {
    currency: 'KRW',
    value: item.type === 'paid' ? item.discountPrice : 0,
    items: [
      {
        item_id: item.id?.toString(),
        item_name: item.title,
        item_category: item.category,
        item_variant: item.type === 'paid' ? '심화 해석판' : '무료 체험판',
        price: item.type === 'paid' ? item.discountPrice : 0,
        quantity: 1,
      },
    ],
  });
};

// 6. 결제 시작
export const trackBeginCheckout = (item: any) => {
  trackEvent('begin_checkout', {
    currency: 'KRW',
    value: item.discountPrice,
    items: [
      {
        item_id: item.id?.toString(),
        item_name: item.title,
        item_category: item.category,
        item_variant: '심화 해석판',
        price: item.discountPrice,
        quantity: 1,
      },
    ],
  });
};

// 7. 결제수단 선택
export const trackAddPaymentInfo = (paymentType: 'kakaopay' | 'card', item: any) => {
  trackEvent('add_payment_info', {
    currency: 'KRW',
    value: item.discountPrice,
    payment_type: paymentType,
    items: [
      {
        item_id: item.id?.toString(),
        item_name: item.title,
        item_category: item.category,
        item_variant: '심화 해석판',
        price: item.discountPrice,
        quantity: 1,
      },
    ],
  });
};

// 8. 구매 완료
export const trackPurchase = (
  transactionId: string,
  item: any,
  paymentMethod: string
) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: item.discountPrice,
    currency: 'KRW',
    payment_type: paymentMethod,
    items: [
      {
        item_id: item.id?.toString(),
        item_name: item.title,
        item_category: item.category,
        item_variant: '심화 해석판',
        price: item.discountPrice,
        quantity: 1,
      },
    ],
  });
};

// 9. 사주 결과 조회
export const trackViewResult = (
  itemId: string,
  resultType: 'paid' | 'free',
  itemName?: string
) => {
  trackEvent('view_result', {
    item_id: itemId,
    item_name: itemName,
    result_type: resultType,
  });
};

// 10. 배너 클릭
export const trackClickBanner = (bannerId: string, bannerName: string) => {
  trackEvent('click_banner', {
    banner_id: bannerId,
    banner_name: bannerName,
  });
};

// 11. 상품 카드 클릭
export const trackClickProduct = (item: any, listName: string = 'product_list') => {
  trackEvent('click_product', {
    item_id: item.id?.toString(),
    item_name: item.title,
    list_name: listName,
  });
};

// 12. 필터 변경
export const trackFilterChange = (filterType: string, filterValue: string) => {
  trackEvent('filter_change', {
    filter_type: filterType,
    filter_value: filterValue,
  });
};

// 13. 생년월일 입력 완료
export const trackBirthInfoSubmit = (itemId: string, itemType: 'paid' | 'free') => {
  trackEvent('birth_info_submit', {
    item_id: itemId,
    item_type: itemType,
  });
};

// 14. 약관 동의 완료
export const trackTermsAgreed = () => {
  trackEvent('terms_agreed');
};

// 15. 콘텐츠 생성 (마스터)
export const trackContentCreate = (contentType: string, contentId?: string) => {
  trackEvent('content_create', {
    content_type: contentType,
    content_id: contentId,
  });
};

// 16. 로그아웃
export const trackLogout = () => {
  trackEvent('logout');
};