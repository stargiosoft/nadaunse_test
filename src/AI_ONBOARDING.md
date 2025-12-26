# 🤖 AI 작업 인수인계 가이드

> **대상**: 이 프로젝트를 처음 맡는 AI 어시스턴트  
> **목적**: 5분 안에 프로젝트 컨텍스트를 파악하고 즉시 작업 시작

---

## 🚀 Quick Start (처음 5분)

### 1단계: 프로젝트 이해 (2분)

```bash
# 1. README.md 먼저 읽기 (프로젝트 개요, 기술 스택)
cat README.md

# 2. PROJECT_CONTEXT.md 전체 읽기 (핵심 규칙, 플로우)
cat PROJECT_CONTEXT.md
```

**결과**: 
- ✅ Tech Stack 파악 (React + Supabase + AI)
- ✅ 프로젝트 구조 이해 (무료/유료 이원화)
- ✅ 절대 규칙 숙지 (Tailwind만, TypeScript 필수 등)

---

### 2단계: 작업 유형 분류 (1분)

사용자 요청을 다음 5가지 중 하나로 분류:

| 작업 유형 | 설명 | 예시 |
|----------|------|------|
| **🐛 버그 수정** | 기능 오작동, 에러 | "스크롤 복원 안 돼요" |
| **✨ 새 기능 추가** | 기존에 없던 기능 | "별점 평가 기능 추가" |
| **🎨 UI 수정** | 디자인 변경 | "버튼 색상 변경" |
| **📊 데이터 작업** | DB 스키마, API 수정 | "테이블 컬럼 추가" |
| **🔧 리팩토링** | 코드 개선 (기능 동일) | "중복 코드 제거" |

---

### 3단계: 필수 문서 읽기 (2분)

작업 유형에 따라 **반드시 읽어야 할 문서**:

#### 🐛 버그 수정
```bash
# 필수 (순서대로)
1. PROJECT_CONTEXT.md  # 전체 읽기 (시스템 이해)
2. 버그 관련 파일      # file_search로 찾기
3. DECISIONS.md        # "왜 이렇게 구현했는지" 확인
```

**체크리스트**:
- [ ] Critical Rules 위반 여부 확인
- [ ] 버그 체크리스트 섹션 확인 (PROJECT_CONTEXT.md)
- [ ] 관련 Edge Function 로그 확인

---

#### ✨ 새 기능 추가
```bash
# 필수 (순서대로)
1. PROJECT_CONTEXT.md    # Critical Rules, 파일 구조
2. components-inventory.md  # 재사용 가능한 컴포넌트 확인
3. DATABASE_SCHEMA.md    # DB 스키마 (테이블 추가 필요 시)
4. DECISIONS.md          # 기존 설계 패턴 확인
```

**체크리스트**:
- [ ] 기존 컴포넌트 재사용 가능한지 확인
- [ ] DB 스키마 변경 필요한지 확인
- [ ] Edge Function 추가 필요한지 확인
- [ ] 무료/유료 분기 필요한지 확인

---

#### 🎨 UI 수정
```bash
# 필수
1. PROJECT_CONTEXT.md     # Critical Rules (스타일링 규칙)
2. /styles/globals.css    # Tailwind 토큰 확인
3. components-inventory.md   # UI 컴포넌트 위치
```

**절대 금지**:
- ❌ `text-*`, `font-*`, `leading-*` 클래스 사용 (globals.css에 정의됨)
- ❌ `styled-components`, `inline style` 사용
- ❌ Tailwind 외 CSS 라이브러리 사용

---

#### 📊 데이터 작업
```bash
# 필수
1. DATABASE_SCHEMA.md     # 전체 DB 구조 파악
2. PROJECT_CONTEXT.md     # RLS 정책, Edge Functions
3. /lib/supabase.ts       # Supabase 클라이언트 설정
```

**체크리스트**:
- [ ] RLS 정책 추가 필요한지 확인
- [ ] 마이그레이션 SQL 파일 작성
- [ ] Edge Function에서 접근 가능한지 확인

---

#### 🔧 리팩토링
```bash
# 필수
1. DECISIONS.md           # 기존 설계 의도 이해
2. PROJECT_CONTEXT.md     # Critical Rules 준수
3. 해당 파일의 JSDoc 주석  # 원래 목적 확인
```

**체크리스트**:
- [ ] 기능 변경 없이 코드만 개선하는지 확인
- [ ] 기존 설계 패턴 유지 (싱글톤 서비스 클래스 등)
- [ ] TypeScript 타입 정확히 정의

