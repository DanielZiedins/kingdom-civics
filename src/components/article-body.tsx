"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, List } from "lucide-react";
import { ReadingProgress } from "@/components/reading-progress";
import { learnArticles } from "@/lib/content/learn";
import { issueGuidesContent } from "@/lib/content/issues";

const LEARN_KEY = "kingdom-civics-my-civics";

function toId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function ArticleBody({
  scripture,
  sections,
  slug,
  kind = "learn",
}: {
  scripture: string;
  sections: Array<{ heading: string; body: string }>;
  slug?: string;
  kind?: "learn" | "issue" | "principle";
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!slug || kind !== "learn") return;
    const t = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(LEARN_KEY);
        const parsed = raw ? JSON.parse(raw) as { completedLearn?: string[] } : {};
        setDone(Boolean(parsed.completedLearn?.includes(slug)));
      } catch {
        /* ignore */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, [slug, kind]);

  function markComplete() {
    if (!slug || kind !== "learn") return;
    try {
      const raw = window.localStorage.getItem(LEARN_KEY);
      const parsed = raw ? JSON.parse(raw) as { completedLearn?: string[] } : {};
      const completedLearn = [...new Set([...(parsed.completedLearn ?? []), slug])];
      window.localStorage.setItem(LEARN_KEY, JSON.stringify({ ...parsed, completedLearn }));
      setDone(true);
    } catch {
      /* ignore */
    }
  }

  const othersLearn = learnArticles.filter((a) => a.slug !== slug);
  const othersIssues = issueGuidesContent.filter((g) => g.slug !== slug);
  const seed = slug ? slug.split("").reduce((n, ch) => n + ch.charCodeAt(0), 0) : 0;
  const relatedLearn = othersLearn.length
    ? [othersLearn[seed % othersLearn.length], othersLearn[(seed + 3) % othersLearn.length]].filter(
        (item, i, arr) => arr.findIndex((x) => x.slug === item.slug) === i,
      ).slice(0, 2)
    : [];
  const relatedIssues = othersIssues.length
    ? [othersIssues[seed % othersIssues.length], othersIssues[(seed + 2) % othersIssues.length]].filter(
        (item, i, arr) => arr.findIndex((x) => x.slug === item.slug) === i,
      ).slice(0, 2)
    : [];

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
            <small>SCRIPTURE</small>
            <span>{scripture}</span>
          </div>
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
            {slug && kind === "learn" && (
              <button type="button" className="button button-ghost" onClick={markComplete} disabled={done}>
                {done ? <><Check size={15} /> Saved to My Civics</> : "Mark lesson complete"}
              </button>
            )}
            <Link href="/biblical-principles" className="text-link">
              Explore biblical principles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="article-related">
            <h3>Keep learning</h3>
            <div className="article-related-grid">
              {relatedLearn.map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="content-card">
                  <small>LEARN</small>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                </Link>
              ))}
              {relatedIssues.map((g) => (
                <Link key={g.slug} href={`/issues/${g.slug}`} className="content-card">
                  <small>ISSUE</small>
                  <h4>{g.title}</h4>
                  <p>{g.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
