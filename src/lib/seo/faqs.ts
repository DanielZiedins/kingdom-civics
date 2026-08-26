import { hamiltonMeta, hamiltonMayor } from "@/lib/hamilton";

export type FaqItem = {
  question: string;
  answer: string;
  keywords?: string[];
};

export const globalFaqs: FaqItem[] = [
  {
    question: "What is Kingdom Civics?",
    answer:
      "Kingdom Civics is a global Christian civic education platform. We help believers in every nation understand government, discern public leadership, pray faithfully, and serve humbly—without partisan endorsements. Hamilton, Ontario is our first live city; biblical principles and Kingdom Lens work worldwide.",
    keywords: ["Christian civic education", "Kingdom Civics global"],
  },
  {
    question: "Why should Christians engage in politics and culture?",
    answer:
      "Scripture calls Christians to seek the welfare of their city (Jeremiah 29:7), pray for those in authority (1 Timothy 2:1–2), pursue justice and mercy (Micah 6:8), and serve neighbors through public institutions. Engagement is about neighbour love and faithful stewardship—not partisan conquest or baptizing a political party.",
    keywords: ["Christian political engagement", "Jeremiah 29:7"],
  },
  {
    question: "Who is the mayor of Hamilton, Ontario?",
    answer: `Hamilton's mayor is ${hamiltonMayor.name}, the city's chief elected official. She was elected in the October 2022 municipal election. Hamilton City Council includes the mayor and 15 ward councillors. Official information is available at ${hamiltonMeta.officialSite}.`,
    keywords: ["Hamilton mayor", "Andrea Horwath"],
  },
  {
    question: "When is Hamilton's next municipal election?",
    answer: `Hamilton's next municipal and school board election is ${hamiltonMeta.electionDate}. Voters will elect a mayor, 15 ward councillors, and school board trustees. Official dates, registration, and voting information are published by the City of Hamilton at ${hamiltonMeta.electionUrl}.`,
    keywords: ["Hamilton election 2026", "municipal election Ontario"],
  },
  {
    question: "What is Kingdom Lens?",
    answer:
      "Kingdom Lens is Kingdom Civics' global civic research assistant. Ask about government anywhere, biblical principles, Scripture, elections, and Christian engagement. Where live city data exists (starting with Hamilton, ON), answers cite official sources. Everywhere else, Kingdom Lens provides biblical civic guidance and points you to official lookup tools.",
    keywords: ["Kingdom Lens", "civic AI global", "Christian government questions"],
  },
  {
    question: "Does Kingdom Civics endorse political candidates?",
    answer:
      "No. Kingdom Civics does not endorse candidates, parties, or politicians. We provide sourced civic education, biblical principles, and evidence-based comparisons so Christians can pray, discern, and participate with wisdom. No party or politician is synonymous with the Kingdom of God.",
    keywords: ["nonpartisan Christian politics", "candidate endorsements"],
  },
  {
    question: "What Scriptures relate to government and civic life?",
    answer:
      "Key passages include Jeremiah 29:7 (seek the city's welfare), 1 Timothy 2:1–2 (pray for leaders), Romans 13:1–7 (governing authorities), Matthew 22:21 (render to Caesar and God), Micah 6:8 (justice and mercy), Proverbs 31:8–9 (speak for the vulnerable), and Acts 5:29 (obey God when human law conflicts with divine command).",
    keywords: ["Bible government", "Scripture civic engagement"],
  },
  {
    question: "How can Christians pray for government leaders?",
    answer:
      "Pray for wisdom, integrity, justice, mercy, and peace for leaders at every level—including those you disagree with. 1 Timothy 2:1–2 urges supplications, prayers, intercessions, and thanksgivings for kings and all in high positions, that we may lead peaceful and godly lives.",
    keywords: ["pray for leaders", "1 Timothy 2:1-2"],
  },
  {
    question: "How can churches teach civic engagement without becoming partisan?",
    answer:
      "Teach Scripture-linked principles, pray for all in authority, use official sources, and refuse pulpit endorsements. Kingdom Civics offers a free four-week church kit, lessons, and Kingdom Lens—so congregations can form civic disciples without baptizing a party.",
    keywords: ["civic education for churches", "church political engagement"],
  },
  {
    question: "How do I find who represents me in government?",
    answer:
      "Use official lookup tools: Elections Canada and ourcommons.ca in Canada, house.gov and senate.gov in the US, members.parliament.uk in the UK. Kingdom Civics lists these tools at /find-representatives and provides live Hamilton, Ontario officials. Never rely on unofficial social media lists.",
    keywords: ["find my MP", "who is my representative", "find my councillor"],
  },
  {
    question: "What does the Bible say about government and voting?",
    answer:
      "Key passages include Jeremiah 29:7, 1 Timothy 2:1–2, Micah 6:8, Romans 13, Matthew 22:21, and Acts 5:29. The Bible does not baptize a modern party. Voting is stewardship, not salvation. Explore the index at /scripture and the conscience guide at /learn/vote-with-conscience.",
    keywords: ["bible verses about government", "bible and voting", "scripture politics"],
  },
];

