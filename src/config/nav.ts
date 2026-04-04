export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "소개", href: "/about" },
  { title: "문서", href: "/docs" },
]

export const footerNav: NavItem[] = [
  { title: "GitHub", href: "https://github.com", external: true },
  { title: "개인정보처리방침", href: "/privacy" },
  { title: "이용약관", href: "/terms" },
]
