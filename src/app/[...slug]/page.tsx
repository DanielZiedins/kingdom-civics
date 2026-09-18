import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CalendarDays, ExternalLink, Heart, ShieldCheck } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { ChurchKit } from "@/components/church-kit";
import { CivicChecklist } from "@/components/civic-checklist";
import { ElectionCountdown } from "@/components/election-countdown";
import { FindRepresentatives } from "@/components/find-representatives";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ScriptureIndex } from "@/components/scripture-index";
import { StartHere } from "@/components/start-here";
import { ComparisonPreview, PrincipleCards } from "@/components/home-sections";
import { MyCivicsDashboard } from "@/components/my-civics-dashboard";
import { GlossaryExplorer } from "@/components/glossary-explorer";
import { LeadersDirectory } from "@/components/leaders-directory";
import { ShareButton } from "@/components/share-button";
import { FaqSection } from "@/components/seo/faq-section";
import { glossaryTerms } from "@/lib/content/glossary";
import { hamiltonElection } from "@/lib/content/election";
import { PollReady } from "@/components/poll-ready";
import { VotingCalendar } from "@/components/voting-calendar";
import { getIssueGuide, issueGuidesContent } from "@/lib/content/issues";
import { getLearnArticle, learnArticles } from "@/lib/content/learn";
import { civicScriptures, scriptureAnchor } from "@/lib/content/scripture";
import { startSteps } from "@/lib/content/start";
import { engagementScriptures, whyEngageReasons } from "@/lib/engagement";
import { allHamiltonLeaders, hamiltonMeta, prayerPrompts, principles } from "@/lib/data";
import { getPrayerOfTheDay } from "@/lib/prayer-day";
import { hamiltonOfficials } from "@/lib/hamilton";
import { getAllCities, getCity } from "@/lib/jurisdictions/registry";
import { globalFaqs, pageFaqs } from "@/lib/seo/faqs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageMetadata, getPageSeo } from "@/lib/seo/pages";
import {
  articleSchema,
  courseSchema,
  definedTermSetSchema,
  electionEventSchema,
  faqPageSchema,
  howToSchema,
  itemListSchema,
  learningResourceSchema,
  personSchema,
  profilePageSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/site";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const core = [
    "why-engage",
    "learn",
    "issues",
    "leaders",
    "elections",
    "pray",
    "serve",
    "trust",
    "compare",
    "biblical-principles",
    "my-civics",
    "about",
    "privacy",
    "glossary",
    "for-churches",
    "find-representatives",
    "scripture",
    "start",
    "admin",
  ].map((section) => ({ slug: [section] }));

  return [
    ...core,
    ...hamiltonOfficials.map((o) => ({ slug: ["leaders", o.slug] })),
    ...principles.map((p) => ({ slug: ["biblical-principles", p.slug] })),
    ...learnArticles.map((a) => ({ slug: ["learn", a.slug] })),
    ...issueGuidesContent.map((g) => ({ slug: ["issues", g.slug] })),
    ...getAllCities().map((c) => ({ slug: ["cities", c.slug] })),
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
        geo: "hamilton",
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

  if (section === "cities" && slug[1]) {
    const city = getCity(slug[1]);
    if (city) {
      return buildPageMetadata({
        title: `${city.name}, ${city.region} — Christian Civic Hub`,
        description: city.status === "live"
          ? `Live officials, election dates, and official source links for ${city.name}, ${city.region}.`
          : `${city.tagline}. Explore global civic education and ask Kingdom Lens while we prepare live data.`,
        path: `/cities/${city.slug}`,
        keywords: [city.name, city.region, "Christian civic education", city.country],
        geo: city.slug === "hamilton-on" ? "hamilton" : undefined,
      });
    }
  }

  if (section === "glossary") {
    return buildPageMetadata({
      title: "Civic Glossary — Christian Civic Terms Explained",
      description: "Plain-language definitions of ward, bylaw, riding, nomination, jurisdiction, and more—for Christians learning public life.",
      path: "/glossary",
      keywords: ["civic glossary", "what is a ward", "bylaw meaning", "Christian civic education"],
    });
  }

  return getPageMetadata(section);
}

