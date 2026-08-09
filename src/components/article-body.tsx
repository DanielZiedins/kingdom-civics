import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleBody({
  scripture,
  sections,
}: {
  scripture: string;
  sections: Array<{ heading: string; body: string }>;
}) {
  return (
    <article className="article-body">
      <div className="article-scripture">
        <small>SCRIPTURE</small>
        <span>{scripture}</span>
      </div>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
      <div className="article-cta">
        <Link href="/kingdom-lens" className="button button-navy">
          Ask Kingdom Lens <ArrowRight size={15} />
        </Link>
        <Link href="/biblical-principles" className="text-link">
          Explore biblical principles <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
