# 스켈레톤 UI 컴포넌트

이 폴더는 앱 전반에서 사용되는 스켈레톤 UI 컴포넌트들을 관리합니다.

## 📁 파일 구조

```
/components/skeletons/
├── README.md                    # 이 문서
├── HomeSkeleton.tsx             # 홈 화면 스켈레톤
├── ProfileSkeleton.tsx          # 프로필 페이지 스켈레톤
├── FreeContentDetailSkeleton.tsx # 무료 콘텐츠 상세 페이지 스켈레톤
├── PaidContentDetailSkeleton.tsx # 유료 콘텐츠 상세 페이지 스켈레톤
└── PaymentSkeleton.tsx          # 결제 페이지 스켈레톤
```

---

## 📄 컴포넌트 목록

### 1. `HomeSkeleton.tsx` ✅ 적용됨

**사용 위치**: `/pages/HomePage.tsx`

**설명**: 홈 화면의 초기 로딩 상태를 표시하는 스켈레톤 UI

**포함된 컴포넌트**:
- `SkeletonFeaturedCard` - 피처드 콘텐츠 카드 (상단 대형 카드)
- `SkeletonContentCard` - 일반 콘텐츠 카드 (리스트 아이템)
- `Divider` - 구분선
- `HomeSkeleton` (default) - 전체 홈 스켈레톤 (피처드 1개 + 일반 3개)

**사용 예시**:
```tsx
import HomeSkeleton from '../components/skeletons/HomeSkeleton';

// 홈 화면 로딩 중
{isLoading && (
  <div className="px-[20px] pt-[24px]">
    <HomeSkeleton />
  </div>
)}
```

**특징**:
- `animate-pulse`: 부드러운 펄스 애니메이션
- `animate-shimmer`: 좌우 흐르는 그라데이션 효과
- 실제 콘텐츠 카드와 동일한 레이아웃 및 크기
- 깜빡임 없는 부드러운 전환

---

### 2. `ProfileSkeleton.tsx` ✅ 적용됨

**사용 위치**: `/components/ProfilePage.tsx`, `/components/ProfilePageWithSaju.tsx`

**설명**: 프로필 페이지의 로딩 상태를 표시하는 스켈레톤 UI

**포함된 컴포넌트**:
- `ProfileSkeletonEmpty` - 사주 정보 미등록 상태 스켈레톤
- `ProfileSkeletonWithSaju` - 사주 정보 등록 상태 스켈레톤

**사용 예시**:
```tsx
import { ProfileSkeletonEmpty, ProfileSkeletonWithSaju } from './skeletons/ProfileSkeleton';

// 프로필 페이지 로딩 중
{isLoadingSaju ? (
  <ProfileSkeletonWithSaju />
) : primarySaju ? (
  // 사주 정보 있음
  <div>...</div>
) : (
  // 사주 정보 없음
  <div>...</div>
)}
```

**특징**:
- 사주 정보 등록/미등록 상태에 따라 다른 스켈레톤 제공
- 프로필 이미지, 텍스트, 메뉴 리스트 등 전체 페이지 레이아웃 포함
- `animate-pulse` 효과로 로딩 중임을 시각적 표현

**ProfileSkeletonEmpty**:
- 중앙 정렬된 프로필 아이콘
- 2줄의 안내 텍스트
- 등록 버튼
- 메뉴 리스트 3개

**ProfileSkeletonWithSaju**:
- 왼쪽 정렬된 프로필 이미지 (72x72px)
- 사주 정보 상세 박스
- 메뉴 리스트 3개

---

### 3. `FreeContentDetailSkeleton.tsx` ✅ 적용됨

**사용 위치**: `/components/FreeContentDetail.tsx`

**설명**: 무료 콘텐츠 상세 페이지의 로딩 상태를 표시하는 스켈레톤 UI

**포함된 섹션**:
- 상단 썸네일 이미지 및 가격 블록
- 텍스트 콘텐츠 섹션 (7줄의 텍스트 라인)
- 리스트 섹션 (3개의 리스트 아이템)
- 프로모션 배너
- 추천 상품 섹션 (2개의 상품 카드)
- 하단 고정 버튼

**사용 예시**:
```tsx
import { FreeContentDetailSkeleton } from './skeletons/FreeContentDetailSkeleton';

// 무료 콘텐츠 상세 페이지 로딩 중
if (loading || !content) {
  return <FreeContentDetailSkeleton />;
}
```

**특징**:
- 전체 페이지 레이아웃을 포함한 완전한 스켈레톤
- `animate-pulse` 효과로 로딩 중임을 시각적 표현
- 실제 콘텐츠와 동일한 레이아웃 및 크기
- 하단 고정 버튼 포함

---

### 4. `PaidContentDetailSkeleton.tsx` ✅ 적용됨

**사용 위치**: `/components/MasterContentDetailPage.tsx`

**설명**: 유료 콘텐츠 상세 페이지의 로딩 상태를 표시하는 스켈레톤 UI (Figma 디자인 기반)

**포함된 섹션**:
- 상단 네비게이션 (뒤로가기, 제목, 홈)
- 썸네일 이미지 (270px)
- 가격 블록 (카테고리, 제목, 설명, 가격, 할인가)
- 쿠폰 버튼
- 탭 섹션 (3개의 아이콘 카드)
- 고민 카드 섹션
- 설명 텍스트 섹션
- 질문 리스트 (8개 항목)
- 아코디언 섹션 2개 (이용안내, 환불정책)
- 하단 고정 구매 버튼

