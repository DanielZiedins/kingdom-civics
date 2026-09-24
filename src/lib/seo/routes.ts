import { blogPosts } from "@/lib/content/blog";
import { learnArticles } from "@/lib/content/learn";
import { issueGuidesContent } from "@/lib/content/issues";
import { principles } from "@/lib/data";
import { hamiltonOfficials } from "@/lib/hamilton";
import { getAllCities } from "@/lib/jurisdictions/registry";
import { absoluteUrl } from "@/lib/seo/site";

export type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const coreRoutes: SitemapEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/why-engage", priority: 0.95, changeFrequency: "monthly" },
  { path: "/learn", priority: 0.9, changeFrequency: "weekly" },
  { path: "/issues", priority: 0.85, changeFrequency: "weekly" },
  { path: "/leaders", priority: 0.95, changeFrequency: "weekly" },
  { path: "/elections", priority: 0.95, changeFrequency: "daily" },
  { path: "/kingdom-lens", priority: 0.9, changeFrequency: "weekly" },
  { path: "/pray", priority: 0.85, changeFrequency: "monthly" },
  { path: "/serve", priority: 0.85, changeFrequency: "monthly" },
  { path: "/trust", priority: 0.8, changeFrequency: "monthly" },
  { path: "/biblical-principles", priority: 0.9, changeFrequency: "monthly" },
  { path: "/glossary", priority: 0.85, changeFrequency: "monthly" },
  { path: "/for-churches", priority: 0.9, changeFrequency: "monthly" },
  { path: "/find-representatives", priority: 0.9, changeFrequency: "monthly" },
  { path: "/scripture", priority: 0.92, changeFrequency: "monthly" },
  { path: "/start", priority: 0.95, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.88, changeFrequency: "weekly" },
  { path: "/compare", priority: 0.75, changeFrequency: "weekly" },
  { path: "/search", priority: 0.6, changeFrequency: "monthly" },
  { path: "/my-civics", priority: 0.6, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
];

export const cityRoutes: SitemapEntry[] = getAllCities().map((city) => ({
  path: `/cities/${city.slug}`,
  priority: city.status === "live" ? 0.9 : 0.7,
  changeFrequency: "weekly" as const,
}));

export const blogRoutes: SitemapEntry[] = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: 0.86,
  changeFrequency: "weekly" as const,
}));

export const learnRoutes: SitemapEntry[] = learnArticles.map((article) => ({
  path: `/learn/${article.slug}`,
  priority: 0.85,
  changeFrequency: "monthly" as const,
}));

export const issueRoutes: SitemapEntry[] = issueGuidesContent.map((guide) => ({
  path: `/issues/${guide.slug}`,
  priority: 0.8,
  changeFrequency: "monthly" as const,
}));

export const leaderRoutes: SitemapEntry[] = hamiltonOfficials.map((official) => ({
  path: `/leaders/${official.slug}`,
  priority: 0.8,
  changeFrequency: "weekly" as const,
}));

export const principleRoutes: SitemapEntry[] = principles.map((principle) => ({
  path: `/biblical-principles/${principle.slug}`,
  priority: 0.75,
  changeFrequency: "monthly" as const,
}));

export const allSitemapEntries: SitemapEntry[] = [
  ...coreRoutes,
  ...cityRoutes,
  ...leaderRoutes,
  ...principleRoutes,
  ...learnRoutes,
  ...issueRoutes,
  ...blogRoutes,
];

export function sitemapUrls(): string[] {
  return allSitemapEntries.map((entry) => absoluteUrl(entry.path));
}
