"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Church, Copy, Check } from "lucide-react";
import {
  getChurchNote,
  getWeekendStatus,
  hamiltonElection,
  upcomingOutreach,
} from "@/lib/content/election";

export function WeekendVote() {
  const [status, setStatus] = useState("Saturday and Sunday · 10 a.m.–6 p.m. · Bring valid ID");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setStatus(getWeekendStatus());
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
    <section className="weekend-vote" aria-label="Hamilton community polls this weekend">
      <div className="weekend-vote-copy">
        <small>COMMUNITY POLLS · {hamiltonElection.communityPollCount} LOCATIONS</small>
        <h3>Saturday and Sunday. Any poll in your ward.</h3>
        <p>{status}</p>
        <p>
          The City has scheduled {hamiltonElection.communityPollCount} community polls in high-density buildings
          and places with accessibility needs — part of {hamiltonElection.votingOpportunities} voting opportunities.
          Your voter information card lists the stations in your ward. A card is helpful, not required.
          Eight ballot-on-demand sites, including McMaster, Mohawk, and Redeemer, use their own hours.
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
        <article>
          <CalendarDays size={18} />
          <small>SATURDAY</small>
          <strong>Sep 26</strong>
          <span>10 a.m.–6 p.m.</span>
        </article>
        <article>
          <Church size={18} />
          <small>SUNDAY · AFTER CHURCH</small>
          <strong>Sep 27</strong>
          <span>10 a.m.–6 p.m.</span>
        </article>
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
