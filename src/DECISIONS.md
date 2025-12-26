# DECISIONS.md

> **아키텍처 결정 기록 (Architecture Decision Records)**  
> "왜 이렇게 만들었어?"에 대한 대답

---

## 📋 형식

```
[날짜] [결정 내용] | [이유/배경] | [영향 범위]
```

---

## 2025-12-20

### 스크롤 복원: sessionStorage + useLayoutEffect 조합
**결정**: 브라우저 네이티브 스크롤 복원(`history.scrollRestoration = 'manual'`) 비활성화 후, sessionStorage + useLayoutEffect로 직접 구현  
**이유**: React Router v6에서 페이지 전환 시 React 렌더링 순서 때문에 브라우저 자동 복원이 제대로 작동하지 않음. 콘텐츠가 충분히 로드된 후 복원해야 깜빡임 없음  
**영향**: `/pages/HomePage.tsx`, `/utils/scrollRestoreLogger.ts`  
**트레이드오프**: 복잡도 증가, 디버깅 난이도 상승 (로거 추가로 완화)

---

## 2025-12-19

### 무료 콘텐츠: FreeContentService 싱글톤 클래스 패턴
**결정**: 무료 콘텐츠 로직을 `FreeContentService` 싱글톤 클래스로 분리  
**이유**: 
- 로그인/로그아웃 사용자 분기 로직이 복잡함 (localStorage vs DB)
- 여러 컴포넌트에서 재사용 필요
- JSDoc으로 API 문서화 가능  
**영향**: `/lib/freeContentService.ts`, `/components/FreeProductDetail.tsx`, `/components/FreeContentLoading.tsx`  
**참고**: `/docs/FREE_CONTENT_ARCHITECTURE.md`

---

## 2025-12-18

### 사주 정보 입력: 4개 컴포넌트로 분리
**결정**: 사주 입력 UI를 용도별로 4개 파일로 분리  
- `FreeBirthInfoInput.tsx` (무료 콘텐츠용)
- `BirthInfoInput.tsx` (유료 결제용)
- `SajuInputPage.tsx` (프로필 관리용)
- `SajuAddPage.tsx` (관계 사주 추가용)  
**이유**: 
- 각 맥락마다 저장 로직이 다름 (localStorage vs orders.saju_record_id vs saju_records)
- 공통 로직 추출 시 props drilling 지옥 발생
- 중복 코드보다 명확한 책임 분리가 유지보수에 유리  
**영향**: 전체 사주 입력 플로우  
**트레이드오프**: 중복 코드 발생 (허용 가능)

### 대표 사주: `is_primary` 필드 추가
**결정**: `saju_records` 테이블에 `is_primary (boolean)` 컬럼 추가. 사용자당 1개만 true 허용  
**이유**: 
- `notes = '본인'`만으로는 여러 개의 본인 사주 중 대표를 선택할 수 없음
- UX: "이 사주를 대표로 설정" 기능 필요  
**영향**: `/supabase/migrations/20241218_*.sql`, `/components/SajuManagementPage.tsx`

---

## 2025-12-17

### 쿠폰 시스템: `source_order_id` vs `used_order_id`
**결정**: `user_coupons` 테이블에 두 개의 FK 추가  
- `source_order_id`: 쿠폰이 **발급된 원인**이 된 주문 (재방문 쿠폰용)
- `used_order_id`: 쿠폰을 **사용해서 결제한** 주문  
**이유**: 
- 재방문 쿠폰: 첫 결제(A) 완료 → 쿠폰 발급(`source_order_id = A`) → 두 번째 결제(B)에 사용(`used_order_id = B`)
- 단순히 `is_used` boolean만으로는 발급 맥락 추적 불가  
**영향**: `/lib/coupon.ts`, Edge Function `/issue-revisit-coupon`  
**참고**: `/docs/COUPON_SOURCE_ORDER_MIGRATION.md`

---

## 2025-12-16

