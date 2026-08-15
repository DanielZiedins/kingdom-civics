"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { glossaryTerms } from "@/lib/content/glossary";

function toId(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function GlossaryExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
    );
  }, [query]);

  const letters = useMemo(() => {
    const set = new Set(filtered.map((t) => t.term[0]?.toUpperCase() ?? ""));
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((l) => set.has(l));
  }, [filtered]);

  return (
    <div className="glossary-page">
      <p className="glossary-intro">
        Plain-language civic terms for Christians learning public life. Definitions are educational—not legal advice.
      </p>
      <div className="glossary-search">
        <Search size={16} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter terms (ward, bylaw, riding…)"
          aria-label="Filter glossary"
        />
      </div>
      {letters.length > 0 && (
        <nav className="glossary-letters" aria-label="Jump to letter">
          {letters.map((l) => (
            <a key={l} href={`#glossary-${l}`}>{l}</a>
          ))}
        </nav>
      )}
      <div className="glossary-grid">
        {filtered.map((item, i) => {
          const letter = item.term[0]?.toUpperCase() ?? "";
          const prev = filtered[i - 1]?.term[0]?.toUpperCase();
          const showLetter = letter !== prev;
          return (
            <article
              className="glossary-card"
              key={item.term}
              id={toId(item.term)}
              {...(showLetter ? { "data-letter": letter } : {})}
            >
              {showLetter && <span className="glossary-letter-mark" id={`glossary-${letter}`}>{letter}</span>}
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
              {item.related && (
                <Link href={item.related} className="text-link">
                  Related lesson <ArrowRight size={14} />
                </Link>
              )}
            </article>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <p className="glossary-empty">No terms match that filter. Try “ward”, “parliament”, or “nomination”.</p>
      )}
    </div>
  );
}
