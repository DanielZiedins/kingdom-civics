import { NextResponse } from "next/server";
import { z } from "zod";
import { answerKingdomLens } from "@/lib/ai/engine";

const requestSchema = z.object({
  question: z.string().trim().min(3).max(1000),
  jurisdiction: z.string().trim().max(120).optional(),
  citySlug: z.string().trim().max(80).optional(),
});

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Ask a question between 3 and 1,000 characters." }, { status: 400 });
  }

  const response = answerKingdomLens(parsed.data.question, {
    jurisdiction: parsed.data.jurisdiction,
    citySlug: parsed.data.citySlug,
  });

  return NextResponse.json(response, { headers: { "Cache-Control": "no-store" } });
}
