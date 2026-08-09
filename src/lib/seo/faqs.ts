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
  ],
};
