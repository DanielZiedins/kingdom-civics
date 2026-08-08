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
});

test("Hamilton officials include mayor and councillors", async () => {
  const source = await readFile(new URL("src/lib/hamilton.ts", root), "utf8");
  assert.match(source, /Andrea Horwath/);
  assert.match(source, /hamiltonCouncillors/);
  assert.match(source, /2026-10-26/);
});

test("Kingdom Lens API route uses Hamilton engine", async () => {
  const source = await readFile(new URL("src/app/api/kingdom-lens/route.ts", root), "utf8");
  assert.match(source, /answerKingdomLens/);
  assert.match(source, /Hamilton, ON/);
});

test("footer credits Daniel Ziedins", async () => {
  const source = await readFile(new URL("src/components/site-shell.tsx", root), "utf8");
  assert.match(source, /danielziedins\.com/i);
  assert.match(source, /Daniel Ziedins/);
});
