import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CalendarDays, ExternalLink, Heart, ShieldCheck } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { CivicChecklist } from "@/components/civic-checklist";
import { ElectionCountdown } from "@/components/election-countdown";
import { ComparisonPreview, GlobalSearch, PrincipleCards } from "@/components/home-sections";
import { KingdomLensPage } from "@/components/kingdom-lens-page";
import { MyCivicsDashboard } from "@/components/my-civics-dashboard";
import { ShareButton } from "@/components/share-button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getIssueGuide, issueGuidesContent } from "@/lib/content/issues";
import { getLearnArticle, learnArticles } from "@/lib/content/learn";
import { engagementScriptures, whyEngageReasons } from "@/lib/engagement";
import { allHamiltonLeaders, hamiltonMeta, prayerPrompts, principles } from "@/lib/data";
import { getPrayerOfTheDay } from "@/lib/prayer-day";
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
        <Link href={item.href} className="content-card" key={item.href + item.title}>
          {item.tag && <small>{item.tag}</small>}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span className="text-link">Explore <ArrowRight size={14} /></span>
        </Link>
      ))}
    </div>
  );
}

function LeadersPage({ detail }: { detail?: string }) {
  const official = hamiltonOfficials.find((item) => item.slug === detail);
  const leader = allHamiltonLeaders.find((item) => item.slug === detail);
  if (official && leader) {
    const lensQ = encodeURIComponent(`Who is ${leader.name} and what does the ${official.office} do in Hamilton?`);
    return (
      <div>
        <div className="profile-summary">
          <div className={`avatar avatar-${leader.tone}`}>{leader.initials}</div>
          <div>
            <span className="status-chip live-chip">Live · Official record</span>
            <h2>{leader.name}</h2>
            <p>{leader.office} · {leader.party}</p>
            <p style={{ marginTop: 8, fontSize: 13, color: "var(--stone)" }}>{leader.status}</p>
            {official.contact && <p style={{ marginTop: 6, fontSize: 13 }}>Contact: {official.contact}</p>}
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
        <div className="profile-actions" style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/pray" className="button button-navy">Pray for this leader <Heart size={14} /></Link>
          <Link href={`/kingdom-lens?q=${lensQ}`} className="button button-ghost">Ask Kingdom Lens</Link>
          <ShareButton title={`${leader.name} — Kingdom Civics`} text={`${leader.name}, ${leader.office}`} url={absoluteUrl(`/leaders/${leader.slug}`)} />
          <Link href="/leaders" className="text-link">All Hamilton leaders <ArrowRight size={14} /></Link>
        </div>
      </div>
    );
  }

  if (detail) notFound();

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
  const checklist = [
    "Confirm you are eligible to vote in Hamilton, Ontario.",
    "Verify registration and ID requirements on the City of Hamilton election page.",
    "Find your ward using the official ward lookup tool.",
    "Review candidate information from official nomination records when published.",
    "Vote on election day October 26, 2026 or by approved advance / vote-by-mail methods.",
  ];
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
        <LinkCards
          items={[
            { href: "/leaders/andrea-horwath", title: "Mayor", description: "Citywide office — verify candidates on the official election page.", tag: "OFFICE" },
            { href: "/leaders", title: "Ward Councillor", description: "15 wards across Hamilton — know your current councillor now.", tag: "OFFICE" },
            { href: hamiltonMeta.electionUrl, title: "School Board Trustee", description: "Public & separate boards — confirm details with the City of Hamilton.", tag: "OFFICE" },
          ]}
        />
        <div className="election-checklist" style={{ marginTop: 28 }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 12 }}>What to verify officially</h3>
          <ol style={{ margin: 0, paddingLeft: 18, color: "var(--stone)", lineHeight: 1.7 }}>
            {checklist.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
          <a href={hamiltonMeta.electionUrl} target="_blank" rel="noopener noreferrer" className="button button-navy">
            Official election information <ExternalLink size={14} />
          </a>
          <ShareButton title="Hamilton Election 2026" text="October 26, 2026 municipal & school board election" url={absoluteUrl("/elections")} />
        </div>
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
      <FaqSection faqs={pageFaqs["why-engage"] ?? []} title="Civic engagement FAQ" description="Biblical answers to common questions about faith and public life." />
    </div>
  );
}

