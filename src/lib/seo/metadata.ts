import type { Metadata } from "next";
import {
  CREATOR,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
} from "@/lib/seo/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  images?: Array<{ url: string; alt: string; width?: number; height?: number }>;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  noIndex = false,
  images,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = [...new Set([...SITE_KEYWORDS, ...keywords])];
  const ogImages = images ?? [
    {
      url: absoluteUrl("/opengraph-image"),
      alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      width: 1200,
      height: 630,
    },
  ];

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: CREATOR.name, url: CREATOR.url }],
    creator: CREATOR.name,
    publisher: SITE_NAME,
    category: "education",
    alternates: { canonical },
    openGraph: {
      type,
      locale: "en_CA",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((image) => image.url),
      creator: `@${CREATOR.name.replace(/\s+/g, "")}`,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "CA-ON",
      "geo.placename": "Hamilton",
    },
  };
}

const homeMetadata = buildPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export const rootMetadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  keywords: homeMetadata.keywords,
  authors: homeMetadata.authors,
  creator: homeMetadata.creator,
  publisher: homeMetadata.publisher,
  category: homeMetadata.category,
  alternates: homeMetadata.alternates,
  openGraph: homeMetadata.openGraph,
  twitter: homeMetadata.twitter,
  robots: homeMetadata.robots,
  other: homeMetadata.other,
};
