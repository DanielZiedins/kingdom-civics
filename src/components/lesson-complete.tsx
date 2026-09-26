"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const LEARN_KEY = "kingdom-civics-my-civics";

export function LessonComplete({ slug }: { slug: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(LEARN_KEY);
        const parsed = raw ? JSON.parse(raw) as { completedLearn?: string[] } : {};
        setDone(Boolean(parsed.completedLearn?.includes(slug)));
      } catch {
        /* ignore */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, [slug]);

  function markComplete() {
    try {
      const raw = window.localStorage.getItem(LEARN_KEY);
      const parsed = raw ? JSON.parse(raw) as { completedLearn?: string[] } : {};
      const completedLearn = [...new Set([...(parsed.completedLearn ?? []), slug])];
      window.localStorage.setItem(LEARN_KEY, JSON.stringify({ ...parsed, completedLearn }));
      setDone(true);
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" className="button button-ghost" onClick={markComplete} disabled={done}>
      {done ? <><Check size={15} /> Saved to My Civics</> : "Mark lesson complete"}
    </button>
  );
}
