import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export type PageSeo = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export const pageSeo: Record<string, PageSeo> = {
  "why-engage": {
    eyebrow: "KINGDOM CITIZENS IN PUBLIC LIFE",
    title: "Why Christians Should Engage in Government and Culture",
    description:
      "A biblical case for Christian civic engagement in Canada—love of neighbour, prayer for leaders, pursuit of justice, and humble public service without partisan idolatry.",
    path: "/why-engage",
    keywords: [
      "why Christians should vote",
      "Christian culture engagement",
      "Jeremiah 29:7 civic life",
      "faith and politics Canada",
    ],
  },
  learn: {
    eyebrow: "KINGDOM CIVICS ACADEMY",
    title: "How Government Works — Civic Education for Christians",
    description:
      "Plain-language lessons on municipal, provincial, and federal government—with Hamilton, Ontario examples and biblical framing.",
    path: "/learn",
    keywords: ["how government works Canada", "civic education church", "Hamilton government explained"],
  },
  issues: {
    eyebrow: "ISSUES LIBRARY",
    title: "Christian Perspectives on Public Policy Issues",
    description:
      "Examine housing, education, justice, religious freedom, work, healthcare, and more with biblical principles, primary sources, and honest disagreement.",
    path: "/issues",
    keywords: ["Christian policy issues", "biblical worldview politics", "faith and public policy"],
  },
  leaders: {
    eyebrow: "HAMILTON, ONTARIO",
    title: "Hamilton Leaders — Mayor, Councillors, MPs & MPPs",
    description:
      "Live directory of Hamilton elected officials: Andrea Horwath, ward councillors, federal MPs, and provincial MPP—with official hamilton.ca and parliamentary links.",
    path: "/leaders",
    keywords: [
      "Hamilton mayor",
      "Hamilton councillors list",
      "Hamilton MPs",
      "Andrea Horwath",
      "Hamilton city council members",
    ],
  },
  elections: {
    eyebrow: "OFFICIAL INFORMATION FIRST",
    title: "Hamilton Municipal Election 2026 — Dates & Offices",
    description:
      "Hamilton's October 26, 2026 municipal and school board election: community polls Sep 26–27 (10 a.m.–6 p.m.), advance polls, voter ID, Find my Ward, and official City of Hamilton links.",
    path: "/elections",
    keywords: [
      "Hamilton election 2026",
      "Hamilton municipal election date",
      "Hamilton community polls September 26",
      "what to bring to vote Hamilton",
      "vote Hamilton Ontario",
      "Hamilton mayor election",
    ],
  },
  "kingdom-lens": {
    eyebrow: "SCRIPTURE · EVIDENCE · WISDOM",
    title: "Kingdom Lens — Christian Civic Research Assistant",
    description:
      "Ask Kingdom Lens about government worldwide, biblical principles, Scripture, elections, and live city data. Sourced answers with counterpoints and no endorsements.",
    path: "/kingdom-lens",
    keywords: ["Kingdom Lens", "Christian civic AI", "Hamilton government FAQ", "civic research assistant"],
  },
  pray: {
    eyebrow: "1 TIMOTHY 2:1–2",
    title: "Pray for Government Leaders — Hamilton Prayer Guide",
    description:
      "Scripture-based prayer prompts for Hamilton's mayor, councillors, MPs, and all in authority—leaders you agree with and leaders you disagree with.",
    path: "/pray",
    keywords: ["pray for government leaders", "prayer for mayor", "1 Timothy 2:1-2 prayer guide"],
  },
  serve: {
    eyebrow: "PUBLIC LEADERSHIP IS SERVICE",
    title: "Serve in Public Life — Or Consider Running",
    description:
      "A worldwide pathway for Christians: learn government, show up, speak, serve on boards, discern leaders—and consider elected office as servant leadership.",
    path: "/serve",
    keywords: ["Christian public service", "Christians running for office", "servant leadership politics", "run for city council"],
  },
  trust: {
    eyebrow: "TRANSPARENCY BY DESIGN",
    title: "Trust Center — Methodology & Source Standards",
    description:
      "How Kingdom Civics researches leaders, ranks sources, uses AI, handles theology, surfaces uncertainty, and publishes corrections.",
    path: "/trust",
    keywords: ["Kingdom Civics methodology", "civic fact checking standards", "Christian research transparency"],
  },
  search: {
    eyebrow: "UNIVERSAL SEARCH",
    title: "Search Kingdom Civics",
    description: "Search Hamilton leaders, elections, issues, biblical principles, and Scripture across Kingdom Civics.",
    path: "/search",
    keywords: ["search Hamilton officials", "Kingdom Civics search"],
  },
  compare: {
    eyebrow: "EVIDENCE, NOT ENDORSEMENTS",
    title: "Compare Candidates with Evidence — Not Endorsements",
    description:
      "Review documented alignment, tension, uncertainty, and counter-evidence for public leadership—with source reliability ratings.",
    path: "/compare",
    keywords: ["compare political candidates Christian", "evidence based voting"],
  },
  "biblical-principles": {
    eyebrow: "PRINCIPLES BEFORE POLITICS",
    title: "Biblical Principles for Evaluating Public Leadership",
    description:
      "Six Scripture-linked principles—truth, dignity, justice, servant leadership, conscience, and stewardship—for discerning public life.",
    path: "/biblical-principles",
    keywords: ["biblical principles government", "Christian leadership framework", "Scripture and politics"],
  },
  "my-civics": {
    eyebrow: "YOUR CIVIC HOME",
    title: "My Civics — Your Hamilton Dashboard",
    description: "Save your Hamilton jurisdictions, representatives, elections, learning progress, and prayer list.",
    path: "/my-civics",
    keywords: ["my representatives Hamilton", "civic dashboard"],
  },
  cities: {
    eyebrow: "LIVE CIVIC DATA",
    title: "City Hubs — Christian Civic Education by City",
    description:
      "Explore live public records, officials, and election information for pilot cities—starting with Hamilton, Ontario.",
    path: "/cities/hamilton-on",
    keywords: ["Hamilton civic data", "Christian city guide", "local government directory"],
  },
  privacy: {
    eyebrow: "MINIMUM DATA, MAXIMUM DIGNITY",
    title: "Privacy Policy",
    description: "Kingdom Civics uses location for jurisdiction lookup—not political manipulation or ad profiling.",
    path: "/privacy",
    keywords: ["Kingdom Civics privacy"],
  },
  about: {
    eyebrow: "THY KINGDOM NETWORK",
    title: "About Kingdom Civics",
    description:
      "Kingdom first. Always. We help the Church seek truth, pray faithfully, discern wisely, and serve humbly in public life.",
    path: "/about",
    keywords: ["about Kingdom Civics", "Thy Kingdom Network"],
  },
  glossary: {
    eyebrow: "PLAIN LANGUAGE",
    title: "Civic Glossary — Terms Every Christian Should Know",
    description:
      "Ward, bylaw, riding, nomination, jurisdiction, and more—explained clearly for faithful civic engagement.",
    path: "/glossary",
    keywords: ["civic glossary", "what is a ward", "bylaw definition", "Christian civic terms"],
  },
  "for-churches": {
    eyebrow: "CIVIC DISCIPLESHIP FOR THE CHURCH",
    title: "Civic Education for Churches — Small Groups, Pastors & Prayer",
    description:
      "A free four-week church kit for civic discipleship: lessons, discussion, prayer, and Kingdom Lens—without partisan pulpits or candidate endorsements.",
    path: "/for-churches",
    keywords: [
      "civic education for churches",
      "small group politics Christian",
      "how churches talk about politics",
      "pastor civic engagement guide",
      "Christian church voter education",
    ],
  },
  "find-representatives": {
    eyebrow: "OFFICIAL LOOKUP FIRST",
    title: "Find Who Represents You — Official Government Directories",
    description:
      "Official tools to find your MP, MPP, US Representative, Senator, UK MP, and local councillor—then pray, learn the office, and discern with Kingdom principles.",
    path: "/find-representatives",
    keywords: [
      "find my MP",
      "who is my representative",
      "find my councillor",
      "find my US representative by ZIP",
      "who represents me in government",
    ],
  },
  scripture: {
    eyebrow: "THE WORD BEFORE THE FEED",
    title: "Bible Verses about Government, Voting & Public Life",
    description:
      "Jeremiah 29:7, 1 Timothy 2, Micah 6:8, Romans 13, and more—explained for Christian civic discipleship without partisan proof-texting.",
    path: "/scripture",
    keywords: [
      "bible verses about government",
      "scripture on politics",
      "jeremiah 29:7 meaning civic",
      "what does the bible say about voting",
      "pray for leaders scripture",
    ],
  },
  start: {
    eyebrow: "BEGIN HERE",
    title: "Start Here — Christian Civic Discipleship in Five Steps",
    description:
      "Learn how government works, find who represents you, pray by name, discern with Kingdom Lens, and serve—or consider running—with humility.",
    path: "/start",
    keywords: [
      "how to start civic engagement Christian",
      "Christian citizenship for beginners",
      "civic discipleship steps",
    ],
  },
  admin: {
    eyebrow: "RESEARCH OPERATIONS",
    title: "Verification Workspace",
    description: "Role-based editorial system for evidence review, theology review, and audit history.",
    path: "/admin",
    keywords: [],
  },
};

export function getPageSeo(section: string): PageSeo {
  return pageSeo[section] ?? pageSeo.about;
}

export function getPageMetadata(section: string): Metadata {
  const seo = getPageSeo(section);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    keywords: seo.keywords,
    noIndex: section === "admin",
    geo: section === "leaders" || section === "elections" ? "hamilton" : undefined,
  });
}
