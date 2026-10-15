"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Church, Copy, Check } from "lucide-react";
import {
  getChurchNote,
  getVoteFocus,
  getWeekendStatus,
  hamiltonElection,
  upcomingOutreach,
  type VoteFocus,
} from "@/lib/content/election";

const focusFallback: VoteFocus = {
  aria: "Hamilton final advance polls",
  kicker: "FINAL ADVANCE POLLS",
  title: "Saturday and Sunday. Any poll in your ward.",
  days: [
    { small: "SATURDAY", strong: "Oct 17", span: "10 a.m.–6 p.m." },
    { small: "SUNDAY · AFTER CHURCH", strong: "Oct 18", span: "10 a.m.–6 p.m." },
  ],
};

export function WeekendVote() {
  const [status, setStatus] = useState("City Hall special voting runs October 16–23 — confirm hours. Final advance polls are Saturday and Sunday, October 17–18, 10 a.m.–6 p.m. Bring valid ID.");
  const [focus, setFocus] = useState(focusFallback);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setStatus(getWeekendStatus());
    setFocus(getVoteFocus());
  }, []);

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(getChurchNote());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="weekend-vote" aria-label={focus.aria}>
      <div className="weekend-vote-copy">
        <small>{focus.kicker}</small>
        <h3>{focus.title}</h3>
        <p>{status}</p>
        <p>
          Your voter information card lists the stations in your ward. A card is helpful, not required.
          You may vote at any poll in that ward. City Hall special voting runs {hamiltonElection.cityHallSpecial} — confirm hours.
          Eight ballot-on-demand sites, including McMaster, Mohawk, and Redeemer, use their own hours.
          If you already voted, you do not vote again.
        </p>
        <div className="stack-actions">
          <Link href="/learn/what-to-bring-to-the-poll" className="button button-gold">
            What to bring <ArrowRight size={16} />
          </Link>
          <a href={hamiltonElection.urls.findWard} className="text-link" target="_blank" rel="noopener noreferrer">
            Find my ward
          </a>
          <button type="button" className="text-link weekend-copy" onClick={copyNote}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied for your church" : "Copy a church note"}
          </button>
        </div>
      </div>
      <div className="weekend-days">
        {focus.days.map((day) => (
          <article key={day.strong}>
            {day.small.includes("SUNDAY") ? <Church size={18} /> : <CalendarDays size={18} />}
            <small>{day.small}</small>
            <strong>{day.strong}</strong>
            <span>{day.span}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OutreachList() {
  const [events, setEvents] = useState<Array<(typeof hamiltonElection.outreach)[number]>>([]);

  useEffect(() => {
    setEvents([...upcomingOutreach()]);
  }, []);

  if (!events.length) return null;

  return (
    <>
      <h3 className="election-subhead">City voter outreach still ahead</h3>
      <ul className="election-outreach">
        {events.map((event) => (
          <li key={event.place}>
            <strong>{event.date}</strong>
            <span>{event.place} · {event.hours}</span>
          </li>
        ))}
      </ul>
      <p className="election-outreach-note">Confirm every outreach hour and location on hamilton.ca. Kingdom Civics does not replace the Clerk.</p>
    </>
  );
}
