import type { LensConfidence, LensResponse } from "@/lib/ai/constitution";
import { whyEngageReasons } from "@/lib/engagement";
import {
  findHamiltonOfficial,
  hamiltonCouncillors,
  hamiltonFederal,
  hamiltonMayor,
  hamiltonMeta,
  matchesHamilton,
} from "@/lib/hamilton";
import { getCity, matchCityFromInput } from "@/lib/jurisdictions/registry";

type KnowledgeChunk = {
  id: string;
  scope: "global" | "hamilton" | "city";
  tags: string[];
  answer: string;
  principles: string[];
  scripture: Array<{ reference: string; application: string }>;
  sources: LensResponse["sources"];
  uncertainties: string[];
  counterpoints: string[];
  confidence: LensConfidence;
};

const globalChunks: KnowledgeChunk[] = [
  {
    id: "what-is-kingdom-civics",
    scope: "global",
    tags: ["kingdom", "civics", "what", "platform", "about", "mission"],
    answer:
      "Kingdom Civics is a global Christian civic education platform. We help believers understand government at every level, discern public leadership with evidence, pray faithfully for those in authority, and serve neighbors humbly—without partisan endorsements. Hamilton, Ontario is our first live city; biblical principles and Kingdom Lens work worldwide.",
    principles: ["Truth", "Neighbor love", "Kingdom citizenship"],
    scripture: [{ reference: "Jeremiah 29:7", application: "Seek the welfare of the city where God has placed you." }],
    sources: [{ id: "kc-about", title: "About Kingdom Civics", publisher: "Kingdom Civics", url: "/about", tier: 2 }],
    uncertainties: ["Live official data is expanding city by city."],
    counterpoints: ["Civic education is not the same as the gospel itself—both matter."],
    confidence: "strong",
  },
  {
    id: "why-christians-engage",
    scope: "global",
    tags: ["christian", "why", "involve", "politics", "culture", "church", "engage", "participate", "vote", "civic"],
    answer:
      "Christians engage in civic life not to equate a party with God's Kingdom, but to love neighbors faithfully in the public square. Scripture calls us to seek the city's welfare (Jeremiah 29:7), pray for leaders (1 Timothy 2:1–2), do justice and love mercy (Micah 6:8), and speak for those without a public voice (Proverbs 31:8–9). Civic participation—learning, praying, serving, consulting, and voting thoughtfully—is faithful stewardship wherever God has placed you.",
    principles: ["Neighbor love", "Justice", "Humility", "Kingdom citizenship"],
    scripture: whyEngageReasons.slice(0, 4).map((r) => ({ reference: r.scripture, application: r.quote.slice(0, 120) + "…" })),
    sources: [{ id: "kc-engage", title: "Why Christians Engage", publisher: "Kingdom Civics", url: "/why-engage", tier: 2 }],
    uncertainties: ["Prudential policy choices often require wisdom and disagreement among faithful Christians."],
    counterpoints: ["Civic engagement can become idolatrous when politics replaces worship or local church faithfulness."],
    confidence: "strong",
  },
  {
    id: "scripture-government",
    scope: "global",
    tags: ["scripture", "bible", "government", "authority", "rulers", "passages", "verses"],
    answer:
      "Scripture speaks to government throughout: Romans 13:1–7 (governing authorities as God's servants), 1 Peter 2:13–17 (honor institutions), 1 Timothy 2:1–2 (pray for leaders), Matthew 22:21 (render to Caesar and God), Acts 5:29 (obey God when human law conflicts), Jeremiah 29:7 (seek the city's welfare), Micah 6:8 (justice and mercy), and Proverbs 31:8–9 (speak for the vulnerable). These establish principles—they do not automatically produce one modern policy program.",
    principles: ["Truth", "Justice", "Limits of authority", "Prayer"],
    scripture: [
      { reference: "Romans 13:1–7", application: "Earthly authority is real but bounded—not ultimate." },
      { reference: "Acts 5:29", application: "When human law conflicts with divine command, obey God." },
      { reference: "1 Timothy 2:1–2", application: "Pray for all in authority, including those you disagree with." },
    ],
    sources: [{ id: "kc-principles", title: "Biblical Principles Framework", publisher: "Kingdom Civics", url: "/biblical-principles", tier: 2 }],
    uncertainties: ["Application to specific bills requires evidence, not proof-texting."],
    counterpoints: ["Biblical passages about government have been misused to justify both passivity and partisan crusades."],
    confidence: "strong",
  },
  {
    id: "scripture-justice",
    scope: "global",
    tags: ["scripture", "justice", "bible", "biblical", "mercy", "righteousness", "fairness"],
    answer:
      "Scripture joins justice with truth, mercy, impartiality, and special concern for people at risk of exploitation. Key passages include Micah 6:8, Isaiah 1:17, Proverbs 31:8–9, James 2:1–9, and Psalm 72. Christians should evaluate public policy by whether it protects human dignity, restrains wrongdoing, and cares for the vulnerable—not by partisan branding alone.",
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
    scope: "global",
    tags: ["pray", "prayer", "leader", "authority", "intercede", "government", "president", "prime minister"],
    answer:
      "Christians are commanded to pray for kings and all in high positions (1 Timothy 2:1–2)—including leaders we disagree with, in every nation. Prayer should seek wisdom, justice, humility, integrity, and peace. Kingdom Civics encourages prayer that is specific, non-partisan, and rooted in Scripture rather than demonization.",
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
  {
    id: "levels-of-government",
    scope: "global",
    tags: ["levels", "local", "municipal", "provincial", "state", "federal", "national", "who decides", "jurisdiction"],
    answer:
      "Most democracies divide power across levels. Local/municipal government typically handles zoning, local services, transit, and property taxes. State/provincial government handles education, healthcare frameworks, highways, and regional law. National/federal government handles defense, immigration, criminal law, currency, and foreign policy. Christians should learn which level controls each issue before advocating—confusing levels leads to wasted effort and bad policy.",
    principles: ["Wise stewardship", "Truth", "Accountability"],
    scripture: [{ reference: "Luke 14:28", application: "Count the cost—understand structures before acting." }],
    sources: [{ id: "kc-learn", title: "Civic Education", publisher: "Kingdom Civics", url: "/learn", tier: 2 }],
    uncertainties: ["Exact divisions vary by country (Canada, US, UK, etc.)."],
    counterpoints: ["Some issues genuinely span multiple levels and require coordinated advocacy."],
    confidence: "strong",
  },
  {
    id: "canada-government",
    scope: "global",
    tags: ["canada", "canadian", "parliament", "ottawa", "provincial", "municipal", "mp", "mpp"],
    answer:
      "Canada has three main levels: municipal (mayors and councils), provincial/territorial (premiers and legislatures), and federal (Prime Minister and Parliament). MPs represent federal ridings; MPPs/MLAs represent provincial ridings. Municipal elections are nonpartisan in most cities. Christians in Canada can pray for leaders at all three levels and participate through voting, consultation, boards, and elected office.",
    principles: ["Accountability", "Neighbor love"],
    scripture: [{ reference: "1 Timothy 2:1–2", application: "Pray for leaders at every level of government." }],
    sources: [{ id: "parl-ca", title: "Parliament of Canada", publisher: "Government of Canada", url: "https://www.parl.ca", tier: 1 }],
    uncertainties: ["Specific representatives depend on your address—use official lookup tools."],
    counterpoints: ["Federal visibility can overshadow important local decisions."],
    confidence: "strong",
  },
  {
    id: "us-government",
    scope: "global",
    tags: ["united states", "america", "american", "congress", "senate", "president", "governor", "city council"],
    answer:
      "The United States divides power among local (city/county), state (governor and legislature), and federal (President and Congress) levels. The Constitution limits each branch. Christians in the US can engage through voting, town halls, school boards, state legislatures, and federal advocacy—always distinguishing biblical principles from partisan loyalty.",
    principles: ["Rule of law", "Limits of authority"],
    scripture: [{ reference: "Romans 13:1–4", application: "Authority is real but bounded; it is not ultimate." }],
    sources: [{ id: "usa-gov", title: "USA.gov", publisher: "U.S. Government", url: "https://www.usa.gov/branches-of-government", tier: 1 }],
    uncertainties: ["State and local structures vary significantly."],
    counterpoints: ["National political media often drowns out essential local civic life."],
    confidence: "moderate",
  },
  {
    id: "uk-government",
    scope: "global",
    tags: ["united kingdom", "britain", "british", "parliament", "westminster", "mp", "council", "mayor"],
    answer:
      "The United Kingdom combines national Parliament (MPs at Westminster), devolved governments (Scotland, Wales, Northern Ireland), and local authorities (councils, metro mayors). Christians in the UK can engage through voting, contacting MPs, local council meetings, and public consultation—bringing biblical principles without confusing the Church with a political party.",
    principles: ["Truth", "Servant leadership"],
    scripture: [{ reference: "1 Peter 2:13–17", application: "Honor governing institutions while fearing God above all." }],
    sources: [{ id: "uk-parl", title: "UK Parliament", publisher: "UK Parliament", url: "https://www.parliament.uk", tier: 1 }],
    uncertainties: ["Devolution means some powers differ by nation within the UK."],
    counterpoints: [],
    confidence: "moderate",
  },
  {
    id: "find-representatives",
    scope: "global",
    tags: ["find", "representative", "who represents", "my mp", "my councillor", "lookup", "ward", "riding", "district"],
    answer:
      "To find who represents you, use official government lookup tools—not unofficial lists. In Canada: elections.ca (federal), provincial election sites, and your city website for ward councillors. In the US: house.gov and senate.gov for Congress, plus your state and city websites. In the UK: members.parliament.uk and your local council site. Kingdom Civics provides live data where available (starting with Hamilton, ON) and links to official sources everywhere else.",
    principles: ["Truth", "Accountability"],
    scripture: [{ reference: "Proverbs 18:17", application: "Examine claims carefully; verify with primary sources." }],
    sources: [{ id: "kc-leaders", title: "Leaders Directory", publisher: "Kingdom Civics", url: "/leaders", tier: 2 }],
    uncertainties: ["Boundaries change after redistricting—always confirm with current official maps."],
    counterpoints: [],
    confidence: "strong",
  },
  {
    id: "voting-elections",
    scope: "global",
    tags: ["vote", "voting", "election", "ballot", "register", "democracy", "candidate"],
    answer:
      "Voting is one form of civic stewardship—not the only one. Christians should research candidates from primary sources, pray for wisdom, distinguish biblical principles from partisan loyalty, and vote (or abstain) with a clear conscience. Registration rules, ID requirements, and ballot information must always be verified with official election authorities—not social media.",
    principles: ["Truth", "Civic responsibility", "Humility"],
    scripture: [{ reference: "James 1:5", application: "Ask God for wisdom in complex civic decisions." }],
    sources: [{ id: "kc-elections", title: "Elections Hub", publisher: "Kingdom Civics", url: "/elections", tier: 2 }],
    uncertainties: ["Faithful Christians may reach different prudential conclusions on the same ballot."],
    counterpoints: ["Voting is not the sum of civic discipleship—prayer, service, and advocacy also matter."],
    confidence: "strong",
  },
  {
    id: "religious-liberty",
    scope: "global",
    tags: ["religious", "freedom", "liberty", "conscience", "worship", "church", "faith", "persecution"],
    answer:
      "Scripture teaches that ultimate allegiance belongs to God (Acts 5:29) while also calling believers to honor governing institutions within their proper limits (Romans 13; 1 Peter 2). Religious liberty protects conscience, worship, and speech—issues that appear in constitutions, human rights law, and local policy worldwide. Christians should advocate for freedom for all faiths, not only their own.",
    principles: ["Conscience", "Human dignity", "Limits of authority"],
    scripture: [
      { reference: "Acts 5:29", application: "Obey God rather than men when commands conflict." },
      { reference: "Matthew 22:21", application: "Render to Caesar what is Caesar's, and to God what is God's." },
    ],
    sources: [{ id: "kc-issues", title: "Issues Library", publisher: "Kingdom Civics", url: "/issues", tier: 2 }],
    uncertainties: ["Religious liberty cases require careful legal and factual analysis."],
    counterpoints: ["Religious freedom claims should be examined—not every claim is equally grounded."],
    confidence: "moderate",
  },
  {
    id: "salt-and-light",
    scope: "global",
    tags: ["salt", "light", "culture", "influence", "world", "society", "public square"],
    answer:
      "Jesus calls disciples to be salt and light in the world (Matthew 5:13–16)—preserving truth, exposing darkness, and serving neighbors visibly. Cultural engagement is not about dominating society or retreating from it. It means bringing biblical wisdom into families, workplaces, arts, education, and public institutions with humility, courage, and love.",
    principles: ["Neighbor love", "Truth", "Servant leadership"],
    scripture: [{ reference: "Matthew 5:13–16", application: "Let your light shine before others, that they may see good works and glorify God." }],
    sources: [{ id: "kc-engage", title: "Why Christians Engage", publisher: "Kingdom Civics", url: "/why-engage", tier: 2 }],
    uncertainties: ["How to apply this in specific cultural moments requires discernment, not formulas."],
    counterpoints: ["Cultural influence without character can damage the gospel witness."],
    confidence: "strong",
  },
  {
    id: "kingdom-not-party",
    scope: "global",
    tags: ["party", "partisan", "republican", "democrat", "liberal", "conservative", "endorse", "kingdom first"],
    answer:
      "No political party, politician, nation, or movement is synonymous with the Kingdom of God (Matthew 6:33; Philippians 3:20). Kingdom Civics does not endorse candidates or parties. We provide biblical principles, sourced civic education, and evidence-based comparisons so Christians can pray, discern, and participate with wisdom—not partisan idolatry.",
    principles: ["Kingdom citizenship", "Truth", "Humility"],
    scripture: [{ reference: "Matthew 6:33", application: "Seek first the kingdom of God and his righteousness." }],
    sources: [{ id: "kc-trust", title: "Trust Center", publisher: "Kingdom Civics", url: "/trust", tier: 2 }],
    uncertainties: [],
    counterpoints: ["Non-endorsement does not mean all policy positions are morally equivalent."],
    confidence: "strong",
  },
  {
    id: "civic-pathways",
    scope: "global",
    tags: ["serve", "volunteer", "run", "office", "board", "consultation", "how to get involved", "participate"],
    answer:
      "Christians can serve in public life through many pathways: learn how government works, attend council meetings, join public consultations, volunteer with community organizations, apply for public boards, advocate on specific issues, and explore elected office as servant leadership. Start where you are—your city, school board, or neighborhood—and grow in wisdom and courage over time.",
    principles: ["Servant leadership", "Neighbor love", "Wise stewardship"],
    scripture: [{ reference: "Mark 10:42–45", application: "Whoever would be great among you must be your servant." }],
    sources: [{ id: "kc-serve", title: "Serve Hub", publisher: "Kingdom Civics", url: "/serve", tier: 2 }],
    uncertainties: ["Requirements for boards and elected office vary by jurisdiction."],
    counterpoints: ["Not every believer is called to public office—but all are called to faithfulness where they are."],
    confidence: "strong",
  },
];

const hamiltonChunks: KnowledgeChunk[] = [
  {
    id: "hamilton-mayor",
    scope: "hamilton",
    tags: ["mayor", "horwath", "andrea", "who", "running", "hamilton", "leader"],
    answer: `Hamilton's mayor is Andrea Horwath, elected in the October 2022 municipal election and serving as the city's chief elected official. She represents the city publicly, helps set council priorities, and—since July 2023—holds provincial "strong mayor" powers in Hamilton. Council as a whole still approves the budget, bylaws, and major policy. For City service questions, the official contact line is 905-546-2489.`,
    principles: ["Servant leadership", "Limits of authority", "Accountability"],
    scripture: [{ reference: "Mark 10:42–45", application: "Public authority should be exercised as service, not domination." }],
    sources: [{ id: "hamilton-mayor-page", title: "Mayor Andrea Horwath", publisher: "City of Hamilton", url: hamiltonMayor.sourceUrl, tier: 1 }],
    uncertainties: ["2026 mayoral candidates will be confirmed through the official nomination process before the October 26 election."],
    counterpoints: ["Strong mayor powers increase executive influence; residents should still track council votes, not only mayoral announcements."],
    confidence: "strong",
  },
  {
    id: "hamilton-council",
    scope: "hamilton",
    tags: ["councillor", "council", "ward", "hamilton", "local", "represent"],
    answer: `Hamilton City Council has 15 ward councillors plus the mayor (16 members total). Each councillor represents one ward and votes on bylaws, the budget, planning, and committee recommendations. Current councillors include Maureen Wilson (Ward 1), Cameron Kroetsch (Ward 2), Nrinder Nann (Ward 3), Tammy Hwang (Ward 4), and eleven others through Ward 15 (Ted McMeekin). Use the City's "Find My Councillor" tool on hamilton.ca to match your address to a ward.`,
    principles: ["Accountability", "Neighbor love", "Wise stewardship"],
    scripture: [{ reference: "Proverbs 11:14", application: "Sound governance benefits from many counselors and transparent deliberation." }],
    sources: [{ id: "hamilton-councillors", title: "City Councillors", publisher: "City of Hamilton", url: hamiltonMeta.councilUrl, tier: 1 }],
    uncertainties: ["Ward boundaries and councillor assignments should be confirmed with the official ward lookup before contacting your representative."],
    counterpoints: ["Municipal offices control some issues deeply—but not healthcare, criminal law, or most taxation."],
    confidence: "strong",
  },
  {
    id: "hamilton-election",
    scope: "hamilton",
    tags: ["election", "vote", "2026", "october", "municipal", "nomination", "hamilton"],
    answer: `Hamilton's next municipal and school board election is scheduled for October 26, 2026. Offices typically include mayor, ward councillors, and school board trustees. Registration deadlines, identification requirements, and voting methods must be verified with the City of Hamilton and Elections Ontario—not third-party summaries.`,
    principles: ["Truth", "Civic responsibility", "Peaceful order"],
    scripture: [{ reference: "1 Timothy 2:1–2", application: "Christians can pray for peaceful civic life while participating lawfully in the process." }],
    sources: [{ id: "hamilton-election", title: "2026 Municipal Election", publisher: "City of Hamilton", url: hamiltonMeta.electionUrl, tier: 1 }],
    uncertainties: ["Declared candidates and final ballot information will emerge through the official nomination period."],
    counterpoints: ["Voting is one form of civic participation; consultation, volunteering, and public service also matter."],
    confidence: "strong",
  },
  {
    id: "mayor-powers",
    scope: "hamilton",
    tags: ["authority", "power", "control", "mayor", "strong", "budget", "bylaw", "hamilton"],
    answer: `In Hamilton, the mayor chairs council, represents the city, and—under Ontario's strong mayor framework since July 2023—has expanded executive tools. However, council collectively approves the budget and bylaws. The mayor does not unilaterally control schools, hospitals, police policy alone, or federal immigration law. Always distinguish municipal, provincial, and federal jurisdiction.`,
    principles: ["Limits of authority", "Accountability", "Truth"],
    scripture: [{ reference: "Romans 13:1–4", application: "Earthly authority is real but bounded; it is not ultimate." }],
    sources: [{ id: "hamilton-mayor-powers", title: "Mayoral Decisions & Strong Mayor Powers", publisher: "City of Hamilton", url: hamiltonMayor.sourceUrl, tier: 1 }],
    uncertainties: ["Specific veto or appointment powers should be checked against current provincial regulation and council procedure."],
    counterpoints: ["Executive visibility can overshadow ward councillors who also shape outcomes."],
    confidence: "moderate",
  },
  {
    id: "federal-hamilton",
    scope: "hamilton",
    tags: ["mp", "federal", "parliament", "commons", "hamilton centre", "stoney creek", "hamilton"],
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
];

const allChunks = [...globalChunks, ...hamiltonChunks];

function scoreChunk(chunk: KnowledgeChunk, question: string, citySlug?: string): number {
  const q = question.toLowerCase();
  let score = 0;

  for (const tag of chunk.tags) {
    if (q.includes(tag)) score += tag.length > 4 ? 3 : 2;
  }

  const isHamiltonQuestion = matchesHamilton(q) || citySlug === "hamilton-on";
  if (chunk.scope === "hamilton" && isHamiltonQuestion) score += 8;
  if (chunk.scope === "global" && !isHamiltonQuestion) score += 2;
  if (chunk.scope === "hamilton" && !isHamiltonQuestion) score -= 3;

  if (q.includes("mayor") && chunk.id.includes("mayor")) score += 4;
  if (q.includes("council") && chunk.id.includes("council")) score += 4;
  if ((q.includes("christian") || q.includes("church")) && chunk.id.includes("christians")) score += 5;
  if (q.includes("scripture") || q.includes("bible")) {
    if (chunk.id.includes("scripture") || chunk.id.includes("christians")) score += 4;
  }
  if (q.includes("canada") && chunk.id.includes("canada")) score += 5;
  if (q.includes("america") || q.includes("united states") || q.includes(" us ")) {
    if (chunk.id.includes("us-")) score += 5;
  }
  if (q.includes("uk") || q.includes("britain") || q.includes("united kingdom")) {
    if (chunk.id.includes("uk-")) score += 5;
  }

  return score;
}

function comingSoonResponse(cityName: string): LensResponse {
  return {
    answer: `${cityName} is on our roadmap for live civic data. Hamilton, Ontario is our first live city with verified officials and election information. Meanwhile, Kingdom Lens can answer global questions about biblical civic engagement, government levels, Scripture, prayer for leaders, and how Christians participate in public life.`,
    facts: [],
    sources: [{ id: "kc-leaders", title: "Leaders Directory", publisher: "Kingdom Civics", url: "/leaders", tier: 2 }],
    biblicalPrinciples: ["Patience", "Truth", "Neighbor love"],
    scripture: [{ reference: "Jeremiah 29:7", application: "Seek the welfare of the city where God has placed you—starting with where you are." }],
    interpretations: ["Kingdom Civics expansion methodology"],
    uncertainties: [`Live official data for ${cityName} is not yet indexed.`],
    counterpoints: [],
    lastVerified: hamiltonMeta.lastVerified,
    confidence: "moderate",
    disclaimer: "Educational guidance. Verify local officials with government websites.",
  };
}

export function answerKingdomLens(
  question: string,
  options?: { jurisdiction?: string; citySlug?: string },
): LensResponse {
  const citySlug = options?.citySlug;
  const jurisdiction = options?.jurisdiction ?? "";
  const matchedCity = citySlug ? getCity(citySlug) : matchCityFromInput(jurisdiction) ?? matchCityFromInput(question);
  const q = question.toLowerCase();

  if (matchedCity && matchedCity.status === "coming_soon") {
    const isCitySpecific =
      q.includes(matchedCity.name.toLowerCase()) ||
      q.includes(matchedCity.region.toLowerCase()) ||
      (citySlug === matchedCity.slug && !globalChunks.some((c) => scoreChunk(c, question) > 4));
    if (isCitySpecific && !globalChunks.some((c) => scoreChunk(c, question) > 6)) {
      return comingSoonResponse(matchedCity.name);
    }
  }

  const official = findHamiltonOfficial(question);
  const isHamiltonContext =
    matchedCity?.slug === "hamilton-on" || matchesHamilton(question) || matchesHamilton(jurisdiction);

  if (official && isHamiltonContext) {
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

  const ranked = allChunks
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, question, matchedCity?.slug) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0]?.score > 0 ? ranked[0].chunk : null;

  if (!best) {
    return {
      answer:
        "I can help with global Christian civic questions—why believers engage in public life, what Scripture says about government and justice, how to pray for leaders, levels of government (Canada, US, UK), voting wisely, religious liberty, and pathways to serve. For live official data, ask about Hamilton, Ontario (our first live city): mayor, councillors, MPs, or the October 26, 2026 election.",
      facts: [],
      sources: [
        { id: "kc-home", title: "Kingdom Civics", publisher: "Kingdom Civics", url: "/", tier: 2 },
        { id: "hamilton-ca", title: "City of Hamilton", publisher: "City of Hamilton", url: hamiltonMeta.officialSite, tier: 1 },
      ],
      biblicalPrinciples: ["Truth", "Humility", "Wisdom"],
      scripture: [{ reference: "James 1:5", application: "Ask God for wisdom when evidence is incomplete." }],
      interpretations: ["Kingdom Civics uncertainty-first methodology"],
      uncertainties: ["Your question may need more specific wording or live data we have not yet indexed for your city."],
      counterpoints: [],
      lastVerified: hamiltonMeta.lastVerified,
      confidence: "no_reliable_evidence",
      disclaimer: "Verify important claims using linked official sources.",
    };
  }

  const second = ranked[1]?.score && ranked[1].score > 3 ? ranked[1].chunk : null;
  let answer = best.answer;
  if (second && second.scope === "global" && best.scope === "hamilton") {
    answer += ` More broadly: ${second.answer.split(".")[0]}.`;
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
    meta: hamiltonMeta,
  };
}
