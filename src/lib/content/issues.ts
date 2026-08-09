export type IssueGuide = {
  slug: string;
  title: string;
  description: string;
  principles: string[];
  scripture: string;
  sections: Array<{ heading: string; body: string }>;
};

export const issueGuidesContent: IssueGuide[] = [
  {
    slug: "housing-homelessness",
    title: "Housing & Homelessness",
    description:
      "Biblical principles for evaluating housing policy—human dignity, justice, stewardship, and care for the vulnerable.",
    principles: ["Human dignity", "Justice & mercy", "Wise stewardship"],
    scripture: "Isaiah 1:17 · Proverbs 31:8–9",
    sections: [
      {
        heading: "Why housing is a civic issue",
        body: "Where people live shapes health, education, family stability, and dignity. Zoning, rent policy, shelter funding, and development approvals are decided by elected officials at municipal and provincial levels. Christians called to love neighbours cannot ignore how public policy affects housing access.",
      },
      {
        heading: "Biblical framework",
        body: "Scripture commands concern for the poor, the stranger, and those without secure shelter (Isaiah 1:17; Matthew 25). Human dignity (Genesis 1:27) means every person deserves safe housing—not as a political slogan, but as a moral starting point for evaluating policy evidence.",
      },
      {
        heading: "Questions to ask",
        body: "Who benefits from this bylaw or budget line? What does the data show about homelessness trends? Are vulnerable populations consulted? Do solutions protect dignity or merely manage visible poverty? Faithful Christians may disagree on specific policies while sharing moral priorities.",
      },
      {
        heading: "Hamilton context",
        body: "Hamilton faces ongoing housing affordability pressures. Track Hamilton City Council votes, provincial housing policy, and federal programs through official sources. Pray for councillors and MPPs making decisions that affect neighbours without stable housing.",
      },
    ],
  },
  {
    slug: "religious-liberty",
    title: "Religious Liberty & Conscience",
    description:
      "How Christians think about freedom of worship, conscience protections, and the limits of state authority.",
    principles: ["Conscience & worship", "Human dignity", "Truth"],
    scripture: "Acts 5:29 · Matthew 22:21",
    sections: [
      {
        heading: "Two truths held together",
        body: "Scripture teaches that ultimate allegiance belongs to God (Acts 5:29) while also calling believers to honor governing institutions within their proper limits (Romans 13; 1 Peter 2). Religious liberty protects conscience, worship, and speech—issues that appear in constitutions and human rights law worldwide.",
      },
      {
        heading: "Freedom for all faiths",
        body: "Christians should advocate for religious freedom principles that protect all faith communities—not only their own. Coerced worship is never faithful. Neither is using state power to silence dissent.",
      },
      {
        heading: "Civic engagement",
        body: "Religious liberty cases require careful legal and factual analysis—not viral outrage. Examine primary sources, court decisions, and policy text. Kingdom Civics distinguishes biblical teaching from prudential judgment on specific legislation.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education & the Next Generation",
    description:
      "Biblical principles for evaluating school governance, curriculum policy, and care for children in public life.",
    principles: ["Human dignity", "Wise stewardship", "Family"],
    scripture: "Proverbs 22:6 · Deuteronomy 6:6–7",
    sections: [
      {
        heading: "Who governs schools?",
        body: "In Canada, education is primarily provincial. School board trustees, MPPs, and ministers of education shape curriculum, funding, and policy. Parents, churches, and citizens can attend board meetings, run for trustee, and advocate with evidence.",
      },
      {
        heading: "Biblical priorities",
        body: "Scripture places enormous weight on teaching the next generation (Deuteronomy 6). Christians disagree on the best policy mechanisms—but share concern for children's dignity, safety, and formation. Evaluate claims with sources, not fear.",
      },
      {
        heading: "Faithful engagement",
        body: "Pray for school board trustees and education officials. Serve on parent councils. Learn how your province structures education before advocating. Hamilton's 2026 municipal election includes school board trustee races—verify details with the City of Hamilton.",
      },
    ],
  },
];

export function getIssueGuide(slug: string): IssueGuide | undefined {
  return issueGuidesContent.find((g) => g.slug === slug);
}
