import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("Kingdom Lens constitution prohibits core political harms", async () => {
  const source = await readFile(new URL("src/lib/ai/constitution.ts", root), "utf8");
  assert.match(source, /Never fabricate a candidate position/);
  assert.match(source, /Never claim a candidate has God’s endorsement/);
  assert.match(source, /never equate Christianity with a political party/i);
  assert.match(source, /never conceal relevant counter-evidence/i);
});

test("homepage clearly labels trust posture and fictional demo", async () => {
  const source = await readFile(new URL("src/app/page.tsx", root), "utf8");
  assert.match(source, /Kingdom first/);
  assert.match(source, /fictional city/i);
  assert.match(source, /See the sources behind every conclusion/);
});

test("database defaults sensitive assessments to human review", async () => {
  const migration = await readFile(new URL("supabase/migrations/0001_foundation.sql", root), "utf8");
  assert.match(migration, /review_state public\.review_state not null default 'needs_review'/);
  assert.match(migration, /alter table public\.evidence enable row level security/);
  assert.match(migration, /verified evidence is public/);
});
