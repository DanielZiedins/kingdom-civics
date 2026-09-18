export type GlossaryTerm = {
  term: string;
  definition: string;
  related?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Ward", definition: "A geographic district within a city used to elect a local councillor. Knowing your ward tells you who represents your neighbourhood at city hall.", related: "/learn/hamilton-city-council" },
  { term: "Riding / Constituency", definition: "A geographic electoral district for provincial or federal representatives (MPP/MLA or MP). Boundaries differ from municipal wards.", related: "/learn/canadian-government" },
  { term: "Bylaw", definition: "A local law passed by a municipal council covering issues such as zoning, noise, licensing, and property standards.", related: "/learn/how-government-works" },
  { term: "Zoning", definition: "Rules that determine what can be built or operated on a property—housing density, commercial use, industrial activity, and more.", related: "/issues/housing-homelessness" },
  { term: "Strong mayor", definition: "A municipal governance model giving the mayor expanded budget and appointment powers compared with a purely ceremonial or equal-vote chair role. Details vary by city and statute.", related: "/learn/hamilton-city-council" },
  { term: "School board trustee", definition: "An elected official who helps govern a public or separate school board—distinct from city councillors and provincial education ministers.", related: "/issues/education" },
  { term: "Nomination", definition: "The official process of filing to become a candidate for elected office. Rules, deadlines, deposits, and paperwork come from election authorities—not campaigns.", related: "/learn/consider-running" },
  { term: "Advance poll / early voting", definition: "Opportunities to vote before election day. Availability and ID rules must be verified with the official election authority.", related: "/elections" },
  { term: "Public consultation", definition: "A formal process inviting residents to comment on planning, budgets, or bylaws before a decision. Faithful engagement often starts here.", related: "/serve" },
  { term: "Operating budget", definition: "The annual plan for day-to-day city spending—staff, services, programs—distinct from capital projects funded over multiple years.", related: "/learn/read-a-public-budget" },
  { term: "Capital budget", definition: "Spending on long-lived assets: roads, transit, buildings, parks. Often financed differently from operating costs.", related: "/learn/read-a-public-budget" },
  { term: "Primary source", definition: "An original document or official record—statutes, voting records, government pages—rather than a social media summary or campaign flyer.", related: "/trust" },
  { term: "Tier 1 source", definition: "Kingdom Civics’ highest-weight evidence: official government records and direct statements. Prefer these before headlines.", related: "/trust#sources" },
  { term: "Nonpartisan office", definition: "An elected role (common at the municipal level in Canada) where candidates do not run under a party label on the ballot—even if they have personal political views.", related: "/learn/hamilton-city-council" },
  { term: "Servant leadership", definition: "A biblical posture for authority: leading by serving neighbours, not lording power (Mark 10:42–45). Central to Kingdom Civics’ running guide.", related: "/biblical-principles/servant-leadership" },
  { term: "Prudential judgment", definition: "A wise but disputable application of shared principles to a specific policy. Faithful Christians may disagree here without abandoning Scripture.", related: "/biblical-principles" },
  { term: "Kingdom first", definition: "The conviction that no party, politician, nation, or movement is synonymous with the Kingdom of God. Civic engagement must stay secondary to Christ.", related: "/why-engage" },
  { term: "Jurisdiction", definition: "Which level of government has legal authority over an issue. Confusing local, regional, and national powers wastes advocacy.", related: "/learn/levels-of-government" },
  { term: "MPP / MLA", definition: "Member of Provincial Parliament (Ontario) or Member of the Legislative Assembly (other provinces)—provincial legislators.", related: "/learn/canadian-government" },
  { term: "MP", definition: "Member of Parliament—federal representatives in Canada’s House of Commons.", related: "/learn/canadian-government" },
  { term: "Congress / Parliament", definition: "National legislatures. In the US, Congress (House + Senate); in Canada and the UK, Parliament. Powers differ by constitution.", related: "/learn/us-government" },
  { term: "Separation of powers", definition: "A constitutional design dividing authority among legislative, executive, and judicial branches to limit concentrated power.", related: "/learn/us-government" },
  { term: "Counter-evidence", definition: "Facts or sources that complicate a preferred conclusion. Kingdom Lens surfaces counterpoints so discernment stays honest.", related: "/kingdom-lens" },
  { term: "Vote of confidence / non-confidence", definition: "In parliamentary systems, a vote testing whether the government retains the legislature’s support—can trigger resignation or election.", related: "/learn/canadian-government" },
  { term: "Delegation / public comment", definition: "A timed opportunity for a resident to speak to council or a committee on an agenda item. Rules and deadlines are set by the clerk—not by social media.", related: "/learn/attend-a-council-meeting" },
  { term: "Official plan", definition: "A municipal document setting long-range land use and growth policy. Zoning bylaws implement it in more detail.", related: "/issues/creation-stewardship" },
  { term: "School board", definition: "An elected (or sometimes appointed) body governing public or separate schools—often as locally consequential as city council.", related: "/issues/education" },
  { term: "Conscience vote", definition: "A vote where a legislator is not bound by party discipline. Rare in some systems; common language in moral debates.", related: "/learn/vote-with-conscience" },
  { term: "Primary residence / eligible elector", definition: "Legal tests for who may vote or run in a local election. Always confirm with the official election authority.", related: "/elections" },
  { term: "Quorum", definition: "The minimum number of members who must be present for a council, board, or legislature to transact business. Without quorum, votes usually cannot proceed.", related: "/learn/attend-a-council-meeting" },
  { term: "Access to information / FOI", definition: "A legal process to request government records. Useful for budgets, contracts, and correspondence—prefer official request forms over rumours.", related: "/trust" },
  { term: "First-past-the-post", definition: "An electoral system where the candidate with the most votes in a district wins, even without a majority. Common in Canada, the UK, and US single-member districts.", related: "/learn/levels-of-government" },
  { term: "Voters list", definition: "The official roll of eligible electors. In Hamilton, amendments for 2026 are made in person with ID through October 24, or at a poll.", related: "/elections" },
  { term: "Proxy vote", definition: "A legal process allowing an eligible elector who cannot vote on any voting day to appoint another eligible elector. Rules are set by the election authority—not by social media.", related: "/elections" },
  { term: "Community poll", definition: "Early voting days in selected buildings and accessible locations before regular advance polls. In Hamilton 2026: September 26–27, 10 a.m.–6 p.m.", related: "/elections" },
  { term: "Voter information card", definition: "A mailed notice that you are on the voters list. In Hamilton 2026 the City has said the card is helpful, not required—bring valid ID.", related: "/learn/what-to-bring-to-the-poll" },
  { term: "Ballot on demand", definition: "A voting setup that prints a ballot at certain sites (often campuses or service locations) rather than stocking every possible ballot in advance. Hours vary—confirm with the Clerk.", related: "/elections" },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug);
}
