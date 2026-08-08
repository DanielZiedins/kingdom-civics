import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ExternalLink, FileCheck2, Heart, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { ComparisonPreview, GlobalSearch, PrincipleCards } from "@/components/home-sections";
import { KingdomLensChat } from "@/components/kingdom-lens-chat";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { engagementScriptures, whyEngageReasons } from "@/lib/engagement";
import { allHamiltonLeaders, hamiltonMeta } from "@/lib/data";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor } from "@/lib/hamilton";
import { issueGuides, learnModules, prayerPrompts, principles } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string[] }> };

const pageCopy: Record<string, { eyebrow: string; title: string; description: string }> = {
  "why-engage": {
    eyebrow: "KINGDOM CITIZENS IN PUBLIC LIFE",
    title: "Why Christians should engage in government and culture.",
    description: "Not partisan outrage. Not culture-war panic. Faithful love of neighbor, prayer for leaders, pursuit of justice, and humble service in the public square.",
  },
  learn: { eyebrow: "KINGDOM CIVICS ACADEMY", title: "Understand how government works.", description: "Clear, jurisdiction-aware lessons—including Hamilton-specific civic education." },
  issues: { eyebrow: "ISSUES LIBRARY", title: "Examine difficult questions carefully.", description: "Understand the policy landscape, biblical principles, meaningful Christian disagreement, and primary sources." },
  leaders: { eyebrow: "HAMILTON, ONTARIO", title: "Know who serves your community.", description: "Live officials from City of Hamilton and federal parliamentary records—with official source links." },
  elections: { eyebrow: "OFFICIAL INFORMATION FIRST", title: "Hamilton's 2026 municipal election.", description: "October 26, 2026 · Important dates, offices, and links to authoritative election sources." },
  "kingdom-lens": { eyebrow: "SCRIPTURE · EVIDENCE · WISDOM", title: "Examine public life through Kingdom Lens.", description: "Ask civic questions about Hamilton, compare evidence, surface uncertainty, and inspect sources." },
  pray: { eyebrow: "1 TIMOTHY 2:1–2", title: "Pray for those in authority.", description: "Pray for Hamilton's mayor, councillors, and MPs—with wisdom, truth, justice, mercy, and peace." },
  serve: { eyebrow: "PUBLIC LEADERSHIP IS SERVICE", title: "Serve faithfully where God has placed you.", description: "Attend Hamilton council meetings, consult publicly, volunteer, and explore boards or elected office." },
  trust: { eyebrow: "TRANSPARENCY BY DESIGN", title: "Trust must be earned.", description: "Inspect how we research leaders, rank sources, use AI, handle theology, surface uncertainty, and correct errors." },
  search: { eyebrow: "UNIVERSAL SEARCH", title: "Find what matters.", description: "Search Hamilton leaders, elections, issues, biblical principles, and Scripture." },
  compare: { eyebrow: "EVIDENCE, NOT ENDORSEMENTS", title: "Compare candidates carefully.", description: "Review documented alignment, tension, uncertainty, counter-evidence, and source reliability." },
  "biblical-principles": { eyebrow: "PRINCIPLES BEFORE POLITICS", title: "A transparent biblical framework.", description: "Scripture establishes enduring moral principles while leaving room for prudential disagreement." },
  "my-civics": { eyebrow: "YOUR CIVIC HOME", title: "Stay rooted in Hamilton.", description: "Save your jurisdictions, representatives, elections, learning progress, and prayer list." },
  privacy: { eyebrow: "MINIMUM DATA, MAXIMUM DIGNITY", title: "Your civic life is not an ad profile.", description: "Kingdom Civics uses location for jurisdiction lookup—not political manipulation." },
  about: { eyebrow: "THY KINGDOM NETWORK", title: "Kingdom first. Always.", description: "We help the Church seek truth, pray faithfully, discern wisely, and serve humbly in public life." },
  admin: { eyebrow: "RESEARCH OPERATIONS", title: "Verification workspace.", description: "Role-based editorial system for evidence review, theology review, and audit history." },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const copy = pageCopy[slug[0]] ?? pageCopy.about;
  return { title: copy.title, description: copy.description };
}

function Cards({ items }: { items: Array<[string, string, string?]> }) {
  return (
    <div className="content-grid">
      {items.map(([title, description, tag]) => (
        <Link href={`/search?q=${encodeURIComponent(title)}`} className="content-card" key={title}>
          {tag && <small>{tag}</small>}
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="text-link">Explore <ArrowRight size={14} /></span>
        </Link>
      ))}
    </div>
  );
}

