"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, FileCheck2, Heart, Landmark, MapPin } from "lucide-react";
import { ElectionCountdown } from "@/components/election-countdown";
import { learnArticles } from "@/lib/content/learn";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonMeta } from "@/lib/hamilton";

const STORAGE_KEY = "kingdom-civics-my-civics";

type SavedState = {
  city: string;
  prayedForMayor: boolean;
  completedLearn: string[];
};

const defaults: SavedState = {
  city: "Hamilton, Ontario",
  prayedForMayor: false,
  completedLearn: [],
};

function readSaved(): SavedState {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

export function MyCivicsDashboard() {
  const [state, setState] = useState<SavedState>(defaults);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setState(readSaved());
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const nextLesson = learnArticles.find((a) => !state.completedLearn.includes(a.slug)) ?? learnArticles[0];

  return (
    <div className="dashboard-grid">
      <div className="dashboard-card dashboard-wide">
        <MapPin />
        <div>
          <small>SAVED ON THIS DEVICE</small>
          <h3>{state.city}</h3>
          <p>
            {hamiltonCouncillors.length + 1} municipal · {hamiltonFederal.length} federal MPs indexed · Verified {hamiltonMeta.lastVerified}
          </p>
        </div>
        <Link href="/leaders" className="button button-navy">View leaders</Link>
      </div>

      <div className="dashboard-card">
        <Landmark />
        <small>NEXT ELECTION</small>
        <h3>October 26, 2026</h3>
        <ElectionCountdown />
        <Link href="/elections" className="text-link" style={{ marginTop: 12 }}>Election hub</Link>
      </div>

      <div className="dashboard-card">
        <BookOpen />
        <small>LEARNING PROGRESS</small>
        <h3>{state.completedLearn.length} of {learnArticles.length} lessons</h3>
        <p>Continue: {nextLesson.title}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <Link href={`/learn/${nextLesson.slug}`} className="button button-small button-navy">Continue</Link>
          <button
            type="button"
            className="button button-small button-ghost"
            onClick={() =>
              setState((s) => ({
                ...s,
                completedLearn: s.completedLearn.includes(nextLesson.slug)
                  ? s.completedLearn
                  : [...s.completedLearn, nextLesson.slug],
              }))
            }
          >
            Mark done
          </button>
        </div>
      </div>

      <div className="dashboard-card">
        <Heart />
        <small>PRAYER LIST</small>
        <h3>Mayor {hamiltonMayor.name.split(" ").pop()}</h3>
        <p>{state.prayedForMayor ? "Prayed this session — thank you." : "Pray for Hamilton leaders this week."}</p>
        <button
          type="button"
          className="button button-small button-ghost"
          style={{ marginTop: 12 }}
          onClick={() => setState((s) => ({ ...s, prayedForMayor: true }))}
        >
          {state.prayedForMayor ? "Prayed ✓" : "Mark as prayed"}
        </button>
        <Link href="/pray" className="text-link" style={{ marginTop: 12 }}>Open Prayer Center</Link>
      </div>

      <div className="dashboard-card">
        <FileCheck2 />
        <small>OFFICIAL SOURCES</small>
        <h3>hamilton.ca</h3>
        <p>Primary municipal records for live Hamilton data.</p>
        <a href={hamiltonMeta.officialSite} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 12 }}>
          Visit official site
        </a>
      </div>
    </div>
  );
}
