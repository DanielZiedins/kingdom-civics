import type { LensConfidence, LensResponse } from "@/lib/ai/constitution";
import { whyEngageReasons } from "@/lib/engagement";
import {
  findHamiltonOfficial,
  hamiltonCouncillors,
  hamiltonFederal,
  hamiltonMayor,
  hamiltonMeta,
  hamiltonProvincial,
} from "@/lib/hamilton";

type KnowledgeChunk = {
  id: string;
  tags: string[];
  answer: string;
  principles: string[];
  scripture: Array<{ reference: string; application: string }>;
  sources: LensResponse["sources"];
  uncertainties: string[];
  counterpoints: string[];
  confidence: LensConfidence;
};

const chunks: KnowledgeChunk[] = [
  {
    id: "hamilton-mayor",
    tags: ["mayor", "horwath", "andrea", "who", "running", "hamilton", "leader"],
    answer: `Hamilton's mayor is Andrea Horwath, elected in the October 2022 municipal election and serving as the city's chief elected official. She represents the city publicly, helps set council priorities, and—since July 2023—holds provincial "strong mayor" powers in Hamilton. Council as a whole still approves the budget, bylaws, and major policy. For City service questions, the official contact line is 905-546-2489.`,
    principles: ["Servant leadership", "Limits of authority", "Accountability"],
    scripture: [{ reference: "Mark 10:42–45", application: "Public authority should be exercised as service, not domination." }],
    sources: [
      { id: "hamilton-mayor-page", title: "Mayor Andrea Horwath", publisher: "City of Hamilton", url: hamiltonMayor.sourceUrl, tier: 1 },
    ],
    uncertainties: ["2026 mayoral candidates will be confirmed through the official nomination process before the October 26 election."],
    counterpoints: ["Strong mayor powers increase executive influence; residents should still track council votes, not only mayoral announcements."],
    confidence: "strong",
  },
  {
    id: "hamilton-council",
    tags: ["councillor", "council", "ward", "hamilton", "local", "represent"],
    answer: `Hamilton City Council has 15 ward councillors plus the mayor (16 members total). Each councillor represents one ward and votes on bylaws, the budget, planning, and committee recommendations. Current councillors include Maureen Wilson (Ward 1), Cameron Kroetsch (Ward 2), Nrinder Nann (Ward 3), Tammy Hwang (Ward 4), and eleven others through Ward 15 (Ted McMeekin). Use the City's "Find My Councillor" tool on hamilton.ca to match your address to a ward.`,
    principles: ["Accountability", "Neighbor love", "Wise stewardship"],
    scripture: [{ reference: "Proverbs 11:14", application: "Sound governance benefits from many counselors and transparent deliberation." }],
    sources: [
      { id: "hamilton-councillors", title: "City Councillors", publisher: "City of Hamilton", url: hamiltonMeta.councilUrl, tier: 1 },
    ],
    uncertainties: ["Ward boundaries and councillor assignments should be confirmed with the official ward lookup before contacting your representative."],
    counterpoints: ["Municipal offices control some issues deeply—but not healthcare, criminal law, or most taxation."],
    confidence: "strong",
  },
  {
    id: "hamilton-election",
    tags: ["election", "vote", "2026", "october", "municipal", "nomination", "hamilton"],
    answer: `Hamilton's next municipal and school board election is scheduled for October 26, 2026. Offices typically include mayor, ward councillors, and school board trustees. Registration deadlines, identification requirements, and voting methods must be verified with the City of Hamilton and Elections Ontario—not third-party summaries.`,
    principles: ["Truth", "Civic responsibility", "Peaceful order"],
    scripture: [{ reference: "1 Timothy 2:1–2", application: "Christians can pray for peaceful civic life while participating lawfully in the process." }],
    sources: [
      { id: "hamilton-election", title: "2026 Municipal Election", publisher: "City of Hamilton", url: hamiltonMeta.electionUrl, tier: 1 },
    ],
    uncertainties: ["Declared candidates and final ballot information will emerge through the official nomination period."],
    counterpoints: ["Voting is one form of civic participation; consultation, volunteering, and public service also matter."],
    confidence: "strong",
  },
  {
    id: "mayor-powers",
    tags: ["authority", "power", "control", "mayor", "strong", "budget", "bylaw"],
    answer: `In Hamilton, the mayor chairs council, represents the city, and—under Ontario's strong mayor framework since July 2023—has expanded executive tools. However, council collectively approves the budget and bylaws. The mayor does not unilaterally control schools, hospitals, police policy alone, or federal immigration law. Always distinguish municipal, provincial, and federal jurisdiction.`,
    principles: ["Limits of authority", "Accountability", "Truth"],
    scripture: [{ reference: "Romans 13:1–4", application: "Earthly authority is real but bounded; it is not ultimate." }],
    sources: [
      { id: "hamilton-mayor-powers", title: "Mayoral Decisions & Strong Mayor Powers", publisher: "City of Hamilton", url: "https://www.hamilton.ca/city-council/council-committee/city-council-members/mayor-andrea-horwath", tier: 1 },
    ],
    uncertainties: ["Specific veto or appointment powers should be checked against current provincial regulation and council procedure."],
    counterpoints: ["Executive visibility can overshadow ward councillors who also shape outcomes."],
    confidence: "moderate",
  },
  {
    id: "federal-hamilton",
    tags: ["mp", "federal", "parliament", "commons", "hamilton centre", "stoney creek"],
    answer: `Hamilton is represented federally by Members of Parliament in multiple ridings. As of the 45th Parliament, Hamilton Centre is represented by Aslam Rana (Liberal) and Hamilton East—Stoney Creek by Ned Kuruc (Conservative). MPs debate federal law, federal spending, immigration, national defence, and criminal law. They do not run city zoning or property tax.`,
    principles: ["Rule of law", "Accountability"],
    scripture: [{ reference: "1 Peter 2:13–17", application: "Honor governing institutions while fearing God above all." }],
    sources: [
      { id: "mp-rana", title: "Aslam Rana, MP", publisher: "House of Commons", url: "https://www.ourcommons.ca/MEMBERS/en/aslam-rana(122946)", tier: 1 },
      { id: "mp-kuruc", title: "Ned Kuruc, MP", publisher: "House of Commons", url: "https://www.ourcommons.ca/MEMBERS/en/ned-kuruc(110441)", tier: 1 },
    ],
    uncertainties: ["Other Hamilton-area ridings (Mountain, Flamborough-Glanbrook, West-Ancaster-Dundas) should be confirmed on ourcommons.ca for your address."],
    counterpoints: ["Party affiliation describes a political context, not a person's standing before God."],
    confidence: "moderate",
  },
  {
    id: "why-christians-engage",
    tags: ["christian", "why", "involve", "politics", "culture", "church", "engage", "participate"],
    answer: `Christians engage in civic life not to equate a party with God's Kingdom, but to love neighbors faithfully in the public square. Scripture calls us to seek the city's welfare (Jeremiah 29:7), pray for leaders (1 Timothy 2:1–2), do justice and love mercy (Micah 6:8), and speak for those without a public voice (Proverbs 31:8–9). Civic participation—learning, praying, serving, consulting, and voting thoughtfully—is one way to steward the time and place God has given us.`,
    principles: ["Neighbor love", "Justice", "Humility", "Kingdom citizenship"],
    scripture: whyEngageReasons.slice(0, 4).map((r) => ({ reference: r.scripture, application: r.quote.slice(0, 120) + "…" })),
    sources: [
      { id: "kc-engagement", title: "Why Christians Engage", publisher: "Kingdom Civics", url: "/why-engage", tier: 2 },
    ],
    uncertainties: ["Prudential policy choices often require wisdom and disagreement among faithful Christians."],
    counterpoints: ["Civic engagement can become idolatrous when politics replaces worship, prayer, or local church faithfulness."],
    confidence: "strong",
  },
  {
    id: "scripture-justice",
    tags: ["scripture", "justice", "bible", "biblical", "mercy", "righteousness"],
    answer: `Scripture joins justice with truth, mercy, impartiality, and special concern for people at risk of exploitation. Key passages include Micah 6:8, Isaiah 1:17, Proverbs 31:8–9, James 2:1–9, and Psalm 72. These establish moral principles for evaluating public life—they do not automatically produce one modern policy program.`,
    principles: ["Justice", "Mercy", "Human dignity", "Impartiality"],
    scripture: [
      { reference: "Micah 6:8", application: "Do justice, love mercy, walk humbly with your God." },
      { reference: "Isaiah 1:17", application: "Learn to do good; seek justice, correct oppression." },
      { reference: "Proverbs 31:8–9", application: "Open your mouth for the mute; judge righteously." },
    ],
    sources: [{ id: "kc-principles", title: "Biblical Principles Framework", publisher: "Kingdom Civics", url: "/biblical-principles", tier: 2 }],
    uncertainties: ["Application to specific bills requires evidence, not proof-texting."],
    counterpoints: ["Justice language is often used politically; definitions should be examined carefully."],
    confidence: "strong",
  },
  {
    id: "pray-leaders",
    tags: ["pray", "prayer", "leader", "authority", "intercede"],
    answer: `Christians are commanded to pray for kings and all in high positions (1 Timothy 2:1–2)—including leaders we disagree with. Prayer should seek wisdom, justice, humility, integrity, and peace. Kingdom Civics encourages prayer that is specific, non-partisan, and rooted in Scripture rather than demonization.`,
    principles: ["Prayer", "Peace", "Humility"],
    scripture: [
      { reference: "1 Timothy 2:1–2", application: "Pray for all in authority that we may live peaceful, dignified lives." },
      { reference: "James 1:5", application: "Ask God for wisdom when discerning complex civic questions." },
    ],
    sources: [{ id: "kc-pray", title: "Prayer Center", publisher: "Kingdom Civics", url: "/pray", tier: 2 }],
    uncertainties: [],
    counterpoints: ["Prayer is not a substitute for truthful research or lawful civic action when needed."],
    confidence: "strong",
  },
];

