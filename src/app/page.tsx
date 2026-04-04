import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site-config"

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/docs">시작하기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
