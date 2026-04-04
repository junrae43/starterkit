import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"
import { footerNav } from "@/config/nav"

export function SiteFooter() {
  return (
    <footer>
      <Separator />
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-4">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
