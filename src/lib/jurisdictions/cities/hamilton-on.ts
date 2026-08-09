import { hamiltonMeta } from "@/lib/hamilton";
import type { CityProfile } from "@/lib/jurisdictions/types";

export const hamiltonOn: CityProfile = {
  slug: "hamilton-on",
  name: "Hamilton",
  region: "Ontario",
  country: "Canada",
  countryCode: "CA",
  status: "live",
  population: hamiltonMeta.population,
  tagline: "First live city — mayor, councillors, MPs, and 2026 election data",
  exampleQuestions: [
    "Who is the mayor of Hamilton?",
    "When is Hamilton's next election?",
    "How many councillors does Hamilton have?",
  ],
};
