import Link from "next/link";
import { ArrowRight, List } from "lucide-react";
import { CREATOR } from "@/lib/seo/site";
import { issueGuidesContent } from "@/lib/content/issues";
import { learnArticles } from "@/lib/content/learn";
import { LessonComplete } from "@/components/lesson-complete";
import { ReadingProgress } from "@/components/reading-progress";

export type ArticleSection = { heading: string; body: string };
export type RelatedCard = { href: string; title: string; description: string; tag: string };

function toId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function defaultRelated(slug: string | undefined, principles: string[] | undefined): RelatedCard[] {
  const article = slug ? learnArticles.find((item) => item.slug === slug) : undefined;
  const linked = (article?.relatedSlugs ?? [])
    .map((relatedSlug) => learnArticles.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof learnArticles)[number] => Boolean(item));
  const sameCategory = article
    ? learnArticles.filter((item) => item.slug !== slug && item.category === article.category)
    : [];
  const relatedLearn = [...linked, ...sameCategory, ...learnArticles.filter((item) => item.slug !== slug)]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.slug === item.slug) === index)
    .slice(0, 2);
  const relatedIssues = [...issueGuidesContent]
    .sort((a, b) => {
      const overlap = (guide: (typeof issueGuidesContent)[number]) =>
        guide.principles.filter((principle) => principles?.includes(principle)).length;
      return overlap(b) - overlap(a);
    })
    .slice(0, 2);

  return [
    ...relatedLearn.map((item) => ({
      href: `/learn/${item.slug}`,
      title: item.title,
      description: item.description,
      tag: "LEARN",
    })),
    ...relatedIssues.map((item) => ({
      href: `/issues/${item.slug}`,
      title: item.title,
      description: item.description,
      tag: "ISSUE",
    })),
  ];
}

export function ArticleBody({
  sections,
  scripture,
  minutes,
  slug,
  principles,
  kind = "learn",
  related,
}: {
  sections: ArticleSection[];
  scripture: string;
  minutes?: number;
  slug?: string;
  principles?: string[];
  kind?: "learn" | "principle" | "issue";
  related?: RelatedCard[];
}) {
  const cards = related ?? defaultRelated(slug, principles);
  const words = sections.reduce((count, section) => count + `${section.heading} ${section.body}`.split(/\s+/).length, 0);
  const readMinutes = minutes ?? Math.max(2, Math.round(words / 220));

  return (
    <>
      <ReadingProgress />
      <div className="article-layout">
        <aside className="article-toc" aria-label="On this page">
          <strong><List size={14} /> On this page</strong>
          <nav>
            {sections.map((section) => (
              <a key={section.heading} href={`#${toId(section.heading)}`}>{section.heading}</a>
            ))}
          </nav>
        </aside>
        <article className="article-body">
          <details className="article-toc-mobile">
            <summary>On this page</summary>
            <nav>
              {sections.map((section) => (
                <a key={section.heading} href={`#${toId(section.heading)}`}>{section.heading}</a>
              ))}
            </nav>
          </details>
          <div className="article-scripture">
            <small>SCRIPTURE · {readMinutes} MIN READ</small>
            <span>{scripture}</span>
          </div>
          <p className="article-byline">
            By <a href={CREATOR.url} target="_blank" rel="author noopener noreferrer">{CREATOR.name}</a>
          </p>
          {sections.map((section) => (
            <section key={section.heading} id={toId(section.heading)}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="article-discuss">
            <h3>Discuss together</h3>
            <ol>
              {sections.slice(0, 3).map((section) => (
                <li key={section.heading}>How does “{section.heading}” apply where God has placed you?</li>
              ))}
              <li>What would it look like to pray 1 Timothy 2:1–2 for a named office this week?</li>
            </ol>
            <Link href="/for-churches" className="text-link">Church &amp; small-group kit <ArrowRight size={14} /></Link>
          </div>
          <div className="article-cta">
            <Link href="/kingdom-lens" className="button button-navy">
              Ask Kingdom Lens <ArrowRight size={15} />
            </Link>
            {slug && kind === "learn" && <LessonComplete slug={slug} />}
            <Link href="/biblical-principles" className="text-link">
              Explore biblical principles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="article-related">
            <h3>Keep learning</h3>
            <div className="article-related-grid">
              {cards.map((card) => (
                <Link key={card.href} href={card.href} className="content-card">
                  <small>{card.tag}</small>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
