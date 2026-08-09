import {
  BookOpen,
  Building2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonMeta } from "@/lib/hamilton";

export const navItems = [
  ["Why Engage", "/why-engage"],
  ["Learn", "/learn"],
  ["Issues", "/issues"],
  ["Leaders", "/leaders"],
  ["Elections", "/elections"],
  ["Kingdom Lens", "/kingdom-lens"],
  ["Pray", "/pray"],
  ["Serve", "/serve"],
] as const;

export const impactAreas = [
  { label: "Family", icon: Users },
  { label: "Education", icon: GraduationCap },
  { label: "Housing", icon: Home },
  { label: "Business", icon: Building2 },
  { label: "Healthcare", icon: HeartHandshake },
  { label: "Justice", icon: Scale },
  { label: "Infrastructure", icon: Landmark },
  { label: "Religious freedom", icon: ShieldCheck },
];

export const principles = [
  {
    slug: "truth-integrity",
    name: "Truth & Integrity",
    summary: "Public leadership should be marked by honesty, reliability, and freedom from corrupt gain.",
    scripture: "Proverbs 12:22 · Ephesians 4:25",
    icon: Sparkles,
  },
  {
    slug: "human-dignity",
    name: "Human Dignity",
    summary: "Every person bears God's image and must be treated with inherent worth.",
    scripture: "Genesis 1:27 · James 3:9",
    icon: Users,
  },
  {
    slug: "justice-mercy",
    name: "Justice & Mercy",
    summary: "Government should restrain wrongdoing while protecting the vulnerable without partiality.",
    scripture: "Micah 6:8 · Isaiah 1:17",
    icon: Scale,
  },
  {
    slug: "servant-leadership",
    name: "Servant Leadership",
    summary: "Authority is a stewardship to be exercised with humility for the good of others.",
    scripture: "Mark 10:42–45 · Philippians 2:3–4",
    icon: HandHeart,
  },
  {
    slug: "religious-liberty",
    name: "Conscience & Worship",
    summary: "Human authorities are limited, while ultimate allegiance belongs to God.",
    scripture: "Acts 5:29 · Matthew 22:21",
    icon: ShieldCheck,
  },
  {
    slug: "wise-stewardship",
    name: "Wise Stewardship",
    summary: "Resources, institutions, and creation should be tended responsibly for present and future neighbors.",
    scripture: "Genesis 2:15 · Luke 14:28",
    icon: BookOpen,
  },
];

export const leaders = [
  {
    slug: hamiltonMayor.slug,
    name: hamiltonMayor.name,
    initials: hamiltonMayor.initials,
    office: hamiltonMayor.office,
    party: hamiltonMayor.party ?? "Nonpartisan",
    status: hamiltonMayor.status,
    tone: hamiltonMayor.tone,
    sourceUrl: hamiltonMayor.sourceUrl,
    live: true,
  },
  ...hamiltonCouncillors.slice(0, 2).map((c) => ({
    slug: c.slug,
    name: c.name,
    initials: c.initials,
    office: `${c.office} · ${c.ward}`,
    party: c.party ?? "Nonpartisan",
    status: c.status,
    tone: c.tone,
    sourceUrl: c.sourceUrl,
    live: true,
  })),
  ...hamiltonFederal.slice(0, 1).map((c) => ({
    slug: c.slug,
    name: c.name,
    initials: c.initials,
    office: `${c.office} · ${c.ward}`,
    party: c.party ?? "",
    status: c.status,
    tone: c.tone,
    sourceUrl: c.sourceUrl,
    live: true,
  })),
];

export const allHamiltonLeaders = [
  hamiltonMayor,
  ...hamiltonCouncillors,
  ...hamiltonFederal,
].map((o) => ({
  slug: o.slug,
  name: o.name,
  initials: o.initials,
  office: o.ward ? `${o.office} · ${o.ward}` : o.office,
  party: o.party ?? "Nonpartisan",
  status: o.status,
  tone: o.tone,
  sourceUrl: o.sourceUrl,
  live: true,
}));

export const evidenceMatrix = [
  { principle: "Truth & integrity", note: "Assess documented statements and voting records—not partisan labels.", state: "unclear" },
  { principle: "Human dignity", note: "Review policy evidence on housing, healthcare access, and vulnerable populations.", state: "unclear" },
  { principle: "Care for the vulnerable", note: "Compare primary sources on shelter, poverty, and social services.", state: "unclear" },
  { principle: "Wise stewardship", note: "Examine public budgets and infrastructure decisions with evidence.", state: "unknown" },
];

export const learnModules = [
  ["How government works — a global overview", "10 min", "Civic foundations"],
  ["Levels of government: local, state, and national", "12 min", "Jurisdictions"],
  ["Canadian government structure", "14 min", "Canada"],
  ["U.S. government branches explained", "14 min", "United States"],
  ["How to read a public budget", "18 min", "Public finance"],
  ["How to evaluate political claims", "12 min", "Discernment"],
  ["Why Christians engage in civic life", "9 min", "Biblical framework"],
  ["How Hamilton City Council works", "10 min", "Live city · Hamilton"],
];

export const issueGuides = [
  ["Housing & homelessness", "Local policy · Human dignity · Stewardship"],
  ["Religious liberty", "Conscience · Authority · Neighbor love"],
  ["Education", "Family · Care for children · Responsibility"],
  ["Poverty & economic life", "Justice · Work · Compassion"],
  ["Technology & privacy", "Human dignity · Truth · Accountability"],
];

export const prayerPrompts = [
  ["Wisdom", "Give our leaders wisdom that is pure, peaceable, gentle, and open to reason.", "James 1:5; 3:17"],
  ["Justice", "Help those in authority defend the weak and judge without partiality.", "Psalm 72:1–4"],
  ["Humility", "Guard leaders from pride and form in them a posture of service.", "Micah 6:8"],
  ["Peace", "Grant quiet and peaceful lives marked by godliness and dignity.", "1 Timothy 2:1–2"],
  ["Your city", "Pray for the mayor, councillors, and representatives serving where God has placed you.", "Jeremiah 29:7"],
];

export const footerColumns = [
  {
    title: "Explore",
    links: [["Why Engage", "/why-engage"], ["Learn", "/learn"], ["Issues", "/issues"], ["Leaders", "/leaders"], ["Elections", "/elections"]],
  },
  {
    title: "Practice",
    links: [["Kingdom Lens", "/kingdom-lens"], ["Pray", "/pray"], ["Serve", "/serve"], ["My Civics", "/my-civics"]],
  },
  {
    title: "Trust",
    links: [["Methodology", "/trust"], ["Source standards", "/trust#sources"], ["Corrections", "/trust#corrections"], ["Privacy", "/privacy"]],
  },
] as const;

export { hamiltonMeta };
