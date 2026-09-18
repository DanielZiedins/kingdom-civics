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
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonMeta, hamiltonProvincial } from "@/lib/hamilton";

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
  { label: "Family", icon: Users, href: "/issues/family-children" },
  { label: "Education", icon: GraduationCap, href: "/issues/education" },
  { label: "Housing", icon: Home, href: "/issues/housing-homelessness" },
  { label: "Business", icon: Building2, href: "/issues/poverty-economic-life" },
  { label: "Healthcare", icon: HeartHandshake, href: "/issues/healthcare" },
  { label: "Justice", icon: Scale, href: "/issues/justice-mercy" },
  { label: "Infrastructure", icon: Landmark, href: "/issues/creation-stewardship" },
  { label: "Religious freedom", icon: ShieldCheck, href: "/issues/religious-liberty" },
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
  ...hamiltonProvincial,
].map((o) => ({
  slug: o.slug,
  name: o.name,
  initials: o.initials,
  office: o.ward ? `${o.office} · ${o.ward}` : o.office,
  party: o.party ?? "Nonpartisan",
  status: o.status,
  tone: o.tone,
  sourceUrl: o.sourceUrl,
  contact: o.contact,
  live: true,
}));

export const evidenceMatrix = [
  { principle: "Truth & integrity", note: "Assess documented statements and voting records—not partisan labels.", state: "unclear" },
  { principle: "Human dignity", note: "Review policy evidence on housing, healthcare access, and vulnerable populations.", state: "unclear" },
  { principle: "Care for the vulnerable", note: "Compare primary sources on shelter, poverty, and social services.", state: "unclear" },
  { principle: "Wise stewardship", note: "Examine public budgets and infrastructure decisions with evidence.", state: "unknown" },
];

export const learnModules = [
  ["How government works — a global overview", "10 min", "Civic foundations", "/learn/how-government-works"],
  ["Levels of government", "12 min", "Jurisdictions", "/learn/levels-of-government"],
  ["Canadian government structure", "14 min", "Canada", "/learn/canadian-government"],
  ["US government structure", "14 min", "United States", "/learn/us-government"],
  ["How to read a public budget", "15 min", "Public finance", "/learn/read-a-public-budget"],
  ["How to evaluate political claims", "12 min", "Discernment", "/learn/evaluate-political-claims"],
  ["Should Christians consider running?", "14 min", "Public service", "/learn/consider-running"],
  ["Talking politics in church", "12 min", "Church & culture", "/learn/talk-politics-in-church"],
  ["How to contact your representative", "8 min", "Practice", "/learn/contact-your-representative"],
  ["How to attend a council meeting", "9 min", "Practice", "/learn/attend-a-council-meeting"],
  ["How to vote with a clear conscience", "11 min", "Discernment", "/learn/vote-with-conscience"],
  ["How to pray for an election", "8 min", "Prayer", "/learn/pray-for-an-election"],
  ["How to prepare for a municipal election", "9 min", "Elections", "/learn/prepare-for-municipal-election"],
  ["What to bring to the poll", "7 min", "Elections", "/learn/what-to-bring-to-the-poll"],
  ["Discern local candidates", "9 min", "Discernment", "/learn/discern-local-candidates"],
  ["Sharing politics online", "8 min", "Discernment", "/learn/share-politics-online"],
  ["School boards and Christian families", "10 min", "Education", "/learn/school-boards"],
  ["How Hamilton City Council works", "10 min", "Live city · Hamilton", "/learn/hamilton-city-council"],
  ["Why Christians engage in civic life", "9 min", "Biblical framework", "/why-engage"],
] as const;

export const issueGuides = [
  ["Housing & homelessness", "Local policy · Human dignity · Stewardship", "/issues/housing-homelessness"],
  ["Religious liberty", "Conscience · Authority · Neighbor love", "/issues/religious-liberty"],
  ["Education", "Family · Care for children · Responsibility", "/issues/education"],
  ["Poverty & economic life", "Justice · Work · Compassion", "/issues/poverty-economic-life"],
  ["Technology & privacy", "Human dignity · Truth · Accountability", "/issues/technology-privacy"],
  ["Justice & mercy", "Courts · Policing · Vulnerable neighbors", "/issues/justice-mercy"],
  ["Family & children", "Household · Dignity · Responsibility", "/issues/family-children"],
  ["Immigration & the stranger", "Welcome · Justice · Rule of law", "/issues/immigration-stranger"],
  ["Creation & stewardship", "Land · Water · Future neighbours", "/issues/creation-stewardship"],
  ["Healthcare", "Dignity · Mercy · Stewardship of bodies", "/issues/healthcare"],
  ["Work, wages & rest", "Labour · Dignity · Sabbath", "/issues/work-wages-rest"],
  ["Truth, media & speech", "False witness · Primary sources · Neighbour-love", "/issues/truth-public-speech"],
  ["Disability, access & civic life", "Dignity · Accessibility · Showing up", "/issues/disability-access"],
] as const;

export const prayerPrompts = [
  ["Wisdom", "Give our leaders wisdom that is pure, peaceable, gentle, and open to reason.", "James 1:5; 3:17"],
  ["Justice", "Help those in authority defend the weak and judge without partiality.", "Psalm 72:1–4"],
  ["Humility", "Guard leaders from pride and form in them a posture of service.", "Micah 6:8"],
  ["Peace", "Grant quiet and peaceful lives marked by godliness and dignity.", "1 Timothy 2:1–2"],
  ["Your city", "Pray for the mayor, councillors, and representatives serving where God has placed you.", "Jeremiah 29:7"],
  ["Truth", "Guard public speech from lies, slander, and viral falsehoods. Let leaders and citizens love the truth.", "Ephesians 4:25"],
  ["The vulnerable", "Give those in authority courage to defend the poor, the stranger, the widow, and the child.", "Proverbs 31:8–9"],
  ["Unity", "Keep the church from splitting over prudential ballots. Teach us to disagree without contempt.", "Ephesians 4:3"],
];

export const footerColumns = [
  {
    title: "Explore",
    links: [["Why Engage", "/why-engage"], ["Learn", "/learn"], ["Scripture", "/scripture"], ["Glossary", "/glossary"], ["For Churches", "/for-churches"]],
  },
  {
    title: "Practice",
    links: [["Start here", "/start"], ["Kingdom Lens", "/kingdom-lens"], ["Pray", "/pray"], ["Serve", "/serve"], ["Find representatives", "/find-representatives"]],
  },
  {
    title: "Trust",
    links: [["Methodology", "/trust"], ["Source standards", "/trust#sources"], ["Corrections", "/trust#corrections"], ["Privacy", "/privacy"]],
  },
] as const;

export { hamiltonMeta };
