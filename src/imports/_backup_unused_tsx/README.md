# 📦 미사용 .tsx 파일 백업 폴더

> 생성일: 2024-12-21  
> 백업 대상: /imports 폴더의 미사용 .tsx 파일들

---

## 🎯 백업 대상 파일 (약 300개)

### 영문 파일
```
390.tsx
390-169-3176.tsx
390-233-2508.tsx
390-238-2602.tsx
390-238-3546.tsx
505.tsx
505-171-6682.tsx
505-171-7865.tsx
509.tsx
509-164-3658.tsx
509-164-4535.tsx
ButtonIconButton.tsx
ButtonSnsButton.tsx
CommonLogo.tsx
Container.tsx
FeedbackAlert-296-4403.tsx
FeedbackAlert.tsx
FeedbackToast.tsx
Footer-324-2294.tsx
Footer.tsx
Frame427321522.tsx
TopNavigationContainer.tsx
```

### 한글 파일 (약 280개)
```
개인정보수집및이용동의.tsx
결제기본할인o쿠폰x.tsx
관계선택.tsx
구매내역1개.tsx
구매내역없음.tsx
구매내역여러개.tsx
기가입자구글440Max.tsx
기가입자카카오390.tsx
대표사주변경완료.tsx
대표사주변경컨펌모달.tsx
등록된사주정보없음.tsx
등록된사주정보있음.tsx
로그인.tsx
로그인세션만료.tsx
로딩중.tsx
마스터콘텐츠리스트.tsx
마스터콘텐츠수정하기무료.tsx
마스터콘텐츠수정하기유료.tsx
마스터콘텐트만들기무료기본정보입력.tsx
마스터콘텐트만들기무료질문지입력.tsx
맛보기.tsx
무료상세페이지.tsx
바텀시트가확장.tsx
사주정보관리편집시.tsx
사주정보등록후.tsx
사주정보미등록.tsx
사주정보삭제완료.tsx
사주정보삭제컨펌모달.tsx
사주정보선택390.tsx
사주정보에러시.tsx
사주정보입력.tsx
사주정보입력전.tsx
사주정보추가.tsx
상세풀이.tsx
상품설명로그인.tsx
상품설명재구매혜택가.tsx
상품설명접힘상태.tsx
상품설명쿠폰없음.tsx
상품설명펼침상태.tsx
서비스이용약관.tsx
스크롤시.tsx
심화해석판로딩.tsx
심화해석판상품상세.tsx
약관동의390.tsx
약관동의완료390.tsx
약관펼치기390.tsx
첫로그인.tsx
첫로그인카카오.tsx
최근로그인카카오.tsx
카드뽑기섞기.tsx
카드뽑음.tsx
카드섞기완료.tsx
카드섞기완료360Min.tsx
타로풀이390.tsx
타로풀이441.tsx
텍스트풀이360Min.tsx
텍스트풀이390.tsx
풀이마지막441.tsx
풀이마지막쿠폰저장전.tsx
풀이마지막쿠폰저장후.tsx
풀이에서목차열기.tsx
홈.tsx
홈390.tsx

... 그 외 200개 이상의 변형 파일들
```

---

## 🔧 백업 방법 (CLI)

### 방법 1: 전체 .tsx 파일 이동 (권장)

```bash
# 현재 위치: 프로젝트 루트
cd /imports

# .tsx 파일만 백업 폴더로 이동
find . -maxdepth 1 -name "*.tsx" -exec mv {} _backup_unused_tsx/ \;

# 확인
ls _backup_unused_tsx | wc -l  # 약 300개 예상
```

### 방법 2: 개별 파일 이동

