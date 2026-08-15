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
  {
    slug: "poverty-economic-life",
    title: "Poverty & Economic Life",
    description:
      "A Christian framework for evaluating poverty, work, wages, and economic policy—justice, compassion, and honest evidence.",
    principles: ["Justice & mercy", "Human dignity", "Wise stewardship"],
    scripture: "Proverbs 31:8–9 · Deuteronomy 15:7–11",
    sections: [
      {
        heading: "Why economic life is a civic concern",
        body: "Budgets, taxes, labour rules, and social programs shape whether neighbours can work with dignity, raise families, and escape poverty. These decisions span municipal, provincial, and federal levels—so faithful engagement begins by mapping jurisdiction before advocacy.",
      },
      {
        heading: "Biblical starting points",
        body: "Scripture holds together concern for the poor, the dignity of work, honest scales, and generosity without partiality. Christians may disagree on mechanisms (tax rates, welfare design, market regulation) while sharing a refusal to ignore the vulnerable or baptize any economic ideology as the gospel.",
      },
      {
        heading: "Questions that clarify",
        body: "Who bears the cost? Who benefits? What does longitudinal data show? Are incentives aligned with human dignity? Does rhetoric treat opponents as enemies or neighbours? Trace claims to budgets and statutes—not viral clips.",
      },
      {
        heading: "How to engage",
        body: "Pray for finance ministers, city budget committees, and local agencies. Learn your city's budget calendar. Use Kingdom Lens to clarify which level of government controls a given program, then verify with official sources.",
      },
    ],
  },
  {
    slug: "technology-privacy",
    title: "Technology & Privacy",
    description:
      "Biblical principles for digital governance—truth, human dignity, accountability, and limits on surveillance power.",
    principles: ["Human dignity", "Truth & integrity", "Wise stewardship"],
    scripture: "Proverbs 11:1 · Psalm 139:1–4",
    sections: [
      {
        heading: "Why tech policy matters for discipleship",
        body: "Cities and nations increasingly regulate data, AI, platforms, and surveillance. These choices affect free speech, religious practice, parental rights, and neighbour love online. Christians should engage with clarity—not fear or uncritical tech optimism.",
      },
      {
        heading: "Dignity before data",
        body: "People are not raw material for platforms or governments. Human dignity implies limits on how persons are profiled, scored, or manipulated. Truth-telling requires resisting deepfakes, propaganda, and opaque automated decisions that shape civic life.",
      },
      {
        heading: "Questions for leaders",
        body: "What data is collected and why? Who audits algorithms? Can citizens challenge automated decisions? How are children protected? Does policy prefer transparency over convenience theater?",
      },
      {
        heading: "Faithful posture",
        body: "Pray for wisdom for regulators and tech leaders. Learn before sharing. Prefer primary documents over outrage. Kingdom Civics will not reduce complex tech policy to partisan scorecards.",
      },
    ],
  },
  {
    slug: "justice-mercy",
    title: "Criminal Justice & Mercy",
    description:
      "Biblical principles for evaluating policing, courts, prisons, and reform—justice without partiality, mercy without naivety.",
    principles: ["Justice & mercy", "Human dignity", "Truth & integrity"],
    scripture: "Micah 6:8 · Isaiah 1:17 · Proverbs 31:8–9",
    sections: [
      {
        heading: "Why justice systems matter to discipleship",
        body: "Policing, prosecution, courts, and corrections shape whether neighbours experience safety, fairness, and hope. Christians called to do justice and love mercy cannot ignore how public systems treat both victims and offenders—or how rhetoric can replace evidence.",
      },
      {
        heading: "Biblical tensions held together",
        body: "Scripture affirms restraining evil, protecting the vulnerable, truthful testimony, and limits on revenge. Mercy does not erase accountability; justice does not erase the image of God in every person. Faithful Christians may disagree on specific reforms while sharing these starting points.",
      },
      {
        heading: "Questions that clarify",
        body: "What do official crime and clearance data show? Who is harmed by the status quo? What outcomes do proposed reforms claim—and how will we measure them? Are victims heard? Are due process and equal protection real in practice?",
      },
      {
        heading: "How to engage",
        body: "Pray for officers, judges, prosecutors, defence counsel, and those in custody. Attend public safety consultations. Learn which level of government controls which lever. Use Kingdom Lens for framing—then verify with primary sources before advocating.",
      },
    ],
  },
];

export function getIssueGuide(slug: string): IssueGuide | undefined {
  return issueGuidesContent.find((g) => g.slug === slug);
}
