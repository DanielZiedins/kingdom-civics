export const civicRhythm = [
  {
    day: "Sunday",
    title: "Worship first. Politics second.",
    body: "Gather with the church. Refuse to treat the pulpit as a campaign HQ. Rest is a confession that Christ is King.",
    href: "/learn/talk-politics-in-church",
    cta: "Talk politics without splitting the body",
  },
  {
    day: "Monday",
    title: "Learn one office.",
    body: "Map which level of government actually controls one issue you care about. Advocacy without jurisdiction is noise.",
    href: "/learn/how-government-works",
    cta: "How government works",
  },
  {
    day: "Tuesday",
    title: "Find the names.",
    body: "Use official lookup tools—never campaign lists. Write down who represents you, then you can pray by name.",
    href: "/find-representatives",
    cta: "Official representative lookups",
  },
  {
    day: "Wednesday",
    title: "Pray for those in authority.",
    body: "1 Timothy 2 does not add an exception for leaders you dislike. Intercession is civic work.",
    href: "/pray",
    cta: "Today’s prayer prompt",
  },
  {
    day: "Thursday",
    title: "Read a primary source.",
    body: "Open a statute, agenda, budget line, or official page before you share a clip. Proverbs 18:17 still applies.",
    href: "/learn/evaluate-political-claims",
    cta: "Evaluate political claims",
  },
  {
    day: "Friday",
    title: "Ask one honest question.",
    body: "Take a civic question to Kingdom Lens. Inspect sources, Scripture, uncertainties, and the other side.",
    href: "/kingdom-lens",
    cta: "Open Kingdom Lens",
  },
  {
    day: "Saturday",
    title: "Show up for neighbours.",
    body: "Attend a meeting, write a respectful note, volunteer, or discern a board. Faithfulness is often quieter than the feed.",
    href: "/serve",
    cta: "Ways to serve",
  },
] as const;

export function getRhythmOfTheDay(date = new Date()) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "America/Toronto",
  }).format(date);
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const base = civicRhythm[dayIndex === -1 ? date.getDay() : dayIndex];
  const start = Date.parse("2026-09-26T10:00:00-04:00");
  const end = Date.parse("2026-09-27T18:00:00-04:00");
  const now = date.getTime();
  if (now < end && start - now < 12 * 86400000) {
    if (weekday === "Thu") {
      return {
        ...base,
        title: "Confirm your ward before community polls.",
        body: "Use the City’s Find my Ward tool, then read the poll-ready checklist. A voter card is helpful, not required.",
        href: "/elections",
        cta: "Open the election hub",
      };
    }
    if (weekday === "Fri" || weekday === "Sat" || weekday === "Sun") {
      return {
        ...base,
        title: "Community polls this weekend.",
        body: "Hamilton community polls are September 26–27, 10 a.m.–6 p.m. Vote at any poll in your ward. Bring valid ID.",
        href: "/learn/what-to-bring-to-the-poll",
        cta: "What to bring to the poll",
      };
    }
  }
  return base;
}