function LeadersPage({ detail }: { detail?: string }) {
  const leader = allHamiltonLeaders.find((item) => item.slug === detail);
  if (leader) {
    return (
      <div>
        <div className="profile-summary">
          <div className={`avatar avatar-${leader.tone}`}>{leader.initials}</div>
          <div>
            <span className="status-chip live-chip">Live · Official record</span>
            <h2>{leader.name}</h2>
            <p>{leader.office} · {leader.party}</p>
            <a href={leader.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 12 }}>
              View official source <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="profile-tabs">
          {["Overview", "Positions", "Voting record", "Statements", "Biblical framework", "Sources"].map((tab) => <span key={tab}>{tab}</span>)}
        </div>
        <div className="content-grid">
          <div className="content-card"><small>OFFICIAL ROLE</small><h3>{leader.status}</h3><p>Verified from City of Hamilton or parliamentary records.</p></div>
          <div className="content-card"><small>LAST VERIFIED</small><h3>{hamiltonMeta.lastVerified}</h3><p>Policy assessments require separate evidence review.</p></div>
          <div className="content-card"><small>SCRIPTURE</small><h3>1 Timothy 2:1–2</h3><p>Pray for those in authority—including leaders you disagree with.</p></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="leaders-section-label"><span className="eyebrow">MAYOR</span></div>
      <div className="content-grid">
        <Link href={`/leaders/${hamiltonMayor.slug}`} className="content-card">
          <small>LIVE</small><h3>{hamiltonMayor.name}</h3><p>{hamiltonMayor.office} · {hamiltonMayor.status}</p>
          <span className="text-link">View profile <ArrowRight size={14} /></span>
        </Link>
      </div>
      <div className="leaders-section-label"><span className="eyebrow">WARD COUNCILLORS · {hamiltonCouncillors.length}</span></div>
      <div className="content-grid">
        {hamiltonCouncillors.map((c) => (
          <Link href={`/leaders/${c.slug}`} className="content-card" key={c.slug}>
            <small>LIVE · {c.ward}</small><h3>{c.name}</h3><p>{c.office}</p>
            <span className="text-link">View profile <ArrowRight size={14} /></span>
          </Link>
        ))}
      </div>
      <div className="leaders-section-label"><span className="eyebrow">FEDERAL MPs</span></div>
      <div className="content-grid">
        {hamiltonFederal.map((c) => (
          <Link href={`/leaders/${c.slug}`} className="content-card" key={c.slug}>
            <small>LIVE · {c.party}</small><h3>{c.name}</h3><p>{c.office} · {c.ward}</p>
            <span className="text-link">View profile <ArrowRight size={14} /></span>
          </Link>
        ))}
      </div>
    </>
  );
}

function ElectionPage() {
  return (
    <div className="election-layout">
      <div className="election-main">
        <span className="status-chip live-chip">Live · City of Hamilton</span>
        <h2>2026 Hamilton Municipal & School Board Election</h2>
        <div className="election-date">
          <CalendarDays />
          <div>
            <small>ELECTION DAY</small>
            <strong>October 26, 2026</strong>
            <span>Mayor · 15 ward councillors · school board trustees</span>
          </div>
        </div>
        <Cards items={[
          ["Mayor", "Citywide · nominations via official process", "OFFICE"],
          ["Ward Councillor", "15 wards across Hamilton", "OFFICE"],
          ["School Board Trustee", "Public & separate boards", "OFFICE"],
        ]} />
        <a href={hamiltonMeta.electionUrl} target="_blank" rel="noopener noreferrer" className="button button-navy" style={{ marginTop: 24 }}>
          Official election information <ExternalLink size={14} />
        </a>
      </div>
      <aside className="source-aside">
        <ShieldCheck />
        <h3>Use official information</h3>
        <p>Registration, ID requirements, and voting methods must be verified with the City of Hamilton and Elections Ontario.</p>
        <Link href="/trust">How we verify election data <ArrowRight size={14} /></Link>
      </aside>
    </div>
  );
}

