import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity"
    >
      <span className="text-lg">{siteConfig.name}</span>
    </Link>
  )
}
