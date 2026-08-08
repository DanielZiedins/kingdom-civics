import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, FileCheck2, Heart, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { ComparisonPreview, GlobalSearch, LensDemo, PrincipleCards } from "@/components/home-sections";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { issueGuides, leaders, learnModules, prayerPrompts, principles } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string[] }> };

const pageCopy: Record<string, { eyebrow: string; title: string; description: string }> = {
  learn: { eyebrow: "KINGDOM CIVICS ACADEMY", title: "Understand how government works.", description: "Clear, jurisdiction-aware lessons that turn complex civic systems into knowledge you can use." },
  issues: { eyebrow: "ISSUES LIBRARY", title: "Examine difficult questions carefully.", description: "Understand the policy landscape, biblical principles, meaningful Christian disagreement, and primary sources." },
  leaders: { eyebrow: "PUBLIC LEADERSHIP", title: "Know who serves your community.", description: "Explore current officials, public offices, documented positions, and the limits of each role." },
  elections: { eyebrow: "OFFICIAL INFORMATION FIRST", title: "Prepare for the next election.", description: "Important dates, offices, candidates, voting methods, and links to authoritative election sources." },
  "kingdom-lens": { eyebrow: "SCRIPTURE · EVIDENCE · WISDOM", title: "Examine public life through Kingdom Lens.", description: "Ask civic questions, compare evidence, surface uncertainty, and inspect the sources behind every answer." },
  pray: { eyebrow: "1 TIMOTHY 2:1–2", title: "Pray for those in authority.", description: "Pray for leaders you agree with and leaders you disagree with—with wisdom, truth, justice, mercy, and peace." },
  serve: { eyebrow: "PUBLIC LEADERSHIP IS SERVICE", title: "Serve faithfully where God has placed you.", description: "Start locally. Show up. Speak wisely. Volunteer. Lead. Explore public office with humility." },
  trust: { eyebrow: "TRANSPARENCY BY DESIGN", title: "Trust must be earned.", description: "Inspect how we research leaders, rank sources, use AI, handle theology, surface uncertainty, and correct errors." },
  search: { eyebrow: "UNIVERSAL SEARCH", title: "Find what matters.", description: "Search civic education, leaders, elections, issues, biblical principles, Scripture, and original sources." },
  compare: { eyebrow: "EVIDENCE, NOT ENDORSEMENTS", title: "Compare candidates carefully.", description: "Review documented alignment, tension, uncertainty, counter-evidence, and source reliability." },
  "biblical-principles": { eyebrow: "PRINCIPLES BEFORE POLITICS", title: "A transparent biblical framework.", description: "Scripture establishes enduring moral principles while leaving room for prudential disagreement in many policy questions." },
  "my-civics": { eyebrow: "YOUR CIVIC HOME", title: "Stay rooted in your community.", description: "Save your jurisdictions, representatives, elections, learning progress, prayer list, and civic dates." },
  privacy: { eyebrow: "MINIMUM DATA, MAXIMUM DIGNITY", title: "Your civic life is not an ad profile.", description: "Kingdom Civics uses location for jurisdiction lookup—not political manipulation or hidden psychographic profiling." },
  about: { eyebrow: "THY KINGDOM NETWORK", title: "Kingdom first. Always.", description: "We help the Church seek truth, pray faithfully, discern wisely, and serve humbly in public life." },
  admin: { eyebrow: "RESEARCH OPERATIONS", title: "Verification workspace.", description: "A role-based editorial system for evidence review, theology review, source verification, corrections, and audit history." },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const copy = pageCopy[slug[0]] ?? pageCopy.about;
  return { title: copy.title, description: copy.description };
}

function Cards({ items }: { items: Array<[string, string, string?]> }) {
  return <div className="content-grid">{items.map(([title, description, tag]) => <Link href={`/search?q=${encodeURIComponent(title)}`} className="content-card" key={title}>{tag && <small>{tag}</small>}<h3>{title}</h3><p>{description}</p><span className="text-link">Explore <ArrowRight size={14} /></span></Link>)}</div>;
}

