"use client";

import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { torontoDateParts } from "@/lib/content/election";

function calendarDaysUntil(from: string, to: string) {
  const start = Date.parse(`${from}T12:00:00-04:00`);
  const end = Date.parse(`${to}T12:00:00-04:00`);
  return Math.round((end - start) / 86400000);
}

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

const nextPollFallback = {
  label: "Advance polls",
  strong: "3 days",
  detail: "until Saturday, October 17",
};

export function NextPollCountdown() {
  const [copy, setCopy] = useState(nextPollFallback);

  useEffect(() => {
    const { date, hour } = torontoDateParts();
    if (date < "2026-10-17" || (date === "2026-10-17" && hour < 10)) {
      const days = Math.max(0, calendarDaysUntil(date, "2026-10-17"));
      setCopy({
        label: "Advance polls",
        strong: days === 1 ? "1 day" : `${days} days`,
        detail: "until Saturday, October 17",
      });
      return;
    }
    if (date === "2026-10-17" || (date === "2026-10-18" && hour < 18)) {
      setCopy({ label: "Advance polls", strong: "Today", detail: "open until 6 p.m. · bring ID" });
      return;
    }
    if (date <= "2026-10-26") {
      const days = Math.max(0, calendarDaysUntil(date, "2026-10-26"));
      setCopy({
        label: "Election day",
        strong: date === "2026-10-26" ? "Today" : days === 1 ? "1 day" : `${days} days`,
        detail: date === "2026-10-26" ? "confirm hours on hamilton.ca" : "until Monday, October 26",
      });
      return;
    }
    setCopy({ label: "Election day", strong: "Cast", detail: "pray for whoever serves" });
  }, []);

  return (
    <div className="election-countdown">
      <CalendarDays size={22} />
      <div>
        <small>{copy.label.toUpperCase()}</small>
        <strong>{copy.strong}</strong>
        <span>{copy.detail}</span>
      </div>
    </div>
  );
}