---

## 📋 시나리오별 작업 흐름

### 시나리오 1: "스크롤 복원이 안 돼요" (버그 수정)

#### Step 1: 컨텍스트 로드
```markdown
AI 프롬프트:
"PROJECT_CONTEXT.md 전체 내용을 먼저 읽어주세요."
```

#### Step 2: 버그 체크리스트 확인
```markdown
PROJECT_CONTEXT.md → "🐛 주요 버그 유형 & 체크리스트" 섹션
→ "1. 스크롤 복원 실패" 항목 확인
```

#### Step 3: 관련 파일 찾기
```bash
file_search:
- content_pattern: "scrollRestoreLogger"
- name_pattern: "**/*.tsx"
```

#### Step 4: 로그 분석 요청
```markdown
사용자에게 요청:
"scrollRestoreLogger 로그를 콘솔에서 복사해서 보내주세요."
```

#### Step 5: 수정 코드 작성
```typescript
// Critical Rules 준수:
// ✅ TypeScript interface 정의
// ✅ JSDoc 주석 추가
// ✅ 구조화된 로깅
```

---

### 시나리오 2: "프로필 페이지에 별점 평가 추가해주세요" (새 기능)

#### Step 1: 기존 구조 파악
```bash
# 1. 컴포넌트 인벤토리 확인
cat components-inventory.md | grep "프로필"

# 2. DB 스키마 확인
cat DATABASE_SCHEMA.md | grep "users\|ratings"
```

#### Step 2: 설계 결정
```markdown
체크리스트:
- [ ] 별점 데이터를 어디에 저장? (새 테이블 vs 기존 테이블)
- [ ] 로그인 필수? (유료 vs 무료)
- [ ] UI 컴포넌트 재사용 가능? (components/ui/*)
```

#### Step 3: DECISIONS.md 업데이트
```markdown
## [2025-12-21] 별점 평가 시스템 추가

### 결정 사항
- 새 테이블 `content_ratings` 생성
- RLS 정책: 본인만 수정 가능
- UI: shadcn/ui의 Star 아이콘 사용

### 근거
- 기존 orders 테이블과 분리 (확장성)
- 무료 콘텐츠에도 적용 가능하도록 설계
```

#### Step 4: 구현
```typescript
// 1. DB 마이그레이션 SQL 작성
// 2. TypeScript 타입 정의
// 3. UI 컴포넌트 작성 (Tailwind만 사용)
// 4. Edge Function 추가 (필요 시)
```

---

### 시나리오 3: "로딩 페이지 디자인 변경" (UI 수정)

#### Step 1: Critical Rules 확인
```bash
cat PROJECT_CONTEXT.md | grep -A 10 "Critical Rules"
```

**확인 사항**:
- ❌ `text-2xl`, `font-bold` 같은 폰트 클래스 사용 금지
- ✅ `globals.css`의 토큰만 사용

#### Step 2: 기존 파일 찾기
```bash
file_search:
- content_pattern: "LoadingPage"
- name_pattern: "**/*.tsx"
```

#### Step 3: 수정 전 globals.css 확인
```bash
cat /styles/globals.css | grep "@theme"
```

#### Step 4: Tailwind만 사용해서 수정
```tsx
// ✅ 올바른 예시
<div className="flex items-center justify-center h-screen bg-gray-50">
  <div className="space-y-4">
    {/* 폰트 크기는 globals.css에서 자동 적용됨 */}
    <h1>로딩 중...</h1>
  </div>
</div>

// ❌ 잘못된 예시
<div style={{ fontSize: '24px' }}>  {/* inline style 금지 */}
<div className="text-2xl">          {/* 폰트 클래스 금지 */}
```

---

## 🔍 파일 찾기 치트시트

### 기능별 파일 위치 (빠른 참조)

#### 무료 콘텐츠
```
/components/FreeProductDetail.tsx       # 무료 상세
/components/FreeBirthInfoInput.tsx      # 사주 입력
/components/FreeSajuSelectPage.tsx      # 사주 선택
/components/FreeContentLoading.tsx      # 로딩
/components/FreeSajuDetail.tsx          # 결과
/lib/freeContentService.ts              # 비즈니스 로직
```

#### 유료 콘텐츠
```
/components/ProductDetail.tsx           # 유료 상세
/components/PaymentNew.tsx              # 결제
/components/BirthInfoInput.tsx          # 사주 입력
/components/LoadingPage.tsx             # 로딩
/components/SajuResultPage.tsx          # 결과
```

