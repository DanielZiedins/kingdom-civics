import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { rootMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a2e" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="author" href="https://www.danielziedins.design" />
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM site guide" />
        <link rel="alternate" type="text/plain" title="AI discovery" href="/ai.txt" />
        <link rel="alternate" type="application/rss+xml" title="Kingdom Civics" href="/feed.xml" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
