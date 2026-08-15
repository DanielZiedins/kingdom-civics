import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("sitemap includes Hamilton leaders and core routes", async () => {
  const source = await readFile(new URL("src/lib/seo/routes.ts", root), "utf8");
  assert.match(source, /\/why-engage/);
  assert.match(source, /leaderRoutes/);
  assert.match(source, /hamiltonOfficials/);
  assert.match(source, /\/biblical-principles\/\$\{principle\.slug\}/);
});

test("robots allows AI crawlers and points to sitemap", async () => {
  const source = await readFile(new URL("src/app/robots.ts", root), "utf8");
  assert.match(source, /GPTBot/);
  assert.match(source, /ClaudeBot/);
  assert.match(source, /PerplexityBot/);
  assert.match(source, /sitemap\.xml/);
});

test("llms.txt documents Hamilton facts and Kingdom Lens API", async () => {
  const llms = await readFile(new URL("public/llms.txt", root), "utf8");
  assert.match(llms, /Andrea Horwath/);
  assert.match(llms, /api\/kingdom-lens/);
  assert.match(llms, /sitemap\.xml/);
});

test("homepage exports FAQ schema and metadata", async () => {
  const source = await readFile(new URL("src/app/page.tsx", root), "utf8");
  assert.match(source, /faqPageSchema/);
  assert.match(source, /FaqSection/);
  assert.match(source, /buildPageMetadata/);
});

test("inner pages use rich SEO metadata helpers", async () => {
  const source = await readFile(new URL("src/app/[...slug]/page.tsx", root), "utf8");
  assert.match(source, /getPageMetadata/);
  assert.match(source, /personSchema/);
  assert.match(source, /Breadcrumbs/);
});

test("global FAQs target Christian civic and Hamilton queries", async () => {
  const source = await readFile(new URL("src/lib/seo/faqs.ts", root), "utf8");
  assert.match(source, /Who is the mayor of Hamilton/);
  assert.match(source, /Why should Christians engage/);
  assert.match(source, /Kingdom Lens/);
});

test("sitemap includes learn and issue article routes", async () => {
  const source = await readFile(new URL("src/lib/seo/routes.ts", root), "utf8");
  assert.match(source, /learnRoutes/);
  assert.match(source, /issueRoutes/);
  assert.match(source, /cityRoutes/);
  assert.match(source, /getAllCities/);
  assert.match(source, /\/glossary/);
});

test("learn content library has indexable articles", async () => {
  const source = await readFile(new URL("src/lib/content/learn.ts", root), "utf8");
  assert.match(source, /how-government-works/);
  assert.match(source, /hamilton-city-council/);
});

test("Kingdom Lens chat renders counterpoints and share", async () => {
  const source = await readFile(new URL("src/components/kingdom-lens-chat.tsx", root), "utf8");
  assert.match(source, /counterpoints/);
  assert.match(source, /ShareButton/);
  assert.match(source, /searchParams\.set\("q"/);
});

test("RSS feed and custom 404 exist for discoverability", async () => {
  const feed = await readFile(new URL("src/app/feed.xml/route.ts", root), "utf8");
  assert.match(feed, /learnArticles/);
  assert.match(feed, /issueGuidesContent/);
  const notFound = await readFile(new URL("src/app/not-found.tsx", root), "utf8");
  assert.match(notFound, /kingdom-lens/);
});

test("MPP profiles are included in allHamiltonLeaders", async () => {
  const source = await readFile(new URL("src/lib/data.ts", root), "utf8");
  assert.match(source, /hamiltonProvincial/);
  assert.match(source, /impactAreas[\s\S]*href:/);
});

test("About and Trust pages are real content not search stubs", async () => {
  const source = await readFile(new URL("src/app/[...slug]/page.tsx", root), "utf8");
  assert.match(source, /function AboutPage/);
  assert.match(source, /id="sources"/);
  assert.match(source, /id="corrections"/);
  assert.match(source, /function PrincipleDetailPage/);
  assert.doesNotMatch(source, /function Cards\(/);
});

test("site search index covers leaders and learn content", async () => {
  const source = await readFile(new URL("src/lib/search-index.ts", root), "utf8");
  assert.match(source, /hamiltonOfficials/);
  assert.match(source, /learnArticles/);
  assert.match(source, /export function searchSite/);
});

test("performance and a11y upgrades are present", async () => {
  const layout = await readFile(new URL("src/app/layout.tsx", root), "utf8");
  assert.match(layout, /skip-link/);
  assert.match(layout, /display: "swap"/);
  assert.doesNotMatch(layout, /Geist_Mono/);
  const config = await readFile(new URL("next.config.ts", root), "utf8");
  assert.match(config, /headers/);
  assert.match(config, /poweredByHeader: false/);
});

test("prayer of the day and civic checklist exist", async () => {
  const prayer = await readFile(new URL("src/lib/prayer-day.ts", root), "utf8");
  assert.match(prayer, /getPrayerOfTheDay/);
  const checklist = await readFile(new URL("src/components/civic-checklist.tsx", root), "utf8");
  assert.match(checklist, /Faithful civic rhythm/i);
  const lens = await readFile(new URL("src/components/kingdom-lens-chat.tsx", root), "utf8");
  assert.match(lens, /Ask a follow-up/);
});

test("command palette glossary and leaders directory ship", async () => {
  const cmdk = await readFile(new URL("src/components/command-palette.tsx", root), "utf8");
  assert.match(cmdk, /CommandPalette/);
  assert.match(cmdk, /metaKey/);
  const glossary = await readFile(new URL("src/lib/content/glossary.ts", root), "utf8");
  assert.match(glossary, /glossaryTerms/);
  assert.match(glossary, /Ward/);
  const leaders = await readFile(new URL("src/components/leaders-directory.tsx", root), "utf8");
  assert.match(leaders, /LeadersDirectory/);
  const learn = await readFile(new URL("src/lib/content/learn.ts", root), "utf8");
  assert.match(learn, /us-government/);
  const issues = await readFile(new URL("src/lib/content/issues.ts", root), "utf8");
  assert.match(issues, /justice-mercy/);
});