**사용 예시**:
```tsx
import PaidContentDetailSkeleton from './skeletons/PaidContentDetailSkeleton';

// 유료 콘텐츠 상세 페이지 로딩 중
if (!content && (isLoading || isCheckingAnswers)) {
  return <PaidContentDetailSkeleton />;
}
```

**특징**:
- Figma 디자인 시안과 일치하는 레이아웃
- `animate-pulse` 효과로 로딩 중임을 시각적 표현
- 실제 유료 콘텐츠와 동일한 레이아웃 및 크기
- 모바일 최적화 (max-w-[390px])
- 하단 고정 버튼 및 Home Indicator 포함

---

### 5. `PaymentSkeleton.tsx` ✅ 적용됨

**사용 위치**: `/components/PaymentNew.tsx`

**설명**: 결제 페이지의 로딩 상태를 표시하는 스켈레톤 UI

**포함된 섹션**:
- 상단 네비게이션 (뒤로가기, 제목)
- 운세 구성 섹션 (상품 카드, 썸네일, 제목, 가격 정보)
- 결제 금액 섹션 (상품 금액, 기본 할인, 쿠폰 할인, 총 결제 금액)
- 결제 정보 안내 섹션
- 하단 고정 결제 버튼

**사용 예시**:
```tsx
import PaymentSkeleton from './skeletons/PaymentSkeleton';

// ⭐ contentId가 있으면 초기 로딩 상태를 true로 설정
const [isLoadingContent, setIsLoadingContent] = useState(!!contentId);

// 결제 페이지 로딩 중
if (isLoadingContent) {
  return <PaymentSkeleton />;
}
```

**특징**:
- **모바일 우선 반응형 디자인**: `max-w-[430px] mx-auto`로 PC에서도 모바일 레이아웃 유지
- **초기 렌더링 최적화**: `useState(!!contentId)`로 더미 페이지 없이 즉시 스켈레톤 표시
- 그라데이션 스켈레톤 효과 (`from-[rgba(239,239,239,0.05)] to-50% to-[#f0f0f0]`)
- 실제 결제 페이지와 동일한 레이아웃 및 크기
- 불필요한 더미 요소 제거 (Status Bar, Home Indicator 제외)
- 하단 고정 버튼 (`fixed bottom-0`) + Safe Area 대응

**레이아웃 구조**:
- 전체 컨테이너: `max-w-[430px]` (모바일 최적화)
- 콘텐츠 영역: `px-[20px]` (좌우 여백)
- 하단 버튼: `fixed` 위치 + 그림자 효과

**로딩 플로우**:
```
페이지 진입 → 스켈레톤 즉시 표시 → DB 로드 → 실제 콘텐츠 표시
```

---

## 🎨 디자인 가이드

### 색상
- **배경**: `#f0f0f0` (밝은 회색)
- **그라데이션**: `from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0]`
- **투명 그라데이션**: `from-[rgba(239,239,239,0.05)] to-[#f0f0f0]` (프로필용)
- **구분선**: `#F9F9F9`
- **테두리**: `#f9f9f9`

### 애니메이션
- **Pulse**: `animate-pulse` (Tailwind 내장)
- **Shimmer**: `animate-shimmer` (커스텀, `/styles/globals.css`에 정의)

```css
/* globals.css */
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
}
```

### 레이아웃 원칙
1. **실제 콘텐츠와 동일한 크기 유지**
2. **간격(gap, padding) 일치**
3. **border-radius 일치**
4. **aspect-ratio 유지** (이미지의 경우)

---

## 🔧 추가 작업 필요

### 완료된 작업 ✅
- [✅] `PaidContentDetailSkeleton.tsx` 생성 및 적용 완료
- [✅] `/components/MasterContentDetailPage.tsx`에 import 추가
- [✅] 유료 콘텐츠 로딩 시 스켈레톤 UI 표시 로직 구현
- [✅] 캐시 유무에 따른 스켈레톤 표시 분기 처리
  - 캐시 있음: 스켈레톤 없이 바로 표시
  - 캐시 없음: 스켈레톤 → 콘텐츠 표시

### FreeContentDetailSkeleton 작업 상황
- [✅] `/components/FreeContentDetail.tsx`에 적용 완료
- [✅] 캐시 기반 로딩 플로우 구현 완료
- [✅] 로딩 스피너 제거 및 스켈레톤 우선 표시 완료

---

## 📝 컨벤션

### 네이밍
- **파일명**: `{페이지명}Skeleton.tsx` (PascalCase)
- **컴포넌트명**: `Skeleton{요소명}` 또는 `{페이지명}Skeleton`
- **상태별 변형**: `{컴포넌트명}Empty`, `{컴포넌트명}WithData` 등

### 구조
- 각 스켈레인 파일은 해당 페이지의 모든 로딩 상태를 처리
- 재사용 가능한 작은 단위 컴포넌트로 분리 (예: `SkeletonFeaturedCard`, `SkeletonContentCard`)
- default export는 전체 페이지 스켈레톤

### 주석
- 각 섹션에 주석으로 어떤 부분인지 명시
- 특별한 처리가 필요한 부분은 상세 설명 추가

---

## 📚 참고 자료

- [Tailwind Pulse Animation](https://tailwindcss.com/docs/animation#pulse)
- [Skeleton Screen Best Practices](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)