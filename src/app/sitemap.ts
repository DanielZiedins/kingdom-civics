import type { MetadataRoute } from "next";
import { allSitemapEntries } from "@/lib/seo/routes";
import { absoluteUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-24");

  return allSitemapEntries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
