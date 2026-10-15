import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { BallotOffices } from "@/components/ballot-offices";
import { NextWindows } from "@/components/next-windows";
import { ElectionCountdown, NextPollCountdown } from "@/components/election-countdown";
import { ElectionHeading } from "@/components/election-heading";
import { WeekendVote } from "@/components/weekend-vote";
import { hamiltonElection } from "@/lib/content/election";

export function ElectionSeason() {
  return (
    <section className="section election-season" id="election-season" aria-labelledby="election-season-heading">
      <div className="page-width election-season-grid">
        <div>
          <span className="eyebrow gold-text">HAMILTON · ELECTION SEASON</span>
          <ElectionHeading />
          <p>
            Mayor, ward councillors, and school board trustees are on the ballot. Nominations are closed.
            Vote at any poll in your ward, read certified candidates from the City—not a feed—and pray
            without baptizing a party.
          </p>
          <ul className="check-list election-season-list">
            <li><CheckCircle2 /> Tomorrow: City Hall special voting starts. Confirm hours. It is not the 10 a.m.–6 p.m. window.</li>
            <li><CheckCircle2 /> Final advance polls: October 17–18 · {hamiltonElection.advancePollHours}</li>
            <li><CheckCircle2 /> Election day {hamiltonElection.weekdayLabel}. A voter card is helpful, not required.</li>
          </ul>
          <div className="stack-actions">
            <Link href="/blog/friday-at-city-hall-then-saturday" className="button button-gold">Friday, then Saturday <ArrowRight size={16} /></Link>
            <Link href="/blog/what-a-church-can-say-october-18" className="text-link">Sunday’s church note <ArrowRight size={14} /></Link>
            <Link href="/elections" className="text-link">Election hub <ArrowRight size={14} /></Link>
            <a href={hamiltonElection.urls.hub} className="text-link" target="_blank" rel="noopener noreferrer">
              City of Hamilton election page <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="election-season-card">
          <NextPollCountdown />
          <ElectionCountdown date={hamiltonElection.date} label="Hamilton voting day" />
          <Link href="/learn/what-to-bring-to-the-poll" className="text-link">
            What to bring to the poll <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="page-width">
        <NextWindows />
        <WeekendVote />
        <BallotOffices tone="dark" />
      </div>
    </section>
  );
}
