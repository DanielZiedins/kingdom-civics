import { principles } from "@/lib/data";
import type { Official } from "@/lib/hamilton";
import { hamiltonMeta } from "@/lib/hamilton";
import type { FaqItem } from "@/lib/seo/faqs";
import {
  CREATOR,
  GEO_FOCUS,
  HAMILTON_GEO,
  PARENT_ORG,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo/site";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Kingdom Civics Christian Civic Education",
    url: SITE_URL,
    description:
      "Christian civic education with live Hamilton public records, biblical principles, prayer resources, and Kingdom Lens research.",
    slogan: SITE_TAGLINE,
    areaServed: [
      { "@type": "Place", name: GEO_FOCUS.region },
      {
        "@type": "City",
        name: HAMILTON_GEO.city,
        containedInPlace: { "@type": "AdministrativeArea", name: HAMILTON_GEO.region },
        geo: {
          "@type": "GeoCoordinates",
          latitude: HAMILTON_GEO.latitude,
          longitude: HAMILTON_GEO.longitude,
        },
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: PARENT_ORG.name,
      url: PARENT_ORG.url,
    },
    founder: {
      "@type": "Person",
      name: CREATOR.name,
      url: CREATOR.url,
    },
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon"),
    },
    sameAs: [CREATOR.url],
    knowsAbout: [
      "Christian civic education",
      "Hamilton Ontario government",
      "Biblical principles in public life",
      "Municipal elections",
      "Prayer for government leaders",
      "Civic discipleship for churches",
      "Finding elected representatives",
      "Bible verses about government",
      "Christian voting and conscience",
      "Kingdom Lens civic AI",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-CA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/search")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-CA",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function personSchema(official: Official): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: official.name,
    jobTitle: official.office,
    worksFor: {
      "@type": "GovernmentOrganization",
      name:
        official.level === "municipal"
          ? "City of Hamilton"
          : official.level === "federal"
            ? "Parliament of Canada"
            : "Legislative Assembly of Ontario",
    },
    url: official.sourceUrl,
    homeLocation: {
      "@type": "City",
      name: HAMILTON_GEO.city,
      containedInPlace: { "@type": "AdministrativeArea", name: HAMILTON_GEO.region },
    },
  };
}

export function electionEventSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: hamiltonMeta.electionName,
    startDate: hamiltonMeta.electionDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "City",
      name: HAMILTON_GEO.city,
      containedInPlace: { "@type": "AdministrativeArea", name: HAMILTON_GEO.region },
    },
    organizer: {
      "@type": "GovernmentOrganization",
      name: "City of Hamilton",
      url: hamiltonMeta.electionUrl,
    },
    url: absoluteUrl("/elections"),
    description:
      "Hamilton municipal and school board election for mayor, ward councillors, and trustees. Community polls September 26–27, 10 a.m.–6 p.m. Advance polls October 3–4, 10–11, and 17–18.",
    subEvent: [
      {
        "@type": "Event",
        name: "Hamilton community polls",
        startDate: "2026-09-26",
        endDate: "2026-09-27",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "City", name: HAMILTON_GEO.city },
      },
      {
        "@type": "Event",
        name: "Hamilton advance polls",
        startDate: "2026-10-03",
        endDate: "2026-10-18",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "City", name: HAMILTON_GEO.city },
      },
    ],
  };
}

export function itemListSchema({
  name,
  items,
}: {
  name: string;
  items: Array<{ name: string; url: string; description?: string }>;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function softwareApplicationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kingdom Lens",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: absoluteUrl("/kingdom-lens"),
    description:
      "Global Christian civic research assistant for government questions, biblical principles, and live city data—with cited sources.",
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2026-09-17",
  dateModified = "2026-09-17",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified,
    author: { "@type": "Person", name: CREATOR.name, url: CREATOR.url },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: principles.map((principle) => principle.name),
    inLanguage: "en-CA",
  };
}

export function governmentServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: "Global Christian Civic Education",
    serviceType: "Civic education and public records",
    areaServed: { "@type": "Place", name: "Worldwide" },
    provider: { "@id": `${SITE_URL}/#organization` },
    url: absoluteUrl("/"),
    description: `Global Christian civic education with live data in ${hamiltonMeta.city} and expanding cities worldwide.`,
  };
}

export function learningResourceSchema({
  title,
  description,
  path,
  datePublished = "2026-09-17",
  dateModified = "2026-09-17",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified,
    learningResourceType: "Lesson",
    educationalLevel: "Beginner",
    inLanguage: "en-CA",
    provider: { "@id": `${SITE_URL}/#organization` },
    author: { "@type": "Person", name: CREATOR.name, url: CREATOR.url },
  };
}

export function profilePageSchema(official: Official): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema(official),
    url: absoluteUrl(`/leaders/${official.slug}`),
  };
}

export function howToSchema({
  name,
  description,
  steps,
  path,
}: {
  name: string;
  description: string;
  steps: string[];
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };
}

export function webApiSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    name: "Kingdom Lens API",
    description: "POST civic research questions; returns sourced answers with Scripture and uncertainties.",
    url: absoluteUrl("/api/kingdom-lens"),
    documentation: absoluteUrl("/kingdom-lens"),
  };
}

export function speakableSchema({
  path,
  cssSelectors,
}: {
  path: string;
  cssSelectors: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

export function definedTermSetSchema(
  terms: Array<{ term: string; definition: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Kingdom Civics Glossary",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: terms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      inDefinedTermSet: absoluteUrl("/glossary"),
    })),
  };
}

export function courseSchema({
  name,
  description,
  path,
  lessons,
}: {
  name: string;
  description: string;
  path: string;
  lessons: Array<{ name: string; url: string }>;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
    },
    hasPart: lessons.map((lesson) => ({
      "@type": "LearningResource",
      name: lesson.name,
      url: lesson.url,
    })),
  };
}