function scoreChunk(chunk: KnowledgeChunk, question: string): number {
  const q = question.toLowerCase();
  let score = 0;
  for (const tag of chunk.tags) {
    if (q.includes(tag)) score += tag.length > 4 ? 3 : 2;
  }
  if (q.includes("hamilton") && chunk.id.startsWith("hamilton")) score += 5;
  if (q.includes("mayor") && chunk.id.includes("mayor")) score += 4;
  if (q.includes("council") && chunk.id.includes("council")) score += 4;
  if ((q.includes("christian") || q.includes("church")) && chunk.id.includes("christians")) score += 5;
  if (q.includes("scripture") || q.includes("bible")) {
    if (chunk.id.includes("scripture") || chunk.id.includes("christians")) score += 4;
  }
  return score;
}

export function answerKingdomLens(question: string, jurisdiction?: string): LensResponse {
  const official = findHamiltonOfficial(question);
  if (official) {
    return {
      answer: `${official.name} serves as ${official.office}${official.ward ? ` for ${official.ward}` : ""} in Hamilton, Ontario. Status: ${official.status}. This information is drawn from official public records. Kingdom Civics does not evaluate anyone's faith or worth—only documented public roles and evidence.`,
      facts: [{ claim: `${official.name} — ${official.office}`, sourceIds: [official.slug] }],
      sources: [{ id: official.slug, title: official.office, publisher: official.level === "municipal" ? "City of Hamilton" : "Government of Canada / Ontario", url: official.sourceUrl, tier: 1 }],
      biblicalPrinciples: ["Truth", "Accountability", "Prayer for leaders"],
      scripture: [{ reference: "1 Timothy 2:1–2", application: "Pray for those in authority, including leaders you may disagree with." }],
      interpretations: ["Kingdom Civics civic-information methodology"],
      uncertainties: ["Policy positions require separate evidence review—not assumed from office held."],
      counterpoints: ["Holding office does not imply divine endorsement or automatic alignment with biblical principles."],
      lastVerified: hamiltonMeta.lastVerified,
      confidence: "strong",
      disclaimer: "Educational information from official sources. Not a candidate endorsement.",
    };
  }

  const ranked = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, question) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0]?.score ? ranked[0].chunk : chunks[0];
  const second = ranked[1]?.score && ranked[1].score > 2 ? ranked[1].chunk : null;

  let answer = best.answer;
  if (second && jurisdiction?.toLowerCase().includes("hamilton")) {
    answer += ` ${second.answer.split(".")[0]}.`;
  }

  if (!ranked[0]?.score) {
    return {
      answer: "I don't have enough reliable evidence in the current Hamilton dataset to answer that confidently. Try asking about Hamilton's mayor, ward councillors, the October 26, 2026 election, mayor's authority, why Christians engage in civic life, or relevant Scripture.",
      facts: [],
      sources: [{ id: "hamilton-ca", title: "City of Hamilton", publisher: "City of Hamilton", url: hamiltonMeta.officialSite, tier: 1 }],
      biblicalPrinciples: ["Truth", "Humility"],
      scripture: [{ reference: "James 1:5", application: "Ask God for wisdom when evidence is incomplete." }],
      interpretations: ["Kingdom Civics uncertainty-first methodology"],
      uncertainties: ["Your question may require data not yet indexed for Hamilton."],
      counterpoints: [],
      lastVerified: hamiltonMeta.lastVerified,
      confidence: "no_reliable_evidence",
      disclaimer: "Verify important claims using linked official sources.",
    };
  }

  return {
    answer,
    facts: [{ claim: answer.slice(0, 200), sourceIds: best.sources.map((s) => s.id) }],
    sources: best.sources,
    biblicalPrinciples: best.principles,
    scripture: best.scripture,
    interpretations: ["Kingdom Civics transparent biblical-framework methodology"],
    uncertainties: best.uncertainties,
    counterpoints: best.counterpoints,
    lastVerified: hamiltonMeta.lastVerified,
    confidence: best.confidence,
    disclaimer: "This answer informs and equips. It does not endorse a candidate or party.",
  };
}

export function getHamiltonSummary() {
  return {
    mayor: hamiltonMayor,
    councillorCount: hamiltonCouncillors.length,
    federal: hamiltonFederal,
    provincial: hamiltonProvincial,
    meta: hamiltonMeta,
  };
}
