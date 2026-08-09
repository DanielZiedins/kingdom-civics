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
      "Examine housing, education, justice, religious freedom, and more with biblical principles, primary sources, and honest disagreement.",
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
      "Hamilton's October 26, 2026 municipal and school board election: mayor, 15 ward councillors, trustees, and links to official City of Hamilton election information.",
    path: "/elections",
    keywords: [
      "Hamilton election 2026",
      "Hamilton municipal election date",
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
    title: "Serve in Public Life — Christian Pathways to Civic Leadership",
    description:
      "Attend Hamilton council meetings, join consultations, volunteer, apply for boards, or explore elected office as servant leadership.",
    path: "/serve",
    keywords: ["Christian public service", "run for city council", "volunteer Hamilton government"],
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
  });
}
