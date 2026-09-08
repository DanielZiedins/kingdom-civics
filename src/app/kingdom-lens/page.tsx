import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { KingdomLensPage } from "@/components/kingdom-lens-page";
import { LensPrompts } from "@/components/lens-prompts";
import { FaqSection } from "@/components/seo/faq-section";
import { pageFaqs } from "@/lib/seo/faqs";
import { getPageMetadata, getPageSeo } from "@/lib/seo/pages";
import { faqPageSchema, softwareApplicationSchema, webApiSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = getPageMetadata("kingdom-lens");

type Props = { searchParams: Promise<{ q?: string }> };

export default async function KingdomLensRoute({ searchParams }: Props) {
  const query = await searchParams;
  const seo = getPageSeo("kingdom-lens");
  return (
    <InnerPageShell
      eyebrow={seo.eyebrow}
      title={seo.title}
      description={seo.description}
      path={seo.path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Kingdom Lens", href: "/kingdom-lens" },
      ]}
      jsonLd={[
        webPageSchema({ title: seo.title, description: seo.description, path: seo.path }),
        softwareApplicationSchema(),
        webApiSchema(),
        faqPageSchema(pageFaqs["kingdom-lens"] ?? []),
      ]}
    >
      <LensPrompts />
      <KingdomLensPage searchParams={query} />
      <FaqSection
        faqs={pageFaqs["kingdom-lens"] ?? []}
        title="Kingdom Lens FAQ"
        description="How this research assistant cites sources without endorsing candidates."
      />
    </InnerPageShell>
  );
}
