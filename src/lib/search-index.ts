import { learnArticles } from "@/lib/content/learn";
import { issueGuidesContent } from "@/lib/content/issues";
import { principles } from "@/lib/data";
import { hamiltonOfficials } from "@/lib/hamilton";
import { getAllCities } from "@/lib/jurisdictions/registry";

export type SearchHit = {
  title: string;
  href: string;
  keywords: string;
  category: string;
};

export const searchIndex: SearchHit[] = [
  { title: "Home — Kingdom Civics", href: "/", keywords: "home kingdom civics global", category: "Site" },
  { title: "Why Christians engage in civic life", href: "/why-engage", keywords: "christian engage government culture jeremiah vote", category: "Engage" },
  { title: "Civic glossary", href: "/glossary", keywords: "glossary ward bylaw riding nomination terms", category: "Learn" },
  { title: "Hamilton leaders directory", href: "/leaders", keywords: "mayor councillor mp mpp hamilton leaders", category: "Leaders" },
  { title: "Hamilton 2026 municipal election", href: "/elections", keywords: "election vote 2026 october hamilton ballot", category: "Elections" },
  { title: "Ask Kingdom Lens", href: "/kingdom-lens", keywords: "ai lens ask question scripture research", category: "AI" },
  { title: "Pray for government leaders", href: "/pray", keywords: "pray prayer leaders timothy wisdom", category: "Pray" },
  { title: "Serve in public life", href: "/serve", keywords: "serve volunteer board run office", category: "Serve" },
  { title: "Trust Center methodology", href: "/trust", keywords: "trust sources methodology corrections", category: "Trust" },
  { title: "About Kingdom Civics", href: "/about", keywords: "about mission thy kingdom network", category: "About" },
  { title: "Privacy policy", href: "/privacy", keywords: "privacy data location", category: "Legal" },
  { title: "Compare candidates framework", href: "/compare", keywords: "compare candidates evidence", category: "Compare" },
  ...learnArticles.map((a) => ({
    title: a.title,
    href: `/learn/${a.slug}`,
    keywords: `${a.title} ${a.category} learn civic education`.toLowerCase(),
    category: "Learn",
  })),
  ...issueGuidesContent.map((g) => ({
    title: g.title,
    href: `/issues/${g.slug}`,
    keywords: `${g.title} ${g.principles.join(" ")} issue policy`.toLowerCase(),
    category: "Issues",
  })),
  ...principles.map((p) => ({
    title: p.name,
    href: `/biblical-principles/${p.slug}`,
    keywords: `${p.name} ${p.scripture} biblical principle`.toLowerCase(),
    category: "Principles",
  })),
  ...getAllCities().map((c) => ({
    title: `${c.name}, ${c.region}`,
    href: `/cities/${c.slug}`,
    keywords: `${c.name} ${c.region} ${c.country} city hub`.toLowerCase(),
    category: "Cities",
  })),
  ...hamiltonOfficials.map((o) => ({
    title: `${o.name} — ${o.office}${o.ward ? ` · ${o.ward}` : ""}`,
    href: `/leaders/${o.slug}`,
    keywords: `${o.name} ${o.office} ${o.ward ?? ""} ${o.party ?? ""} hamilton`.toLowerCase(),
    category: "Leaders",
  })),
];

export function searchSite(query: string, limit = 10): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return searchIndex.slice(0, limit);
  const terms = q.split(/\s+/).filter(Boolean);
  return searchIndex
    .map((item) => {
      const hay = `${item.title} ${item.keywords} ${item.category}`.toLowerCase();
      const score = terms.reduce((sum, term) => sum + (hay.includes(term) ? 1 : 0), 0);
      return { item, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((row) => row.item);
}
