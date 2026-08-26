import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { civicScriptures } from "@/lib/content/scripture";
import { pageFaqs } from "@/lib/seo/faqs";

export function ScriptureIndex() {
  return (
    <div className="scripture-index">
      <p className="find-reps-intro">
        A working index of passages Christians often ask about when they think of government, voting, prayer, and public life.
        These are starting points for discipleship—not proof-texts for a party.
      </p>
      <div className="scripture-index-grid">
        {civicScriptures.map((item) => (
          <article className="scripture-index-card" key={item.ref} id={item.ref.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <BookOpen size={18} />
            <small>SCRIPTURE</small>
            <h3>{item.ref}</h3>
            <blockquote>&ldquo;{item.text}&rdquo;</blockquote>
            <p>{item.application}</p>
            <Link href={item.related} className="text-link">
              Related resource <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
      <div className="stack-actions">
        <Link href="/kingdom-lens?q=What%20does%20the%20Bible%20say%20about%20government" className="button button-navy">
          Ask Kingdom Lens
        </Link>
        <Link href="/biblical-principles" className="button button-ghost">Biblical principles</Link>
        <Link href="/pray" className="text-link">Pray these passages <ArrowRight size={14} /></Link>
      </div>
      <FaqSection
        faqs={pageFaqs.scripture ?? []}
        title="Bible and civic life FAQ"
        description="Straight answers to common searches about Scripture and government."
      />
    </div>
  );
}
