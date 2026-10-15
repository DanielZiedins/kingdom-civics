import { hamiltonMeta } from "@/lib/hamilton";

export const hamiltonElection = {
  date: hamiltonMeta.electionDate,
  weekdayLabel: "Monday, October 26, 2026",
  offices: "Mayor, 15 ward councillors, and school board trustees",
  nominationsClosed: "August 21, 2026",
  candidatesCertified: "August 24, 2026",
  communityPolls: "September 26–27, 2026",
  communityPollHours: "10 a.m.–6 p.m.",
  communityPollCount: 59,
  ballotOnDemandCount: 8,
  votingOpportunities: "more than 300",
  advancePollHours: "10 a.m.–6 p.m.",
  advancePolls: [
    "October 3–4, 2026",
    "October 10–11, 2026",
    "October 17–18, 2026",
  ],
  cityHallSpecial: "October 16–23, 2026",
  votersListAmendUntil: "October 24, 2026",
  termBegins: "November 15, 2026",
  noOnlineOrMail: true,
  voterCardRequired: false,
  anyPollInWard: true,
  clerkPhone: "905-546-4365",
  clerkEmail: "elections@hamilton.ca",
  schoolBoards: [
    "Hamilton-Wentworth District School Board",
    "Hamilton-Wentworth Catholic District School Board",
    "Conseil scolaire Viamonde",
    "Conseil scolaire catholique MonAvenir",
  ],
  outreach: [
    { date: "September 17–18", end: "2026-09-18", place: "Ontario Works Office, 250 Main St E", hours: "8:30 a.m.–4 p.m." },
    { date: "September 19", end: "2026-09-19", place: "Harvest Festival, 77 King St W, Stoney Creek", hours: "11 a.m.–4 p.m." },
    { date: "September 25", end: "2026-09-25", place: "Neighbour to Neighbour, 28 Athens St", hours: "9:30 a.m.–12:30 p.m." },
    { date: "September 27", end: "2026-09-27", place: "Open Streets, 876 Cannon St E", hours: "10 a.m.–4 p.m." },
  ],
  urls: {
    hub: hamiltonMeta.electionUrl,
    voters: "https://www.hamilton.ca/city-council/municipal-election/voters",
    eligibility: "https://www.hamilton.ca/city-council/municipal-election/voters/voter-eligibility",
    findWard: "https://www.hamilton.ca/city-council/municipal-election/voters/find-my-ward",
    candidates: "https://www.hamilton.ca/city-council/municipal-election/candidates-third-party-advertisers",
    councillors: hamiltonMeta.councilUrl,
    accessibility: "https://www.hamilton.ca/city-council/news-notices/news-releases/prioritizing-accessibility-2026-municipal-election",
  },
} as const;

export const votingWindows = [
  {
    id: "community",
    label: "Community polls",
    when: "Sep 26–27",
    start: "2026-09-26",
    end: "2026-09-27",
    detail: "10 a.m.–6 p.m. in selected buildings and accessible locations. Vote at any poll in your ward.",
  },
  {
    id: "advance-1",
    label: "Advance polls",
    when: "Oct 3–4",
    start: "2026-10-03",
    end: "2026-10-04",
    detail: "10 a.m.–6 p.m. First weekend of ward advance voting.",
  },
  {
    id: "advance-2",
    label: "Advance polls",
    when: "Oct 10–11",
    start: "2026-10-10",
    end: "2026-10-11",
    detail: "10 a.m.–6 p.m. Thanksgiving weekend advance voting.",
  },
  {
    id: "advance-3",
    label: "Advance polls",
    when: "Oct 17–18",
    start: "2026-10-17",
    end: "2026-10-18",
    detail: "10 a.m.–6 p.m. Final weekend before election day.",
  },
  {
    id: "election-day",
    label: "Election day",
    when: "Oct 26",
    start: "2026-10-26",
    end: "2026-10-26",
    detail: "Mayor, your ward councillor, and school board trustees. Confirm hours on hamilton.ca.",
  },
] as const;

export function torontoDateParts(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      hourCycle: "h23",
    }).formatToParts(now).map((part) => [part.type, part.value]),
  );
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    hour: Number(parts.hour),
  };
}

export function upcomingOutreach(now = new Date()) {
  const { date } = torontoDateParts(now);
  return hamiltonElection.outreach.filter((event) => event.end >= date);
}

function pollDayStatus(date: string, hour: number, day: string, again: string) {
  if (date === day && hour < 10) return `Open today at 10 a.m. ${again}`;
  if (date === day && hour < 18) return `Open today until 6 p.m. ${again}`;
  return "";
}

