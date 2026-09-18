import Link from "next/link";
import { ArrowRight, CheckCircle2, IdCard } from "lucide-react";
import { hamiltonElection } from "@/lib/content/election";

const items = [
  "Bring valid identification. A voter information card is helpful, not required.",
  "You may vote at any polling station in your ward.",
  `Community and advance polls run ${hamiltonElection.communityPollHours}.`,
  "If you are missing from the list, you can usually be added at the poll with ID.",
  "There are no online or mail-in ballots for this municipal election.",
];

export function PollReady() {
  return (
    <aside className="poll-ready" aria-label="What to bring to vote">
      <IdCard size={22} />
      <div>
        <small>POLL-READY</small>
        <h3>What to bring — and what the City has said.</h3>
        <ul className="check-list">
          {items.map((item) => (
            <li key={item}><CheckCircle2 size={16} /> {item}</li>
          ))}
        </ul>
        <div className="stack-actions">
          <Link href="/learn/what-to-bring-to-the-poll" className="text-link">
            Full poll-day guide <ArrowRight size={14} />
          </Link>
          <a href={hamiltonElection.urls.findWard} className="text-link" target="_blank" rel="noopener noreferrer">
            Find my ward (official)
          </a>
        </div>
      </div>
    </aside>
  );
}
