# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
pnpm dev        # 개발 서버 실행 (http://localhost:3000)
pnpm build      # 프로덕션 빌드
pnpm start      # 프로덕션 서버 실행
pnpm lint       # ESLint 실행
```

## 아키텍처 개요

Next.js 16 App Router 기반 스타터킷. `src/` 디렉터리 구조를 사용한다.

### 레이어 구조

```
src/config/nav.ts          ← 네비게이션 메뉴 정의 (mainNav, footerNav)
src/lib/site-config.ts     ← 사이트 이름/URL/링크 전역 설정 (siteConfig)
src/app/layout.tsx         ← 루트 레이아웃: Provider 스택, SiteHeader, SiteFooter
src/app/[route]/page.tsx   ← 각 페이지 (metadata export + 서버 컴포넌트 기본)
```

### Provider 스택 (layout.tsx)
`ThemeProvider` → `TooltipProvider` → `SkipNav` → `SiteHeader` → `{children}` → `SiteFooter` → `Toaster`

### 컴포넌트 분류
- `src/components/layout/` — 페이지 구조 (Container, SiteHeader, SiteFooter, MainNav, MobileNav)
- `src/components/ui/` — shadcn/ui 프리미티브 (직접 수정 지양, shadcn CLI로 추가)
- `src/components/common/` — 공통 앱 컴포넌트 (SkipNav, ThemeToggle, Avatar)

### 핵심 유틸리티
- `src/lib/api.ts` — `api.get/post/put/patch/delete<T>()` fetch 래퍼. 실패 시 `ApiError(status, message)` throw
- `src/lib/validations/common.ts` — Zod 스키마 모음 (`loginSchema`, `signupSchema`, `emailSchema` 등)
- `src/hooks/index.ts` — `usehooks-ts` 훅 re-export (`@/hooks`에서 import)
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)

### 새 페이지 추가 시
1. `src/app/[route]/page.tsx` 생성
2. `metadata` export (title만 지정하면 `%s | Starter Kit` 자동 적용)
3. `src/config/nav.ts`에 네비게이션 항목 추가 (필요 시)
4. `Container` 컴포넌트로 레이아웃 래핑

### 폼 패턴
React Hook Form + Zod 조합. `src/lib/validations/common.ts`의 스키마를 재사용하고, 새 스키마는 같은 파일에 추가한다.

### 상태 관리
전역 상태가 필요하면 `src/store/`에 Zustand 스토어를 추가한다.