function pageStructuredData(section: string, slug: string[], copy: { title: string; description: string; path: string }) {
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
          "Find your ward with the City's official map and bring valid ID—a voter card is not required.",
          "Read certified candidates from the official City of Hamilton list.",
          "Vote at a community poll (Sep 26–27, 10 a.m.–6 p.m.), an advance poll, or on Monday, October 26, 2026. Any poll in your ward.",
          "There are no online or mail-in ballots for this municipal election—verify proxy rules if you cannot attend.",
        ],
      }),
    ];
  }
  if (section === "learn" && slug[1]) {
    const article = getLearnArticle(slug[1]);
    if (!article) return [base];
    const data = [
      base,
      learningResourceSchema({ title: article.title, description: article.description, path: `/learn/${article.slug}` }),
      articleSchema({ title: article.title, description: article.description, path: `/learn/${article.slug}` }),
    ];
    const howTos: Record<string, { name: string; steps: string[] }> = {
      "contact-your-representative": {
        name: "How to contact your representative",
        steps: [
          "Find the office that actually controls the issue using official lookup tools.",
          "State who you are, where you live, and the specific decision you are writing about.",
          "Ask clearly, cite one or two primary sources, and keep the note under a page.",
          "Write with respect and without claiming God voted your way.",
        ],
      },
      "attend-a-council-meeting": {
        name: "How to attend a council meeting",
        steps: [
          "Read the official agenda and note the item you care about.",
          "Check delegation or public-comment deadlines with the clerk.",
          "Listen more than you speak; address the chair and stay on the item.",
          "Pray for the officials you watched and follow the vote in the minutes.",
        ],
      },
      "pray-for-an-election": {
        name: "How to pray for an election",
        steps: [
          "List the offices on the ballot so prayer is specific.",
          "Pray for voters, election officials, candidates you oppose, and church unity.",
          "Ask for wisdom, integrity of speech, protection of the vulnerable, and a peaceable process.",
          "After results, pray for the winners by name and return to neighbour-love.",
        ],
      },
      "vote-with-conscience": {
        name: "How to vote with a clear conscience",
        steps: [
          "Name biblical starting points you will not abandon.",
          "Examine platforms and primary sources—not only a favourite feed.",
          "Pray for wisdom and know which offices are on this ballot.",
          "Vote without contempt, then pray for whoever wins.",
        ],
      },
      "prepare-for-municipal-election": {
        name: "How to prepare for Hamilton's municipal election",
        steps: [
          "Confirm eligibility and your ward using official City of Hamilton tools.",
          "Amend the voters list in person with ID if needed, by October 24, 2026.",
          "Read certified candidates from the City—not a forwarded graphic.",
          "Vote at a community poll, advance poll, or on October 26, then pray for whoever wins.",
        ],
      },
      "share-politics-online": {
        name: "How to share politics online without harming your neighbour",
        steps: [
          "Ask whether the claim is a primary source or a recap.",
          "Name which office actually controls the issue.",
          "Refuse to post what you would not say to a neighbour's face.",
          "Correct yourself in the same thread if you shared something false.",
        ],
      },
      "what-to-bring-to-the-poll": {
        name: "What to bring to vote in Hamilton",
        steps: [
          "Bring valid identification. A voter information card is helpful, not required.",
          "Confirm your ward with the City's official Find my Ward tool.",
          "Vote at any poll in your ward during published hours.",
          "If you are missing from the list, ask to be added at the poll with ID.",
        ],
      },
      "discern-local-candidates": {
        name: "How to discern local candidates without a scorecard",
        steps: [
          "Name the offices on your ballot: mayor, ward councillor, and school board trustees.",
          "Read certified candidates from the City of Hamilton—not a forwarded graphic.",
          "Ask what each office actually controls and examine primary sources.",
          "Pray for wisdom, then vote without contempt or claiming God marked your ballot.",
        ],
      },
    };
    const howto = howTos[article.slug];
    if (howto) {
      data.push(
        howToSchema({
          name: howto.name,
          description: article.description,
          path: `/learn/${article.slug}`,
          steps: howto.steps,
        }),
      );
    }
    return data;
  }
  if (section === "learn") {
    return [
      base,
      courseSchema({
        name: "Kingdom Civics Academy",
        description: copy.description,
        path: "/learn",
        lessons: learnArticles.map((a) => ({ name: a.title, url: absoluteUrl(`/learn/${a.slug}`) })),
      }),
      faqPageSchema(pageFaqs.learn ?? []),
    ];
  }
  if (section === "glossary") {
    return [base, definedTermSetSchema(glossaryTerms), faqPageSchema(pageFaqs.glossary ?? [])];
  }
  if (section === "for-churches") {
    return [
      base,
      howToSchema({
        name: "How churches can teach civic discipleship",
        description: "A four-week outline for pastors and small groups—without partisan pulpits.",
        path: "/for-churches",
        steps: [
          "Teach why Christians engage using Jeremiah 29:7 and 1 Timothy 2.",
          "Map how government works at local, regional, and national levels.",
          "Practice discernment with biblical principles and primary sources.",
          "Pray, serve, or consider public office as neighbour-love.",
        ],
      }),
      faqPageSchema(pageFaqs["for-churches"] ?? []),
    ];
  }
  if (section === "find-representatives") {
    return [
      base,
      howToSchema({
        name: "How to find who represents you",
        description: "Use official government lookup tools, then pray and learn the office.",
        path: "/find-representatives",
        steps: [
          "Choose your country.",
          "Open the official government lookup tool.",
          "Write down the names and offices.",
          "Pray for those leaders and learn what the office actually controls.",
        ],
      }),
      faqPageSchema(pageFaqs["find-representatives"] ?? []),
    ];
  }
  if (section === "scripture") {
    return [
      base,
      itemListSchema({
        name: "Bible verses about government and civic life",
        items: civicScriptures.map((item) => ({
          name: item.ref,
          url: absoluteUrl(`/scripture#${scriptureAnchor(item.ref)}`),
          description: item.application,
        })),
      }),
      faqPageSchema(pageFaqs.scripture ?? []),
    ];
  }
  if (section === "start") {
    return [
      base,
      howToSchema({
        name: "How to start Christian civic discipleship",
        description: "A five-step path: learn government, find representatives, pray, discern, and serve.",
        path: "/start",
        steps: startSteps.map((s) => `${s.title}: ${s.body}`),
      }),
      faqPageSchema(pageFaqs.start ?? []),
    ];
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

function heroCopy(section: string, slug: string[]) {
  if (section === "learn" && slug[1]) {
    const article = getLearnArticle(slug[1]);
    if (article) {
      return { eyebrow: article.category.toUpperCase(), title: article.title, description: article.description, path: `/learn/${article.slug}` };
    }
  }
  if (section === "issues" && slug[1]) {
    const guide = getIssueGuide(slug[1]);
    if (guide) {
      return { eyebrow: "ISSUE GUIDE", title: guide.title, description: guide.description, path: `/issues/${guide.slug}` };
    }
  }
  if (section === "biblical-principles" && slug[1]) {
    const principle = principles.find((item) => item.slug === slug[1]);
    if (principle) {
      return { eyebrow: "BIBLICAL PRINCIPLE", title: principle.name, description: principle.summary, path: `/biblical-principles/${principle.slug}` };
    }
  }
  if (section === "leaders" && slug[1]) {
    const leader = hamiltonOfficials.find((item) => item.slug === slug[1]);
    if (leader) {
      return {
        eyebrow: "HAMILTON OFFICIAL",
        title: leader.name,
        description: `${leader.office}${leader.ward ? ` · ${leader.ward}` : ""} — official record with source links.`,
        path: `/leaders/${leader.slug}`,
      };
    }
  }
  if (section === "cities" && slug[1]) {
    const city = getCity(slug[1]);
    if (city) {
      return {
        eyebrow: city.status === "live" ? "LIVE CITY HUB" : "CITY COMING SOON",
        title: `${city.name}, ${city.region}`,
        description: city.tagline,
        path: `/cities/${city.slug}`,
      };
    }
  }
  return getPageSeo(section);
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
      const city = getCity(slug[1]);
      crumbs.push({ label: city ? `${city.name}, ${city.region}` : "Cities", href: city ? `/cities/${city.slug}` : undefined });
    }
  } else {
    crumbs.push({ label: sectionLabel, href: copy.path });
  }

  return crumbs;
}