#### 공통 UI
```
/components/ui/*                        # shadcn/ui 재사용 컴포넌트
/components/skeletons/*                 # 로딩 스켈레톤
/components/NavigationHeader.tsx        # 헤더
/components/Footer.tsx                  # 푸터
```

#### 비즈니스 로직
```
/lib/supabase.ts                        # Supabase 클라이언트
/lib/freeContentService.ts              # 무료 콘텐츠 서비스
/lib/masterContentAI.ts                 # 유료 AI 생성
/lib/coupon.ts                          # 쿠폰 관리
/lib/auth.ts                            # 인증 헬퍼
```

#### Edge Functions
```
/supabase/functions/generate-free-preview/      # 무료 생성
/supabase/functions/generate-master-content/    # 유료 생성
/supabase/functions/get-available-coupons/      # 쿠폰 조회
/supabase/functions/send-alimtalk/              # 알림톡

→ 📖 전체 목록 (17개): /supabase/EDGE_FUNCTIONS_GUIDE.md
```

---

## 🚨 Critical Rules (암기 필수)

### ✅ 반드시 해야 할 것

1. **TypeScript 타입 정의**
   ```typescript
   // ✅ 올바름
   interface User {
     id: string;
     name: string;
   }
   
   // ❌ 금지
   const user: any = {...};
   ```

2. **Tailwind CSS만 사용**
   ```tsx
   // ✅ 올바름
   <div className="flex items-center gap-2">
   
   // ❌ 금지
   <div style={{ display: 'flex' }}>
   ```

3. **JSDoc 주석 (public 메서드)**
   ```typescript
   /**
    * 무료 콘텐츠 AI 생성 요청
    * @param params - 생성 파라미터
    * @throws {Error} Edge Function 호출 실패 시
    */
   async requestGeneration(params: RequestGenerationParams): Promise<void>
   ```

4. **구조화된 로깅**
   ```typescript
   // ✅ 올바름
   scrollRestoreLogger.save({ scrollY: 500, contentCount: 12 });
   
   // ❌ 금지
   console.log('스크롤:', 500);
   ```

---

### ❌ 절대 하지 말아야 할 것

1. **폰트 관련 Tailwind 클래스 사용**
   - ❌ `text-2xl`, `font-bold`, `leading-tight` 등
   - ✅ `globals.css`에 정의된 토큰만 사용

2. **Styled-components 또는 inline style**
   - ❌ `styled.div`, `<div style={{...}}>`
   - ✅ Tailwind 클래스만 사용

3. **any 타입 사용**
   - ❌ `const data: any = ...`
   - ✅ 명확한 interface 정의

4. **보호된 파일 수정**
   - ❌ `/components/figma/ImageWithFallback.tsx`
   - ✅ 다른 파일에서 import해서 사용

---

## 📖 문서 간 관계도

```
README.md (시작점)
    │
    ├─→ PROJECT_CONTEXT.md (핵심, 모든 작업 전 필독)
    │       │
    │       ├─→ DECISIONS.md (설계 의도)
    │       ├─→ DATABASE_SCHEMA.md (DB 구조)
    │       └─→ components-inventory.md (파일 위치)
    │
    └─→ Attributions.md (라이선스)
```

**읽는 순서** (작업 시작 전):
1. **README.md** (1분) - 프로젝트 개요
2. **PROJECT_CONTEXT.md** (3분) - 시스템 전체 이해
3. **작업별 추가 문서** (2분) - DECISIONS.md, DATABASE_SCHEMA.md 등

---

## 🗺️ AI 작업 의사결정 트리

```
사용자 요청 받음
    ↓
┌──────────────────┐
│ 1. 컨텍스트 로드  │
│ PROJECT_CONTEXT  │
└────────┬─────────┘
         ↓
┌────────────────────────────────────┐
│ 2. 작업 유형 분류                   │
├────────────────────────────────────┤
│ A. 🐛 버그 수정                     │
│ B. ✨ 새 기능                       │
│ C. 🎨 UI 수정                       │
│ D. 📊 데이터 작업                   │
│ E. 🔧 리팩토링                      │
└────────┬───────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│ 3. 추가 문서 읽기 (작업별)           │
├─────────────────────────────────────┤
│ 버그     → 버그 체크리스트           │
│ 새 기능  → components-inventory.md  │
│ UI 수정  → globals.css              │
│ 데이터   → DATABASE_SCHEMA.md       │
│ 리팩토링 → DECISIONS.md              │
└─────────┬───────────────────────────┘
         ↓
┌──────────────────┐
│ 4. file_search   │
│ 관련 파일 찾기    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ 5. Critical Rules 체크   │
│ - TypeScript?           │
│ - Tailwind only?        │
│ - JSDoc?                │
└────────┬────────────────┘
         ↓
┌──────────────┐
│ 6. 코드 작성  │
└────────┬─────┘
         ↓
┌───────────────────────┐
│ 7. DECISIONS.md 업데이트│
│ (새 기능인 경우)        │
└───────────────────────┘
```