function LeadersPage({ detail }: { detail?: string }) {
  const leader = leaders.find((item) => item.slug === detail);
  if (leader) return (
    <div>
      <div className="profile-summary">
        <div className={`avatar avatar-${leader.tone}`}>{leader.initials}</div>
        <div><span className="status-chip">Fictional demo profile</span><h2>{leader.name}</h2><p>{leader.office} · {leader.party}</p></div>
      </div>
      <div className="profile-tabs">{["Overview", "Positions", "Voting record", "Statements", "Biblical framework", "Sources"].map((tab) => <span key={tab}>{tab}</span>)}</div>
      <div className="content-grid">
        <div className="content-card"><small>EVIDENCE SNAPSHOT</small><h3>12 documented items</h3><p>5 official records · 3 direct statements · 2 interviews · 2 secondary sources</p></div>
        <div className="content-card"><small>LAST REVIEWED</small><h3>August 6, 2026</h3><p>Reviewed by a political data verifier. Demo data is fictional.</p></div>
        <div className="content-card"><small>HONEST UNCERTAINTY</small><h3>4 areas remain unclear</h3><p>The public record does not support a confident conclusion in these areas.</p></div>
      </div>
    </div>
  );
  return <Cards items={leaders.map((item) => [item.name, `${item.office} · ${item.party}`, item.status])} />;
}

function ElectionPage() {
  return (
    <div className="election-layout">
      <div className="election-main">
        <span className="status-chip">Fictional demonstration</span>
        <h2>Harbor City Municipal Election</h2>
        <div className="election-date"><CalendarDays /><div><small>ELECTION DAY</small><strong>October 19, 2026</strong><span>72 days remaining</span></div></div>
        <Cards items={[["Mayor", "Citywide race · 2 declared candidates", "OFFICE"], ["Ward 4 Councillor", "Local district · 3 declared candidates", "OFFICE"], ["School Trustee", "Education district · uncontested", "OFFICE"]]} />
      </div>
      <aside className="source-aside"><ShieldCheck /><h3>Use official information</h3><p>Registration, identification, deadlines, and voting methods should always be verified with the election authority.</p><Link href="/trust">How we verify election data <ArrowRight size={14} /></Link></aside>
    </div>
  );
}

function PrayPage() {
  return (
    <div>
      <div className="scripture-callout"><Heart /><blockquote>“That we may lead a peaceful and quiet life, godly and dignified in every way.”</blockquote><span>1 TIMOTHY 2:2</span></div>
      <Cards items={prayerPrompts.map(([title, text, scripture]) => [title, text, scripture])} />
    </div>
  );
}

function ServePage() {
  const steps = [["START", "Learn how your local government works."], ["SHOW UP", "Attend a council meeting or public hearing."], ["SPEAK", "Participate thoughtfully in public consultation."], ["SERVE", "Volunteer with a community organization."], ["LEAD", "Apply for a public board or commission."], ["RUN", "Explore elected office as servant leadership."]];
  return <Cards items={steps.map(([title, text], i) => [title, text, `PATHWAY 0${i + 1}`])} />;
}

function TrustPage() {
  return (
    <div>
      <div className="trust-manifesto"><ShieldCheck /><div><h2>Every conclusion should be inspectable.</h2><p>We separate factual evidence, theological interpretation, moral principle, prudential judgment, and policy preference. High-impact assessments require human review.</p></div></div>
      <Cards items={[["Source standards", "Tier 1 official records and direct statements receive the greatest weight. Social posts never stand as definitive without corroboration.", "METHODOLOGY"], ["Kingdom Lens constitution", "Twenty-five operating principles prohibit fabrication, partisan equivalence, hidden contradictions, and theological overclaiming.", "AI"], ["Honest uncertainty", "Strong, moderate, limited, contradictory, outdated, or no reliable evidence. We do not force conclusions.", "EVIDENCE"], ["Corrections", "Reports enter a moderation queue. Meaningful corrections retain editor, timestamp, reason, and change history.", "ACCOUNTABILITY"], ["Biblical framework", "Scripture first, interpretation labeled, disagreement represented fairly, prudence acknowledged.", "THEOLOGY"], ["Political neutrality", "Education and documented analysis—not campaign activity or candidate endorsement.", "EDITORIAL"]]} />
    </div>
  );
}

