import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ElectionCountdown } from "@/components/election-countdown";
import { WeekendVote } from "@/components/weekend-vote";
import { hamiltonElection } from "@/lib/content/election";

export function ElectionSeason() {
  return (
    <section className="section election-season" id="election-season" aria-labelledby="election-season-heading">
      <div className="page-width election-season-grid">
        <div>
          <span className="eyebrow gold-text">HAMILTON · ELECTION SEASON</span>
          <h2 id="election-season-heading">This weekend, Hamilton casts the first ballots. Bring ID.</h2>
          <p>
            Mayor, ward councillors, and school board trustees are on the ballot. Nominations are closed.
            Vote at any poll in your ward, read certified candidates from the City—not a feed—and pray
            without baptizing a party.
          </p>
          <ul className="check-list election-season-list">
            <li><CheckCircle2 /> {hamiltonElection.communityPollCount} community polls: {hamiltonElection.communityPolls} · {hamiltonElection.communityPollHours}</li>
            <li><CheckCircle2 /> Advance polls: {hamiltonElection.advancePolls.join(" · ")}</li>
            <li><CheckCircle2 /> A voter card is helpful, not required. There are no online or mail-in ballots.</li>
          </ul>
          <div className="stack-actions">
            <Link href="/blog/hamilton-community-polls-this-weekend" className="button button-gold">Read this weekend’s note <ArrowRight size={16} /></Link>
            <Link href="/elections" className="text-link">Election hub <ArrowRight size={14} /></Link>
            <a href={hamiltonElection.urls.hub} className="text-link" target="_blank" rel="noopener noreferrer">
              City of Hamilton election page <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="election-season-card">
          <ElectionCountdown date={hamiltonElection.date} label="Hamilton voting day" />
          <Link href="/learn/what-to-bring-to-the-poll" className="text-link">
            What to bring to the poll <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="page-width">
        <WeekendVote />
      </div>
    </section>
  );
}
