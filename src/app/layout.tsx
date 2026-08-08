import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingdom-civics.vercel.app"),
  title: {
    default: "Kingdom Civics — Seek Truth. Discern Wisely. Serve Humbly.",
    template: "%s · Kingdom Civics",
  },
  description:
    "Christian civic education, transparent biblical principles, sourced public records, prayer resources, and pathways into public service.",
  keywords: ["Christian civic education", "government education", "biblical principles", "public leadership", "prayer for leaders"],
  openGraph: {
    title: "Kingdom Civics",
    description: "Understand government. Discern leadership. Seek the Kingdom.",
    type: "website",
    siteName: "Kingdom Civics",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Kingdom Civics",
              url: "https://kingdomcivics.org",
              parentOrganization: { "@type": "Organization", name: "Thy Kingdom Network" },
            }),
          }}
        />
      </body>
    </html>
  );
}
