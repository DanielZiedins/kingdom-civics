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

export const blogPosts: BlogPost[] = [
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
