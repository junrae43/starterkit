import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "소개",
  description: `${siteConfig.name}에 대해 알아보세요.`,
}

const features = [
  {
    title: "Next.js 16",
    description: "App Router 기반의 최신 Next.js 프레임워크",
  },
  {
    title: "TypeScript",
    description: "타입 안전성을 갖춘 개발 환경",
  },
  {
    title: "Tailwind CSS v4",
    description: "유틸리티 기반의 빠른 UI 스타일링",
  },
  {
    title: "shadcn/ui",
    description: "접근성을 고려한 재사용 가능한 UI 컴포넌트",
  },
  {
    title: "Zustand",
    description: "간결하고 직관적인 전역 상태 관리",
  },
  {
    title: "React Hook Form + Zod",
    description: "타입 안전한 폼 검증",
  },
]

export default function AboutPage() {
  return (
    <Container>
      <div className="py-16 md:py-24">
        {/* 헤더 섹션 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.name} 소개
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {siteConfig.description}. 모던 웹 개발에 필요한 핵심 기술 스택을
            미리 구성하여 빠르게 프로젝트를 시작할 수 있습니다.
          </p>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            포함된 기술 스택
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-6 text-card-foreground"
              >
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 시작하기 안내 */}
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-3 text-xl font-semibold">바로 시작하기</h2>
          <p className="text-muted-foreground">
            이 스타터킷을 클론하여 프로젝트에 맞게 커스터마이징하세요.
            <br />
            자세한 사용 방법은{" "}
            <a href="/docs" className="underline underline-offset-4 hover:text-foreground">
              문서 페이지
            </a>
            를 참고하세요.
          </p>
        </div>
      </div>
    </Container>
  )
}
