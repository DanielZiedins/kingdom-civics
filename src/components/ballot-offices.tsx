import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hamiltonElection } from "@/lib/content/election";

const offices = [
  {
    kicker: "City-wide",
    title: "Mayor",
    body: "Chairs council and holds Hamilton’s strong-mayor tools. Does not run schools, hospitals, or criminal law.",
  },
  {
    kicker: "Your ward",
    title: "Councillor",
    body: "One of 15. Votes with council on bylaws, the budget, and planning. Confirm the ward before the name.",
  },
  {
    kicker: "Your board",
    title: "Trustee",
    body: "Local school-board direction. The City — not a bulletin — decides which trustee ballot you may mark.",
  },
] as const;

export function BallotOffices({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <section className={`ballot-offices ballot-offices-${tone}`} aria-labelledby="ballot-offices-heading">
      <div className="ballot-offices-head">
        <small>ON THE BALLOT</small>
        <h3 id="ballot-offices-heading">Three marks. Three different jobs.</h3>
        <p>
          {hamiltonElection.schoolBoards.length} school boards sit beside the mayor and your ward councillor.
          Advance polls are October 17–18, {hamiltonElection.advancePollHours}
        </p>
      </div>
      <div className="ballot-offices-grid">
        {offices.map((office) => (
          <article key={office.title}>
            <small>{office.kicker}</small>
            <h4>{office.title}</h4>
            <p>{office.body}</p>
          </article>
        ))}
      </div>
      <Link href="/blog/three-marks-on-a-hamilton-ballot" className="text-link">
        Read the ballot before Saturday <ArrowRight size={14} />
      </Link>
    </section>
  );
}
