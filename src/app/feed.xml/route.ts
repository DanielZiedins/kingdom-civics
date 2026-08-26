import { issueGuidesContent } from "@/lib/content/issues";
import { learnArticles } from "@/lib/content/learn";
import { principles } from "@/lib/data";
import { SITE_NAME, absoluteUrl } from "@/lib/seo/site";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = [
    ...learnArticles.map((article) => ({
      title: article.title,
      description: article.description,
      path: `/learn/${article.slug}`,
      category: article.category,
    })),
    ...issueGuidesContent.map((guide) => ({
      title: guide.title,
      description: guide.description,
      path: `/issues/${guide.slug}`,
      category: "Issue guide",
    })),
    ...principles.map((principle) => ({
      title: principle.name,
      description: principle.summary,
      path: `/biblical-principles/${principle.slug}`,
      category: "Biblical principle",
    })),
    {
      title: "Civic education for churches",
      description: "A free four-week church kit for civic discipleship without partisan pulpits.",
      path: "/for-churches",
      category: "Church",
    },
    {
      title: "Find who represents you",
      description: "Official government lookup tools for MPs, representatives, and councillors.",
      path: "/find-representatives",
      category: "Leaders",
    },
    {
      title: "Start here — Christian civic discipleship",
      description: "A five-step path: learn, find representatives, pray, discern, and serve.",
      path: "/start",
      category: "Start",
    },
    {
      title: "Bible verses about government and public life",
      description: "Jeremiah 29:7, 1 Timothy 2, Micah 6:8, Romans 13, and more—for civic discipleship.",
      path: "/scripture",
      category: "Scripture",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${absoluteUrl("/")}</link>
    <description>Christian civic education — learn articles, issue guides, and biblical principles for public life.</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${absoluteUrl(item.path)}</link>
      <description>${escapeXml(item.description)}</description>
      <guid isPermaLink="true">${absoluteUrl(item.path)}</guid>
      <category>${escapeXml(item.category)}</category>
      <pubDate>Sat, 15 Aug 2026 12:00:00 GMT</pubDate>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
