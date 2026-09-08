import { ShareButton } from "@/components/share-button";
import { CiteThis } from "@/components/cite-this";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { absoluteUrl } from "@/lib/seo/site";

type JsonLdData = Record<string, unknown> | Array<Record<string, unknown>>;

export function InnerPageShell({
  eyebrow,
  title,
  description,
  path,
  jsonLd,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  jsonLd: JsonLdData;
  breadcrumbs: Array<{ label: string; href?: string }>;
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content" className="inner-page" tabIndex={-1}>
        <section className="page-hero">
          <div className="page-width">
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow gold-text">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="page-hero-tools">
              <ShareButton title={title} text={description} url={absoluteUrl(path)} />
              <CiteThis title={title} path={path} />
            </div>
          </div>
        </section>
        <section className="page-body">
          <div className="page-width">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