function PrayPage() {
  const today = getPrayerOfTheDay();
  return (
    <div>
      <div className="prayer-of-day">
        <small className="eyebrow">PRAYER OF THE DAY</small>
        <h2>{today.title}</h2>
        <p>{today.text}</p>
        <span>{today.scripture}</span>
      </div>
      <div className="scripture-callout">
        <Heart />
        <blockquote>&ldquo;That we may lead a peaceful and quiet life, godly and dignified in every way.&rdquo;</blockquote>
        <span>1 TIMOTHY 2:2</span>
      </div>
      <div className="content-grid" id="prompts">
        {prayerPrompts.map(([title, text, scripture]) => (
          <div className="content-card" key={title}>
            <small>{scripture}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="stack-actions">
        <Link href="#prompts" className="button button-navy">Browse all prompts <ArrowRight size={14} /></Link>
        <Link href="/kingdom-lens?q=How%20should%20Christians%20pray%20for%20leaders" className="button button-ghost">Ask Kingdom Lens</Link>
        <Link href="/my-civics" className="text-link">Track prayer in My Civics <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}

function ServePage() {
  const steps = [
    { tag: "PATHWAY 01", title: "START", body: "Learn how levels of government work where you live—and what each office actually controls.", href: "/learn/levels-of-government" },
    { tag: "PATHWAY 02", title: "SHOW UP", body: "Attend a council, school board, or town hall meeting. Faithful service begins in the room.", href: "/learn/how-government-works" },
    { tag: "PATHWAY 03", title: "SPEAK", body: "Participate in public consultation on planning, budgets, or bylaws with evidence and humility.", href: "/learn/read-a-public-budget" },
    { tag: "PATHWAY 04", title: "SERVE", body: "Volunteer with organizations serving neighbors—or apply for a public board or advisory committee.", href: "/issues/poverty-economic-life" },
    { tag: "PATHWAY 05", title: "DISCERN", body: "Examine leaders and offices through Kingdom principles—truth, dignity, justice, and servant leadership.", href: "/biblical-principles" },
    { tag: "PATHWAY 06", title: "RUN", body: "Considering elected office? Test calling, character, competence, community, and cost—then verify official rules.", href: "/learn/consider-running" },
  ];
  return (
    <div>
      <div className="scripture-callout" style={{ marginBottom: 28 }}>
        <Heart />
        <blockquote>&ldquo;Whoever would be great among you must be your servant.&rdquo;</blockquote>
        <span>MARK 10:43</span>
      </div>
      <LinkCards items={steps.map((s) => ({ href: s.href, title: s.title, description: s.body, tag: s.tag }))} />
      <div className="run-cta" style={{ marginTop: 32 }}>
        <Link href="/learn/consider-running" className="button button-navy">Should I consider running? <ArrowRight size={14} /></Link>
        <Link href="/kingdom-lens?q=Should%20Christians%20consider%20running%20for%20office" className="button button-ghost">Ask Kingdom Lens</Link>
      </div>
      <FaqSection faqs={pageFaqs.serve ?? []} title="Serving in public life" description="Practical questions about Christian civic service and running for office." />
    </div>
  );
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
      <div className="content-grid">
        <div className="content-card" id="sources">
          <small>METHODOLOGY</small>
          <h3>Source standards</h3>
          <p>Tier 1 official records and direct statements receive the greatest weight. Tier 2 reputable reporting requires verification. Social media outrage carries the least weight.</p>
        </div>
        <div className="content-card">
          <small>AI</small>
          <h3>Kingdom Lens constitution</h3>
          <p>Operating principles prohibit fabrication, partisan equivalence, and claiming God endorses a candidate or party.</p>
        </div>
        <div className="content-card">
          <small>EVIDENCE</small>
          <h3>Honest uncertainty</h3>
          <p>We do not force conclusions when evidence is limited or contradictory. Counterpoints are a feature, not a failure.</p>
        </div>
        <div className="content-card" id="corrections">
          <small>ACCOUNTABILITY</small>
          <h3>Corrections</h3>
          <p>Report errors via the Trust Center. Meaningful corrections should retain what changed and why—so trust can be inspected, not assumed.</p>
        </div>
      </div>
      <FaqSection faqs={pageFaqs.trust ?? []} title="Trust & methodology FAQ" description="How Kingdom Civics handles evidence and corrections." />
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <div className="scripture-callout scripture-callout-large">
        <Heart />
        <blockquote>Kingdom first. Always. No party, politician, nation, or movement is synonymous with the Kingdom of God.</blockquote>
        <span>THY KINGDOM NETWORK</span>
      </div>
      <div className="content-grid">
        <div className="content-card"><small>MISSION</small><h3>Christian civic education worldwide</h3><p>Help the Church understand government, discern leadership, pray faithfully, and serve humbly—without partisan endorsements.</p></div>
        <div className="content-card"><small>LIVE NOW</small><h3>Hamilton, Ontario</h3><p>Our first live city with mayor, councillors, MPs, MPPs, and the October 26, 2026 municipal election—linked to official sources.</p></div>
        <div className="content-card"><small>METHOD</small><h3>Scripture · Evidence · Wisdom</h3><p>Kingdom Lens answers questions with citations, Scripture applications, uncertainties, and counterpoints.</p></div>
        <div className="content-card"><small>CREATOR</small><h3>Daniel Ziedins.Design</h3><p>Built with care for the Church. Visit <a href="https://www.danielziedins.design" target="_blank" rel="noopener noreferrer">danielziedins.design</a>.</p></div>
      </div>
      <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <Link href="/trust" className="button button-navy">Visit the Trust Center</Link>
        <Link href="/why-engage" className="button button-ghost">Why engage</Link>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="article-body">
      <section>
        <h2>What we collect</h2>
        <p>Kingdom Civics is designed to collect less. Location or city input is used to look up jurisdictions—not for political profiling or ad targeting. Newsletter “notify me” emails may be stored on your device until a delivery service is connected.</p>
      </section>
      <section>
        <h2>My Civics on this device</h2>
        <p>Learning progress and prayer markers in My Civics are saved in your browser&apos;s local storage. Clearing site data removes them. No account is required.</p>
      </section>
      <section>
        <h2>Your control</h2>
        <p>You can stop using optional features at any time. We do not sell political profiles. For questions about this policy, visit the Trust Center.</p>
      </section>
      <div className="article-cta">
        <Link href="/trust" className="button button-navy">Trust Center <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}

function PrincipleDetailPage({ slug }: { slug: string }) {
  const principle = principles.find((p) => p.slug === slug);
  if (!principle) notFound();
  return (
    <ArticleBody
      scripture={principle.scripture}
      sections={[
        { heading: principle.name, body: principle.summary },
        {
          heading: "How we use this principle",
          body: `When assessing public life, Kingdom Civics treats “${principle.name}” as a biblical starting point—not a partisan scorecard. We look for evidence, note uncertainty, and refuse to claim God endorses a candidate or party.`,
        },
        {
          heading: "Practice it",
          body: "Pray for leaders through this lens. Ask Kingdom Lens how the principle applies to a civic question. Compare claims against primary sources before sharing them.",
        },
      ]}
    />
  );
}

function AdminPage() {
  return (
    <div className="content-grid">
      <div className="content-card"><small>RESEARCHER</small><h3>Verification queue</h3><p>AI-extracted claims await human source review before sensitive assessments publish.</p></div>
      <div className="content-card"><small>POLITICAL DATA</small><h3>Hamilton data</h3><p>Last verified {hamiltonMeta.lastVerified}. Official records remain the source of truth.</p></div>
    </div>
  );
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
    body = <ArticleBody scripture={article.scripture} sections={article.sections} slug={article.slug} />;
  } else if (section === "learn") {
    body = (
      <>
        <LinkCards
          items={learnArticles.map((a) => ({
            href: `/learn/${a.slug}`,
            title: a.title,
            description: a.description,
            tag: `${a.duration} · ${a.category}`,
          }))}
        />
        <FaqSection faqs={pageFaqs.learn ?? []} title="Learn FAQ" description="How Kingdom Civics teaches civic literacy." />
      </>
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
  else if (section === "search") body = <GlobalSearch initialQuery={query?.q ?? ""} />;
  else if (section === "compare") body = <ComparisonPreview />;
  else if (section === "biblical-principles") body = slug[1]
    ? <PrincipleDetailPage slug={slug[1]} />
    : <PrincipleCards />;
  else if (section === "my-civics") body = (
    <>
      <MyCivicsDashboard />
      <div style={{ marginTop: 28 }}>
        <CivicChecklist />
      </div>
    </>
  );
  else if (section === "admin") body = <AdminPage />;
  else if (section === "privacy") body = <PrivacyPage />;
  else if (section === "about") body = <AboutPage />;
  else notFound();

  return (
    <>
      <JsonLd data={pageStructuredData(section, slug, copy)} />
      <SiteHeader />
      <main id="main-content" className="inner-page" tabIndex={-1}>
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
