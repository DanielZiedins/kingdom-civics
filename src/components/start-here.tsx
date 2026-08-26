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
        <Link href="/glossary" className="content-card">
          <small>LANGUAGE</small>
          <h3>Learn the terms</h3>
          <p>Ward, bylaw, riding, jurisdiction—plain language so you are not lost in the room.</p>
          <span className="text-link">Open the glossary <ArrowRight size={14} /></span>
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
