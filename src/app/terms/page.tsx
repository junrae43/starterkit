import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "이용약관",
}

export default function TermsPage() {
  return (
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">이용약관</h1>
          <p className="mb-10 text-sm text-muted-foreground">
            최종 수정일: {new Date().toLocaleDateString("ko-KR")}
          </p>

          {/* 스타터킷 안내 배너 */}
          <div className="mb-10 rounded-lg border border-dashed bg-muted/40 p-4 text-sm text-muted-foreground">
            ⚠️ 이 페이지는 스타터킷 템플릿입니다. 실제 서비스에 맞게 내용을
            교체하세요.
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold">제1조 (목적)</h2>
              <p className="mt-2 text-muted-foreground">
                본 약관은 {siteConfig.name}(이하 &quot;서비스&quot;)의 이용과
                관련하여 서비스 제공자와 이용자 간의 권리, 의무 및 책임사항을
                규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">제2조 (정의)</h2>
              <p className="mt-2 text-muted-foreground">
                &quot;서비스&quot;란 서비스 제공자가 제공하는 모든 온라인
                서비스를 의미합니다. &quot;이용자&quot;란 본 약관에 동의하고
                서비스를 이용하는 자를 의미합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">제3조 (약관의 효력)</h2>
              <p className="mt-2 text-muted-foreground">
                본 약관은 서비스를 이용하는 모든 이용자에 대하여 효력이
                있습니다. 약관의 내용은 서비스 화면에 게시하거나 기타의
                방법으로 이용자에게 공지하고, 이에 동의한 이용자가 서비스에
                가입함으로써 효력이 발생합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">제4조 (약관의 변경)</h2>
              <p className="mt-2 text-muted-foreground">
                서비스 제공자는 필요한 경우 약관을 변경할 수 있으며, 변경된
                약관은 서비스 내 공지를 통해 이용자에게 고지합니다. 변경된
                약관은 공지된 날로부터 효력이 발생합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">제5조 (면책조항)</h2>
              <p className="mt-2 text-muted-foreground">
                서비스 제공자는 천재지변, 전쟁, 불가항력적인 사유로 인하여
                서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
                면제됩니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  )
}
