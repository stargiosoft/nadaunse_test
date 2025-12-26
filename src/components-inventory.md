# Components Inventory

> 최종 업데이트: 2025-12-20
> 
> 총 컴포넌트 수: 52개 (활성화)

---

## 📋 목차

- [UI 컴포넌트 (8개)](#ui-컴포넌트)
- [인증 관련 (3개)](#인증-관련)
- [결제 관련 (4개)](#결제-관련)
- [무료 콘텐츠 관련 (10개)](#무료-콘텐츠-관련)
- [마스터 콘텐츠 관리 (6개)](#마스터-콘텐츠-관리)
- [사주 정보 관리 (9개)](#사주-정보-관리)
- [타로 콘텐츠 (4개)](#타로-콘텐츠)
- [프로필 및 구매 내역 (4개)](#프로필-및-구매-내역)
- [유틸리티 컴포넌트 (3개)](#유틸리티-컴포넌트)
- [약관 페이지 (3개)](#약관-페이지)

---

## 🎨 UI 컴포넌트

### ArrowLeft.tsx
- **역할**: 뒤로가기 버튼 아이콘 컴포넌트
- **사용처**: MasterContentCreate, MasterContentDetail, MasterContentList, MasterContentQuestions, PurchaseHistoryPage
- **타입**: Presentational Component

### CheckboxIcon.tsx
- **역할**: 체크박스 아이콘 컴포넌트 (체크/미체크 상태 표시)
- **사용처**: MasterContentList
- **타입**: Presentational Component

### Footer.tsx
- **역할**: 하단 푸터 (이용약관/개인정보처리방침 링크)
- **사용처**: 전역 레이아웃
- **타입**: Layout Component

### Loading.tsx
- **역할**: 기본 로딩 스피너 컴포넌트
- **사용처**: SajuSelectPage
- **타입**: Presentational Component

### LoadingPage.tsx
- **역할**: 전체 화면 로딩 페이지 (진행률 표시)
- **사용처**: App.tsx 라우팅
- **타입**: Page Component

### NavigationHeader.tsx
- **역할**: 공통 네비게이션 헤더 (제목 + 뒤로가기)
- **사용처**: 여러 페이지에서 재사용
- **타입**: Layout Component

### Toast.tsx
- **역할**: 토스트 메시지 알림 컴포넌트
- **사용처**: 전역 알림 시스템
- **타입**: Utility Component

### ConfirmDialog.tsx
- **역할**: 공통 확인/취소 다이얼로그
- **사용처**: 삭제/변경 확인 등
- **타입**: Modal Component

---

## 🔐 인증 관련

### LoginPageNew.tsx
- **역할**: 카카오/구글 로그인 페이지
- **사용처**: `/login/new` 라우트
- **타입**: Page Component
- **기능**: OAuth 소셜 로그인 통합

### ExistingAccountPageNew.tsx
- **역할**: 기존 계정 연동 안내 페이지
- **사용처**: 계정 중복 시 안내
- **타입**: Page Component
- **기능**: 계정 병합 안내 및 처리

### SessionExpiredDialog.tsx
- **역할**: 세션 만료 안내 다이얼로그
- **사용처**: 전역 세션 관리
- **타입**: Modal Component
- **기능**: 자동 로그아웃 안내

---

## 💰 결제 관련

### PaymentNew.tsx
- **역할**: 결제 페이지 (포트원 연동)
- **사용처**: `/product/:id/payment/new` 라우트
- **타입**: Page Component
- **기능**: 심화 해석판 결제, 쿠폰 적용, 약관 동의

### PaymentComplete.tsx
- **역할**: 결제 완료 페이지
- **사용처**: `/payment/complete` 라우트
- **타입**: Page Component
- **기능**: 결제 완료 안내 및 다음 단계 안내

### CouponBottomSheetNew.tsx
- **역할**: 쿠폰 선택 바텀시트 (신버전)
- **사용처**: PaymentNew.tsx
- **타입**: Modal Component
- **기능**: 사용 가능한 쿠폰 목록 표시 및 선택

### WelcomeCouponPage.tsx
- **역할**: 가입 축하 쿠폰 안내 페이지
- **사용처**: 신규 가입 플로우
- **타입**: Page Component
- **기능**: 웰컴 쿠폰 발급 안내

---

## 🆓 무료 콘텐츠 관련

### FreeBirthInfoInput.tsx
- **역할**: 무료 콘텐츠용 사주 정보 입력 페이지
- **사용처**: `/product/:id/birthinfo` 라우트 (무료 콘텐츠)
- **타입**: Page Component
- **기능**: 로그아웃 사용자는 localStorage 캐시, 로그인 사용자는 DB 저장

### FreeSajuSelectPage.tsx
- **역할**: 무료 콘텐츠용 사주 선택 페이지
- **사용처**: `/product/:id/free-saju-select` 라우트
- **타입**: Page Component
- **기능**: 로그인 사용자의 저장된 사주 목록 중 선택

### FreeSajuSelectPageWrapper.tsx
- **역할**: FreeSajuSelectPage URL 파라미터 래퍼
- **사용처**: 라우팅 계층
- **타입**: Wrapper Component
- **기능**: URL 파라미터 전달 및 상태 관리

### FreeSajuDetail.tsx
- **역할**: 무료 콘텐츠용 사주 상세 정보 페이지
- **사용처**: 무료 콘텐츠 플로우
- **타입**: Page Component
- **기능**: 선택한 사주 정보 확인 및 운세 생성 시작

### FreeContentDetail.tsx
- **역할**: 무료 콘텐츠 상세 페이지 (메인 로직)
- **사용처**: `/master/content/detail/:id` 라우트 (무료 콘텐츠)
- **타입**: Page Component
- **기능**: AI 운세 생성 요청, 캐시 관리, 결과 표시

### FreeContentDetailComponents.tsx
- **역할**: 무료 콘텐츠 상세 UI 컴포넌트 모음
- **사용처**: FreeContentDetail.tsx
- **타입**: Component Library
- **기능**: 재사용 가능한 UI 컴포넌트 집합

### FreeContentLoading.tsx
- **역할**: 무료 콘텐츠 AI 생성 로딩 페이지
- **사용처**: AI 운세 생성 중
- **타입**: Page Component
- **기능**: 진행률 표시 및 생성 상태 안내

### FreeContentResult.tsx
- **역할**: 무료 콘텐츠 결과 완료 페이지
- **사용처**: AI 운세 생성 완료 후
- **타입**: Page Component
- **기능**: 생성된 운세 결과 표시

### FreeProductDetail.tsx
- **역할**: 무료 콘텐츠 상품 상세 정보
- **사용처**: App.tsx ProductDetailPage (type === 'free')
- **타입**: Page Component
- **기능**: 무료 콘텐츠 소개 및 시작 버튼

### GlobalAIMonitor.tsx
- **역할**: AI 생성 상태 전역 모니터링 컴포넌트
- **사용처**: App.tsx 전역
- **타입**: Global Component
- **기능**: AI 생성 상태 실시간 모니터링 및 자동 리디렉션

---

## 📝 마스터 콘텐츠 관리

### MasterContentCreate.tsx
- **역할**: 마스터 콘텐츠 생성 페이지 (기본정보)
- **사용처**: `/master/content/create` 라우트
- **타입**: Page Component
- **기능**: 제목, 설명, 카테고리, 가격 등 기본 정보 입력

### MasterContentQuestions.tsx
- **역할**: 마스터 콘텐츠 질문지 작성 페이지
- **사용처**: `/master/content/create/questions` 라우트
- **타입**: Page Component
- **기능**: AI 프롬프트용 질문지 작성

### MasterContentDetail.tsx
- **역할**: 마스터 콘텐츠 상세/수정 페이지
- **사용처**: 마스터 콘텐츠 관리
- **타입**: Page Component
- **기능**: 생성된 콘텐츠 조회 및 수정

### MasterContentDetailPage.tsx
- **역할**: 마스터 콘텐츠 사용자용 상세 페이지
- **사용처**: `/master/content/detail/:id` 라우트
- **타입**: Page Component
- **기능**: 사용자에게 보여지는 콘텐츠 상세 페이지

### MasterContentList.tsx
- **역할**: 마스터 콘텐츠 목록 관리 페이지
- **사용처**: `/master/content/list` 라우트
- **타입**: Page Component
- **기능**: 생성한 콘텐츠 목록 조회 및 관리

### MasterContentLoadingPage.tsx
- **역할**: 마스터 콘텐츠 AI 생성 로딩 페이지
- **사용처**: 마스터 콘텐츠 생성 중
- **타입**: Page Component
- **기능**: AI 썸네일 생성 진행률 표시

---

## 👤 사주 정보 관리

### BirthInfoInput.tsx
- **역할**: 결제용 사주 정보 입력 페이지
- **사용처**: `/product/:id/birthinfo` 라우트 (유료 콘텐츠)
- **타입**: Page Component
- **기능**: 유료 콘텐츠 결제 후 사주 정보 입력 (DB 저장)

### SajuInputPage.tsx
- **역할**: 프로필용 내 사주 정보 입력 페이지
- **사용처**: `/profile/saju/input` 라우트
- **타입**: Page Component
- **기능**: 프로필에서 본인 사주 정보 등록

### SajuAddPage.tsx
- **역할**: 관계 사주 추가 페이지 (연인/가족 등)
- **사용처**: `/profile/saju/add` 라우트
- **타입**: Page Component
- **기능**: 타인의 사주 정보 추가 (관계 설정)

### SajuSelectPage.tsx
- **역할**: 결제용 사주 선택 페이지
- **사용처**: `/product/:id/saju-select` 라우트
- **타입**: Page Component
- **기능**: 유료 콘텐츠 결제 후 사주 선택

### SajuManagementPage.tsx
- **역할**: 사주 정보 관리 메인 페이지
- **사용처**: `/profile/saju` 라우트
- **타입**: Page Component
- **기능**: 저장된 사주 목록 조회 및 관리

### SajuDetail.tsx
- **역할**: 사주 상세 정보 조회 페이지
- **사용처**: 사주 정보 상세 보기
- **타입**: Page Component
- **기능**: 사주 정보 상세 조회 및 수정

### SajuResultPage.tsx
- **역할**: 사주 운세 결과 페이지
- **사용처**: `/saju/result` 라우트
- **타입**: Page Component
- **기능**: 사주 기반 운세 결과 표시

### SajuKebabMenu.tsx
- **역할**: 사주 관리 케밥 메뉴 드롭다운
- **사용처**: SajuManagementPage
- **타입**: UI Component
- **기능**: 수정/삭제/대표사주 설정 메뉴

### PrimarySajuChangeDialog.tsx
- **역할**: 대표 사주 변경 확인 다이얼로그
- **사용처**: SajuManagementPage
- **타입**: Modal Component
- **기능**: 대표 사주 변경 확인 및 처리

---

## 🎴 타로 콘텐츠

### TarotFlowPage.tsx
- **역할**: 타로 콘텐츠 플로우 통합 페이지
- **사용처**: TarotDemo.tsx
- **타입**: Page Component
- **기능**: 타로 운세 전체 플로우 관리

### TarotCardSelection.tsx
- **역할**: 타로 카드 선택 컴포넌트
- **사용처**: MasterContentDetailPage, TarotFlowPage
- **타입**: Feature Component
- **기능**: 타로 카드 선택 UI 및 로직

### TarotShufflePage.tsx
- **역할**: 타로 카드 섞기 페이지
- **사용처**: `/tarot/shuffle` 라우트
- **타입**: Page Component
- **기능**: 타로 카드 섞기 애니메이션 및 인터랙션

### TarotResultPage.tsx
- **역할**: 타로 운세 결과 페이지
- **사용처**: `/tarot/result` 라우트
- **타입**: Page Component
- **기능**: 타로 카드 해석 결과 표시

---

## 👥 프로필 및 구매 내역

### ProfilePage.tsx
- **역할**: 프로필 페이지 (통합 버전)
- **사용처**: `/profile` 라우트
- **타입**: Page Component
- **기능**: 사용자 프로필, 사주 정보 관리, 구매 내역, 로그아웃

### PurchaseHistoryPage.tsx
- **역할**: 구매 내역 조회 페이지
- **사용처**: `/profile/purchase-history` 라우트
- **타입**: Page Component
- **기능**: 결제 내역 및 쿠폰 내역 조회

### ResultCompletePage.tsx
- **역할**: 결과 완료 페이지 (추천 콘텐츠 표시)
- **사용처**: 운세 결과 완료 후
- **타입**: Page Component
- **기능**: 결과 확인 완료 및 추천 콘텐츠 표시

---

## 🛠️ 유틸리티 컴포넌트

### FileUploadDialog.tsx
- **역할**: 파일 업로드 다이얼로그
- **사용처**: MasterContentList
- **타입**: Modal Component
- **기능**: 이미지/파일 업로드 UI

### TableOfContentsBottomSheet.tsx
- **역할**: 목차 바텀시트 (콘텐츠 내비게이션)
- **사용처**: 콘텐츠 상세 페이지
- **타입**: Modal Component
- **기능**: 긴 콘텐츠의 목차 네비게이션

### ProductDetail.tsx
- **역할**: 상품 상세 페이지 (유료 콘텐츠)
- **사용처**: App.tsx ProductDetailPage (type === 'paid')
- **타입**: Page Component
- **기능**: 유료 콘텐츠 소개 및 결제 버튼

---

## 📄 약관 페이지

### TermsPage.tsx
- **역할**: 통합 약관 동의 페이지
- **사용처**: `/terms` 라우트
- **타입**: Page Component
- **기능**: 이용약관 및 개인정보처리방침 통합 동의

### TermsOfServicePage.tsx
- **역할**: 이용약관 상세 페이지
- **사용처**: `/terms-of-service` 라우트
- **타입**: Page Component
- **기능**: 이용약관 전체 내용 표시

### PrivacyPolicyPage.tsx
- **역할**: 개인정보처리방침 상세 페이지
- **사용처**: `/privacy-policy` 라우트
- **타입**: Page Component
- **기능**: 개인정보처리방침 전체 내용 표시

---

## 🗂️ 백업된 컴포넌트 (사용 중지)

### ProfilePageWithSaju.tsx
- **상태**: 백업됨 (`/components/_backup/`)
- **사유**: ProfilePage.tsx로 통합됨

### RelationshipBottomSheet.tsx
- **상태**: 백업됨 (`/components/_backup/`)
- **사유**: 사용처 없음 (개발 중 폐기)

### CouponBottomSheet.tsx
- **상태**: 백업됨 (`/components/_backup/`)
- **사유**: CouponBottomSheetNew.tsx로 대체됨

---

## 📊 통계

- **총 컴포넌트**: 52개
- **페이지 컴포넌트**: 38개
- **UI/유틸리티 컴포넌트**: 14개
- **백업된 컴포넌트**: 3개

---

## 🔄 업데이트 이력

### 2025-12-20
- 초기 문서 생성
- ProfilePageWithSaju.tsx, RelationshipBottomSheet.tsx, CouponBottomSheet.tsx 백업 처리
- 52개 활성 컴포넌트 정리 완료