function LinkCards({ items }: { items: Array<{ href: string; title: string; description: string; tag?: string; external?: boolean }> }) {
  return (
    <div className="content-grid">
      {items.map((item) =>
        item.external ? (
          <a href={item.href} className="content-card" key={item.href + item.title} target="_blank" rel="noopener noreferrer">
            {item.tag && <small>{item.tag}</small>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="text-link">Explore <ArrowRight size={14} /></span>
          </a>
        ) : (
          <Link href={item.href} className="content-card" key={item.href + item.title}>
            {item.tag && <small>{item.tag}</small>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="text-link">Explore <ArrowRight size={14} /></span>
          </Link>
        ),
      )}
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
  return <LeadersDirectory />;
}

function ElectionPage() {
  const checklist = [
    "Confirm you are an eligible elector in Hamilton (citizen, 18+, resident/owner/tenant or spouse, not prohibited).",
    "Find your ward with the City’s official map. You may vote at any poll in that ward.",
    "Bring valid ID. A voter information card is helpful, not required.",
    "If needed, amend the voters list in person with ID by October 24, 2026—or at a poll.",
    "Read certified candidates from the City of Hamilton, not a forwarded graphic.",
    "Vote at a community poll (Sep 26–27, 10 a.m.–6 p.m.), an advance poll, or on Monday, October 26.",
  ];
  return (
    <div className="election-layout">
      <div className="election-main">
        <span className="status-chip live-chip">Live · City of Hamilton · Verified {hamiltonMeta.lastVerified}</span>
        <h2>2026 Hamilton Municipal & School Board Election</h2>
        <ElectionCountdown date={hamiltonElection.date} label="Hamilton voting day" />
        <div className="election-date">
          <CalendarDays />
          <div>
            <small>ELECTION DAY</small>
            <strong>{hamiltonElection.weekdayLabel}</strong>
            <span>{hamiltonElection.offices}</span>
          </div>
        </div>
        <VotingCalendar />
        <PollReady />
        <div className="election-key-dates">
          <article>
            <small>VOTERS LIST</small>
            <strong>Amend in person by {hamiltonElection.votersListAmendUntil}</strong>
            <p>City Clerk or a municipal service centre, with ID. You can also be added at a poll.</p>
          </article>
          <article>
            <small>CITY HALL</small>
            <strong>Special voting {hamiltonElection.cityHallSpecial}</strong>
            <p>The City has listed special voting at City Hall. Confirm hours on hamilton.ca before you go.</p>
          </article>
          <article>
            <small>IMPORTANT</small>
            <strong>No online or mail-in ballots</strong>
            <p>This municipal election is in-person. Proxy voting has official rules—verify before assuming.</p>
          </article>
        </div>
        <h3 className="election-subhead">School boards on this ballot</h3>
        <ul className="election-boards">
          {hamiltonElection.schoolBoards.map((board) => (
            <li key={board}>{board}</li>
          ))}
        </ul>
        <h3 className="election-subhead">City voter outreach remaining</h3>
        <ul className="election-outreach">
          {hamiltonElection.outreach.map((event) => (
            <li key={event.place}>
              <strong>{event.date}</strong>
              <span>{event.place} · {event.hours}</span>
            </li>
          ))}
        </ul>
        <p className="election-outreach-note">Confirm every outreach hour and location on hamilton.ca. Kingdom Civics does not replace the Clerk.</p>
        <LinkCards
          items={[
            { href: hamiltonElection.urls.findWard, title: "Find my ward", description: "Official City of Hamilton ward lookup. You may vote at any poll in your ward.", tag: "OFFICIAL", external: true },
            { href: hamiltonElection.urls.eligibility, title: "Voter eligibility", description: "Official rules for who may vote in Hamilton's municipal election.", tag: "OFFICIAL", external: true },
            { href: hamiltonElection.urls.candidates, title: "Certified candidates", description: "Nominations closed August 21. Read the City's certified list—not a campaign graphic.", tag: "OFFICIAL", external: true },
            { href: hamiltonElection.urls.voters, title: "Where and how to vote", description: "Community polls, advance polls, election day, and proxy information from the City Clerk.", tag: "OFFICIAL", external: true },
            { href: "/learn/what-to-bring-to-the-poll", title: "What to bring to the poll", description: "ID, hours, any-poll-in-your-ward, and what the City has actually said.", tag: "LESSON" },
            { href: "/learn/discern-local-candidates", title: "Discern local candidates", description: "Offices, jurisdiction, and official lists—without an influencer scorecard.", tag: "LESSON" },
            { href: "/learn/prepare-for-municipal-election", title: "Prepare with a Kingdom-first checklist", description: "Eligibility, calendar, and discernment without baptizing a ballot.", tag: "LESSON" },
            { href: "/learn/vote-with-conscience", title: "Vote with a clear conscience", description: "Principles, evidence, prayer—and honesty about disagreement.", tag: "LESSON" },
            { href: "/learn/pray-for-an-election", title: "Pray through the election", description: "Intercede for voters, officials, opponents, and whoever wins.", tag: "PRAYER" },
          ]}
        />
        <div className="election-checklist" style={{ marginTop: 28 }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 12 }}>What to verify officially</h3>
          <ol style={{ margin: 0, paddingLeft: 18, color: "var(--stone)", lineHeight: 1.7 }}>
            {checklist.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
          <a href={hamiltonElection.urls.hub} target="_blank" rel="noopener noreferrer" className="button button-navy">
            Official election information <ExternalLink size={14} />
          </a>
          <ShareButton title="Hamilton Election 2026" text="October 26, 2026 municipal & school board election" url={absoluteUrl("/elections")} />
        </div>
      </div>
      <aside className="source-aside">
        <ShieldCheck />
        <h3>Use official information</h3>
        <p>
          The Clerk&apos;s office is at City Hall, 71 Main Street West. Call {hamiltonElection.clerkPhone} or email {hamiltonElection.clerkEmail}.
          Kingdom Civics does not publish unofficial candidate scorecards.
        </p>
        <Link href="/trust">How we verify election data <ArrowRight size={14} /></Link>
      </aside>
      <div style={{ gridColumn: "1 / -1", marginTop: 24 }}>
        <FaqSection faqs={pageFaqs.elections ?? []} title="Hamilton election FAQ" description="Official election information and voting guidance." />
      </div>
    </div>
  );
}

function CityHubPage({ citySlug }: { citySlug: string }) {
  const city = getCity(citySlug);
  if (!city) notFound();

  if (city.status === "live") {
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

  return (
    <div className="city-coming-soon">
      <span className="status-chip">Coming soon</span>
      <h2>{city.name}, {city.region}</h2>
      <p>{city.tagline}. Live official directories are rolling out city by city. Meanwhile, learn how government works, examine Kingdom principles, and ask Kingdom Lens about civic life in {city.name}.</p>
      <div className="content-grid" style={{ marginTop: 24 }}>
        {city.exampleQuestions?.map((q) => (
          <Link key={q} href={`/kingdom-lens?q=${encodeURIComponent(q)}`} className="content-card">
            <small>ASK LENS</small>
            <h3>{q}</h3>
            <p>Get a sourced starting answer—then verify with official records.</p>
          </Link>
        ))}
        <Link href="/learn/levels-of-government" className="content-card"><small>LEARN</small><h3>Levels of government</h3><p>Map who decides what before you advocate.</p></Link>
        <Link href="/learn/consider-running" className="content-card"><small>SERVE</small><h3>Considering running?</h3><p>A Kingdom-first discernment guide for public office.</p></Link>
      </div>
      <div className="stack-actions">
        <Link href={`/kingdom-lens?q=${encodeURIComponent(`How should Christians engage civically in ${city.name}?`)}`} className="button button-navy">Ask about {city.name}</Link>
        <Link href="/cities/hamilton-on" className="button button-ghost">See live Hamilton hub</Link>
      </div>
    </div>
  );
}

function GlossaryPage() {
  return <GlossaryExplorer />;
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
        <Link href="/learn/pray-for-an-election" className="button button-navy">How to pray for an election <ArrowRight size={14} /></Link>
        <Link href="/kingdom-lens?q=How%20should%20Christians%20pray%20for%20leaders" className="button button-ghost">Ask Kingdom Lens</Link>
        <Link href="/scripture" className="text-link">Scripture on government <ArrowRight size={14} /></Link>
      </div>
      <FaqSection faqs={pageFaqs.pray ?? []} title="Prayer for leaders FAQ" description="How to intercede without baptizing a ballot." />
    </div>
  );
}

function ServePage() {
  const steps = [
    { tag: "PATHWAY 01", title: "START", body: "Learn how levels of government work where you live—and what each office actually controls.", href: "/learn/levels-of-government" },
    { tag: "PATHWAY 02", title: "SHOW UP", body: "Attend a council, school board, or town hall meeting. Faithful service begins in the room.", href: "/learn/attend-a-council-meeting" },
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
      kind="principle"
      slug={principle.slug}
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

export default async function InnerPage({ params }: PageProps) {
  const { slug } = await params;
  const section = slug[0];
  const copy = heroCopy(section, slug);
  const path = "path" in copy && copy.path ? copy.path : getPageSeo(section).path;
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
    body = <ArticleBody scripture={guide.scripture} sections={guide.sections} slug={guide.slug} kind="issue" />;
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
  } else if (section === "cities" && slug[1]) body = <CityHubPage citySlug={slug[1]} />;
  else if (section === "cities") notFound();
  else if (section === "glossary") body = <GlossaryPage />;
  else if (section === "for-churches") body = <ChurchKit />;
  else if (section === "find-representatives") body = <FindRepresentatives />;
  else if (section === "scripture") body = <ScriptureIndex />;
  else if (section === "start") body = <StartHere />;
  else if (section === "leaders") body = <LeadersPage detail={slug[1]} />;
  else if (section === "elections") body = <ElectionPage />;
  else if (section === "pray") body = <PrayPage />;
  else if (section === "serve") body = <ServePage />;
  else if (section === "trust") body = <TrustPage />;
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
    <InnerPageShell
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      path={path}
      breadcrumbs={pageBreadcrumbs(section, slug)}
      jsonLd={pageStructuredData(section, slug, copy)}
    >
      {body}
    </InnerPageShell>
  );
}
