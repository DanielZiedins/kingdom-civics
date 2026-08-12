export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kingdomcivics.org";

export const SITE_NAME = "Kingdom Civics";
export const SITE_TAGLINE = "Seek Truth. Discern Wisely. Serve Humbly.";

export const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const DEFAULT_DESCRIPTION =
  "Global Christian civic education for every nation. Use Kingdom Lens AI to examine leaders through Jesus’ Kingdom principles, learn how government works, pray faithfully, get involved—and discern whether to serve or run for office.";

export const CREATOR = {
  name: "Daniel Ziedins.Design",
  url: "https://www.danielziedins.design",
} as const;

export const PARENT_ORG = {
  name: "Thy Kingdom Network",
  url: SITE_URL,
} as const;

export const SITE_KEYWORDS = [
  "Christian civic education",
  "global Christian citizenship",
  "biblical principles government worldwide",
  "pray for government leaders",
  "Hamilton Ontario mayor",
  "Hamilton city councillors",
  "Hamilton municipal election 2026",
  "Andrea Horwath Hamilton",
  "Hamilton MPs",
  "civic discipleship",
  "Christian citizenship Canada",
  "how government works",
  "biblical voting guide",
  "Christian political engagement global",
  "civic education for churches",
  "government education church",
  "seek welfare of the city",
  "Kingdom Lens civic AI",
  "Christians running for office",
  "discern political leaders biblically",
  "servant leadership public office",
  "nonpartisan Christian politics",
  "public leadership prayer",
  "Hamilton city council",
  "Ontario civic education",
] as const;

export const GEO_FOCUS = {
  city: "Global",
  region: "Worldwide",
  country: "International",
  countryCode: "INT",
} as const;

export const HAMILTON_GEO = {
  city: "Hamilton",
  region: "Ontario",
  country: "Canada",
  countryCode: "CA",
} as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}
