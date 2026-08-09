import { hamiltonOn } from "@/lib/jurisdictions/cities/hamilton-on";
import type { CityProfile } from "@/lib/jurisdictions/types";
import { matchesHamilton } from "@/lib/hamilton";

export const DEFAULT_CITY_SLUG = "hamilton-on";

const cities: CityProfile[] = [
  hamiltonOn,
  {
    slug: "toronto-on",
    name: "Toronto",
    region: "Ontario",
    country: "Canada",
    countryCode: "CA",
    status: "coming_soon",
    population: "2.9M+",
    tagline: "Canada's largest city — coming soon",
    exampleQuestions: ["Who is the mayor of Toronto?", "How does Toronto City Council work?"],
  },
  {
    slug: "ottawa-on",
    name: "Ottawa",
    region: "Ontario",
    country: "Canada",
    countryCode: "CA",
    status: "coming_soon",
    population: "1M+",
    tagline: "Canada's capital — coming soon",
    exampleQuestions: ["Who is the mayor of Ottawa?", "How does federal government work in Ottawa?"],
  },
  {
    slug: "calgary-ab",
    name: "Calgary",
    region: "Alberta",
    country: "Canada",
    countryCode: "CA",
    status: "coming_soon",
    population: "1.3M+",
    tagline: "Alberta's largest city — coming soon",
    exampleQuestions: ["Who is the mayor of Calgary?", "How is Alberta government structured?"],
  },
  {
    slug: "vancouver-bc",
    name: "Vancouver",
    region: "British Columbia",
    country: "Canada",
    countryCode: "CA",
    status: "coming_soon",
    population: "662,000+",
    tagline: "Pacific coast civic hub — coming soon",
    exampleQuestions: ["Who is the mayor of Vancouver?", "How does BC provincial government work?"],
  },
  {
    slug: "nashville-tn",
    name: "Nashville",
    region: "Tennessee",
    country: "United States",
    countryCode: "US",
    status: "coming_soon",
    population: "715,000+",
    tagline: "Music City civic coverage — coming soon",
    exampleQuestions: ["Who is the mayor of Nashville?", "How does Metro Council work?"],
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    region: "Texas",
    country: "United States",
    countryCode: "US",
    status: "coming_soon",
    population: "1.3M+",
    tagline: "North Texas civic coverage — coming soon",
    exampleQuestions: ["Who is the mayor of Dallas?", "How does Dallas City Council work?"],
  },
  {
    slug: "london-uk",
    name: "London",
    region: "England",
    country: "United Kingdom",
    countryCode: "GB",
    status: "coming_soon",
    population: "9M+",
    tagline: "UK capital civic coverage — coming soon",
    exampleQuestions: ["Who is the Mayor of London?", "How does UK Parliament work?"],
  },
];

export function getAllCities(): CityProfile[] {
  return cities;
}

export function getLiveCities(): CityProfile[] {
  return cities.filter((city) => city.status === "live");
}

export function getCity(slug: string): CityProfile | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getDefaultCity(): CityProfile {
  return getCity(DEFAULT_CITY_SLUG) ?? hamiltonOn;
}

export function matchCityFromInput(input: string): CityProfile | null {
  const q = input.toLowerCase().trim();
  if (!q) return null;

  if (matchesHamilton(q) || q.includes("hamilton-on")) return getDefaultCity();

  const direct = cities.find(
    (city) =>
      q.includes(city.name.toLowerCase()) ||
      q.includes(city.slug) ||
      (city.region && q.includes(city.region.toLowerCase()) && q.includes(city.country.toLowerCase())),
  );
  return direct ?? null;
}

export function cityLabel(city: CityProfile): string {
  return `${city.name}, ${city.region}`;
}
