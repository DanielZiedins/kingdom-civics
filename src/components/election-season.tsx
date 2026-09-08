import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ElectionCountdown } from "@/components/election-countdown";
import { hamiltonElection } from "@/lib/content/election";

export function ElectionSeason() {
  return (
    <section className="section election-season" id="election-season" aria-labelledby="election-season-heading">
      <div className="page-width election-season-grid">
        <div>
          <span className="eyebrow gold-text">HAMILTON · ELECTION SEASON</span>
          <h2 id="election-season-heading">October 26 is coming. Prepare with official sources.</h2>
          <p>
            Mayor, ward councillors, and school board trustees are on the ballot. Nominations are closed.
            Confirm you are on the voters list, read certified candidates from the City—not a feed—and pray
            without baptizing a party.
          </p>
          <ul className="check-list election-season-list">
            <li><CheckCircle2 /> Advance polls: {hamiltonElection.advancePolls.join(" · ")}</li>
            <li><CheckCircle2 /> Amend the voters list in person by {hamiltonElection.votersListAmendUntil}</li>
            <li><CheckCircle2 /> No online or mail-in ballots for this municipal election</li>
          </ul>
          <div className="stack-actions">
            <Link href="/elections" className="button button-gold">Open the election hub <ArrowRight size={16} /></Link>
            <a href={hamiltonElection.urls.hub} className="text-link" target="_blank" rel="noopener noreferrer">
              City of Hamilton election page <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="election-season-card">
          <ElectionCountdown date={hamiltonElection.date} label="Hamilton voting day" />
          <Link href="/learn/prepare-for-municipal-election" className="text-link">
            How to prepare <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
