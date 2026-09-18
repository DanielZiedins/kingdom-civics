"use client";

import { useEffect, useState } from "react";
import { getNextVotingWindow, votingWindows } from "@/lib/content/election";

export function VotingCalendar() {
  const [nextId, setNextId] = useState(votingWindows[0].id);

  useEffect(() => {
    setNextId(getNextVotingWindow().id);
  }, []);

  return (
    <ol className="voting-calendar" aria-label="Hamilton voting windows">
      {votingWindows.map((window) => {
        const isNext = window.id === nextId;
        return (
          <li key={window.id} className={isNext ? "is-next" : undefined}>
            <small>{isNext ? "NEXT · " : ""}{window.label.toUpperCase()}</small>
            <strong>{window.when}</strong>
            <span>{window.detail}</span>
          </li>
        );
      })}
    </ol>
  );
}
