export type CityStatus = "live" | "coming_soon";

export type CityProfile = {
  slug: string;
  name: string;
  region: string;
  country: string;
  countryCode: string;
  status: CityStatus;
  population?: string;
  tagline: string;
  exampleQuestions: string[];
};
