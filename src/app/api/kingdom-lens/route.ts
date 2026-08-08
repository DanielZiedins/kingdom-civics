import { NextResponse } from "next/server";
import { z } from "zod";
import type { LensResponse } from "@/lib/ai/constitution";

const requestSchema = z.object({
  question: z.string().trim().min(3).max(1000),
  jurisdiction: z.string().trim().max(120).optional(),
});

const records = {
  authority: {
    answer: "In the Harbor City demo charter, the mayor chairs council, represents the city, and helps set priorities. Council as a whole approves bylaws, taxation, and the annual budget. The mayor cannot enact those decisions alone.",
    principles: ["Limits of authority", "Accountability", "Servant leadership"],
    scripture: [{ reference: "Mark 10:42–45", application: "Authority should be exercised as service rather than domination." }],
    unknowns: ["Emergency powers and appointment rules vary by jurisdiction and require a current charter review."],
  },
  housing: {
    answer: "The demo evidence shows that Elena Moreno supported a zoning and supportive-housing package through a recorded council vote. Marcus Cole has criticized its cost controls but has not published a complete alternative. This describes the record; it is not an endorsement.",
    principles: ["Human dignity", "Care for vulnerable people", "Wise stewardship"],
    scripture: [{ reference: "Proverbs 31:8–9", application: "Public judgment should attend to people whose interests can be overlooked." }],
    unknowns: ["Cole’s preferred implementation model", "Independent outcome data for the adopted program"],
  },
  justice: {
    answer: "Scripture presents justice alongside truth, impartiality, mercy, due process, and special concern for people vulnerable to exploitation. These principles constrain Christian reasoning, but they do not produce one automatic policy program.",
    principles: ["Justice", "Human dignity", "Impartiality", "Mercy"],
    scripture: [
      { reference: "Micah 6:8", application: "Justice, mercy, and humility belong together." },
      { reference: "James 2:1–9", application: "Partiality is incompatible with neighbor love." },
    ],
    unknowns: ["The question does not identify a specific policy or jurisdiction."],
  },
} as const;

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Ask a question between 3 and 1,000 characters." }, { status: 400 });
  }

  const normalized = parsed.data.question.toLowerCase();
  const key = normalized.includes("housing") || normalized.includes("compare")
    ? "housing"
    : normalized.includes("justice") || normalized.includes("scripture")
      ? "justice"
      : "authority";
  const record = records[key];

  const response: LensResponse = {
    answer: record.answer,
    facts: [{ claim: record.answer, sourceIds: ["demo-charter", "demo-record"] }],
    sources: [
      { id: "demo-charter", title: "Harbor City Charter (fictional demo)", publisher: "Harbor City", url: "/trust", tier: 1 },
      { id: "demo-record", title: "Council Record 2026-14 (fictional demo)", publisher: "Harbor City Council", url: "/trust", tier: 1 },
    ],
    biblicalPrinciples: [...record.principles],
    scripture: [...record.scripture],
    interpretations: ["Kingdom Civics transparent biblical-framework methodology"],
    uncertainties: [...record.unknowns],
    counterpoints: ["Policy effectiveness and institutional competence require evidence beyond moral intent."],
    lastVerified: "2026-08-06",
    confidence: key === "housing" ? "moderate" : "strong",
    disclaimer: "Fictional demonstration data. This answer informs and documents; it does not endorse a candidate.",
  };

  return NextResponse.json(response, {
    headers: { "Cache-Control": "no-store" },
  });
}
