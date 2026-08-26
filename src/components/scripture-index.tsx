"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { CopyVerse } from "@/components/copy-verse";
import { FaqSection } from "@/components/seo/faq-section";
import { civicScriptures, scriptureAnchor } from "@/lib/content/scripture";
import { pageFaqs } from "@/lib/seo/faqs";

export function ScriptureIndex() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return civicScriptures;
    return civicScriptures.filter((item) => {
      const hay = `${item.ref} ${item.text} ${item.application} ${item.keywords.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <div className="scripture-index">
      <p className="find-reps-intro">
        A working index of passages Christians often ask about when they think of government, voting, prayer, and public life.
        These are starting points for discipleship—not proof-texts for a party.
      </p>
      <label className="scripture-search">
        <Search size={16} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search verses, themes, or keywords…"
          aria-label="Search scripture index"
        />
      </label>
      <p className="scripture-count">{filtered.length} of {civicScriptures.length} passages</p>
      <div className="scripture-index-grid">
        {filtered.map((item) => (
          <article className="scripture-index-card" key={item.ref} id={scriptureAnchor(item.ref)}>
            <BookOpen size={18} />
            <small>SCRIPTURE</small>
            <h3>{item.ref}</h3>
            <blockquote>&ldquo;{item.text}&rdquo;</blockquote>
            <p>{item.application}</p>
            <div className="scripture-card-actions">
              <CopyVerse text={item.text} refLabel={item.ref} />
              <Link href={item.related} className="text-link">
                Related resource <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="scripture-empty">No passages matched. Try “justice,” “pray,” or a book name like Romans.</p>
      )}
      <div className="stack-actions">
        <Link href="/kingdom-lens?q=What%20does%20the%20Bible%20say%20about%20government" className="button button-navy">
          Ask Kingdom Lens
        </Link>
        <Link href="/biblical-principles" className="button button-ghost">Biblical principles</Link>
        <Link href="/pray" className="text-link">Pray these passages <ArrowRight size={14} /></Link>
      </div>
      <FaqSection
        faqs={pageFaqs.scripture ?? []}
        title="Bible and civic life FAQ"
        description="Straight answers to common searches about Scripture and government."
      />
    </div>
  );
}
