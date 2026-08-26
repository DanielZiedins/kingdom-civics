import Link from "next/link";
import { ArrowRight, Sunrise } from "lucide-react";
import { getRhythmOfTheDay } from "@/lib/content/rhythm";

export function CivicRhythm() {
  const today = getRhythmOfTheDay();
  return (
    <aside className="civic-rhythm" aria-label="This week's civic rhythm">
      <Sunrise size={22} />
      <div>
        <small>{today.day.toUpperCase()} · FAITHFUL CIVIC RHYTHM</small>
        <strong>{today.title}</strong>
        <p>{today.body}</p>
        <Link href={today.href} className="text-link">
          {today.cta} <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
