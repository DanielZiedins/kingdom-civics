export type LookupTool = {
  country: string;
  office: string;
  name: string;
  url: string;
  note: string;
};

export const representativeLookups: LookupTool[] = [
  {
    country: "Canada",
    office: "Federal MP",
    name: "Find your Member of Parliament",
    url: "https://www.ourcommons.ca/members/en",
    note: "Official House of Commons lookup by name or postal code.",
  },
  {
    country: "Canada",
    office: "Ontario MPP",
    name: "Find your Member of Provincial Parliament",
    url: "https://www.ola.org/en/members/current",
    note: "Legislative Assembly of Ontario — current MPPs.",
  },
  {
    country: "Canada",
    office: "Hamilton councillor",
    name: "City of Hamilton — Find My Councillor",
    url: "https://www.hamilton.ca/city-council/council-committee/city-council-members",
    note: "Ward councillors and mayor. Use the official city tool for your address.",
  },
  {
    country: "Canada",
    office: "Elections",
    name: "Elections Canada — voter information",
    url: "https://www.elections.ca",
    note: "Federal registration, riding maps, and election calendars.",
  },
  {
    country: "United States",
    office: "U.S. House",
    name: "Find your Representative",
    url: "https://www.house.gov/representatives/find-your-representative",
    note: "Official House lookup by ZIP code.",
  },
  {
    country: "United States",
    office: "U.S. Senate",
    name: "Contact your Senators",
    url: "https://www.senate.gov/senators/senators-contact.htm",
    note: "Two senators per state — official Senate directory.",
  },
  {
    country: "United States",
    office: "State & local",
    name: "USA.gov — elected officials",
    url: "https://www.usa.gov/elected-officials",
    note: "Gateway to state, county, and city official directories.",
  },
  {
    country: "United Kingdom",
    office: "MP",
    name: "Find your MP",
    url: "https://members.parliament.uk/FindYourMP",
    note: "UK Parliament — enter your postcode.",
  },
  {
    country: "United Kingdom",
    office: "Local council",
    name: "Find your local council",
    url: "https://www.gov.uk/find-local-council",
    note: "GOV.UK directory for councils and services.",
  },
  {
    country: "Australia",
    office: "Federal",
    name: "Find my electorate",
    url: "https://www.aec.gov.au/electorates/",
    note: "Australian Electoral Commission — federal divisions.",
  },
  {
    country: "Worldwide",
    office: "Any democracy",
    name: "Start with official government sites",
    url: "/kingdom-lens?q=How+do+I+find+who+represents+me+where+I+live",
    note: "Ask Kingdom Lens for the right official tool—then verify on a government domain, never a campaign page.",
  },
];

export const lookupCountries = ["All", "Canada", "United States", "United Kingdom", "Australia", "Worldwide"] as const;