---

## 🎯 작업 시작 전 최종 체크리스트

```markdown
[ ] README.md 읽음
[ ] PROJECT_CONTEXT.md 전체 읽음
[ ] Critical Rules 숙지
[ ] 작업 유형 분류 완료
[ ] 필요한 추가 문서 확인
[ ] 관련 파일 경로 파악
[ ] 기존 설계 패턴 이해 (DECISIONS.md)
[ ] 보호된 파일 확인 (수정 금지)
```

**모두 체크했다면** → 즉시 작업 시작 가능! 🚀

---

## 💡 효율적인 AI 작업 팁

### 1. 첫 응답에서 컨텍스트 요청
```markdown
사용자: "홈 화면 스크롤 복원 버그 수정해줘"

AI: "네! 먼저 프로젝트 컨텍스트를 파악하겠습니다."
→ read PROJECT_CONTEXT.md
→ file_search "scroll"
→ 버그 체크리스트 확인
→ 수정 제안
```

### 2. 불확실하면 DECISIONS.md 확인
```markdown
사용자: "왜 무료/유료 컴포넌트를 따로 만들었어요?"

AI: "DECISIONS.md를 확인하겠습니다."
→ read DECISIONS.md
→ [2025-12-18] 무료/유료 컴포넌트 분리 결정 찾기
→ 설계 의도 설명
```

### 3. 수정 후 DECISIONS.md 업데이트
```markdown
새 기능 추가 시:
1. 코드 작성
2. DECISIONS.md에 결정 사항 기록
3. PROJECT_CONTEXT.md 업데이트 (필요 시)
```

---

## 🆘 긴급 상황 대응

### 상황 1: "이 프로젝트 처음인데 급하게 버그 수정해야 해요"
```bash
# 3분 안에 최소 컨텍스트 파악
1. cat PROJECT_CONTEXT.md | head -100  # 상단 100줄만
2. 버그 증상 듣기
3. file_search로 관련 파일 찾기
4. 즉시 수정 제안
```

### 상황 2: "문서가 너무 많아요, 뭐부터 봐야 해요?"
```bash
# 우선순위 (강제)
1순위: PROJECT_CONTEXT.md (필수, 3분)
2순위: 작업별 추가 문서 (선택, 2분)
3순위: 나머지 (나중에)
```

### 상황 3: "이 코드 왜 이렇게 짰어요?"
```bash
# 설계 의도 확인
1. DECISIONS.md 검색
2. 관련 파일의 JSDoc 주석 확인
3. PROJECT_CONTEXT.md의 Critical Rules 확인
```

---

## 📞 추가 질문이 있을 때

| 질문 유형 | 참고 문서 |
|----------|----------|
| "전체 시스템 구조는?" | PROJECT_CONTEXT.md |
| "왜 이렇게 설계했어?" | DECISIONS.md |
| "DB 테이블 구조는?" | DATABASE_SCHEMA.md |
| "이 컴포넌트 어디 있어?" | components-inventory.md |
| "빠르게 시작하려면?" | README.md |
| "라이선스 확인" | Attributions.md |

---

## 🎓 마스터 체크리스트

**이 프로젝트를 완전히 이해했다면**:

```markdown
[ ] 무료/유료 콘텐츠 플로우 다이어그램 그릴 수 있다
[ ] FreeContentService 클래스 역할 설명할 수 있다
[ ] Critical Rules 5가지 암기했다
[ ] Edge Functions 목록 외웠다
[ ] Tailwind 폰트 클래스 사용 금지 이유 안다
[ ] RLS 정책이 뭔지 안다
[ ] localStorage vs DB 저장 분기 조건 안다
[ ] 스크롤 복원 로직 설명할 수 있다
```

**80% 이상 체크** → 프로젝트 마스터! 자유롭게 작업 가능 🎉

---

**문서 버전**: 1.0.0  
**최종 업데이트**: 2025-12-21  
**다음 AI에게**: 이 문서 읽는 데 5분 투자하면, 수십 시간의 삽질을 막을 수 있어요. 화이팅! 🚀