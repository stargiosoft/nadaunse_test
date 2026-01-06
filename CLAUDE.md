# CLAUDE.md - 나다운세 프로젝트 개발 규칙

> **이 파일은 Claude Code가 개발할 때 항상 참조하는 규칙입니다.**
> **수정 시 신중하게 검토해주세요.**

---

## 프로젝트 개요

- **서비스**: 타로/사주 운세 모바일 웹 서비스
- **URL**: https://nadaunse.com
- **GitHub**: https://github.com/stargiosoft/nadaunse

---

## 핵심 규칙 (Critical Rules)

### 1. 스타일링
- **Tailwind CSS만 사용** - inline style, CSS 파일 직접 작성 금지
- 색상/간격은 Tailwind 토큰 사용 (`bg-primary`, `p-4` 등)

### 2. TypeScript
- **모든 파일 TypeScript 필수** - `.js` 파일 생성 금지
- `any` 타입 사용 금지 (불가피한 경우 주석으로 사유 명시)

### 3. 개발/배포 환경 분리
```tsx
// 개발 전용 코드는 반드시 조건으로 감싸기
{import.meta.env.DEV && (
  <button>테스트 버튼</button>
)}
```

### 4. iOS Safari 최적화
```tsx
// overflow: hidden + border-radius 조합 시 transform-gpu 필수
<div className="overflow-hidden rounded-2xl transform-gpu">
  ...
</div>
```

### 5. Supabase 환경 분리
| 환경 | Project ID | 용도 |
|------|------------|------|
| Production | `kcthtpmxffppfbkjjkub` | nadaunse.com |
| Staging | `hyltbeewxaqashyivilu` | Preview/테스트 |

- **환경변수 사용**: `VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_ANON_KEY`
- **하드코딩 금지**: Supabase URL, Project ID 직접 작성 금지

### 6. 컴포넌트 재사용
- 새 컴포넌트 만들기 전 `components-inventory.md` 확인
- `/components/ui/` 에 shadcn/ui 컴포넌트 존재

### 7. Edge Functions
- Deno runtime 사용
- CORS 헤더 필수 포함
- 에러 핸들링 + 구조화된 로깅

---

## 파일 구조 규칙

```
/src
├── components/     # React 컴포넌트
├── pages/          # 페이지 컴포넌트
├── lib/            # 비즈니스 로직, 유틸리티
├── utils/          # 순수 유틸리티 함수
├── hooks/          # Custom hooks
├── styles/         # Tailwind 설정
└── imports/        # SVG, 이미지 임포트

/supabase
└── functions/      # Edge Functions (17개)
```

---

## 문서 업데이트 규칙

코드 변경 시 관련 문서 업데이트 필수:
1. **README.md** - 프로젝트 개요
2. **AI_ONBOARDING.md** - AI 작업 가이드
3. **PROJECT_CONTEXT.md** - 프로젝트 전체 컨텍스트
4. **DECISIONS.md** - 아키텍처 결정 기록
5. **components-inventory.md** - 컴포넌트 목록
6. **DATABASE_SCHEMA.md** - DB 스키마
7. **supabase/EDGE_FUNCTIONS_GUIDE.md** - Edge Functions
8. **supabase/DATABASE_TRIGGERS_AND_FUNCTIONS.md** - Triggers/Functions

---

## Git 커밋 규칙

```bash
# 커밋 메시지 형식
<type>: <description>

# types
feat:     새 기능
fix:      버그 수정
docs:     문서 수정
style:    코드 스타일 (포맷팅)
refactor: 리팩토링
test:     테스트
chore:    기타 변경
```

---

## 금지 사항

- `any` 타입 사용
- inline style 사용
- 개발 전용 코드 프로덕션 노출
- Supabase 정보 하드코딩
- 문서 업데이트 없이 대규모 변경
- Production DB 직접 조작 (Staging에서 테스트 후 반영)

---

## 참고 문서

- [AI_ONBOARDING.md](./src/AI_ONBOARDING.md) - 빠른 시작
- [PROJECT_CONTEXT.md](./src/PROJECT_CONTEXT.md) - 전체 컨텍스트
- [DECISIONS.md](./src/DECISIONS.md) - 아키텍처 결정
- [DATABASE_SCHEMA.md](./src/DATABASE_SCHEMA.md) - DB 스키마

---

**최종 업데이트**: 2026-01-06
