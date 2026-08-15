"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonProvincial } from "@/lib/hamilton";
import { pageFaqs } from "@/lib/seo/faqs";

type Filter = "all" | "mayor" | "councillors" | "federal" | "provincial";

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All" },
  { id: "mayor", label: "Mayor" },
  { id: "councillors", label: "Councillors" },
  { id: "federal", label: "Federal MPs" },
  { id: "provincial", label: "Provincial MPPs" },
];

export function LeadersDirectory() {
  const [filter, setFilter] = useState<Filter>("all");

  const sections = useMemo(() => {
    const all = [
      { id: "mayor" as const, label: "MAYOR", items: [hamiltonMayor] },
      { id: "councillors" as const, label: `WARD COUNCILLORS · ${hamiltonCouncillors.length}`, items: hamiltonCouncillors },
      { id: "federal" as const, label: "FEDERAL MPs", items: hamiltonFederal },
      { id: "provincial" as const, label: "PROVINCIAL MPPs", items: hamiltonProvincial },
    ];
    if (filter === "all") return all;
    return all.filter((s) => s.id === filter);
  }, [filter]);

  return (
    <>
      <div className="leaders-filters" role="tablist" aria-label="Filter leaders">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={filter === f.id ? "active" : ""}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {sections.map((section) => (
        <div key={section.id}>
          <div className="leaders-section-label"><span className="eyebrow">{section.label}</span></div>
          <div className="content-grid leaders-directory-grid">
            {section.items.map((c) => (
              <Link href={`/leaders/${c.slug}`} className="content-card leader-dir-card" key={c.slug}>
                <div className={`avatar avatar-${c.tone}`}>{c.initials}</div>
                <div>
                  <small>LIVE{c.ward ? ` · ${c.ward}` : c.party ? ` · ${c.party}` : ""}</small>
                  <h3>{c.name}</h3>
                  <p>{c.office}{c.status ? ` · ${c.status}` : ""}</p>
                  <span className="text-link">View profile <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <FaqSection faqs={pageFaqs.leaders ?? []} title="Hamilton leaders FAQ" description="Common questions about Hamilton elected officials." />
    </>
  );
}
