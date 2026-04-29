# 모먼사이트 교육 컨설팅 홈페이지

지방 일반고 및 중학생 학부모를 대상으로 한 교육 컨설팅 브랜드 웹사이트입니다.

## 기술 스택
- React
- React Router
- Vite
- Vanilla CSS

## 주요 페이지
- 메인 페이지: 히어로, 핵심 메시지, 서비스 소개, 필요성, 프로그램 안내, 신뢰 요소, CTA
- 소개 페이지: 컨설턴트 소개, 교육 철학, 학생부/입시 관점
- 서비스 페이지: 5개 핵심 컨설팅 서비스
- 칼럼 페이지: 입시 트렌드/학부모 칼럼/학생부 전략
- 상담 신청 페이지: 이름/연락처/학년/희망 분야/문의 내용 폼

## 실행 방법
```bash
npm install
npm run dev -- --host
```

## 빌드
```bash
npm run build
npm run preview
```

## 배포(미리보기 링크 생성)
### Vercel
1. Git 저장소 연결
2. Framework Preset: `Vite`
3. Build Command: `npm run build`
4. Output Directory: `dist`

`vercel.json`에 SPA 라우팅 rewrite를 포함해 새로고침 시 404를 방지합니다.

### Netlify
1. Git 저장소 연결
2. Build command: `npm run build`
3. Publish directory: `dist`

`netlify.toml`에 SPA redirect 규칙을 포함했습니다.
