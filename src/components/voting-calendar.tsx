"use client";

import { useEffect, useState } from "react";
import { getNextVotingWindow, torontoDateParts, votingWindows } from "@/lib/content/election";

type VotingWindowId = (typeof votingWindows)[number]["id"];

export function VotingCalendar() {
  const [nextId, setNextId] = useState<VotingWindowId>("advance-3");
  const [pastIds, setPastIds] = useState<VotingWindowId[]>(["community", "advance-1", "advance-2"]);

  useEffect(() => {
    const { date, hour } = torontoDateParts();
    setNextId(getNextVotingWindow().id);
    setPastIds(
      votingWindows
        .filter((window) => window.end < date || (window.end === date && hour >= 18 && window.id !== "election-day"))
        .map((window) => window.id),
    );
  }, []);

  return (
    <ol className="voting-calendar" aria-label="Hamilton voting windows">
      {votingWindows.map((window) => {
        const isNext = window.id === nextId;
        const isPast = pastIds.includes(window.id) && !isNext;
        return (
          <li key={window.id} className={isNext ? "is-next" : isPast ? "is-past" : undefined}>
            <small>{isNext ? "NEXT · " : isPast ? "CLOSED · " : ""}{window.label.toUpperCase()}</small>
            <strong>{window.when}</strong>
            <span>{window.detail}</span>
          </li>
        );
      })}
    </ol>
  );
}
