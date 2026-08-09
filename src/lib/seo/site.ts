export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingdom-civics.vercel.app";

export const SITE_NAME = "Kingdom Civics";
export const SITE_TAGLINE = "Seek Truth. Discern Wisely. Serve Humbly.";

export const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const DEFAULT_DESCRIPTION =
  "Christian civic education for Hamilton, Ontario and beyond. Live public records, biblical principles, prayer resources, election guides, and Kingdom Lens AI research—helping believers understand government, discern leadership, and serve humbly.";

export const CREATOR = {
  name: "Daniel Ziedins",
  url: "https://danielziedins.com",
} as const;

export const PARENT_ORG = {
  name: "Thy Kingdom Network",
  url: SITE_URL,
} as const;

export const SITE_KEYWORDS = [
  "Christian civic education",
  "Christian political engagement",
  "biblical principles government",
  "pray for government leaders",
  "Hamilton Ontario mayor",
  "Hamilton city councillors",
  "Hamilton municipal election 2026",
  "Andrea Horwath Hamilton",
  "Hamilton MPs",
  "civic discipleship",
  "Christian citizenship Canada",
  "government education church",
  "seek welfare of the city",
  "Kingdom Lens civic AI",
  "nonpartisan Christian politics",
  "public leadership prayer",
  "Hamilton city council",
  "Ontario civic education",
] as const;

export const GEO_FOCUS = {
  city: "Hamilton",
  region: "Ontario",
  country: "Canada",
  countryCode: "CA",
} as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}
