# 🔮 운세 서비스 - Supabase + AI 통합

> Figma 디자인 기반 운세 서비스 (무료/유료 콘텐츠, AI 생성, 결제 연동)

---

## 🚀 빠른 시작

### 1. 환경 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
# Supabase 연결 정보
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

> 💡 **보안**: API 키는 `.env`에 추가하지 않습니다. Supabase Secrets에서 관리됩니다.

### 2. 개발 서버 실행

```bash
npm install
npm run dev
```

### 3. Supabase 설정 (운영 시)

#### A. Edge Functions 배포

```bash
# Supabase CLI 설치
brew install supabase/tap/supabase

# 로그인 & 연결
supabase login
supabase link --project-ref YOUR_PROJECT_REF

# 배포
supabase functions deploy
```

#### B. Secrets 설정

Supabase Dashboard > Edge Functions > Settings > Secrets:

```
OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...
PORTONE_API_KEY=...
KAKAO_ALIMTALK_API_KEY=...
```

---

## 📚 사용 기술

- **Frontend**: React 18 + TypeScript + Tailwind CSS v4.0
- **Backend**: Supabase (Auth, Database, Edge Functions)
- **AI**: OpenAI GPT-4o, Anthropic Claude-3.5-Sonnet
- **Payment**: PortOne v2
- **Hosting**: Figma Make (Dev), Supabase (Production)

---

## 📁 프로젝트 구조

```
/
├── components/              # React 컴포넌트
│   ├── ui/                  # shadcn/ui 재사용 컴포넌트
│   ├── skeletons/           # 로딩 스켈레톤
│   └── *.tsx                # 페이지 컴포넌트
│
├── pages/                   # 라우트 페이지
│   ├── HomePage.tsx         # 홈 (콘텐츠 목록)
│   └── AuthCallback.tsx     # OAuth 콜백
│
├── lib/                     # 비즈니스 로직
│   ├── supabase.ts          # Supabase 클라이언트
│   ├── freeContentService.ts # 무료 콘텐츠 서비스
│   └── masterContentAI.ts   # 유료 콘텐츠 AI
│
├── supabase/functions/      # Edge Functions
│   ├── generate-free-preview/
│   ├── generate-master-content/
│   ├── get-available-coupons/
│   └── send-alimtalk/
│
├── styles/
│   └── globals.css          # Tailwind v4.0 토큰
│
└── docs/                    # 상세 문서
    ├── PROJECT_CONTEXT.md   # AI 디버깅용 (⭐ 핵심)
    ├── DECISIONS.md         # 아키텍처 결정 기록
    ├── DATABASE_SCHEMA.md   # DB 스키마
    └── components-inventory.md # 컴포넌트 목록
```

---

## 🎯 핵심 기능

### 무료 콘텐츠
- ✅ 로그아웃 사용자도 이용 가능
- ✅ localStorage 캐시 (휘발성)
- ✅ 로그인 시 DB 저장 가능

### 유료 콘텐츠 (심화 해석판)
- ✅ 로그인 필수
- ✅ PortOne 결제 연동
- ✅ 쿠폰 적용 (웰컴 쿠폰, 재방문 쿠폰)
- ✅ DB 영구 저장

### 사주 정보 관리
- ✅ 본인 + 관계 사주 (연인, 가족 등)
- ✅ 대표 사주 설정
- ✅ 프로필 페이지 통합 관리

---

## 📖 상세 문서

| 문서 | 용도 | 타겟 |
|------|------|------|
| **[AI_ONBOARDING.md](./AI_ONBOARDING.md)** | 🤖 **AI 작업 인수인계 가이드** | **AI (필독!)** |
| **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** | AI 디버깅 + 전체 아키텍처 | AI, 개발자 |
| **[DECISIONS.md](./DECISIONS.md)** | 아키텍처 결정 기록 | 개발자 |
| **[DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)** | DB 스키마 상세 | 개발자 |
| **[components-inventory.md](./components-inventory.md)** | 컴포넌트 목록 (52개) | 개발자 |
| **[supabase/EDGE_FUNCTIONS_GUIDE.md](./supabase/EDGE_FUNCTIONS_GUIDE.md)** | Edge Functions 가이드 (17개) | 개발자 |

---

## 📚 문서 사용 가이드

### **🆕 처음 프로젝트 시작할 때**

```bash
cat README.md  # 5분 안에 설치 & 실행
```

### **🤖 새로운 AI가 작업 인수받을 때**

```bash
cat AI_ONBOARDING.md     # 5분 - 작업 시작 가이드
cat PROJECT_CONTEXT.md   # 3분 - 시스템 전체 이해
# → 즉시 작업 시작 가능!
```

### **🐛 버그 발생 시**

```markdown
AI에게 전달:
1. PROJECT_CONTEXT.md 전체 내용
2. 버그 증상 + 로그
3. → AI가 근본 원인 분석 + 수정 코드 제공
```

### **🏗️ 아키텍처 이해할 때**

```bash
cat PROJECT_CONTEXT.md  # 전체 시스템 구조 파악
cat DECISIONS.md        # "왜 이렇게?" 대답 확인
```

### **🗄️ DB 작업할 때**

```bash
cat DATABASE_SCHEMA.md  # 테이블 구조, RLS 정책 확인
```

### **🔍 컴포넌트 찾을 때**

```bash
cat components-inventory.md  # 52개 컴포넌트 분류별 위치
# 예: "프로필 페이지 어디?" → 4. 프로필 섹션
```

### **⚡ Edge Function 작업 시**

```bash
cat supabase/EDGE_FUNCTIONS_GUIDE.md  # 17개 함수 역할/입출력
# 예: "쿠폰 조회 어떻게?" → get-available-coupons 섹션
```

---

### 🤖 새로운 AI가 작업을 받았다면?

**👉 [AI_ONBOARDING.md](./AI_ONBOARDING.md) 먼저 읽기! (5분 투자 필수)**

---

### 🆘 버그 발생 시

1. **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** 전체 내용을 AI에게 제공
2. 버그 증상, 로그, 관련 파일 정보 추가
3. AI가 근본 원인 분석 + 수정 코드 제공

---

## 🐛 문제 해결

### Edge Function 호출 실패
```bash
# 환경변수 확인
supabase secrets list

# 함수 재배포
supabase functions deploy
```

### CORS 오류
- Edge Functions 코드에 CORS 헤더 포함됨
- 문제 지속 시 Supabase 프로젝트 설정 확인

### 로그 확인
```bash
# Edge Function 로그
supabase functions logs generate-master-content --tail

# Supabase Studio에서 실시간 로그 확인
```

---

## 💰 비용 관리

### Supabase
- **무료**: Edge Functions 500K 요청/월, DB 500MB
- **Pro**: $25/월 (8GB DB, 2M Edge Functions)

### AI API
- OpenAI: 사용량 기반 ($0.005/1K tokens)
- Anthropic: 사용량 기반 ($0.003/1K tokens)

### PortOne 결제
- 거래 수수료: 3.3% + 부가세

---

## 🔐 보안

### API 키 보호
- ✅ 클라이언트 코드에 API 키 없음
- ✅ Supabase Secrets로 서버 측 관리
- ✅ `.env` 파일은 Git 제외

### Row Level Security (RLS)
- ✅ 모든 테이블에 RLS 정책 적용
- ✅ 사용자는 자신의 데이터만 접근 가능

---

## 📞 지원

- **아키텍처 질문**: [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) 참고
- **DB 스키마**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md) 참고
- **버그 리포트**: AI에게 PROJECT_CONTEXT.md + 로그 제공

---

Made with ❤️ for production-ready AI services