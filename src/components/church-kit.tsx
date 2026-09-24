import Link from "next/link";
import { ArrowRight, BookOpen, Heart, ShieldCheck, Users } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { WeekendVote } from "@/components/weekend-vote";
import { pageFaqs } from "@/lib/seo/faqs";

const weeks = [
  {
    week: "Week 1",
    title: "Why we engage",
    href: "/why-engage",
    body: "Read Jeremiah 29:7 and 1 Timothy 2:1–2. Discuss neighbour-love vs. partisan conquest. Pray for leaders you disagree with.",
  },
  {
    week: "Week 2",
    title: "How government works",
    href: "/learn/how-government-works",
    body: "Map local, regional, and national powers. Ask: which office actually controls the issue we care about?",
  },
  {
    week: "Week 3",
    title: "Discern with principles",
    href: "/biblical-principles",
    body: "Walk through truth, dignity, justice, servant leadership, conscience, and stewardship. Practice on a live issue—not a personality.",
  },
  {
    week: "Week 4",
    title: "Pray, serve, or run",
    href: "/serve",
    body: "Choose a next step: a prayer rhythm, a council meeting, a board, or a calling conversation about office.",
  },
];

const guardrails = [
  ["No pulpit endorsements", "Do not baptize a candidate or party. Teach principles, pray for all in authority, and let consciences differ on prudential questions."],
  ["Primary sources over outrage", "Train the church to click official records before sharing a screenshot. Truth-telling is discipleship."],
  ["Unity without uniformity", "Faithful Christians may vote differently. That is not a church split—it is the body practicing humility."],
  ["Kingdom first", "No nation or movement is the Kingdom of God. Keep Christ central when civic heat rises."],
];

export function ChurchKit() {
  return (
    <div className="church-kit">
      <div className="scripture-callout scripture-callout-large">
        <Heart />
        <blockquote>&ldquo;Seek the welfare of the city where I have sent you… for in its welfare you will find your welfare.&rdquo;</blockquote>
        <span>JEREMIAH 29:7</span>
      </div>
      <WeekendVote />
      <div className="content-grid church-kit-intro">
        <article className="content-card">
          <Users size={20} />
          <small>PASTORS &amp; ELDERS</small>
          <h3>Form citizens of heaven who still love their city</h3>
          <p>Civic discipleship belongs in the church—not as a campaign office, but as neighbour-love, prayer, and wisdom under Scripture.</p>
        </article>
        <article className="content-card">
          <BookOpen size={20} />
          <small>SMALL GROUPS</small>
          <h3>A four-week civic rhythm</h3>
          <p>Free lessons, discussion prompts, and Kingdom Lens questions. No partisan curriculum. No candidate scorecards.</p>
        </article>
        <article className="content-card">
          <ShieldCheck size={20} />
          <small>GUARDRAILS</small>
          <h3>Teach without dividing</h3>
          <p>Kingdom Civics is built so churches can talk about government without baptizing a party or silencing the vulnerable.</p>
        </article>
      </div>

      <h2 className="church-kit-h2">Four-week small group outline</h2>
      <ol className="church-weeks">
        {weeks.map((w) => (
          <li key={w.week}>
            <Link href={w.href} className="church-week-card">
              <small>{w.week}</small>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
              <span className="text-link">Open resource <ArrowRight size={14} /></span>
            </Link>
          </li>
        ))}
      </ol>

      <h2 className="church-kit-h2">Pulpit &amp; prayer night ideas</h2>
      <div className="content-grid">
        <div className="content-card">
          <small>LITURGY</small>
          <h3>Pray for those in authority</h3>
          <p>Use the Prayer Center. Name local offices. Include leaders your congregation did not support. 1 Timothy 2 does not add an exception clause.</p>
          <Link href="/pray" className="text-link">Prayer Center <ArrowRight size={14} /></Link>
        </div>
        <div className="content-card">
          <small>TEACHING</small>
          <h3>How to talk about politics without splitting the body</h3>
          <p>A lesson on speech, patience, and primary sources—built for Sunday school, youth, or a midweek class.</p>
          <Link href="/learn/talk-politics-in-church" className="text-link">Read the lesson <ArrowRight size={14} /></Link>
        </div>
        <div className="content-card">
          <small>RESEARCH</small>
          <h3>Practice Kingdom Lens together</h3>
          <p>Ask one civic question as a group. Inspect sources, Scripture, uncertainties, and counterpoints—then refuse to stop at slogans.</p>
          <Link href="/kingdom-lens" className="text-link">Open Kingdom Lens <ArrowRight size={14} /></Link>
        </div>
        <div className="content-card">
          <small>HAMILTON · ELECTION</small>
          <h3>Prepare the congregation to vote without a scorecard</h3>
          <p>Community polls are September 26–27. Teach ID, ward maps, and prayer—not pulpit endorsements. Point people to hamilton.ca.</p>
          <Link href="/learn/what-to-bring-to-the-poll" className="text-link">Poll-ready guide <ArrowRight size={14} /></Link>
        </div>
      </div>

      <h2 className="church-kit-h2">Guardrails for churches</h2>
      <div className="content-grid">
        {guardrails.map(([title, text]) => (
          <div className="content-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="stack-actions">
        <Link href="/learn" className="button button-navy">Browse all lessons</Link>
        <Link href="/glossary" className="button button-ghost">Civic glossary</Link>
        <Link href="/trust" className="text-link">Our methodology <ArrowRight size={14} /></Link>
      </div>
      <FaqSection
        faqs={pageFaqs["for-churches"] ?? []}
        title="Civic discipleship in the church"
        description="Practical answers for pastors, small-group leaders, and congregations."
      />
    </div>
  );
}