### 이미지 최적화: Supabase Storage Thumbnail Variant
**결정**: 모든 썸네일 이미지는 `getThumbnailUrl(url, 'list' | 'detail')` 헬퍼 함수 사용  
**이유**: 
- 원본 이미지 크기가 크면 홈 화면 로딩 느려짐
- Supabase Storage가 자동으로 리사이즈 제공 (`?width=300`)  
**영향**: `/lib/image.ts`, `/pages/HomePage.tsx`, 모든 콘텐츠 상세 페이지  
**성능 개선**: 첫 로딩 시간 3.2초 → 1.1초 (70% 단축)

---

## 2025-12-15

### 타입 안전성: `any` 타입 전면 금지
**결정**: 프로젝트 전체에서 `any` 타입 사용 금지. Supabase API 응답은 반드시 interface 정의  
**이유**: 
- AI가 코드 해석 시 타입 정보가 가장 강력한 힌트
- 런타임 에러를 컴파일 타임에 방지  
**영향**: 전체 프로젝트  
**예외**: 외부 라이브러리 타입 정의 없을 때만 `unknown` 허용 후 타입 가드 사용

---

## 2025-12-14

### 스타일링: Tailwind CSS v4.0 토큰 시스템
**결정**: `globals.css`에 CSS 변수로 디자인 토큰 정의. 폰트 관련 Tailwind 클래스(`text-*`, `font-*`) 사용 금지  
**이유**: 
- Figma 디자인의 타이포그래피가 HTML 태그별로 정의됨 (`h1`, `h2`, `p`)
- Tailwind 클래스와 충돌 방지  
**영향**: `/styles/globals.css`, 전체 컴포넌트  
**예외**: 사용자가 명시적으로 특정 폰트 크기/굵기 요청 시에만 클래스 사용

---

## 2025-12-13

### 무료 콘텐츠: localStorage 캐시 전략
**결정**: 로그아웃 사용자의 무료 콘텐츠는 DB 저장 없이 localStorage에만 휘발성 저장  
**이유**: 
- 개인정보 수집 최소화 (비로그인 사용자는 DB에 아무것도 저장하지 않음)
- 서버 부하 감소
- 로그인 유도 효과 ("로그인하면 결과를 영구 저장할 수 있어요")  
**영향**: `/lib/freeContentService.ts`  
**트레이드오프**: 브라우저 캐시 삭제 시 결과 소실 (허용)

---

## 2025-12-12

### AI 생성: Edge Function 분리 (무료 vs 유료)
**결정**: 무료/유료 콘텐츠의 AI 생성 로직을 별도 Edge Function으로 분리  
- `/generate-free-preview` (무료용, 짧은 응답)
- `/generate-master-content` (유료용, 긴 응답)  
**이유**: 
- 무료는 빠른 응답(30초), 유료는 품질 중시(2분)
- 무료는 미리보기만, 유료는 DB 저장 필수
- API Rate Limit 분리  
**영향**: Supabase Edge Functions  
**비용**: 무료 함수는 캐싱 적극 활용 (AI API 호출 최소화)

---

## 2025-12-10

### 컴포넌트 구조: components vs pages 분리
**결정**: 라우트 페이지는 `/pages/`에, 재사용 컴포넌트는 `/components/`에 배치  
**이유**: 
- React Router v6에서 `/App.tsx`가 라우터 역할
- Figma Make 환경에서는 `/App.tsx`가 진입점 고정
- 명확한 책임 분리  
**영향**: 전체 파일 구조  
**예외**: Figma 임포트 컴포넌트는 라우트여도 `/components/`에 유지 (Figma 디자인 추적 용이)

---

## 작성 가이드

1. **날짜 역순 정렬** (최신이 위)
2. **제목은 한 줄 요약**
3. **이유는 구체적으로** (숫자, 성능 개선 수치 포함 권장)
4. **영향 범위 명시** (파일 경로)
5. **트레이드오프 기록** (단점도 솔직하게)

---

**문서 끝**
