import Link from "next/link";
import { Sparkles } from "lucide-react";

const prompts = [
  "What does the Bible say about government?",
  "When is Hamilton's municipal election?",
  "How should Christians vote with a clear conscience?",
  "How do I find who represents me?",
  "How should our church talk about politics?",
  "How do I pray for an election?",
];

export function LensPrompts() {
  return (
    <div className="lens-prompts">
      <small><Sparkles size={14} /> TRY THESE QUESTIONS</small>
      <div className="lens-prompt-row">
        {prompts.map((q) => (
          <Link key={q} href={`/kingdom-lens?q=${encodeURIComponent(q)}`} className="lens-prompt">
            {q}
          </Link>
        ))}
      </div>
    </div>
  );
}
