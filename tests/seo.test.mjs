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
