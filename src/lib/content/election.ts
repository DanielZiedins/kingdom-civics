import { hamiltonMeta } from "@/lib/hamilton";

export const hamiltonElection = {
  date: hamiltonMeta.electionDate,
  weekdayLabel: "Monday, October 26, 2026",
  offices: "Mayor, 15 ward councillors, and school board trustees",
  nominationsClosed: "August 21, 2026",
  candidatesCertified: "August 24, 2026",
  communityPolls: "September 26–27, 2026",
  advancePolls: [
    "October 3–4, 2026",
    "October 10–11, 2026",
    "October 17–18, 2026",
  ],
  votersListAmendUntil: "October 24, 2026",
  termBegins: "November 15, 2026",
  noOnlineOrMail: true,
  clerkPhone: "905-546-4365",
  clerkEmail: "elections@hamilton.ca",
  urls: {
    hub: hamiltonMeta.electionUrl,
    voters: "https://www.hamilton.ca/city-council/municipal-election/voters",
    eligibility: "https://www.hamilton.ca/city-council/municipal-election/voters/voter-eligibility",
    candidates: "https://www.hamilton.ca/city-council/municipal-election/candidates-third-party-advertisers",
    councillors: hamiltonMeta.councilUrl,
  },
} as const;
