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
  {
    slug: "family-children",
    title: "Family & Children",
    description:
      "Biblical principles for evaluating family, child welfare, education, and household policy—without treating the state as a parent or the family as a fortress.",
    principles: ["Human dignity", "Wise stewardship", "Servant leadership"],
    scripture: "Psalm 127:3 · Deuteronomy 6:6–7 · James 1:27",
    sections: [
      {
        heading: "Why family is a civic issue",
        body: "Households are the first school of love, work, and authority. Public policy on schools, child welfare, housing, and work hours either supports or strains that calling. Christians should care because children are not political mascots—they are image-bearers.",
      },
      {
        heading: "Held in tension",
        body: "Parents have a primary duty to form children (Deuteronomy 6). The state has a duty to restrain abuse and protect the vulnerable (Romans 13; James 1:27). Neither 'the family can do no wrong' nor 'the state knows best' is a Christian slogan.",
      },
      {
        heading: "Questions that clarify",
        body: "Does this policy treat children as persons or as scores? Does it support parents who want to raise children well? Does it protect those in danger without casually dissolving families? What do primary outcomes show—not campaign ads?",
      },
      {
        heading: "Faithful engagement",
        body: "Serve families around you. Learn school-board and municipal levers. Pray for teachers, social workers, and judges. Refuse contempt for parents who make different prudential choices while still telling the truth about harm.",
      },
    ],
  },
  {
    slug: "immigration-stranger",
    title: "Immigration & the Stranger",
    description:
      "How Christians think about borders, welcome, and the stranger—holding justice, mercy, and the rule of law without partisan slogans.",
    principles: ["Human dignity", "Justice & mercy", "Truth & integrity"],
    scripture: "Leviticus 19:33–34 · Hebrews 13:2 · Romans 13:1–4",
    sections: [
      {
        heading: "Two biblical notes at once",
        body: "Scripture commands love for the stranger and sojourner. It also treats governing authorities as servants who restrain disorder. Christians err when they keep only one note: open-ended contempt for migrants, or contempt for any border at all.",
      },
      {
        heading: "Persons, not props",
        body: "Every migrant, official, and neighbour at the border is an image-bearer. Policy debates that dehumanize people—or that ignore victims of trafficking, smuggling, and strained local services—fail a dignity test before they fail a political test.",
      },
      {
        heading: "Questions for any proposal",
        body: "Which level of government controls this? What do official data show about flows, processing, housing, and crime—not viral clips? How are refugees, workers, and unlawful entries distinguished in law? What happens to the vulnerable in the status quo?",
      },
      {
        heading: "How to engage",
        body: "Pray for those who cross borders and those who keep them. Support local welcome that is truthful, not naive. Write the office that actually holds the lever. Kingdom Civics will not baptize a party platform as 'the Christian position' on immigration.",
      },
    ],
  },
  {
    slug: "creation-stewardship",
    title: "Creation & Stewardship",
    description:
      "Land, water, air, and cities as a trust—biblical stewardship for environmental and infrastructure policy without treating nature as a god or a dump.",
    principles: ["Wise stewardship", "Human dignity", "Justice & mercy"],
    scripture: "Genesis 2:15 · Psalm 24:1 · Proverbs 13:22",
    sections: [
      {
        heading: "The earth is the Lord's",
        body: "Creation is gift and trust, not raw material for whoever shouts loudest. Working and keeping the garden (Genesis 2:15) includes how cities zone land, treat water, and budget for infrastructure that outlives one election cycle.",
      },
      {
        heading: "Not a partisan mascot",
        body: "Some treat environmental concern as left-coded; others treat industry as right-coded. Scripture is older than both. Stewardship asks whether we are wasting, poisoning, or hoarding what neighbours—including future ones—need to live.",
      },
      {
        heading: "Questions that clarify",
        body: "What do official environmental and budget documents show? Who bears the cost of pollution or of sudden policy shocks? Are the poor protected? Is the proposal measurable, or is it a slogan? Which level of government actually regulates this?",
      },
      {
        heading: "Practice",
        body: "Learn your city's official plan and water reports. Pray for planners and regulators. Prefer primary science and statutes over influencer reels. Faithful Christians may disagree on instruments while sharing the duty to keep the garden.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Human Dignity",
    description:
      "Biblical principles for evaluating healthcare policy—the sick, the poor, the unborn, and the elderly—without treating medicine as a partisan mascot.",
    principles: ["Human dignity", "Justice & mercy", "Wise stewardship"],
    scripture: "Matthew 25:36 · Luke 10:33–37 · Psalm 82:3–4",
    sections: [
      {
        heading: "Why healthcare is civic discipleship",
        body: "Bodies matter. Access to care, the treatment of the vulnerable, and the ethics of medical power all sit at the intersection of neighbour-love and public authority. Christians cannot outsource these questions to slogans.",
      },
      {
        heading: "Dignity before systems",
        body: "Every patient bears God's image—unborn, elderly, disabled, poor, and opponent. Systems should serve persons, not the reverse. Faithful disagreement about funding models is real; contempt for the sick is not a Christian option.",
      },
      {
        heading: "Questions that clarify",
        body: "Who is left out of care today? What do official health and budget data show? Which level of government actually funds or regulates this? Are conscience protections for clinicians and patients real? What harms would a proposed change create as well as prevent?",
      },
      {
        heading: "How to engage",
        body: "Pray for clinicians, public-health officials, and those waiting for care. Learn the jurisdictional map before advocating. Prefer primary statutes and outcomes over campaign ads. Kingdom Civics will not baptize a party healthcare platform as the gospel.",
      },
    ],
  },
  {
    slug: "work-wages-rest",
    title: "Work, Wages & Rest",
    description:
      "Biblical principles for labour, pay, enterprise, and Sabbath rest in public policy—without baptizing a party economic platform.",
    principles: ["Human dignity", "Justice & mercy", "Wise stewardship"],
    scripture: "Deuteronomy 24:14–15 · Colossians 3:23 · Exodus 20:8–11",
    sections: [
      {
        heading: "Work is more than a GDP line",
        body: "Scripture honours labour, condemns withholding wages, and commands rest. Economic policy that treats people as units of output fails a biblical test—even if it wins an election. Neighbours need work, fair dealing, and a life that is not only production.",
      },
      {
        heading: "Hold several truths together",
        body: "Diligence is good. Exploitation is not. Enterprise can serve neighbours. So can just labour law. Sabbath rest is not laziness; it is a confession that God, not the market or the state, is Lord. Faithful Christians may disagree on instruments—minimum wages, tax design, union law—while sharing these starting points.",
      },
      {
        heading: "Questions that clarify",
        body: "Who cannot find dignified work? Who is overworked without rest? What do official labour and budget data show? Which level of government actually sets this rule? Does the proposal help the poor, or mainly a slogan? What unintended harms would it create?",
      },
      {
        heading: "How to engage",
        body: "Pray for workers, employers, and labour officials. Learn the jurisdictional map. Prefer statutes and outcomes over campaign ads. Kingdom Civics will not baptize a party jobs plan as the gospel. See /issues/poverty-economic-life.",
      },
    ],
  },
  {
    slug: "truth-public-speech",
    title: "Truth, Media & Public Speech",
    description:
      "Biblical principles for public truth-telling, media, and civic speech—without treating every controversy as a holy war.",
    principles: ["Truth & integrity", "Human dignity", "Conscience & worship"],
    scripture: "Exodus 20:16 · Ephesians 4:25 · Proverbs 12:22",
    sections: [
      {
        heading: "Truth is not a team colour",
        body: "Scripture forbids false witness and loves truthful speech. Public life depends on records, testimony, and the possibility of correction. Christians err when they excuse lies because ‘our side’ told them, or when they treat every disputed claim as apostasy.",
      },
      {
        heading: "Media is a power, not a sacrament",
        body: "Outlets, platforms, and influencers shape what neighbours fear and hope. Prefer primary sources, name uncertainty, and refuse to share what you have not checked. Freedom of speech is a civic good; it is not a licence to bear false witness.",
      },
      {
        heading: "Questions that clarify",
        body: "What is the original document? Who benefits if this spreads? What would a fair-minded opponent say? Which level of government actually holds the lever? Am I protecting a person made in God’s image—or performing for a tribe?",
      },
      {
        heading: "How to engage",
        body: "Pray for journalists, clerks, and officials who keep records. Correct yourself in public. Teach your church to slow down before forwarding. See /learn/share-politics-online and /learn/evaluate-political-claims.",
      },
    ],
  },
];

export function getIssueGuide(slug: string): IssueGuide | undefined {
  return issueGuidesContent.find((g) => g.slug === slug);
}