```bash
cd /imports

# 영문 파일
mv 390*.tsx _backup_unused_tsx/
mv 505*.tsx _backup_unused_tsx/
mv 509*.tsx _backup_unused_tsx/
mv Button*.tsx _backup_unused_tsx/
mv Common*.tsx _backup_unused_tsx/
mv Container.tsx _backup_unused_tsx/
mv Feedback*.tsx _backup_unused_tsx/
mv Footer*.tsx _backup_unused_tsx/
mv Frame*.tsx _backup_unused_tsx/
mv TopNavigation*.tsx _backup_unused_tsx/

# 한글 파일 (전체)
mv 개인정보*.tsx _backup_unused_tsx/
mv 결제*.tsx _backup_unused_tsx/
mv 관계*.tsx _backup_unused_tsx/
mv 구매*.tsx _backup_unused_tsx/
mv 기가입자*.tsx _backup_unused_tsx/
mv 대표사주*.tsx _backup_unused_tsx/
mv 등록된사주*.tsx _backup_unused_tsx/
mv 로그인*.tsx _backup_unused_tsx/
mv 로딩중*.tsx _backup_unused_tsx/
mv 마스터콘텐츠*.tsx _backup_unused_tsx/
mv 마스터콘텐트*.tsx _backup_unused_tsx/
mv 맛보기*.tsx _backup_unused_tsx/
mv 무료상세*.tsx _backup_unused_tsx/
mv 바텀시트*.tsx _backup_unused_tsx/
mv 사주정보*.tsx _backup_unused_tsx/
mv 상세풀이*.tsx _backup_unused_tsx/
mv 상품설명*.tsx _backup_unused_tsx/
mv 서비스*.tsx _backup_unused_tsx/
mv 스크롤*.tsx _backup_unused_tsx/
mv 심화해석*.tsx _backup_unused_tsx/
mv 약관*.tsx _backup_unused_tsx/
mv 첫로그인*.tsx _backup_unused_tsx/
mv 최근로그인*.tsx _backup_unused_tsx/
mv 카드*.tsx _backup_unused_tsx/
mv 타로*.tsx _backup_unused_tsx/
mv 텍스트*.tsx _backup_unused_tsx/
mv 풀이*.tsx _backup_unused_tsx/
mv 홈*.tsx _backup_unused_tsx/
```

### 방법 3: VS Code에서 수동 이동

1. `/imports` 폴더 열기
2. `.tsx` 파일만 필터
3. 전체 선택 (Ctrl+A / Cmd+A)
4. 드래그 앤 드롭 → `_backup_unused_tsx/`

---

## 📊 백업 후 확인

```bash
# /imports 폴더에 남아야 할 파일: svg-*.ts 파일들만
ls /imports | grep "\.ts$" | wc -l  # 약 200개 (svg 파일)
ls /imports | grep "\.tsx$" | wc -l  # 0개 (모두 백업됨)

# 백업 폴더 확인
ls /imports/_backup_unused_tsx | wc -l  # 약 300개
```

---

## ⚠️ 주의사항

1. **백업 전 커밋 권장**
   ```bash
   git add .
   git commit -m "chore: backup unused Figma import files"
   ```

2. **복원 방법**
   ```bash
   # 만약 필요하면 다시 복원 가능
   mv /imports/_backup_unused_tsx/*.tsx /imports/
   ```

3. **완전 삭제 (신중하게)**
   ```bash
   # 백업 후 6개월 뒤, 정말 필요 없다면
   rm -rf /imports/_backup_unused_tsx
   ```

---

## ✅ 백업 완료 체크리스트

- [ ] Git 커밋 완료
- [ ] .tsx 파일 모두 백업 폴더로 이동
- [ ] /imports 폴더에 svg-*.ts 파일만 남음
- [ ] 애플리케이션 정상 작동 확인
- [ ] 백업 폴더 용량 확인 (약 10-15MB)

---

**자동화 스크립트 실행:**
```bash
# 프로젝트 루트에서 실행
bash cleanup-imports.sh
```

(스크립트는 별도로 제공하지 않습니다. 위 명령어를 참고하여 수동 실행하세요.)
