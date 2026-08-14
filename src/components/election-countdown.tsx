"use client";

import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

function daysUntil(date: string) {
  const target = Date.parse(`${date}T12:00:00-04:00`);
  const now = Date.now();
  return Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
}

export function ElectionCountdown({ date = "2026-10-26", label = "Election day" }: { date?: string; label?: string }) {
  const [days, setDays] = useState(() => daysUntil(date));

  useEffect(() => {
    const t = window.setTimeout(() => setDays(daysUntil(date)), 0);
    return () => window.clearTimeout(t);
  }, [date]);

  const display = new Date(`${date}T12:00:00-04:00`).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto",
  });

  return (
    <div className="election-countdown">
      <CalendarDays size={22} />
      <div>
        <small>{label.toUpperCase()}</small>
        <strong>{days} days</strong>
        <span>until {display}</span>
      </div>
    </div>
  );
}