export function getWeekendStatus(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  if (date > "2026-10-26") {
    return "Election day has passed. Pray for whoever serves. The new term begins November 15.";
  }
  if (date === "2026-10-26") {
    return "Election day is today. Confirm hours on hamilton.ca. Bring valid ID. Any poll in your ward.";
  }
  if (date > "2026-10-18" || (date === "2026-10-18" && hour >= 18)) {
    return "Advance polls have closed. Election day is Monday, October 26. Confirm hours on hamilton.ca. Bring valid ID.";
  }
  const sundayAdvance = pollDayStatus(date, hour, "2026-10-18", "Bring valid ID. Any poll in your ward.");
  if (sundayAdvance) return sundayAdvance;
  const saturdayAdvance = pollDayStatus(date, hour, "2026-10-17", "Open again Sunday, 10 a.m.–6 p.m. Bring valid ID.");
  if (saturdayAdvance) return saturdayAdvance;
  if (date === "2026-10-17") return "Saturday advance polls have closed. Open again Sunday, 10 a.m.–6 p.m.";
  if (date === "2026-10-15" || date === "2026-10-16") {
    return "City Hall special voting runs October 16–23 — confirm hours. Final advance polls are Saturday and Sunday, October 17–18, 10 a.m.–6 p.m. Bring valid ID.";
  }
  if (date >= "2026-10-12") {
    return "Final advance polls are Saturday and Sunday, October 17–18, 10 a.m.–6 p.m. Bring valid ID.";
  }
  if (date > "2026-10-11" || (date === "2026-10-11" && hour >= 18)) {
    return "This advance weekend has closed. The last advance polls are October 17–18, 10 a.m.–6 p.m.";
  }
  if (date >= "2026-10-05") {
    return "Advance polls are Saturday and Sunday, October 10–11, 10 a.m.–6 p.m. Bring valid ID.";
  }
  if (date >= "2026-09-28") {
    return "Community polls have closed. Advance polls are October 3–4, 10 a.m.–6 p.m.";
  }
  if (date < "2026-09-26") return "Opens this Saturday and Sunday, 10 a.m.–6 p.m. Bring valid ID.";
  const sundayCommunity = pollDayStatus(date, hour, "2026-09-27", "Bring valid ID. Any poll in your ward.");
  if (sundayCommunity) return sundayCommunity;
  const saturdayCommunity = pollDayStatus(date, hour, "2026-09-26", "Open again Sunday, 10 a.m.–6 p.m.");
  if (saturdayCommunity) return saturdayCommunity;
  if (date === "2026-09-26") return "Saturday polls have closed. Open again Sunday, 10 a.m.–6 p.m.";
  return "Community polls have closed. Advance polls are October 3–4, 10 a.m.–6 p.m.";
}

export function getChurchNote(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  const close = "Official info: hamilton.ca. Kingdom Civics does not endorse candidates.";
  if (date > "2026-10-26") {
    return `Hamilton’s October 26 election day has passed. Pray for whoever serves. The new term begins November 15, 2026. ${close}`;
  }
  if (date > "2026-10-18" || (date === "2026-10-18" && hour >= 18)) {
    return `Hamilton’s final advance polls have closed. Election day is Monday, October 26. Confirm hours on hamilton.ca. Bring valid ID. A voter card is not required. You may vote at any poll in your ward. If you already voted, you do not vote again. ${close}`;
  }
  if (date === "2026-10-15" || date === "2026-10-16") {
    return "Hamilton City Hall special voting runs October 16–23 at 71 Main Street West. Confirm the hours — they are not the advance-poll hours. Final advance polls are Saturday and Sunday, October 17–18, 10 a.m.–6 p.m. Bring valid ID. A voter card is not required. You may vote at any poll in your ward. If you already voted, you do not vote again. " + close;
  }
  if (date >= "2026-09-28") {
    return "Hamilton’s final advance polls are Saturday and Sunday, October 17–18, 10 a.m.–6 p.m. Bring valid ID. A voter card is not required. You may vote at any poll in your ward. City Hall special voting runs October 16–23 — confirm hours. Election day is Monday, October 26. If you already voted, you do not vote again. " + close;
  }
  return "Hamilton community polls are open Saturday and Sunday, September 26–27, 10 a.m.–6 p.m. — including after church on Sunday. Bring valid ID. A voter card is not required. The City has scheduled 59 community polls; your card lists the stations in your ward, and you may use any of them. " + close;
}

export type VoteDay = { small: string; strong: string; span: string };
export type VoteFocus = {
  aria: string;
  kicker: string;
  title: string;
  days: VoteDay[];
};

