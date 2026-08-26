import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { startSteps } from "@/lib/content/start";

export function StartPath({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`start-path ${compact ? "start-path-compact" : ""}`}>
      {startSteps.map((step) => (
        <li key={step.n}>
          <Link href={step.href} className="start-step">
            <span className="start-step-n">{step.n}</span>
            <span className="start-step-body">
              <small>{step.tag}</small>
              <strong>{step.title}</strong>
              <em>{step.body}</em>
            </span>
            <ArrowRight size={16} />
          </Link>
        </li>
      ))}
    </ol>
  );
}
