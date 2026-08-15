export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  scripture: string;
  sections: Array<{ heading: string; body: string }>;
};

export const learnArticles: LearnArticle[] = [
  {
    slug: "how-government-works",
    title: "How Government Works — A Global Overview",
    description:
      "Understand local, state/provincial, and national government—and why Christians should care—in any democracy.",
    duration: "10 min",
    category: "Civic foundations",
    scripture: "Jeremiah 29:7 · Romans 13:1–7",
    sections: [
      {
        heading: "Government is not the Kingdom of God",
        body: "No nation, party, or politician is synonymous with God's Kingdom. Yet Scripture calls believers to seek the welfare of the city where God has placed them, pray for those in authority, and pursue justice without partiality. Understanding how government works is the first step toward faithful—not frantic—civic engagement.",
      },
      {
        heading: "Three levels of government",
        body: "Most democracies divide power across local (city/county), regional (state/province), and national (federal) levels. Local government typically handles zoning, transit, parks, and property taxes. Regional government handles education frameworks, highways, and regional law. National government handles defense, immigration, criminal law, and foreign policy. Confusing these levels is one of the most common civic mistakes.",
      },
      {
        heading: "Who decides what?",
        body: "Before advocating on housing, schools, healthcare, or justice, ask: which level of government actually controls this issue? A city council cannot fix federal immigration law. A national parliament does not set local zoning. Kingdom Civics helps you map jurisdiction so your prayer, advocacy, and service land where they can actually help neighbors.",
      },
      {
        heading: "Faithful participation",
        body: "Civic discipleship includes learning, praying, attending meetings, volunteering, consulting on policy, and voting with wisdom. It does not require baptizing a political party or treating elections as salvation. Start where you are—your ward, your city, your country—and grow in understanding over time.",
      },
    ],
  },
  {
    slug: "hamilton-city-council",
    title: "How Hamilton City Council Works",
    description:
      "Hamilton's mayor, 15 ward councillors, strong mayor powers, and what municipal government controls in Ontario.",
    duration: "10 min",
    category: "Live city · Hamilton",
    scripture: "Proverbs 11:14 · Mark 10:42–45",
    sections: [
      {
        heading: "Hamilton City Council structure",
        body: "Hamilton City Council has 16 members: the mayor plus 15 ward councillors. Each councillor represents one ward and votes on bylaws, the municipal budget, planning applications, and committee recommendations. The mayor chairs council, represents the city publicly, and—since July 2023—holds Ontario 'strong mayor' powers in Hamilton.",
      },
      {
        heading: "What the mayor controls—and what council controls",
        body: "The mayor helps set priorities and has expanded executive tools under Ontario's strong mayor framework. However, council collectively approves the budget and bylaws. The mayor does not unilaterally control schools, hospitals, or federal law. Always distinguish municipal, provincial, and federal jurisdiction when evaluating local leadership.",
      },
      {
        heading: "How to engage as a citizen",
        body: "Hamilton residents can attend council and committee meetings at City Hall, participate in public consultation on planning and budgets, contact their ward councillor using the official 'Find My Councillor' tool on hamilton.ca, and follow the October 26, 2026 municipal election through official City channels—not unofficial summaries.",
      },
      {
        heading: "Prayer and service",
        body: "Scripture commands prayer for those in authority (1 Timothy 2:1–2). Pray for Mayor Andrea Horwath and Hamilton's councillors—leaders you agree with and leaders you disagree with. Public service, boards, and elected office are also forms of neighbour love when pursued with humility.",
      },
    ],
  },
  {
    slug: "canadian-government",
    title: "Canadian Government Structure",
    description:
      "How Canada's federal Parliament, provincial legislatures, and municipal councils work—and how Christians can engage.",
    duration: "14 min",
    category: "Canada",
    scripture: "1 Timothy 2:1–2 · 1 Peter 2:13–17",
    sections: [
      {
        heading: "Federal: Parliament of Canada",
        body: "Canada's federal government sits in Ottawa. Members of Parliament (MPs) represent ridings and debate federal law, federal spending, immigration, national defence, and criminal law. The Prime Minister leads the executive branch. Christians can contact their MP, follow parliamentary votes on ourcommons.ca, and pray for federal leaders regardless of party.",
      },
      {
        heading: "Provincial: Legislatures",
        body: "Each province and territory has its own legislature. Members of Provincial Parliament (MPP in Ontario) handle healthcare, education, highways, and provincial law. Hamilton-area residents are represented provincially as well as federally and municipally.",
      },
      {
        heading: "Municipal: Cities and towns",
        body: "Municipal elections are typically nonpartisan. Mayors and councillors handle local services, zoning, transit, and property taxes. Hamilton is Kingdom Civics' first live city—with verified mayor, councillors, MPs, and election data linked to official sources.",
      },
      {
        heading: "Engage without partisan idolatry",
        body: "Canadian Christians can vote, volunteer, run for office, and advocate on issues—always distinguishing biblical principles from party loyalty. No party is the Kingdom of God. Faithful engagement means truth, prayer, and neighbour love in the public square.",
      },
    ],
  },
  {
    slug: "evaluate-political-claims",
    title: "How to Evaluate Political Claims",
    description:
      "A Christian framework for testing claims, examining evidence, and avoiding outrage-driven civic judgment.",
    duration: "12 min",
    category: "Discernment",
    scripture: "1 Thessalonians 5:21 · Proverbs 18:17",
    sections: [
      {
        heading: "Test everything",
        body: "Scripture calls believers to test everything and hold fast to what is good (1 Thessalonians 5:21). In civic life, that means examining claims before sharing them, checking primary sources, and distinguishing facts from interpretation, moral principle, and partisan spin.",
      },
      {
        heading: "Source tiers",
        body: "Kingdom Civics ranks sources: Tier 1 official records and direct statements carry the most weight. Tier 2 reputable journalism and academic work matter but require verification. Tier 3 social media outrage carries the least weight. When a claim matters, trace it to the original document.",
      },
      {
        heading: "Honest uncertainty",
        body: "Faithful discernment admits what we do not know. Kingdom Civics surfaces uncertainty and counter-evidence rather than forcing conclusions. A leader's faith, worth, or standing before God is never inferred from party affiliation or a single vote.",
      },
      {
        heading: "Kingdom Lens can help",
        body: "Ask Kingdom Lens civic questions with Scripture and source links. Use it to learn, not to win arguments. Verify every important claim using the linked original sources—especially before voting or advocating publicly.",
      },
    ],
  },
  {
    slug: "levels-of-government",
    title: "Levels of Government: Local, Regional & National",
    description:
      "Map who decides what—so prayer, advocacy, and voting land where they can actually help neighbours.",
    duration: "12 min",
    category: "Jurisdictions",
    scripture: "Romans 13:1–7 · Matthew 22:21",
    sections: [
      {
        heading: "Start with jurisdiction",
        body: "Civic frustration often comes from aiming at the wrong level of government. A city mayor cannot rewrite national immigration law. A federal parliament does not approve your neighbour's backyard renovation. Faithful engagement begins by asking: who actually has authority here?",
      },
      {
        heading: "Local government",
        body: "Cities and municipalities typically handle zoning, property taxes, local transit, parks, policing partnerships, and bylaws. This is where housing density, shelter locations, and neighbourhood quality of life are often decided—and where citizens can most easily attend meetings and speak.",
      },
      {
        heading: "Regional / provincial / state",
        body: "Regional governments usually set education frameworks, healthcare systems, highways, and many social programs. In Canada, provinces hold major power over schools and hospitals. Knowing your MPP or state legislator matters as much as knowing your mayor.",
      },
      {
        heading: "National / federal",
        body: "National governments typically control defense, immigration, criminal law frameworks, currency, and foreign policy. Christians should pray for these leaders without treating any party as the Kingdom of God.",
      },
    ],
  },
  {
    slug: "read-a-public-budget",
    title: "How to Read a Public Budget",
    description:
      "A plain-language guide to following the money in city and provincial budgets—without drowning in jargon.",
    duration: "15 min",
    category: "Public finance",
    scripture: "Luke 14:28 · Proverbs 27:23–24",
    sections: [
      {
        heading: "Budgets reveal priorities",
        body: "Speeches signal intentions; budgets reveal trade-offs. A public budget shows what a government chooses to fund, cut, defer, or debt-finance. Christians concerned about justice and stewardship should learn to read the documents—not only the headlines.",
      },
      {
        heading: "Find the primary document",
        body: "Start with the official budget book or open data portal from the city or province—not a campaign flyer. Look for operating vs capital spending, reserves, and multi-year forecasts. Hamilton publishes municipal budget materials on hamilton.ca.",
      },
      {
        heading: "Ask clarifying questions",
        body: "What grew fastest year over year? What was cut? Which programs serve the vulnerable? Are one-time funds being used for ongoing costs? Who audits the numbers? Honest uncertainty beats confident speculation.",
      },
      {
        heading: "Engage with humility",
        body: "Budget literacy helps prayer and advocacy become specific. It does not require becoming an accountant—or baptizing one fiscal ideology. Verify claims, attend consultations when possible, and pray for officials making hard trade-offs.",
      },
    ],
  },
  {
    slug: "consider-running",
    title: "Should Christians Consider Running for Office?",
    description:
      "A Kingdom-first guide for believers discerning elected office—calling, character, competence, community, and cost—without baptizing a party.",
    duration: "14 min",
    category: "Public service",
    scripture: "Mark 10:42–45 · Micah 6:8 · 1 Timothy 3:1–7",
    sections: [
      {
        heading: "Office is stewardship, not a throne",
        body: "Jesus taught that Gentile rulers lord it over others—but His disciples must lead by serving (Mark 10:42–45). Considering a run for office begins with that posture: not winning a culture war, not building a personal brand, but stewarding limited authority for the good of neighbours. No office is the Kingdom of God. Running can be faithful—or foolish—depending on motive, timing, and character.",
      },
      {
        heading: "Test the call with five questions",
        body: "Calling: Do mature believers who know you affirm this? Character: Are you known for truth, humility, and self-control when no one is watching? Competence: Do you understand the office’s real powers and limits? Community: Who will pray, advise, and tell you hard truths? Cost: Can your family, work, and church health survive the scrutiny and pace of campaigning and governing?",
      },
      {
        heading: "Start smaller than the microphone",
        body: "Most faithful public service begins long before a ballot. Attend meetings. Serve on a board. Volunteer on a campaign for someone you trust. Learn budgets and bylaws. Build relationships across disagreement. If you cannot love neighbours in quiet service, a louder office will not make you more Christlike—it will amplify whatever is already there.",
      },
      {
        heading: "Learn the office before you chase it",
        body: "Map which level of government you are considering—local, regional, or national—and what that office actually controls. Read nomination rules, ethics codes, and campaign finance requirements from official election authorities. Ask Kingdom Lens to explain the office; then verify every legal detail with primary sources in your jurisdiction.",
      },
      {
        heading: "Run without baptizing a party",
        body: "Christians may join parties or remain independent depending on local systems. Either way, refuse to treat a party platform as Scripture. Campaign with honesty. Do not invent enemies. Do not claim God endorsed you. Seek justice, love mercy, and walk humbly (Micah 6:8)—especially toward opponents and journalists.",
      },
      {
        heading: "If you lose—or win",
        body: "Losing an election is not a failed calling if you ran with integrity. Winning is not proof of God’s favour. In either case, keep praying for whoever holds the office, keep serving your city, and keep your identity in Christ—not in a title, a poll number, or a partisan tribe.",
      },
    ],
  },
  {
    slug: "us-government",
    title: "U.S. Government — A Christian’s Map",
    description:
      "A plain-language guide to local, state, and federal government in the United States—so prayer and advocacy land in the right place.",
    duration: "14 min",
    category: "United States",
    scripture: "Romans 13:1–7 · Matthew 22:21",
    sections: [
      {
        heading: "Three layers (and many variations)",
        body: "The United States divides power among local (city/county), state (governor and legislature), and federal (President and Congress) levels. Exact structures vary by state—some cities have strong mayors; others use council-manager systems. Faithful engagement begins by mapping who decides what where you live.",
      },
      {
        heading: "Federal basics",
        body: "Congress writes federal law; the President executes and shapes administration; courts interpret. Immigration, national defense, interstate commerce, and many civil rights frameworks sit primarily at the federal level. National media often overstates how much of daily life Congress controls.",
      },
      {
        heading: "State and local power",
        body: "States typically run education frameworks, much of criminal law, professional licensing, and major infrastructure. Cities and counties handle zoning, local policing partnerships, property taxes, and neighbourhood services. School boards often deserve as much attention as presidential races.",
      },
      {
        heading: "Kingdom posture in a polarized republic",
        body: "Christians in the US should refuse to baptize a party. Use biblical principles—truth, dignity, justice, servant leadership, conscience, stewardship—then examine evidence. Ask Kingdom Lens to clarify an office; verify with official sources; pray for leaders you did not vote for.",
      },
    ],
  },
  {
    slug: "talk-politics-in-church",
    title: "How to Talk About Politics in Church Without Splitting the Body",
    description:
      "A practical discipleship guide for pastors and small groups: truth-telling, prayer, primary sources, and unity without partisan pulpits.",
    duration: "12 min",
    category: "Church & culture",
    scripture: "James 1:19 · Ephesians 4:15 · 1 Timothy 2:1–2",
    sections: [
      {
        heading: "The church is not a campaign office",
        body: "Christians must speak about public life because neighbours are affected by law, budgets, and justice. But the gathered church is not a PAC. Teaching civic discipleship means forming people who can tell the truth, pray for leaders, and disagree without treating a party as the gospel.",
      },
      {
        heading: "Slow speech is a spiritual discipline",
        body: "James 1:19 still applies on election weeks: be quick to hear, slow to speak, slow to anger. Before sharing a claim, ask which level of government controls the issue, what the primary source says, and whether you are loving the person across the aisle as an image-bearer.",
      },
      {
        heading: "Principles before personalities",
        body: "Start with Scripture-linked principles—truth, dignity, justice, servant leadership, conscience, stewardship—then examine evidence. Personality-first conversations collapse into tribes. Principle-first conversations can survive disagreement.",
      },
      {
        heading: "A simple group practice",
        body: "Read one Kingdom Civics lesson. Pray 1 Timothy 2 for named offices. Ask Kingdom Lens one question and inspect the counterpoints together. End by naming a next step: attend a meeting, write a councillor, or refuse a rumour.",
      },
      {
        heading: "When heat rises",
        body: "Elders can set house rules: no candidate endorsements from the pulpit, no forwarding unverified clips, no treating dissenters as enemies of God. Unity is not silence; it is refusing to let Caesar catechize the church.",
      },
    ],
  },
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}
