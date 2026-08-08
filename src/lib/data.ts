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

export const navItems = [
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
    summary: "Every person bears God’s image and must be treated with inherent worth.",
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
    slug: "elena-moreno",
    name: "Elena Moreno",
    initials: "EM",
    office: "Mayor of Harbor City",
    party: "Nonpartisan office",
    status: "Incumbent",
    tone: "gold",
  },
  {
    slug: "marcus-cole",
    name: "Marcus Cole",
    initials: "MC",
    office: "Candidate for Mayor",
    party: "Nonpartisan office",
    status: "Challenger",
    tone: "blue",
  },
  {
    slug: "ruth-okafor",
    name: "Ruth Okafor",
    initials: "RO",
    office: "Ward 4 Councillor",
    party: "Independent",
    status: "Current official",
    tone: "green",
  },
];

export const evidenceMatrix = [
  {
    principle: "Truth & integrity",
    moreno: "Moderate evidence",
    cole: "Limited evidence",
    morenoState: "alignment",
    coleState: "unclear",
  },
  {
    principle: "Human dignity",
    moreno: "Mixed evidence",
    cole: "Moderate evidence",
    morenoState: "tension",
    coleState: "alignment",
  },
  {
    principle: "Care for the vulnerable",
    moreno: "Strong evidence",
    cole: "Contradictory evidence",
    morenoState: "alignment",
    coleState: "tension",
  },
  {
    principle: "Wise stewardship",
    moreno: "Limited evidence",
    cole: "No reliable evidence",
    morenoState: "unclear",
    coleState: "unknown",
  },
];

export const learnModules = [
  ["How local government works", "8 min", "Foundation"],
  ["What a mayor actually controls", "11 min", "Local government"],
  ["How laws are made", "14 min", "Legislative process"],
  ["How to read a public budget", "18 min", "Public finance"],
  ["How to evaluate political claims", "12 min", "Discernment"],
  ["How to contact an official", "6 min", "Take action"],
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
];

export const kingdomLensAnswers: Record<string, string> = {
  mayor:
    "A mayor typically provides executive leadership, helps set council priorities, represents the city publicly, and may appoint members to boards. The exact authority depends on local law. In Harbor City, the charter gives council—not the mayor alone—final authority over budgets and bylaws.",
  compare:
    "The available evidence shows a meaningful difference on housing. Moreno has a recorded vote and a detailed implementation plan; Cole has raised cost and accountability concerns but has not published a complete alternative. This supports a clearer assessment of Moreno’s position, not an endorsement.",
  scripture:
    "Scripture repeatedly joins justice with impartiality, truth, mercy, and care for people at risk of exploitation. Helpful starting points include Micah 6:8, Isaiah 1:17, Proverbs 31:8–9, and James 2:1–9. These establish moral principles but do not prescribe a single modern policy.",
};

export const footerColumns = [
  {
    title: "Explore",
    links: [["Learn", "/learn"], ["Issues", "/issues"], ["Leaders", "/leaders"], ["Elections", "/elections"]],
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
