import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { StartPath } from "@/components/start-path";
import { pageFaqs } from "@/lib/seo/faqs";

export function StartHere() {
  return (
    <div className="start-here">
      <div className="scripture-callout scripture-callout-large">
        <Compass />
        <blockquote>Start where you are. Learn the office. Pray by name. Inspect evidence. Serve your neighbours.</blockquote>
        <span>A FIVE-STEP PATH</span>
      </div>
      <StartPath />
      <div className="content-grid" style={{ marginTop: 28 }}>
        <Link href="/for-churches" className="content-card">
          <small>CHURCHES</small>
          <h3>Leading a group?</h3>
          <p>Use the four-week church kit so civic talk does not split the body.</p>
          <span className="text-link">Open the kit <ArrowRight size={14} /></span>
        </Link>
        <Link href="/learn/contact-your-representative" className="content-card">
          <small>PRACTICE</small>
          <h3>Write your representative</h3>
          <p>A short, respectful template for contacting officials with truth and humility.</p>
          <span className="text-link">Read the lesson <ArrowRight size={14} /></span>
        </Link>
        <Link href="/learn/attend-a-council-meeting" className="content-card">
          <small>PRACTICE</small>
          <h3>Attend a meeting</h3>
          <p>Agendas, delegations, and how to show up at city hall without performing for a camera.</p>
          <span className="text-link">Read the lesson <ArrowRight size={14} /></span>
        </Link>
        <Link href="/learn/pray-for-an-election" className="content-card">
          <small>PRAYER</small>
          <h3>Pray through an election</h3>
          <p>Intercede for voters, officials, and whoever wins—without baptizing a ballot.</p>
          <span className="text-link">Open the guide <ArrowRight size={14} /></span>
        </Link>
        <Link href="/learn/what-to-bring-to-the-poll" className="content-card">
          <small>HAMILTON</small>
          <h3>What to bring to the poll</h3>
          <p>Community polls Sep 26–27, 10 a.m.–6 p.m. Bring ID. Vote at any poll in your ward.</p>
          <span className="text-link">Poll-ready checklist <ArrowRight size={14} /></span>
        </Link>
      </div>
      <FaqSection
        faqs={pageFaqs.start ?? []}
        title="Getting started"
        description="The first hour of faithful civic discipleship."
      />
    </div>
  );
}