function MyCivicsPage() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-card dashboard-wide"><MapPin /><div><small>SAVED LOCATION</small><h3>Harbor City, Ontario</h3><p>3 jurisdictions · 7 representatives · 1 upcoming election</p></div><Link href="/search" className="button button-navy">Update</Link></div>
      <div className="dashboard-card"><Landmark /><small>NEXT CIVIC DATE</small><h3>Council meeting</h3><p>August 12 · 6:30 PM</p></div>
      <div className="dashboard-card"><BookOpen /><small>LEARNING PROGRESS</small><h3>4 of 10 modules</h3><p>Continue: How to read a public budget</p></div>
      <div className="dashboard-card"><Heart /><small>PRAYER LIST</small><h3>3 leaders saved</h3><p>Open this week’s guided prayers</p></div>
      <div className="dashboard-card"><FileCheck2 /><small>SAVED SOURCES</small><h3>8 items</h3><p>Official records and issue guides</p></div>
    </div>
  );
}

function AdminPage() {
  return <Cards items={[["Verification queue", "14 AI-extracted claims await source review.", "RESEARCHER"], ["Corrections", "3 user reports need moderation.", "MODERATOR"], ["Theology review", "2 principle assessments await doctrinal-methodology review.", "THEOLOGY REVIEWER"], ["Election data", "1 deadline is approaching its review date.", "POLITICAL DATA"], ["Audit log", "42 research edits recorded this week.", "SUPER ADMIN"], ["Source health", "98.4% of linked primary sources are reachable.", "SOURCE VERIFIER"]]} />;
}

export default async function InnerPage({ params }: PageProps) {
  const { slug } = await params;
  const section = slug[0];
  const copy = pageCopy[section] ?? pageCopy.about;
  let body;
  if (section === "learn") body = <Cards items={learnModules.map(([title, duration, category]) => [title, `Plain-language lesson · ${duration} · Includes quiz and official sources`, category])} />;
  else if (section === "issues") body = <Cards items={issueGuides.map(([title, detail]) => [title, detail, "ISSUE GUIDE"])} />;
  else if (section === "leaders") body = <LeadersPage detail={slug[1]} />;
  else if (section === "elections") body = <ElectionPage />;
  else if (section === "kingdom-lens") body = <LensDemo />;
  else if (section === "pray") body = <PrayPage />;
  else if (section === "serve") body = <ServePage />;
  else if (section === "trust") body = <TrustPage />;
  else if (section === "search") body = <GlobalSearch />;
  else if (section === "compare") body = <ComparisonPreview />;
  else if (section === "biblical-principles") body = slug[1] ? <Cards items={[["Relevant Scripture", principles.find((p) => p.slug === slug[1])?.scripture ?? "Scripture references", "BIBLICAL TEXT"], ["Broad agreement", "Christians broadly affirm the moral principle while differing on some institutional applications.", "INTERPRETATION"], ["Prudential questions", "Which policy tools are effective, proportionate, and within the proper authority of government?", "POLICY APPLICATION"]]} /> : <PrincipleCards />;
  else if (section === "my-civics") body = <MyCivicsPage />;
  else if (section === "admin") body = <AdminPage />;
  else if (section === "privacy") body = <Cards items={[["Collect less", "No hidden political or religious profile. Location is used only for civic jurisdiction lookup.", "PRINCIPLE"], ["Your control", "Export saved data, adjust notification preferences, or delete your account.", "RIGHTS"], ["Secure by design", "Role-based access, audit history, least privilege, and row-level data controls.", "SECURITY"]]} />;
  else body = <Cards items={[["Truth", "Claims should be accurate, contextual, and open to correction."], ["Wisdom", "Good judgment requires knowledge, humility, and patient discernment."], ["Service", "Public authority is a stewardship for the good of our neighbors."]]} />;

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="page-width"><span className="eyebrow gold-text">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.description}</p></div></section>
        <section className="page-body"><div className="page-width">{body}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
