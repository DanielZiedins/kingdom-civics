import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("Kingdom Lens constitution prohibits core political harms", async () => {
  const source = await readFile(new URL("src/lib/ai/constitution.ts", root), "utf8");
  assert.match(source, /Never fabricate a candidate position/);
  assert.match(source, /Never claim a candidate has God’s endorsement/);
});

test("homepage promotes Hamilton live data and Christian engagement", async () => {
  const source = await readFile(new URL("src/app/page.tsx", root), "utf8");
  assert.match(source, /Hamilton/i);
  assert.match(source, /WhyEngageSection/);
  assert.match(source, /Jeremiah 29:7/);
  assert.match(source, /DiscernLeadersSection/);
  assert.match(source, /ConsiderRunningSection/);
  assert.doesNotMatch(source, /LeaderCards/);
  assert.doesNotMatch(source, /Meet your leaders/);
});

test("consider-running learn article exists", async () => {
  const source = await readFile(new URL("src/lib/content/learn.ts", root), "utf8");
  assert.match(source, /consider-running/);
  assert.match(source, /Should Christians Consider Running/);
});

test("Hamilton officials include mayor and councillors", async () => {
  const source = await readFile(new URL("src/lib/hamilton.ts", root), "utf8");
  assert.match(source, /Andrea Horwath/);
  assert.match(source, /hamiltonCouncillors/);
  assert.match(source, /2026-10-26/);
});

test("Kingdom Lens API route uses answer engine", async () => {
  const source = await readFile(new URL("src/app/api/kingdom-lens/route.ts", root), "utf8");
  assert.match(source, /answerKingdomLens/);
  assert.match(source, /citySlug/);
});

test("footer credits Daniel Ziedins.Design", async () => {
  const source = await readFile(new URL("src/components/site-shell.tsx", root), "utf8");
  assert.match(source, /danielziedins\.design/i);
  assert.match(source, /Daniel Ziedins\.Design/);
});

test("Kingdom Lens API accepts global city context", async () => {
  const source = await readFile(new URL("src/app/api/kingdom-lens/route.ts", root), "utf8");
  assert.match(source, /citySlug/);
  assert.match(source, /answerKingdomLens/);
});

test("jurisdiction registry includes live and coming soon cities", async () => {
  const source = await readFile(new URL("src/lib/jurisdictions/registry.ts", root), "utf8");
  assert.match(source, /hamilton-on/);
  assert.match(source, /coming_soon/);
  assert.match(source, /getLiveCities/);
});

test("AI engine includes global civic knowledge", async () => {
  const source = await readFile(new URL("src/lib/ai/engine.ts", root), "utf8");
  assert.match(source, /globalChunks/);
  assert.match(source, /why-christians-engage/);
  assert.match(source, /levels-of-government/);
});
