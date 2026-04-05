import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "개인정보처리방침",
}

export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            개인정보처리방침
          </h1>
          <p className="mb-10 text-sm text-muted-foreground">
            최종 수정일: {new Date().toLocaleDateString("ko-KR")}
          </p>

          {/* 스타터킷 안내 배너 */}
          <div className="mb-10 rounded-lg border border-dashed bg-muted/40 p-4 text-sm text-muted-foreground">
            ⚠️ 이 페이지는 스타터킷 템플릿입니다. 실제 서비스에 맞게 내용을
            교체하세요.
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold">1. 수집하는 개인정보</h2>
              <p className="mt-2 text-muted-foreground">
                {siteConfig.name}은(는) 서비스 제공을 위해 필요한 최소한의
                개인정보를 수집합니다. 수집하는 항목과 목적은 서비스에 따라
                다를 수 있으며, 수집 시점에 이용자에게 명시합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">2. 개인정보의 이용 목적</h2>
              <p className="mt-2 text-muted-foreground">
                수집된 개인정보는 서비스 제공, 고객 지원, 서비스 개선 등의
                목적으로 이용되며, 수집 목적 이외의 용도로는 사용하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                3. 개인정보의 보유 및 이용 기간
              </h2>
              <p className="mt-2 text-muted-foreground">
                개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단,
                관련 법령에 따라 일정 기간 보존이 필요한 경우 해당 기간 동안
                안전하게 보관합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">4. 개인정보 보호 책임자</h2>
              <p className="mt-2 text-muted-foreground">
                개인정보 처리와 관련한 문의사항은 아래 연락처로 문의하시기
                바랍니다.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>이메일: privacy@example.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Container>
  )
}
