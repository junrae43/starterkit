import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Container } from "@/components/layout/container"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center gap-4">
          <Logo />
          <MainNav />
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
