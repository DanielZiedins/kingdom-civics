import type { MetadataRoute } from "next";
import { hamiltonMeta } from "@/lib/hamilton";
import { allSitemapEntries } from "@/lib/seo/routes";
import { absoluteUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(hamiltonMeta.lastVerified);

  return allSitemapEntries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