export function getElectionHeading(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  if (date > "2026-10-26") return "The ballots are cast. Pray for whoever serves.";
  if (date === "2026-10-26") return "Hamilton votes today. Confirm hours. Bring ID.";
  if (date > "2026-10-18" || (date === "2026-10-18" && hour >= 18)) return "Election day is Monday, October 26. Bring ID.";
  if (date === "2026-10-18" && hour >= 10) return "Final advance polls are open today until 6 p.m. Bring ID.";
  if (date === "2026-10-18") return "Final advance polls open today at 10 a.m. Bring ID.";
  if (date === "2026-10-17" && hour >= 18) return "Advance polls open again Sunday. Bring ID.";
  if (date === "2026-10-17" && hour >= 10) return "Advance polls are open today until 6 p.m. Bring ID.";
  if (date === "2026-10-17") return "Advance polls open today at 10 a.m. Bring ID.";
  if (date === "2026-10-16") return "City Hall special voting has begun. Confirm hours. Advance polls are tomorrow.";
  if (date === "2026-10-15") return "City Hall special voting starts tomorrow. Advance polls are Saturday.";
  if (date >= "2026-10-12") return "Hamilton’s last advance weekend is October 17–18. Bring ID.";
  if (date >= "2026-09-28") return "Advance polls are still ahead. Bring ID.";
  return "This weekend, Hamilton casts the first ballots. Bring ID.";
}

export function getVoteFocus(now = new Date()): VoteFocus {
  const { date, hour } = torontoDateParts(now);
  if (date > "2026-10-26") {
    return {
      aria: "After Hamilton election day",
      kicker: "AFTER THE BALLOT",
      title: "Pray for whoever serves.",
      days: [
        { small: "ELECTION DAY", strong: "Oct 26", span: "Ballots cast" },
        { small: "TERM BEGINS", strong: "Nov 15", span: "New council" },
      ],
    };
  }
  if (date > "2026-10-18" || (date === "2026-10-18" && hour >= 18)) {
    return {
      aria: "Hamilton election day",
      kicker: "ELECTION DAY · MONDAY",
      title: "October 26. Bring ID. Confirm hours.",
      days: [
        { small: "MONDAY", strong: "Oct 26", span: "Confirm hours" },
        { small: "VOTERS LIST", strong: "Oct 24", span: "Amend in person" },
      ],
    };
  }
  if (date >= "2026-09-28") {
    return {
      aria: "Hamilton final advance polls",
      kicker: "FINAL ADVANCE POLLS",
      title: "Saturday and Sunday. Any poll in your ward.",
      days: [
        { small: "SATURDAY", strong: "Oct 17", span: "10 a.m.–6 p.m." },
        { small: "SUNDAY · AFTER CHURCH", strong: "Oct 18", span: "10 a.m.–6 p.m." },
      ],
    };
  }
  return {
    aria: "Hamilton community polls this weekend",
    kicker: `COMMUNITY POLLS · ${hamiltonElection.communityPollCount} LOCATIONS`,
    title: "Saturday and Sunday. Any poll in your ward.",
    days: [
      { small: "SATURDAY", strong: "Sep 26", span: "10 a.m.–6 p.m." },
      { small: "SUNDAY · AFTER CHURCH", strong: "Sep 27", span: "10 a.m.–6 p.m." },
    ],
  };
}

export function getNextVotingWindow(now = new Date()) {
  return (
    votingWindows.find((window) => {
      const end = Date.parse(`${window.end}T23:59:59.999-04:00`);
      return Number.isFinite(end) && end >= now.getTime();
    }) ?? votingWindows[votingWindows.length - 1]
  );
}

export function getBannerCopy(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  if (date > "2026-10-26") return "Hamilton has voted · Pray for whoever serves · Term begins Nov 15";
  if (date === "2026-10-26") return "Election day is today · Confirm hours on hamilton.ca · Bring ID";
  if (date > "2026-10-18" || (date === "2026-10-18" && hour >= 18)) {
    return "Election day Monday Oct 26 · Bring ID · Any poll in your ward";
  }
  if (date === "2026-10-18" && hour >= 10 && hour < 18) return "Final advance polls open today until 6 p.m. · Bring ID";
  if (date === "2026-10-18") return "Final advance polls open today at 10 a.m. · Bring ID";
  if (date === "2026-10-17" && hour >= 18) return "Advance polls open again Sunday · 10 a.m.–6 p.m. · Bring ID";
  if (date === "2026-10-17" && hour >= 10) return "Advance polls open today until 6 p.m. · Bring ID · Any poll in your ward";
  if (date === "2026-10-17") return "Advance polls open today at 10 a.m. · Bring ID · Any poll in your ward";
  if (date === "2026-10-16") return "City Hall special voting today · Confirm hours · Advance polls tomorrow 10 a.m.–6 p.m.";
  if (date === "2026-10-15") return "Tomorrow · City Hall special voting starts · Confirm hours · Advance polls Sat–Sun";
  if (date >= "2026-10-12") return "Final advance polls · Sat–Sun Oct 17–18 · 10 a.m.–6 p.m. · Bring ID";
  const next = getNextVotingWindow(now);
  if (next?.id.startsWith("advance")) return `Advance polls ${next.when} · 10 a.m.–6 p.m. · Any poll in your ward`;
  if (next?.id === "election-day") return "Hamilton votes Monday Oct 26 · Official sources only";
  if (date < "2026-09-26") return "This weekend · Community polls Sat–Sun · 10 a.m.–6 p.m. · Bring ID";
  return "Hamilton election · Official sources only";
}
