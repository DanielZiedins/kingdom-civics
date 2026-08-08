export type Official = {
  slug: string;
  name: string;
  initials: string;
  office: string;
  ward?: string;
  level: "municipal" | "provincial" | "federal";
  party?: string;
  status: string;
  tone: "gold" | "blue" | "green" | "navy" | "stone";
  sourceUrl: string;
  contact?: string;
};

export const hamiltonMeta = {
  city: "Hamilton",
  province: "Ontario",
  country: "Canada",
  population: "579,000+",
  councilSize: 16,
  electionDate: "2026-10-26",
  electionName: "2026 Hamilton Municipal & School Board Election",
  officialSite: "https://www.hamilton.ca",
  councilUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members",
  electionUrl: "https://www.hamilton.ca/city-council/municipal-election",
  lastVerified: "2026-08-08",
};

export const hamiltonMayor: Official = {
  slug: "andrea-horwath",
  name: "Andrea Horwath",
  initials: "AH",
  office: "Mayor of Hamilton",
  level: "municipal",
  party: "Nonpartisan office",
  status: "Incumbent · Term ends 2026",
  tone: "gold",
  sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/mayor-andrea-horwath",
  contact: "905-546-2489 (City services)",
};

export const hamiltonCouncillors: Official[] = [
  { slug: "maureen-wilson", name: "Maureen Wilson", initials: "MW", office: "Councillor", ward: "Ward 1", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "blue", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "cameron-kroetsch", name: "Cameron Kroetsch", initials: "CK", office: "Councillor", ward: "Ward 2", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "green", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "nrinder-nann", name: "Nrinder Nann", initials: "NN", office: "Councillor", ward: "Ward 3", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "navy", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "tammy-hwang", name: "Tammy Hwang", initials: "TH", office: "Councillor", ward: "Ward 4", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "stone", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "matt-francis", name: "Matt Francis", initials: "MF", office: "Councillor", ward: "Ward 5", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "blue", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "tom-jackson", name: "Tom Jackson", initials: "TJ", office: "Councillor", ward: "Ward 6", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "green", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "esther-pauls", name: "Esther Pauls", initials: "EP", office: "Councillor", ward: "Ward 7", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "gold", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "rob-cooper", name: "Rob Cooper", initials: "RC", office: "Councillor", ward: "Ward 8", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "navy", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "brad-clark", name: "Brad Clark", initials: "BC", office: "Councillor", ward: "Ward 9", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "stone", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "jeff-beattie", name: "Jeff Beattie", initials: "JB", office: "Councillor", ward: "Ward 10", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "blue", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "mark-tadeson", name: "Mark Tadeson", initials: "MT", office: "Councillor", ward: "Ward 11", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "green", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "craig-cassar", name: "Craig Cassar", initials: "CC", office: "Councillor", ward: "Ward 12", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "gold", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "alex-wilson", name: "Alex Wilson", initials: "AW", office: "Councillor", ward: "Ward 13", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "navy", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "mike-spadafora", name: "Mike Spadafora", initials: "MS", office: "Councillor", ward: "Ward 14", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "stone", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
  { slug: "ted-mcmeekin", name: "Ted McMeekin", initials: "TM", office: "Councillor", ward: "Ward 15", level: "municipal", party: "Nonpartisan", status: "Current councillor", tone: "blue", sourceUrl: "https://www.hamilton.ca/city-council/council-committee/city-council-members/city-councillors" },
];

export const hamiltonFederal: Official[] = [
  { slug: "aslam-rana", name: "Aslam Rana", initials: "AR", office: "Member of Parliament", ward: "Hamilton Centre", level: "federal", party: "Liberal", status: "MP · 45th Parliament", tone: "navy", sourceUrl: "https://www.ourcommons.ca/MEMBERS/en/aslam-rana(122946)" },
  { slug: "ned-kuruc", name: "Ned Kuruc", initials: "NK", office: "Member of Parliament", ward: "Hamilton East—Stoney Creek", level: "federal", party: "Conservative", status: "MP · 45th Parliament", tone: "blue", sourceUrl: "https://www.ourcommons.ca/MEMBERS/en/ned-kuruc(110441)" },
];

export const hamiltonProvincial: Official[] = [
  { slug: "neil-lumsden", name: "Neil Lumsden", initials: "NL", office: "Member of Provincial Parliament", ward: "Hamilton East—Stoney Creek", level: "provincial", party: "Progressive Conservative", status: "MPP", tone: "blue", sourceUrl: "https://www.ola.org/en/members/all/neil-lumsden" },
];

export const hamiltonOfficials = [hamiltonMayor, ...hamiltonCouncillors, ...hamiltonFederal, ...hamiltonProvincial];

export function findHamiltonOfficial(query: string): Official | undefined {
  const q = query.toLowerCase();
  return hamiltonOfficials.find((o) => o.name.toLowerCase().includes(q) || o.slug.includes(q) || (o.ward?.toLowerCase().includes(q) ?? false));
}

export function matchesHamilton(input: string): boolean {
  const q = input.toLowerCase();
  return q.includes("hamilton") || q.includes("l8") || q.includes("ontario") || q.includes("ward");
}
