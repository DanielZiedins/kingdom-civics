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
  {
    slug: "contact-your-representative",
    title: "How to Contact Your Representative",
    description:
      "A practical, respectful guide to writing or calling an MP, councillor, or representative—truthful, brief, and free of contempt.",
    duration: "8 min",
    category: "Practice",
    scripture: "Colossians 4:6 · Proverbs 15:1",
    sections: [
      {
        heading: "Why contact matters",
        body: "Elected offices receive far more silence than mail. A clear, sourced, courteous message is neighbour-love and civic stewardship. Rage emails and copied outrage templates are easy to ignore. Specific, local, honest notes are harder to dismiss.",
      },
      {
        heading: "Find the right office first",
        body: "A city councillor cannot change federal immigration law. A member of Parliament does not set your local zoning. Use official lookup tools, then name the office that actually controls the issue. Kingdom Civics lists those tools at /find-representatives.",
      },
      {
        heading: "A simple structure",
        body: "Who you are and where you live. The specific decision or bill. What you are asking (support, oppose, clarify, meet). One or two facts from primary sources. A sentence of respect for the difficulty of the office. Thank them. Keep it under a page.",
      },
      {
        heading: "Tone is discipleship",
        body: "Let your speech be gracious, seasoned with salt (Colossians 4:6). Do not threaten, mock, or claim God voted your way. You can be firm about justice without treating an official as an enemy. If you cannot write without contempt, pray first and send later.",
      },
    ],
  },
  {
    slug: "attend-a-council-meeting",
    title: "How to Attend a Council Meeting",
    description:
      "What to expect at city hall: agendas, delegations, public comment, and how Christians can show up without performing for a camera.",
    duration: "9 min",
    category: "Practice",
    scripture: "Proverbs 11:14 · James 1:19",
    sections: [
      {
        heading: "Why the room matters",
        body: "Most civic outcomes are shaped in ordinary meetings—not viral debates. Zoning, budgets, transit, and shelter policy are decided by people sitting at a table you can usually watch. Showing up is how you learn who actually holds the gavel.",
      },
      {
        heading: "Before you go",
        body: "Read the agenda on the official city site. Note the item you care about and which committee or council is hearing it. Check delegation or public-comment deadlines. Dress like a neighbour, not a mascot. Bring a notebook. Silence your phone.",
      },
      {
        heading: "While you are there",
        body: "Listen more than you speak. Notice procedure, staff reports, and who asks clarifying questions. If you delegate, stay inside your time, stick to the item, cite sources, and address the chair. Do not heckle. Faithfulness in the room is often quieter than activism online.",
      },
      {
        heading: "After you leave",
        body: "Pray for the officials you just watched. Follow the vote in the minutes. Share what you learned with your small group—without turning neighbours into villains. Then decide a next step: write, volunteer, or return next month.",
      },
    ],
  },
  {
    slug: "vote-with-conscience",
    title: "How to Vote with a Clear Conscience",
    description:
      "A Kingdom-first voting guide: principles, evidence, prayer, and honesty about disagreement—without candidate scorecards or party baptisms.",
    duration: "11 min",
    category: "Discernment",
    scripture: "James 1:5 · Romans 14:5 · Micah 6:8",
    sections: [
      {
        heading: "Voting is stewardship, not salvation",
        body: "A ballot is one act of neighbour-love in a fallen world. It is not a sacrament. It does not prove you belong to Christ. Refusing to treat elections as cosmic good-versus-evil is part of keeping the Kingdom first.",
      },
      {
        heading: "Start with principles, then evidence",
        body: "Name the biblical starting points you will not abandon—truth, dignity, justice, mercy, servant leadership, conscience, stewardship. Then examine platforms, voting records, and primary sources. Do not reverse the order: personality first produces tribes; principles first can survive disagreement.",
      },
      {
        heading: "Prudential judgment is allowed",
        body: "Faithful Christians may weigh the same facts and mark different ballots (Romans 14:5). That is not apostasy. It is an honest admission that many policies are disputed applications, not gospel articles. Leave room in the church for that humility.",
      },
      {
        heading: "A pre-ballot checklist",
        body: "Have I prayed for wisdom? Do I know which offices are on this ballot? Have I read something besides my favourite feed? Can I explain my choice without contempt? Will I pray for whoever wins? If any answer is no, slow down.",
      },
    ],
  },
  {
    slug: "pray-for-an-election",
    title: "How to Pray for an Election",
    description:
      "A Scripture-shaped election prayer guide: pray for voters, officials, opponents, and whoever wins—without baptizing a ballot.",
    duration: "8 min",
    category: "Prayer",
    scripture: "1 Timothy 2:1–2 · James 1:5 · Philippians 4:6–7",
    sections: [
      {
        heading: "Prayer is civic work",
        body: "1 Timothy 2 does not wait until you like the candidates. Supplications, prayers, intercessions, and thanksgivings belong to every election season. Panic-posting is not a fruit of the Spirit. Intercession is.",
      },
      {
        heading: "Pray wider than your tribe",
        body: "Pray for voters to love truth. Pray for officials administering the vote. Pray for candidates you oppose to be kept from harm and from deceit. Pray for the church not to split over prudential ballots. If you cannot name an opponent before God without contempt, start there.",
      },
      {
        heading: "A simple pattern",
        body: "Wisdom (James 1:5). Integrity of speech. Protection of the vulnerable. Peaceable process. Humility for whoever wins. Thanksgiving that Christ remains King. Keep a list of offices on this ballot so prayer is specific, not vague.",
      },
      {
        heading: "After the results",
        body: "The command does not expire on election night. Pray for the winners by name. Refuse revenge fantasies. Return to neighbour-love: learn the office, attend a meeting, and keep seeking the city's welfare. See /pray and /scripture.",
      },
    ],
  },
  {
    slug: "school-boards",
    title: "School Boards — Why They Matter for Christian Families",
    description:
      "How school boards work, what trustees actually control, and how Christians can engage education governance without culture-war theatre.",
    duration: "10 min",
    category: "Education",
    scripture: "Deuteronomy 6:6–7 · Proverbs 22:6 · Matthew 19:14",
    sections: [
      {
        heading: "Often as local as city hall",
        body: "In many places, school board trustees are elected on the same day as mayors and councillors. They help set budgets, policies, and local direction for public or separate boards. Confusing them with a provincial education minister or a classroom teacher wastes advocacy.",
      },
      {
        heading: "What boards usually control—and what they don't",
        body: "Boards typically oversee local policy, hiring frameworks, facilities, and how provincial or state curriculum is implemented. They do not write the entire education statute. Before you campaign or pray, map the jurisdiction. Official board sites beat influencer summaries.",
      },
      {
        heading: "Faithful presence",
        body: "Parents, teachers, and neighbours can attend public meetings, read agendas, ask clarifying questions, and vote with a formed conscience. Contempt for teachers or for parents is not discipleship. Children bear God's image—policy fights that forget them have already failed.",
      },
      {
        heading: "A calm checklist",
        body: "Find your board with official tools. Learn which seats are on the next ballot. Read one policy or budget summary from the primary source. Pray for trustees by name. If you speak, stay on the item, stay inside the time, and refuse to treat neighbours as enemies of God. See /issues/education and /learn/attend-a-council-meeting.",
      },
    ],
  },
  {
    slug: "prepare-for-municipal-election",
    title: "How to Prepare for a Municipal Election",
    description:
      "A practical Kingdom-first checklist for Hamilton’s October 26, 2026 municipal and school board election—eligibility, voters list, advance polls, and discernment without endorsements.",
    duration: "9 min",
    category: "Elections",
    scripture: "1 Timothy 2:1–2 · Proverbs 18:17 · James 1:5",
    sections: [
      {
        heading: "This is not a federal campaign",
        body: "Municipal ballots elect a mayor, a ward councillor, and school board trustees. They do not elect a prime minister. Confusing levels produces panic and wasted prayer. Learn the offices, then use official City of Hamilton pages—not influencer lists—as your source of truth.",
      },
      {
        heading: "Confirm you can vote",
        body: "In Hamilton you typically must be a Canadian citizen, at least 18, and a resident, owner, or tenant (or spouse of an owner/tenant) who is not prohibited from voting. Tenants who have moved should especially confirm the voters list. Amendments are made in person with ID at the Clerk’s office or a municipal service centre through October 24, 2026—or at a poll. Verify every rule on hamilton.ca.",
      },
      {
        heading: "Know the calendar",
        body: "Nominations closed August 21, 2026; candidates were certified August 24. Community polls: September 26–27. Advance polls: October 3–4, 10–11, and 17–18. Election day: Monday, October 26. The City has stated there are no online or mail-in ballots for this municipal election. Proxy voting exists for those who cannot attend any voting day—read the official proxy rules before assuming.",
      },
      {
        heading: "Discern without baptizing a ballot",
        body: "Read certified candidates from the City, not a forwarded graphic. Ask what the office actually controls. Pray for officials administering the vote and for whoever wins. Voting is stewardship, not salvation. See /elections, /learn/vote-with-conscience, and /learn/pray-for-an-election.",
      },
    ],
  },
  {
    slug: "share-politics-online",
    title: "How to Share Politics Online without Harming Your Neighbour",
    description:
      "A discipleship guide for posts, forwards, and group chats: truth-telling, slow speech, and refusing to treat image-bearers as content.",
    duration: "8 min",
    category: "Discernment",
    scripture: "Exodus 20:16 · James 1:19 · Ephesians 4:25 · Proverbs 18:17",
    sections: [
      {
        heading: "Your feed is a discipleship environment",
        body: "Most civic formation now happens on a phone. Viral clips catechize faster than sermons. If you would not say it to a neighbour’s face, do not publish it as a caption. False witness is still false witness when it is a screenshot.",
      },
      {
        heading: "A pause before you post",
        body: "Is this a primary source or a recap? Which office actually controls the issue? Would I still share this if the target were in my small group? Can I name the uncertainty? If any answer is no, wait. Proverbs 18:17 still applies: the first clip often looks right until someone examines it.",
      },
      {
        heading: "Correction is holiness, not humiliation",
        body: "When you share something false, delete or correct it in the same thread. Do not bury the update. Loving truth more than being first is a public witness. Contempt, pile-ons, and ‘ratio’ culture are not spiritual gifts.",
      },
      {
        heading: "Practice",
        body: "Mute more than you mock. Share official links. Ask Kingdom Lens, then verify. Bless people who disagree without treating them as enemies of God. See /learn/evaluate-political-claims and /issues/technology-privacy.",
      },
    ],
  },
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}
