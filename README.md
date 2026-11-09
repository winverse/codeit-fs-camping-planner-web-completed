# Camping Planner Web Completed

이 프로젝트는 캠핑 플래너 API를 호출하는 Next.js 화면을 TypeScript로 만든 최종 상태입니다. 첫 화면(`/`)에서 캠핑장 목록을 반려동물 동반 여부로 걸러 보고, 상세 화면(`/campsites/[id]`)에서 캠핑장 정보를 확인한 뒤 캠핑 계획을 추가하며, 내 캠핑 계획 화면(`/trips`)에서 계획의 상태와 평점을 바꿉니다. 서버 데이터 요청은 `src/lib/api.ts`의 함수와 TanStack Query 훅이 맡고, 스타일은 vanilla-extract(`*.css.ts`)로 작성했습니다.

사진이 없는 캠핑장 자리에 쓰는 `public/tent.svg`는 Microsoft Fluent UI Emoji(https://github.com/microsoft/fluentui-emoji)의 Tent 그림이며 MIT License를 따릅니다.

## 최종 구조

- `src/app/`: App Router의 경로 파일(`page.tsx`)과 공통 레이아웃(`layout.tsx`)
- `src/features/campsites/`: 캠핑장 목록·카드·상세 화면 컴포넌트와 캠핑장 조회 훅(`hooks/`)
- `src/features/trips/`: 캠핑 계획 추가 폼, 계획 목록·카드, 평점 컴포넌트와 계획 조회·수정 훅(`hooks/`)
- `src/components/`: 버튼·입력란·패널·알림 막대 같은 공통 컴포넌트, 404 화면(`NotFoundPage/`)과 전체 레이아웃(`layouts/GlobalLayout/`)
- `src/lib/`: API 요청 함수(`api.ts`), 쿼리 키(`queryKeys.ts`), 목록 필터 변환 함수
- `src/providers/`, `src/contexts/`: TanStack Query의 `QueryClientProvider`와 알림 메시지 컨텍스트
- `src/types/`, `src/constants/`: API 응답·요청 타입과 캠핑 계획 상태 상수
- `src/styles/`: 테마 변수와 전역 스타일

## 시작하기

1. API 서버 프로젝트(`codeit-fs-camping-planner-server-completed`)를 그 저장소의
   README대로 실행합니다. 캠핑장 동기화(`pnpm campsites:sync`)까지 마쳐야 목록에
   캠핑장이 보입니다.

2. `.env.local`의 `NEXT_PUBLIC_API_URL`이 API 서버 주소와 같은지 확인합니다. API
   서버를 기본 포트로 실행했다면 바꿀 필요가 없습니다.

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
```

3. 의존성을 설치합니다.

```bash
pnpm install
```

4. 개발 서버를 실행합니다.

```bash
pnpm dev
```

5. 브라우저에서 `http://localhost:3000`에 접속하면 캠핑장 목록이 보입니다. 카드를
   눌러 상세 화면의 캠핑 계획 추가 폼에서 계획을 추가하고, 위쪽의 내 캠핑 계획
   메뉴에서 추가한 계획을 확인합니다.

## 확인하기

타입 오류는 아래 명령으로 확인합니다. `next typegen`이 경로 타입을 만든 뒤
`tsc --noEmit`이 타입을 검사합니다.

```bash
pnpm typecheck
```

배포용 빌드가 되는지는 아래 명령으로 확인합니다.

```bash
pnpm build
```
