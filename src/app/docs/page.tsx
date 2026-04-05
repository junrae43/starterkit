import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "문서",
  description: "스타터킷 사용 방법과 디렉터리 구조를 안내합니다.",
}

const structure = [
  {
    path: "src/app/",
    description: "Next.js App Router 페이지 및 레이아웃",
  },
  {
    path: "src/components/",
    description: "재사용 가능한 UI 컴포넌트 (layout, ui, common)",
  },
  {
    path: "src/config/",
    description: "네비게이션, 사이트 설정 등 앱 설정 파일",
  },
  {
    path: "src/lib/",
    description: "유틸리티 함수, 사이트 설정, 폼 유효성 검사",
  },
  {
    path: "src/hooks/",
    description: "커스텀 React 훅",
  },
  {
    path: "src/store/",
    description: "Zustand 전역 상태 스토어",
  },
]

const externalLinks = [
  {
    title: "Next.js 공식 문서",
    href: "https://nextjs.org/docs",
    description: "Next.js App Router, 서버 컴포넌트, 라우팅 가이드",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
    description: "포함된 UI 컴포넌트 사용법 및 커스터마이징",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/docs",
    description: "유틸리티 클래스 레퍼런스",
  },
  {
    title: "Zustand",
    href: "https://zustand-demo.pmnd.rs",
    description: "전역 상태 관리 라이브러리",
  },
]

export default function DocsPage() {
  return (
    <Container>
      <div className="py-16 md:py-24">
        {/* 헤더 */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">문서</h1>
          <p className="text-lg text-muted-foreground">
            스타터킷의 구조와 시작 방법을 안내합니다.
          </p>
        </div>

        {/* 빠른 시작 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">빠른 시작</h2>
          <div className="rounded-lg border bg-muted/50 p-6">
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  1
                </span>
                <span>
                  <strong>저장소 클론:</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    git clone &lt;repo-url&gt; my-project
                  </code>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  2
                </span>
                <span>
                  <strong>의존성 설치:</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    pnpm install
                  </code>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  3
                </span>
                <span>
                  <strong>환경 변수 설정:</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    .env.local
                  </code>{" "}
                  파일을 생성하고 필요한 환경 변수를 설정하세요.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  4
                </span>
                <span>
                  <strong>개발 서버 실행:</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    pnpm dev
                  </code>
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* 디렉터리 구조 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">디렉터리 구조</h2>
          <div className="divide-y rounded-lg border">
            {structure.map((item) => (
              <div key={item.path} className="flex gap-4 px-5 py-4">
                <code className="w-44 shrink-0 text-sm font-medium">
                  {item.path}
                </code>
                <span className="text-sm text-muted-foreground">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 외부 링크 */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">참고 문서</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {externalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <p className="font-medium">{link.title} ↗</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
