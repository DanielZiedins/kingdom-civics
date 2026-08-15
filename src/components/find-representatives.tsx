"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Landmark } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { lookupCountries, representativeLookups } from "@/lib/content/lookups";
import { pageFaqs } from "@/lib/seo/faqs";

export function FindRepresentatives() {
  const [country, setCountry] = useState<(typeof lookupCountries)[number]>("All");

  const tools = useMemo(
    () => (country === "All" ? representativeLookups : representativeLookups.filter((t) => t.country === country)),
    [country],
  );

  return (
    <div className="find-reps">
      <p className="find-reps-intro">
        Always use official government lookup tools—not campaign sites, social posts, or unofficial lists.
        Then pray for those names, learn what the office actually controls, and discern with Kingdom principles.
      </p>
      <div className="leaders-filters" role="tablist" aria-label="Filter by country">
        {lookupCountries.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={country === c}
            className={country === c ? "active" : ""}
            onClick={() => setCountry(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="find-reps-grid">
        {tools.map((tool) =>
          tool.url.startsWith("/") ? (
            <Link key={tool.url + tool.name} href={tool.url} className="content-card find-reps-card">
              <Landmark size={18} />
              <small>{tool.country} · {tool.office}</small>
              <h3>{tool.name}</h3>
              <p>{tool.note}</p>
              <span className="text-link">Open tool <ArrowRight size={14} /></span>
            </Link>
          ) : (
            <a key={tool.url + tool.name} href={tool.url} className="content-card find-reps-card" target="_blank" rel="noopener noreferrer">
              <Landmark size={18} />
              <small>{tool.country} · {tool.office}</small>
              <h3>{tool.name}</h3>
              <p>{tool.note}</p>
              <span className="text-link">Open official tool <ExternalLink size={14} /></span>
            </a>
          ),
        )}
      </div>
      <div className="stack-actions">
        <Link href="/leaders" className="button button-navy">Hamilton live directory</Link>
        <Link href="/kingdom-lens?q=How%20do%20I%20find%20who%20represents%20me" className="button button-ghost">Ask Kingdom Lens</Link>
        <Link href="/pray" className="text-link">Pray for them <ArrowRight size={14} /></Link>
      </div>
      <FaqSection
        faqs={pageFaqs["find-representatives"] ?? []}
        title="Finding your representatives"
        description="Official tools first—then prayer, learning, and discernment."
      />
    </div>
  );
}
