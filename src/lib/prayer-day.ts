import { prayerPrompts } from "@/lib/data";

export function getPrayerOfTheDay(date = new Date()) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const now = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const dayOfYear = Math.floor((now - start) / 86400000);
  const index = dayOfYear % prayerPrompts.length;
  const [title, text, scripture] = prayerPrompts[index];
  return { title, text, scripture, index };
}
