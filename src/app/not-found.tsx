import Link from "next/link";
import { ArrowRight, BookOpen, Compass, MapPin, Search } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const quickLinks = [
  { href: "/start", label: "Start here", icon: Compass, description: "Five-step civic discipleship path" },
  { href: "/scripture", label: "Scripture", icon: BookOpen, description: "Bible verses about government" },
  { href: "/find-representatives", label: "Find representatives", icon: MapPin, description: "Official lookup tools worldwide" },
  { href: "/search", label: "Search", icon: Search, description: "Find pages across Kingdom Civics" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <section className="not-found-hero">
          <div className="page-width">
            <span className="eyebrow gold-text">404</span>
            <h1>This page isn&apos;t on the map.</h1>
            <p>
              The link may be outdated or the page may have moved. Try Kingdom Lens, browse learn articles,
              or return home to continue exploring Christian civic education.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="button button-gold">Back to home <ArrowRight size={15} /></Link>
              <Link href="/kingdom-lens" className="button button-ghost button-inverse">Ask Kingdom Lens</Link>
            </div>
          </div>
        </section>
        <section className="not-found-links">
          <div className="page-width">
            <div className="not-found-grid">
              {quickLinks.map(({ href, label, icon: Icon, description }) => (
                <Link key={href} href={href} className="not-found-card">
                  <Icon size={22} />
                  <strong>{label}</strong>
                  <span>{description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
