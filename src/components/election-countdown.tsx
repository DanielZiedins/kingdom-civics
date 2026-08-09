"use client";

import { CalendarDays } from "lucide-react";

export function ElectionCountdown({ date = "2026-10-26", label = "Election day" }: { date?: string; label?: string }) {
  const target = new Date(date);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

  return (
    <div className="election-countdown">
      <CalendarDays size={22} />
      <div>
        <small>{label.toUpperCase()}</small>
        <strong>{days} days</strong>
        <span>until {target.toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}</span>
      </div>
    </div>
  );
}