export const pageFaqs: Record<string, FaqItem[]> = {
  "why-engage": [
    {
      question: "Should Christians stay out of politics?",
      answer:
        "Christians are called to love neighbours in every sphere of life—including public institutions that shape law, budgets, schools, and justice. Staying uninformed is not neutrality; faithful engagement can include prayer, learning, advocacy, service, and elected office—always with the Kingdom of God as ultimate allegiance.",
    },
    {
      question: "Is Christian civic engagement the same as a culture war?",
      answer:
        "No. Kingdom Civics rejects culture-war posturing and partisan idolatry. Biblical civic engagement seeks truth, protects the vulnerable, prays for leaders, and serves communities—not viral outrage or power for its own sake.",
    },
  ],
  leaders: [
    {
      question: "How many councillors does Hamilton City Council have?",
      answer:
        "Hamilton City Council has 15 ward councillors plus the mayor (16 members total). Each councillor represents one ward. Federal and provincial representatives for Hamilton are listed separately.",
    },
    {
      question: "Where does Kingdom Civics get Hamilton leader information?",
      answer:
        "From official City of Hamilton pages (hamilton.ca) and parliamentary records (ourcommons.ca, ola.org). Each profile links to the primary source and shows a last-verified date.",
    },
  ],
  elections: [
    {
      question: "What offices are on the ballot in Hamilton's 2026 election?",
      answer:
        "Voters elect the mayor, one councillor per ward (15 wards), and school board trustees for public and separate boards. Candidate nominations are confirmed through the official municipal process.",
    },
    {
      question: "How do I register to vote in Hamilton?",
      answer:
        "Voter registration, identification requirements, and voting methods must be verified with the City of Hamilton and Elections Ontario. Use the official election page linked from Kingdom Civics rather than unofficial summaries.",
    },
  ],
  "kingdom-lens": [
    {
      question: "Can Kingdom Lens answer questions about Hamilton officials?",
      answer:
        "Yes. Ask about the mayor, ward councillors, MPs, MPPs, election dates, and how municipal government works. Answers include official source links and relevant Scripture where appropriate.",
    },
    {
      question: "Is Kingdom Lens connected to a political campaign?",
      answer:
        "No. Kingdom Lens is a research tool for civic education. It does not generate campaign messaging, endorsements, or partisan talking points.",
    },
    {
      question: "Can I share a Kingdom Lens answer?",
      answer:
        "Yes. After asking a question, use the Share answer button to copy a link. Others can open the same question on the Kingdom Lens page.",
    },
  ],
  learn: [
    {
      question: "What will I learn in Kingdom Civics Academy?",
      answer:
        "Plain-language lessons on how government works globally, Canadian and US structures, contacting representatives, attending meetings, voting with conscience, praying through elections, school boards, and Hamilton City Council—all grounded in Scripture.",
    },
    {
      question: "Do I need to live in Hamilton to use Kingdom Civics?",
      answer:
        "No. Biblical principles, prayer resources, and Kingdom Lens work worldwide. Hamilton is our first live city for official leader and election data.",
    },
  ],
  serve: [
    {
      question: "How can Christians serve in public life?",
      answer:
        "Attend meetings, join public consultation, volunteer, apply for boards, advocate on issues, and explore elected office as servant leadership—starting where God has placed you.",
    },
    {
      question: "Should Christians run for political office?",
      answer:
        "Some may—as stewardship, not as a culture war. Test calling, character, competence, community support, and cost. Learn the office’s real powers, verify official nomination rules, and never claim God endorsed your candidacy. See /learn/consider-running.",
    },
  ],
  trust: [
    {
      question: "Does Kingdom Civics endorse candidates?",
      answer:
        "No. We provide sourced civic education and biblical principles. Assessments describe evidence—not a person's faith, worth, or God's endorsement.",
    },
  ],
  glossary: [
    {
      question: "What is a ward in municipal government?",
      answer:
        "A ward is a geographic district within a city used to elect a local councillor. Knowing your ward tells you who represents your neighbourhood at city hall. See the Kingdom Civics glossary for related terms such as riding, bylaw, and jurisdiction.",
    },
    {
      question: "What is the difference between a riding and a ward?",
      answer:
        "A ward is typically a municipal electoral district. A riding (or constituency) is a provincial or federal electoral district. They have different boundaries and elect different offices.",
    },
  ],
  "for-churches": [
    {
      question: "Can our church use Kingdom Civics for small groups?",
      answer:
        "Yes. The four-week outline on /for-churches links free lessons, prayer prompts, and Kingdom Lens practice. It is educational, not a partisan curriculum, and does not require an account.",
    },
    {
      question: "Should pastors endorse candidates from the pulpit?",
      answer:
        "Kingdom Civics recommends against pulpit endorsements. Teach biblical principles, pray for all in authority, and let members make prudential judgments. No candidate is synonymous with the Kingdom of God.",
    },
  ],
  "find-representatives": [
    {
      question: "How do I find my Member of Parliament in Canada?",
      answer:
        "Use the official House of Commons member lookup at ourcommons.ca, or Elections Canada tools. Enter your postal code on a government domain—not a campaign site.",
    },
    {
      question: "How do I find my US Representative?",
      answer:
        "Use house.gov/representatives/find-your-representative for the House and senate.gov for Senators. USA.gov also links to state and local official directories.",
    },
  ],
  scripture: [
    {
      question: "What does the Bible say about government?",
      answer:
        "Scripture calls believers to seek the city's welfare (Jeremiah 29:7), pray for those in authority (1 Timothy 2:1–2), do justice and love mercy (Micah 6:8), honour governing authorities within limits (Romans 13), and obey God when human law conflicts with divine command (Acts 5:29). See /scripture.",
    },
    {
      question: "Are there Bible verses about voting?",
      answer:
        "The Bible does not describe modern ballots, but it does command wisdom, justice, truth-telling, and love of neighbour—which apply to voting. Kingdom Civics treats voting as stewardship, not salvation. See /learn/vote-with-conscience.",
    },
  ],
  start: [
    {
      question: "I'm new. Where should a Christian start with civic life?",
      answer:
        "Learn how government works, find who represents you with official tools, pray for those names, ask Kingdom Lens one question, then show up at a meeting or serve locally. The five-step path is at /start.",
    },
    {
      question: "Do I have to run for office to be faithful?",
      answer:
        "No. Some are called to elected office as stewardship. All are called to prayer, truth-telling, and neighbour-love. Running is one path among many—see /learn/consider-running and /serve.",
    },
  ],
  pray: [
    {
      question: "How should Christians pray during an election?",
      answer:
        "Pray for voters, election officials, candidates you oppose, and whoever wins. 1 Timothy 2 does not expire on election night. A full pattern is at /learn/pray-for-an-election.",
    },
  ],
};