function WhyEngagePage() {
  return (
    <div>
      <div className="scripture-callout scripture-callout-large">
        <Heart />
        <blockquote>&ldquo;Seek the welfare of the city where I have sent you… for in its welfare you will find your welfare.&rdquo;</blockquote>
        <span>JEREMIAH 29:7</span>
      </div>
      <div className="engage-grid">
        {whyEngageReasons.map((item, i) => (
          <article className="engage-card" key={item.title}>
            <span className="engage-number">0{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <blockquote>{item.quote}</blockquote>
            <footer>{item.scripture}</footer>
          </article>
        ))}
      </div>
      <div className="scripture-strip">
        {engagementScriptures.map((s) => (
          <div key={s.ref} className="scripture-pill"><strong>{s.ref}</strong><span>{s.text}</span></div>
        ))}
      </div>
    </div>
  );
}

function PrayPage() {
  return (
    <div>
      <div className="scripture-callout">
        <Heart />
        <blockquote>&ldquo;That we may lead a peaceful and quiet life, godly and dignified in every way.&rdquo;</blockquote>
        <span>1 TIMOTHY 2:2</span>
      </div>
      <Cards items={prayerPrompts.map(([title, text, scripture]) => [title, text, scripture])} />
    </div>
  );
}

function ServePage() {
  const steps = [
    ["START", "Learn how Hamilton City Council works and what each level of government controls."],
    ["SHOW UP", "Attend a council or committee meeting at Hamilton City Hall."],
    ["SPEAK", "Participate in public consultation on planning, budgets, or bylaws."],
    ["SERVE", "Volunteer with a community organization serving Hamilton neighbors."],
    ["LEAD", "Apply for a public board, commission, or advisory committee."],
    ["RUN", "Explore elected office as servant leadership—not as a culture-war platform."],
  ];
  return <Cards items={steps.map(([title, text], i) => [title, text, `PATHWAY 0${i + 1}`])} />;
}

function TrustPage() {
  return (
    <div>
      <div className="trust-manifesto">
        <ShieldCheck />
        <div>
          <h2>Every conclusion should be inspectable.</h2>
          <p>We separate factual evidence, theological interpretation, moral principle, prudential judgment, and policy preference. Hamilton live data is sourced from hamilton.ca and official parliamentary pages.</p>
        </div>
      </div>
      <Cards items={[
        ["Source standards", "Tier 1 official records and direct statements receive the greatest weight.", "METHODOLOGY"],
        ["Kingdom Lens constitution", "Twenty-five operating principles prohibit fabrication and partisan equivalence.", "AI"],
        ["Honest uncertainty", "We do not force conclusions when evidence is limited or contradictory.", "EVIDENCE"],
        ["Corrections", "Report errors; meaningful corrections retain editor, timestamp, and change history.", "ACCOUNTABILITY"],
      ]} />
    </div>
  );
}

function MyCivicsPage() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-card dashboard-wide">
        <MapPin />
        <div><small>SAVED LOCATION</small><h3>Hamilton, Ontario</h3><p>3 jurisdictions · {hamiltonCouncillors.length + 1} municipal · {hamiltonFederal.length} federal MPs indexed</p></div>
        <Link href="/leaders" className="button button-navy">View leaders</Link>
      </div>
      <div className="dashboard-card"><Landmark /><small>NEXT ELECTION</small><h3>October 26, 2026</h3><p>Hamilton municipal & school board</p></div>
      <div className="dashboard-card"><BookOpen /><small>LEARNING PROGRESS</small><h3>4 of 10 modules</h3><p>Continue: How Hamilton City Council works</p></div>
      <div className="dashboard-card"><Heart /><small>PRAYER LIST</small><h3>Mayor + councillors</h3><p>Pray for Hamilton leaders this week</p></div>
      <div className="dashboard-card"><FileCheck2 /><small>SAVED SOURCES</small><h3>hamilton.ca</h3><p>Official municipal records</p></div>
    </div>
  );
}

function AdminPage() {
  return <Cards items={[["Verification queue", "AI-extracted claims await source review.", "RESEARCHER"], ["Hamilton data", `Last verified ${hamiltonMeta.lastVerified}.`, "POLITICAL DATA"]]} />;
}

export default async function InnerPage({ params }: PageProps) {
  const { slug } = await params;
  const section = slug[0];
  const copy = pageCopy[section] ?? pageCopy.about;
  let body;

  if (section === "why-engage") body = <WhyEngagePage />;
  else if (section === "learn") body = <Cards items={learnModules.map(([title, duration, category]) => [title, `Plain-language lesson · ${duration}`, category])} />;
  else if (section === "issues") body = <Cards items={issueGuides.map(([title, detail]) => [title, detail, "ISSUE GUIDE"])} />;
  else if (section === "leaders") body = <LeadersPage detail={slug[1]} />;
  else if (section === "elections") body = <ElectionPage />;
  else if (section === "kingdom-lens") body = <KingdomLensChat jurisdiction="Hamilton, ON" />;
  else if (section === "pray") body = <PrayPage />;
  else if (section === "serve") body = <ServePage />;
  else if (section === "trust") body = <TrustPage />;
  else if (section === "search") body = <GlobalSearch />;
  else if (section === "compare") body = <ComparisonPreview />;
  else if (section === "biblical-principles") body = slug[1]
    ? <Cards items={[[principles.find((p) => p.slug === slug[1])?.name ?? "Principle", principles.find((p) => p.slug === slug[1])?.summary ?? "", "PRINCIPLE"], ["Scripture", principles.find((p) => p.slug === slug[1])?.scripture ?? "", "BIBLICAL TEXT"]]} />
    : <PrincipleCards />;
  else if (section === "my-civics") body = <MyCivicsPage />;
  else if (section === "admin") body = <AdminPage />;
  else if (section === "privacy") body = <Cards items={[["Collect less", "No hidden political profiling.", "PRINCIPLE"], ["Your control", "Export data or delete your account.", "RIGHTS"]]} />;
  else body = <Cards items={[["Truth", "Claims should be accurate and open to correction."], ["Service", "Public authority is stewardship for neighbors."]]} />;

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero">
          <div className="page-width">
            <span className="eyebrow gold-text">{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </div>
        </section>
        <section className="page-body"><div className="page-width">{body}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
