"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ReadingProgress } from "@/components/reading-progress";

const LEARN_KEY = "kingdom-civics-my-civics";

export function ArticleBody({
  scripture,
  sections,
  slug,
}: {
  scripture: string;
  sections: Array<{ heading: string; body: string }>;
  slug?: string;
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!slug) return;
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
  }, [slug]);

  function markComplete() {
    if (!slug) return;
    try {
      const raw = window.localStorage.getItem(LEARN_KEY);
      const parsed = raw ? JSON.parse(raw) as { completedLearn?: string[]; city?: string; prayedForMayor?: boolean } : {};
      const completedLearn = [...new Set([...(parsed.completedLearn ?? []), slug])];
      window.localStorage.setItem(LEARN_KEY, JSON.stringify({ ...parsed, completedLearn }));
      setDone(true);
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      <ReadingProgress />
      <article className="article-body">
        <div className="article-scripture">
          <small>SCRIPTURE</small>
          <span>{scripture}</span>
        </div>
        {sections.map((section) => {
          const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <section key={section.heading} id={id}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          );
        })}
        <div className="article-cta">
          <Link href="/kingdom-lens" className="button button-navy">
            Ask Kingdom Lens <ArrowRight size={15} />
          </Link>
          {slug && (
            <button type="button" className="button button-ghost" onClick={markComplete} disabled={done}>
              {done ? <><Check size={15} /> Saved to My Civics</> : "Mark lesson complete"}
            </button>
          )}
          <Link href="/biblical-principles" className="text-link">
            Explore biblical principles <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </>
  );
}
