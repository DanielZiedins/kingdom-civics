export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  scripture: string;
  keywords: string[];
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export type JournalLink = {
  href: string;
  title: string;
  description: string;
  tag: string;
};

const pollLessons: JournalLink[] = [
  {
    href: "/learn/what-to-bring-to-the-poll",
    title: "What to Bring to the Poll — Hamilton 2026",
    description: "ID, voter cards, ward stations, and the hours the City has actually published.",
    tag: "LEARN",
  },
  {
    href: "/learn/discern-local-candidates",
    title: "How to Discern Local Candidates without a Scorecard",
    description: "Read the office and the official list before you mark a name.",
    tag: "LEARN",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-a-church-can-say-october-18",
    title: "What a Church Can Say This Sunday, October 18",
    description:
      "A pastor’s note for Hamilton’s last advance Sunday: pray, point to official sources, and send people to vote until 6 p.m. without naming a candidate.",
    date: "2026-10-14",
    updated: "2026-10-14",
    category: "Church",
    scripture: "1 Timothy 2:1–2 · Jeremiah 29:7",
    keywords: [
      "church vote Sunday October 18 Hamilton",
      "Hamilton advance polls after church",
      "what a pastor can say municipal election",
      "Hamilton vote October 18",
    ],
    sections: [
      {
        heading: "Name the day. Do not name a favourite.",
        body: "On Sunday, October 18, Hamilton’s final advance polls are open from 10 a.m. to 6 p.m., and they were open Saturday as well. A church can say that out loud. Name the offices: mayor, ward councillor, and school board trustee. Point people to hamilton.ca for eligibility, wards, and certified candidates. Do not read a preferred name from the pulpit. No candidate is the Kingdom of God.",
      },
      {
        heading: "A sentence you can read aloud",
        body: "Eligible voters who have not already voted can vote today until 6 p.m., and they could vote yesterday. Bring valid identification. A voter card is not required. You may vote at any poll in your ward. If you already cast a ballot, you do not vote again. The City’s website is the source for locations and certified candidates. We will pray for whoever serves. We will not tell you which name to mark.",
      },
      {
        heading: "Pray before you inform",
        body: "1 Timothy 2 does not wait for agreement. Pray for voters to love truth, for election workers, for candidates you would not support, and for neighbours who need an accessible entrance or extra time. Pray that the church will not split over a prudential ballot. Then preach Christ. Civic information is neighbour-love. It is not the sermon.",
      },
      {
        heading: "After the benediction",
        body: "Some people will go straight to a poll. Thank them, including people who will mark a different name than you would. City Hall special voting runs October 16–23 — confirm those hours before you send anyone there. If Sunday is impossible, election day is Monday, October 26. Confirm that day’s hours on hamilton.ca. The voters list can be amended in person with ID through October 24, or at a poll. There are no online or mail-in ballots. Faithfulness does not expire when the weekend does.",
      },
    ],
    faqs: [
      {
        question: "Should a pastor endorse a candidate before October 18?",
        answer:
          "Kingdom Civics recommends against pulpit endorsements. Teach biblical principles, pray for all in authority, and point to the City of Hamilton’s official pages rather than a scorecard.",
      },
      {
        question: "Are Hamilton advance polls open after church on October 18?",
        answer:
          "Yes. The final advance polls run Saturday and Sunday, October 17–18, 2026, from 10 a.m. to 6 p.m. Bring valid ID. You may vote at any poll in your ward. If you already voted, you do not vote again.",
      },
    ],
  },
  {
    slug: "hamilton-final-advance-polls",
    title: "Hamilton’s Last Advance Polls Are October 17–18",
    description:
      "The final advance weekend before election day: Saturday and Sunday, 10 a.m.–6 p.m., valid ID, any poll in your ward, and what to do if you already voted.",
    date: "2026-10-13",
    updated: "2026-10-13",
    category: "Hamilton",
    scripture: "Jeremiah 29:7 · 1 Timothy 2:1–2",
    keywords: [
      "Hamilton advance polls October 17",
      "Hamilton final advance voting 2026",
      "vote Hamilton before October 26",
      "Hamilton election day ID",
    ],
    sections: [
      {
        heading: "The weekend that is still open",
        body: "Community polls on September 26–27, and the advance weekends of October 3–4 and October 10–11, have passed. The last advance polls are Saturday and Sunday, October 17 and 18, 2026, from 10 a.m. to 6 p.m. Bring valid identification. A voter information card is helpful, not required, and it lists the polling stations in your ward. You may vote at any of them. Kingdom Civics does not publish an unofficial address list and does not endorse a candidate.",
      },
      {
        heading: "If you already voted, stop",
        body: "This election takes one ballot. If you voted at a community poll or at an earlier advance poll, you do not vote again on October 17, October 18, or election day. If you are unsure whether your ballot was accepted, call the Clerk before you go: 905-546-4365 or elections@hamilton.ca. Guessing, or marking a second ballot, is not faithfulness.",
      },
      {
        heading: "City Hall is a separate window",
        body: "The City has listed special voting at City Hall, 71 Main Street West, from October 16 through October 23. Confirm the hours on hamilton.ca before you travel. Those hours are not the same as the 10 a.m.–6 p.m. advance-poll window, and this page will not invent them. Eight ballot-on-demand sites, including McMaster, Mohawk, and Redeemer, plus some social-service locations, also keep their own hours.",
      },
      {
        heading: "Then Monday, October 26",
        body: "If the weekend is impossible, election day is Monday, October 26. Confirm that day’s hours and locations on hamilton.ca. You can amend the voters list in person with ID through October 24, or be added at a poll. There are no online or mail-in ballots. Read certified candidates from the City — mayor, your ward councillor, and the school board you are eligible for. The new term begins November 15. Seek the city’s welfare, and pray for whoever serves.",
      },
    ],
    faqs: [
      {
        question: "When is Hamilton’s last advance poll weekend?",
        answer:
          "Saturday and Sunday, October 17–18, 2026, from 10 a.m. to 6 p.m. Bring valid ID. A voter card is not required. You may vote at any poll in your ward. Confirm locations on hamilton.ca.",
      },
      {
        question: "Can I still vote in Hamilton if I missed the community polls?",
        answer:
          "Yes, if you have not already voted. The final advance polls are October 17–18, 10 a.m.–6 p.m. Election day is Monday, October 26. City Hall special voting runs October 16–23 — confirm hours. There are no online or mail-in ballots.",
      },
    ],
  },
  {
    slug: "before-hamilton-community-polls",
    title: "Before Hamilton’s Community Polls Open",
    description:
      "A practical checklist for Friday night and Saturday morning: valid ID, your ward, official locations, and a way to pray without endorsing a candidate.",
    date: "2026-09-25",
    updated: "2026-09-25",
    category: "Hamilton",
    scripture: "Jeremiah 29:7 · Proverbs 18:17",
    keywords: [
      "before Hamilton community polls",
      "Hamilton vote Saturday September 26",
      "what to do before voting Hamilton",
      "Hamilton voter ID community poll",
    ],
    sections: [
      {
        heading: "Put the official facts where you will see them",
        body: "Eligible Hamilton voters can cast a ballot Saturday and Sunday, September 26 and 27, 2026, from 10 a.m. to 6 p.m. The City has scheduled 59 community polls in high-density buildings and locations chosen for accessibility. Tonight, find your ward with the City’s Find my Ward tool and set valid identification where you will pick it up in the morning. A voter information card is helpful, not required. If the card has arrived, it lists the polling stations in your ward. You may vote at any of them. Kingdom Civics does not publish an unofficial address list and does not endorse a candidate.",
      },
      {
        heading: "Read the ballot before you read a feed",
        body: "The offices are mayor, one ward councillor, and school board trustees. The boards on Hamilton’s ballot are the Hamilton-Wentworth District School Board, the Hamilton-Wentworth Catholic District School Board, Conseil scolaire Viamonde, and Conseil scolaire catholique MonAvenir. Eligibility for each trustee ballot is set by the City. Nominations closed August 21 and candidates were certified August 24. Read that certified list on hamilton.ca. A forwarded graphic is not a source. Ask what the office actually controls, what the public record shows, and whether you can pray for the opponent without contempt.",
      },
      {
        heading: "Outreach is not the same thing as a polling station",
        body: "The City has listed election outreach on Friday, September 25, at Neighbour to Neighbour, 28 Athens Street, from 9:30 a.m. to 12:30 p.m., and on Sunday, September 27, at Open Streets, 876 Cannon Street East, from 10 a.m. to 4 p.m. Those are chances to ask the Clerk’s team a question. They are not a promise that the building is your poll. Confirm the station on your voter card or the City’s voters page. Eight ballot-on-demand sites, including McMaster, Mohawk, and Redeemer, plus some social-service locations, keep their own hours. Do not assume those hours are 10 a.m. to 6 p.m.",
      },
      {
        heading: "If Saturday morning gets away from you",
        body: "Sunday, September 27, is still a voting day, 10 a.m. to 6 p.m. A church can worship first and send people to vote afterward without reading a name from the pulpit. If the weekend is impossible, advance polls run October 3–4, 10–11, and 17–18, also 10 a.m. to 6 p.m. Election day is Monday, October 26. There are no online or mail-in ballots. Voters can amend the list in person with ID through October 24, or at a poll. The Clerk’s office is 905-546-4365 and elections@hamilton.ca, at City Hall, 71 Main Street West. Seek the city’s welfare. Do not baptize the ballot.",
      },
    ],
    faqs: [
      {
        question: "What should I do the night before Hamilton’s community polls?",
        answer:
          "Find your ward on the City of Hamilton site, set out valid identification, and read certified candidates from hamilton.ca. A voter card is helpful, not required. Community polls are Saturday and Sunday, September 26–27, 2026, from 10 a.m. to 6 p.m. You may vote at any poll in your ward.",
      },
      {
        question: "Is a City outreach table the same as a polling station?",
        answer:
          "No. Outreach stops, including Neighbour to Neighbour on September 25 and Open Streets on September 27, are places to ask questions. Confirm your polling station on your voter information card or the City’s voters page. Do not rely on a forwarded address list.",
      },
    ],
  },
  {
    slug: "hamilton-community-polls-this-weekend",
    title: "Hamilton Community Polls Are This Weekend — What the City Actually Said",
    description:
      "A direct answer for Hamilton voters: Saturday and Sunday, September 26–27, 10 a.m.–6 p.m., valid ID, any poll in your ward, and no candidate endorsements.",
    date: "2026-09-24",
    updated: "2026-09-24",
    category: "Hamilton",
    scripture: "Jeremiah 29:7 · 1 Timothy 2:1–2",
    keywords: [
      "Hamilton community polls September 26",
      "vote Hamilton this weekend",
      "Hamilton voter ID 2026",
      "Hamilton municipal election",
    ],
    sections: [
      {
        heading: "The short answer",
        body: "Eligible Hamilton voters can cast a ballot this Saturday and Sunday, September 26 and 27, 2026, from 10 a.m. to 6 p.m. The City of Hamilton has scheduled 59 community polls in high-density buildings and locations chosen for accessibility. Bring valid identification. A voter information card is helpful, not required. You may vote at any polling station in your ward. There are no online or mail-in ballots. Kingdom Civics does not endorse candidates or republish unofficial location lists.",
      },
      {
        heading: "What is on the ballot",
        body: "This is a municipal and school board election, not a federal campaign. Voters elect the mayor, one councillor for their ward, and school board trustees. The boards on Hamilton’s ballot are the Hamilton-Wentworth District School Board, the Hamilton-Wentworth Catholic District School Board, Conseil scolaire Viamonde, and Conseil scolaire catholique MonAvenir. Eligibility for each trustee ballot is set by the City. Confirm it on hamilton.ca before you mark a name.",
      },
      {
        heading: "How to find a poll without a rumour",
        body: "Your voter information card lists the polling stations in your ward. The City has said you may use any of them, not only one assigned building. If the card has not arrived, use the official Find my Ward tool, then open the City’s voters page for locations. Do not rely on a forwarded map. Eight ballot-on-demand sites, including McMaster, Mohawk, and Redeemer, plus some social-service locations, use their own hours. Those hours are not the same as the 10 a.m.–6 p.m. community-poll window.",
      },
      {
        heading: "Sunday is still a voting day",
        body: "Polls are open Sunday, September 27, from 10 a.m. to 6 p.m. A congregation can worship first and vote afterward. Pray for the people administering the election, for neighbours who need extra time or an accessible entrance, and for whoever wins. Voting is stewardship, not salvation. Advance polls follow on October 3–4, 10–11, and 17–18, also 10 a.m.–6 p.m. Election day is Monday, October 26.",
      },
    ],
    faqs: [
      {
        question: "Do I need a voter card to vote in Hamilton this weekend?",
        answer:
          "No. The City of Hamilton has said a voter information card is helpful, not required. Bring valid identification. If you are missing from the voters list, you can usually be added at the poll with ID.",
      },
      {
        question: "Can I vote at any community poll in Hamilton?",
        answer:
          "You may vote at any polling station in your ward. Confirm the ward with the City’s Find my Ward tool. Kingdom Civics does not publish an unofficial address list.",
      },
    ],
  },
  {
    slug: "what-a-church-can-say-on-sunday",
    title: "What a Church Can Say on Sunday Without Endorsing a Candidate",
    description:
      "A pastor’s note for Hamilton’s community-poll Sunday: pray for the city, point to official sources, and refuse to baptize a ballot.",
    date: "2026-09-24",
    updated: "2026-09-24",
    category: "Church",
    scripture: "1 Timothy 2:1–2 · Acts 5:29 · Micah 6:8",
    keywords: [
      "church and municipal election",
      "pray for an election Sunday",
      "Christian civic discipleship Hamilton",
      "nonpartisan church voting",
    ],
    sections: [
      {
        heading: "Say the offices. Do not say the names you prefer.",
        body: "On Sunday, September 27, Hamilton’s community polls are open from 10 a.m. to 6 p.m. A church can tell the truth about that without becoming a campaign office. Name the offices on the ballot: mayor, ward councillor, and school board trustee. Point people to hamilton.ca for eligibility, wards, and certified candidates. Do not read a favourite list from the pulpit. No candidate is synonymous with the Kingdom of God.",
      },
      {
        heading: "A prayer that fits the service",
        body: "1 Timothy 2 does not wait until the congregation agrees. Pray for voters to love truth, for election workers, for candidates you would not support, and for the church not to split over a prudential ballot. Pray for neighbours who need an accessible entrance or extra time. Then preach Christ. Civic information is neighbour-love. It is not the sermon.",
      },
      {
        heading: "A sentence you can read aloud",
        body: "Eligible voters in Hamilton can vote today until 6 p.m., and they could vote yesterday. Bring valid identification. A voter card is not required. You may vote at any poll in your ward. The City’s website is the source for locations and certified candidates. We will pray for whoever serves. We will not tell you which name to mark.",
      },
      {
        heading: "After the benediction",
        body: "Some people will go straight to a poll. Thank them for seeking the city’s welfare, including people who will mark a different name than you would. If someone asks for a recommendation, offer the questions instead: What does this office actually control? What does the official record show? Can I pray for the opponent without contempt? Advance polls continue in October. Election day is October 26. Faithfulness does not expire when the weekend does.",
      },
    ],
    faqs: [
      {
        question: "Should a pastor endorse a municipal candidate?",
        answer:
          "Kingdom Civics recommends against pulpit endorsements. Teach biblical principles, pray for all in authority, and let members make prudential judgments. Point to official sources rather than a scorecard.",
      },
      {
        question: "Are Hamilton polls open on Sunday, September 27?",
        answer:
          "Yes. Community polls run Saturday and Sunday, September 26–27, 2026, from 10 a.m. to 6 p.m. Bring valid ID. You may vote at any poll in your ward.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function journalRelated(slug: string): JournalLink[] {
  const notes = blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      tag: "JOURNAL",
    }));
  return [...notes, ...pollLessons].slice(0, 4);
}
