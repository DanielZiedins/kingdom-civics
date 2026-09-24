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

export function getWeekendStatus(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  if (date < "2026-09-26") {
    return "Opens this Saturday and Sunday, 10 a.m.–6 p.m. Bring valid ID.";
  }
  if (date === "2026-09-26" && hour < 10) {
    return "Opens today at 10 a.m. Open again Sunday. Bring valid ID.";
  }
  if (date === "2026-09-26" && hour < 18) {
    return "Open today until 6 p.m. Open again Sunday, 10 a.m.–6 p.m.";
  }
  if (date === "2026-09-26") {
    return "Saturday polls have closed. Open again Sunday, 10 a.m.–6 p.m.";
  }
  if (date === "2026-09-27" && hour < 10) {
    return "Opens today at 10 a.m. Bring valid ID. Any poll in your ward.";
  }
  if (date === "2026-09-27" && hour < 18) {
    return "Open today until 6 p.m. Bring valid ID. Any poll in your ward.";
  }
  return "Community polls have closed. Advance polls are October 3–4, 10 a.m.–6 p.m.";
}

export function getChurchNote(now = new Date()) {
  const { date, hour } = torontoDateParts(now);
  if (date > "2026-09-27" || (date === "2026-09-27" && hour >= 18)) {
    return "Hamilton community polls have closed. Advance polls are October 3–4, 10–11, and 17–18, 10 a.m.–6 p.m. Bring valid ID. A voter card is not required. You may vote at any poll in your ward. Official info: hamilton.ca. Kingdom Civics does not endorse candidates.";
  }
  return "Hamilton community polls are open Saturday and Sunday, September 26–27, 10 a.m.–6 p.m. — including after church on Sunday. Bring valid ID. A voter card is not required. The City has scheduled 59 community polls; your card lists the stations in your ward, and you may use any of them. Official info: hamilton.ca. Kingdom Civics does not endorse candidates.";
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
  if (date < "2026-09-26") {
    return "This weekend · Community polls Sat–Sun · 10 a.m.–6 p.m. · Bring ID";
  }
  if (date === "2026-09-26" && hour < 18) {
    return hour < 10
      ? "Community polls open today at 10 a.m. · Bring ID · Any poll in your ward"
      : "Community polls open today until 6 p.m. · Bring ID · Any poll in your ward";
  }
  if (date === "2026-09-26") {
    return "Community polls open again Sunday · 10 a.m.–6 p.m. · Bring ID";
  }
  if (date === "2026-09-27" && hour < 18) {
    return hour < 10
      ? "Community polls open today at 10 a.m. · Bring ID · Any poll in your ward"
      : "Community polls open today until 6 p.m. · Bring ID · Any poll in your ward";
  }
  if (date === "2026-09-27") {
    return "Advance polls next weekend · Oct 3–4 · 10 a.m.–6 p.m. · Bring ID";
  }
  const next = getNextVotingWindow(now);
  if (next?.id === "community") {
    return "Community polls Sep 26–27 · 10 a.m.–6 p.m. · Bring ID";
  }
  if (next?.id.startsWith("advance")) {
    return `Advance polls ${next.when} · 10 a.m.–6 p.m. · Any poll in your ward`;
  }
  if (next?.id === "election-day") {
    return "Hamilton votes Monday Oct 26 · Official sources only";
  }
  return "Hamilton election · Official sources only";
}
