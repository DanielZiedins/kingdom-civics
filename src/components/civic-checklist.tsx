"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Circle } from "lucide-react";

const STORAGE_KEY = "kingdom-civics-checklist";

const items = [
  { id: "ward", label: "Know who represents you locally", href: "/find-representatives" },
  { id: "start", label: "Walk the five-step start path", href: "/start" },
  { id: "pray", label: "Pray for a leader this week", href: "/pray" },
  { id: "learn", label: "Read one civic lesson", href: "/learn" },
  { id: "lens", label: "Ask Kingdom Lens a real question", href: "/kingdom-lens" },
  { id: "scripture", label: "Read one civic Scripture", href: "/scripture" },
  { id: "election", label: "Prepare for the municipal election", href: "/elections" },
  { id: "serve", label: "Explore a serve pathway step", href: "/serve" },
  { id: "run", label: "Consider whether to run—or support someone who should", href: "/learn/consider-running" },
] as const;

type Saved = Record<string, boolean>;

function readSaved(): Saved {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as Saved;
  } catch {
    return {};
  }
}

export function CivicChecklist({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState<Saved>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDone(readSaved());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done, ready]);

  const completed = items.filter((item) => done[item.id]).length;

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className={`civic-checklist ${compact ? "civic-checklist-compact" : ""}`}>
      <div className="civic-checklist-head">
        <div>
          <small className="eyebrow gold-text-dark">FAITHFUL CIVIC RHYTHM</small>
          <h3>Your Kingdom Civics checklist</h3>
          <p>Simple practices that build discernment over time—saved on this device.</p>
        </div>
        <strong>{completed}/{items.length}</strong>
      </div>
      <ul>
        {items.map((item) => {
          const checked = Boolean(done[item.id]);
          return (
            <li key={item.id} className={checked ? "done" : ""}>
              <button type="button" onClick={() => toggle(item.id)} aria-pressed={checked} aria-label={checked ? `Unmark ${item.label}` : `Mark ${item.label}`}>
                {checked ? <Check size={16} /> : <Circle size={16} />}
              </button>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
