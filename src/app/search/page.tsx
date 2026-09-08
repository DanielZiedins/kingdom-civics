import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { GlobalSearch } from "@/components/home-sections";
import { getPageMetadata, getPageSeo } from "@/lib/seo/pages";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = getPageMetadata("search");

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchRoute({ searchParams }: Props) {
  const query = await searchParams;
  const seo = getPageSeo("search");
  return (
    <InnerPageShell
      eyebrow={seo.eyebrow}
      title={seo.title}
      description={seo.description}
      path={seo.path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Search", href: "/search" },
      ]}
      jsonLd={webPageSchema({ title: seo.title, description: seo.description, path: seo.path })}
    >
      <GlobalSearch initialQuery={query.q ?? ""} />
    </InnerPageShell>
  );
}
