import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ExternalLink, FileCheck2, Heart, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { ElectionCountdown } from "@/components/election-countdown";
import { ComparisonPreview, GlobalSearch, PrincipleCards } from "@/components/home-sections";
import { KingdomLensPage } from "@/components/kingdom-lens-page";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getIssueGuide, issueGuidesContent } from "@/lib/content/issues";
import { getLearnArticle, learnArticles } from "@/lib/content/learn";
import { engagementScriptures, whyEngageReasons } from "@/lib/engagement";
import { allHamiltonLeaders, hamiltonMeta, prayerPrompts, principles } from "@/lib/data";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonOfficials, hamiltonProvincial } from "@/lib/hamilton";
import { getDefaultCity } from "@/lib/jurisdictions/registry";
import { globalFaqs, pageFaqs } from "@/lib/seo/faqs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageMetadata, getPageSeo } from "@/lib/seo/pages";
import {
  articleSchema,
  electionEventSchema,
  faqPageSchema,
  howToSchema,
  itemListSchema,
  learningResourceSchema,
  personSchema,
  profilePageSchema,
  softwareApplicationSchema,
  webApiSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/site";

type PageProps = {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<{ q?: string }>;
};

export async function generateStaticParams() {
  return [
    ...hamiltonOfficials.map((o) => ({ slug: ["leaders", o.slug] })),
    ...principles.map((p) => ({ slug: ["biblical-principles", p.slug] })),
    ...learnArticles.map((a) => ({ slug: ["learn", a.slug] })),
    ...issueGuidesContent.map((g) => ({ slug: ["issues", g.slug] })),
    { slug: ["cities", "hamilton-on"] },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = slug[0];

  if (section === "leaders" && slug[1]) {
    const leader = hamiltonOfficials.find((item) => item.slug === slug[1]);
    if (leader) {
      return buildPageMetadata({
        title: `${leader.name} — ${leader.office} | Hamilton, Ontario`,
        description: `${leader.name} serves as ${leader.office}${leader.ward ? ` (${leader.ward})` : ""} in Hamilton, Ontario. Official record, role, and source links from Kingdom Civics.`,
        path: `/leaders/${leader.slug}`,
        keywords: [leader.name, leader.office, "Hamilton Ontario", leader.party ?? "nonpartisan"],
      });
    }
  }

  if (section === "biblical-principles" && slug[1]) {
    const principle = principles.find((item) => item.slug === slug[1]);
    if (principle) {
      return buildPageMetadata({
        title: `${principle.name} — Biblical Principle for Public Life`,
        description: `${principle.summary} Scripture: ${principle.scripture}.`,
        path: `/biblical-principles/${principle.slug}`,
        keywords: [principle.name, "biblical principles government", principle.scripture],
        type: "article",
      });
    }
  }

  if (section === "learn" && slug[1]) {
    const article = getLearnArticle(slug[1]);
    if (article) {
      return buildPageMetadata({
        title: article.title,
        description: article.description,
        path: `/learn/${article.slug}`,
        keywords: [article.category, "Christian civic education", article.title],
        type: "article",
      });
    }
  }

  if (section === "issues" && slug[1]) {
    const guide = getIssueGuide(slug[1]);
    if (guide) {
      return buildPageMetadata({
        title: `${guide.title} — Christian Civic Issue Guide`,
        description: guide.description,
        path: `/issues/${guide.slug}`,
        keywords: [...guide.principles, guide.title, "Christian policy"],
        type: "article",
      });
    }
  }

  if (section === "cities" && slug[1] === "hamilton-on") {
    return buildPageMetadata({
      title: "Hamilton, Ontario — Live Civic Data Hub",
      description: `Live officials, election dates, and official source links for Hamilton, ON. Mayor ${hamiltonMayor.name}, councillors, MPs, and October 26, 2026 election.`,
      path: "/cities/hamilton-on",
      keywords: ["Hamilton Ontario", "Hamilton city council", "Hamilton election 2026"],
    });
  }

  return getPageMetadata(section);
}

function pageStructuredData(section: string, slug: string[], copy: ReturnType<typeof getPageSeo>) {
  const faqs = [...(pageFaqs[section] ?? []), ...globalFaqs.slice(0, 3)];
  const base = webPageSchema({
    title: copy.title,
    description: copy.description,
    path: slug[1] ? `/${section}/${slug[1]}` : copy.path,
  });

  if (section === "why-engage") {
    return [base, articleSchema(copy), faqPageSchema(pageFaqs["why-engage"] ?? [])];
  }
  if (section === "leaders" && slug[1]) {
    const leader = hamiltonOfficials.find((item) => item.slug === slug[1]);
    return leader ? [base, personSchema(leader), profilePageSchema(leader)] : [base, faqPageSchema(pageFaqs.leaders ?? [])];
  }
  if (section === "leaders") {
    return [
      base,
      itemListSchema({
        name: "Hamilton Elected Officials",
        items: hamiltonOfficials.map((leader) => ({
          name: leader.name,
          url: absoluteUrl(`/leaders/${leader.slug}`),
          description: `${leader.office}${leader.ward ? ` · ${leader.ward}` : ""}`,
        })),
      }),
      faqPageSchema(pageFaqs.leaders ?? []),
    ];
  }
  if (section === "elections") {
    return [
      base,
      electionEventSchema(),
      faqPageSchema(pageFaqs.elections ?? []),
      howToSchema({
        name: "How to vote in Hamilton's municipal election",
        description: "Verify registration, ID, and voting methods with official election authorities.",
        path: "/elections",
        steps: [
          "Confirm you are eligible to vote in Hamilton, Ontario.",
          "Verify registration and ID requirements on the City of Hamilton election page.",
          "Find your ward using the official ward lookup tool.",
          "Review candidate information from official nomination records.",
          "Vote on election day October 26, 2026 or by approved advance/vote-by-mail methods.",
        ],
      }),
    ];
  }
  if (section === "kingdom-lens") {
    return [base, softwareApplicationSchema(), webApiSchema(), faqPageSchema(pageFaqs["kingdom-lens"] ?? [])];
  }
  if (section === "learn" && slug[1]) {
    const article = getLearnArticle(slug[1]);
    return article
      ? [
          base,
          learningResourceSchema({ title: article.title, description: article.description, path: `/learn/${article.slug}` }),
          articleSchema({ title: article.title, description: article.description, path: `/learn/${article.slug}` }),
        ]
      : [base];
  }
  if (section === "issues" && slug[1]) {
    const guide = getIssueGuide(slug[1]);
    return guide
      ? [base, articleSchema({ title: guide.title, description: guide.description, path: `/issues/${guide.slug}` })]
      : [base];
  }
  if (section === "biblical-principles") {
    return [
      base,
      itemListSchema({
        name: "Biblical Principles for Public Life",
        items: principles.map((principle) => ({
          name: principle.name,
          url: absoluteUrl(`/biblical-principles/${principle.slug}`),
          description: principle.summary,
        })),
      }),
    ];
  }

  return faqs.length ? [base, faqPageSchema(faqs)] : [base];
}

function pageBreadcrumbs(section: string, slug: string[]) {
  const crumbs: Array<{ label: string; href?: string }> = [{ label: "Home", href: "/" }];
  const copy = getPageSeo(section);
  const sectionLabel = copy.title.split("—")[0]?.trim() ?? copy.title;

  if (slug[1]) {
    crumbs.push({ label: sectionLabel, href: copy.path });
    if (section === "leaders") {
      const leader = hamiltonOfficials.find((item) => item.slug === slug[1]);
      if (leader) crumbs.push({ label: leader.name, href: `/leaders/${leader.slug}` });
    } else if (section === "biblical-principles") {
      const principle = principles.find((item) => item.slug === slug[1]);
      if (principle) crumbs.push({ label: principle.name, href: `/biblical-principles/${principle.slug}` });
    } else if (section === "learn") {
      const article = getLearnArticle(slug[1]);
      if (article) crumbs.push({ label: article.title, href: `/learn/${article.slug}` });
    } else if (section === "issues") {
      const guide = getIssueGuide(slug[1]);
      if (guide) crumbs.push({ label: guide.title, href: `/issues/${guide.slug}` });
    } else if (section === "cities") {
      crumbs.push({ label: "Hamilton, Ontario", href: "/cities/hamilton-on" });
    }
  } else {
    crumbs.push({ label: sectionLabel, href: copy.path });
  }

  return crumbs;
}

function LinkCards({ items }: { items: Array<{ href: string; title: string; description: string; tag?: string }> }) {
  return (
    <div className="content-grid">
      {items.map((item) => (
        <Link href={item.href} className="content-card" key={item.href}>
          {item.tag && <small>{item.tag}</small>}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span className="text-link">Explore <ArrowRight size={14} /></span>
        </Link>
      ))}
    </div>
  );
}

function Cards({ items }: { items: Array<[string, string, string?]> }) {
  return (
    <LinkCards
      items={items.map(([title, description, tag]) => ({
        href: `/search?q=${encodeURIComponent(title)}`,
        title,
        description,
        tag,
      }))}
    />
  );
}

function LeadersPage({ detail }: { detail?: string }) {
  const official = hamiltonOfficials.find((item) => item.slug === detail);
  const leader = allHamiltonLeaders.find((item) => item.slug === detail);
  if (official && leader) {
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
        <div className="content-grid">
          <div className="content-card"><small>OFFICIAL ROLE</small><h3>{leader.status}</h3><p>Verified from City of Hamilton or parliamentary records. Kingdom Civics does not evaluate faith or worth.</p></div>
          <div className="content-card"><small>JURISDICTION</small><h3>{official.level}</h3><p>{official.ward ? `${official.ward} · Hamilton, Ontario` : "Hamilton, Ontario"}</p></div>
          <div className="content-card"><small>LAST VERIFIED</small><h3>{hamiltonMeta.lastVerified}</h3><p>Policy assessments require separate evidence review.</p></div>
        </div>
        <div className="scripture-callout" style={{ marginTop: 24 }}>
          <Heart />
          <blockquote>Pray for {leader.name.split(" ").pop()} and all in authority—leaders you agree with and leaders you disagree with.</blockquote>
          <span>1 TIMOTHY 2:1–2</span>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/kingdom-lens" className="button button-navy">Ask Kingdom Lens about this role <ArrowRight size={14} /></Link>
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
      <div className="leaders-section-label"><span className="eyebrow">PROVINCIAL MPPs</span></div>
      <div className="content-grid">
        {hamiltonProvincial.map((c) => (
          <Link href={`/leaders/${c.slug}`} className="content-card" key={c.slug}>
            <small>LIVE · {c.party}</small><h3>{c.name}</h3><p>{c.office} · {c.ward}</p>
            <span className="text-link">View profile <ArrowRight size={14} /></span>
          </Link>
        ))}
      </div>
      <FaqSection faqs={pageFaqs.leaders ?? []} title="Hamilton leaders FAQ" description="Common questions about Hamilton elected officials." />
    </>
  );
}

function ElectionPage() {
  return (
    <div className="election-layout">
      <div className="election-main">
        <span className="status-chip live-chip">Live · City of Hamilton</span>
        <h2>2026 Hamilton Municipal & School Board Election</h2>
        <ElectionCountdown />
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
      <div style={{ gridColumn: "1 / -1", marginTop: 24 }}>
        <FaqSection faqs={pageFaqs.elections ?? []} title="Hamilton election FAQ" description="Official election information and voting guidance." />
      </div>
    </div>
  );
}

function CityHubPage() {
  const city = getDefaultCity();
  return (
    <div>
      <span className="status-chip live-chip">Live · First city worldwide</span>
      <h2>{city.name}, {city.region}</h2>
      <p>{city.tagline}</p>
      <div className="content-grid" style={{ marginTop: 24 }}>
        <Link href="/leaders" className="content-card"><small>LIVE</small><h3>Leaders</h3><p>Mayor, councillors, MPs, MPPs with official links</p></Link>
        <Link href="/elections" className="content-card"><small>2026</small><h3>Election</h3><p>October 26, 2026 municipal & school board</p></Link>
        <Link href="/learn/hamilton-city-council" className="content-card"><small>LEARN</small><h3>City Council</h3><p>How Hamilton municipal government works</p></Link>
        <Link href="/kingdom-lens" className="content-card"><small>AI</small><h3>Kingdom Lens</h3><p>Ask civic questions with sources</p></Link>
      </div>
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

export default async function InnerPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : undefined;
  const section = slug[0];
  const copy = getPageSeo(section);
  let body;

  if (section === "why-engage") body = <WhyEngagePage />;
  else if (section === "learn" && slug[1]) {
    const article = getLearnArticle(slug[1]);
    if (!article) notFound();
    body = <ArticleBody scripture={article.scripture} sections={article.sections} />;
  } else if (section === "learn") {
    body = (
      <LinkCards
        items={learnArticles.map((a) => ({
          href: `/learn/${a.slug}`,
          title: a.title,
          description: a.description,
          tag: `${a.duration} · ${a.category}`,
        }))}
      />
    );
  } else if (section === "issues" && slug[1]) {
    const guide = getIssueGuide(slug[1]);
    if (!guide) notFound();
    body = <ArticleBody scripture={guide.scripture} sections={guide.sections} />;
  } else if (section === "issues") {
    body = (
      <LinkCards
        items={issueGuidesContent.map((g) => ({
          href: `/issues/${g.slug}`,
          title: g.title,
          description: g.description,
          tag: "ISSUE GUIDE",
        }))}
      />
    );
  } else if (section === "cities" && slug[1] === "hamilton-on") body = <CityHubPage />;
  else if (section === "cities") notFound();
  else if (section === "leaders") body = <LeadersPage detail={slug[1]} />;
  else if (section === "elections") body = <ElectionPage />;
  else if (section === "kingdom-lens") body = <KingdomLensPage searchParams={query} />;
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
      <JsonLd data={pageStructuredData(section, slug, copy)} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero">
          <div className="page-width">
            <Breadcrumbs items={pageBreadcrumbs(section, slug)} />
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
