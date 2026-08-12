"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Landmark,
  MapPin,
  Search,
} from "lucide-react";
import { KingdomLensChat } from "@/components/kingdom-lens-chat";
import { whyEngageReasons } from "@/lib/engagement";
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonMeta } from "@/lib/hamilton";
import { cityLabel, getAllCities, getDefaultCity, matchCityFromInput } from "@/lib/jurisdictions/registry";
import { learnArticles } from "@/lib/content/learn";
import { evidenceMatrix, impactAreas, leaders, principles } from "@/lib/data";
import { searchIndex, searchSite } from "@/lib/search-index";

export function ImpactGrid() {
  return (
    <div className="impact-grid">
      {impactAreas.map(({ label, icon: Icon, href }) => (
        <Link href={href} className="impact-item" key={label}>
          <Icon size={20} />
          <span>{label}</span>
          <ArrowRight size={15} />
        </Link>
      ))}
    </div>
  );
}

export function WhyEngageSection() {
  return (
    <section className="section section-engage" id="why-engage">
      <div className="page-width section-heading center-heading narrow-heading">
        <span className="eyebrow gold-text-dark">KINGDOM CITIZENS IN PUBLIC LIFE</span>
        <h2>Why Christians should care about government—and culture.</h2>
        <p>Not to win a culture war. Not to baptize a political party. But to love neighbors, seek justice, pray faithfully, and serve the communities God has placed us in.</p>
      </div>
      <div className="page-width engage-grid">
        {whyEngageReasons.map((item, i) => (
          <article className="engage-card" key={item.title}>
            <span className="engage-number">0{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <blockquote>{item.quote}</blockquote>
            <footer>{item.scripture}</footer>
          </article>
        ))}
      </div>
      <div className="page-width center-link">
        <Link href="/why-engage" className="button button-navy">Explore the full biblical case for civic engagement <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}

export function GovernmentExplorer() {
  const defaultCity = getDefaultCity();
  const allCities = getAllCities();
  const [place, setPlace] = useState("");
  const [shown, setShown] = useState(false);
  const matched = shown ? matchCityFromInput(place) : null;

  function submit(event: FormEvent) {
    event.preventDefault();
    setShown(true);
  }

  return (
    <div className="government-demo">
      <form className="location-search" onSubmit={submit}>
        <MapPin size={19} />
        <label className="sr-only" htmlFor="location">Enter your city</label>
        <input
          id="location"
          value={place}
          onChange={(e) => { setPlace(e.target.value); setShown(false); }}
          placeholder="Try Toronto, Nashville, London, or Hamilton, ON"
        />
        <button className="button button-gold" type="submit">Explore</button>
      </form>

      {!shown && (
        <div className="city-preview-grid">
          {allCities.slice(0, 6).map((city) => (
            <button
              key={city.slug}
              type="button"
              className={`city-preview-card ${city.status === "live" ? "city-live" : ""}`}
              onClick={() => { setPlace(cityLabel(city)); setShown(true); }}
            >
              <small>{city.status === "live" ? "LIVE" : "COMING SOON"}</small>
              <strong>{city.name}</strong>
              <span>{city.region}, {city.country}</span>
            </button>
          ))}
        </div>
      )}

      {shown && matched?.status === "live" && matched.slug === defaultCity.slug && (
        <div className="jurisdiction-card">
          <div className="demo-label"><span className="live-dot" /> LIVE DATA · {cityLabel(matched).toUpperCase()}</div>
          <div className="jurisdiction-title">
            <div className="city-seal"><Landmark size={24} /></div>
            <div>
              <small>Your local government</small>
              <h3>{matched.name}</h3>
              <p>{matched.region}, {matched.country} · Verified {hamiltonMeta.lastVerified}</p>
            </div>
          </div>
          <div className="jurisdiction-levels">
            <div><span>1</span><div><small>Municipal</small><strong>Hamilton City Council · Mayor {hamiltonMayor.name.split(" ").pop()}</strong></div><Check size={16} /></div>
            <div><span>2</span><div><small>Provincial</small><strong>Ontario Legislature · Hamilton MPPs</strong></div><Check size={16} /></div>
            <div><span>3</span><div><small>Federal</small><strong>Parliament · {hamiltonFederal.length}+ Hamilton MPs indexed</strong></div><Check size={16} /></div>
          </div>
          <div className="jurisdiction-stats">
            <span>{hamiltonCouncillors.length} ward councillors</span>
            <span>Election · Oct 26, 2026</span>
          </div>
          <Link href="/leaders" className="text-link">View all Hamilton leaders <ArrowRight size={15} /></Link>
        </div>
      )}

      {shown && matched?.status === "coming_soon" && (
        <div className="jurisdiction-card jurisdiction-muted">
          <div className="demo-label">COMING SOON · {cityLabel(matched).toUpperCase()}</div>
          <p><strong>{matched.name}</strong> is on our roadmap. {matched.tagline}. Meanwhile, explore global civic education, biblical principles, and our live Hamilton data.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 12 }}>
            <Link href={`/kingdom-lens?q=${encodeURIComponent(`Tell me how Christians can engage civically in ${matched.name}`)}`} className="text-link">Ask Kingdom Lens about {matched.name} <ArrowRight size={15} /></Link>
            <Link href="/cities/hamilton-on" className="text-link">See live Hamilton hub <ArrowRight size={15} /></Link>
          </div>
        </div>
      )}

      {shown && !matched && (
        <div className="jurisdiction-card jurisdiction-muted">
          <p>Kingdom Civics is expanding worldwide. <strong>{defaultCity.name}</strong> is our first live city. Try a city above—or ask Kingdom Lens global questions about Scripture, government, and civic engagement.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 12 }}>
            <button type="button" className="inline-link" onClick={() => { setPlace(cityLabel(defaultCity)); setShown(true); }}>Explore {defaultCity.name}</button>
            <Link href={`/kingdom-lens?q=${encodeURIComponent(`How should Christians engage in civic life in ${place || "my city"}?`)}`} className="text-link">Ask about your city <ArrowRight size={15} /></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function LeaderCards() {
  return (
    <div className="leader-grid">
      {leaders.map((leader) => (
        <Link href={`/leaders/${leader.slug}`} className="leader-card" key={leader.slug}>
          <div className={`avatar avatar-${leader.tone}`}>{leader.initials}</div>
          <div className="leader-info">
            <span className="status-chip">{leader.live ? "Live · Official record" : leader.status}</span>
            <h3>{leader.name}</h3>
            <p>{leader.office}</p>
            <small>{leader.party}</small>
          </div>
          <ArrowRight className="leader-arrow" size={18} />
        </Link>
      ))}
    </div>
  );
}

export function PrincipleCards() {
  return (
    <div className="principle-grid">
      {principles.map(({ slug, name, summary, scripture, icon: Icon }, index) => (
        <Link href={`/biblical-principles/${slug}`} className="principle-card" key={slug}>
          <span className="principle-number">0{index + 1}</span>
          <Icon size={22} />
          <h3>{name}</h3>
          <p>{summary}</p>
          <small>{scripture}</small>
        </Link>
      ))}
    </div>
  );
}

const LazyKingdomLensChat = dynamic(
  () => import("@/components/kingdom-lens-chat").then((m) => m.KingdomLensChat),
  {
    loading: () => <div className="lens-window lens-compact"><p className="lens-placeholder">Loading Kingdom Lens…</p></div>,
    ssr: false,
  },
);

export function LensDemo() {
  return <LazyKingdomLensChat compact />;
}

export function LearnCards() {
  return (
    <div className="content-grid">
      {learnArticles.map((article) => (
        <Link href={`/learn/${article.slug}`} className="content-card" key={article.slug}>
          <small>{article.category}</small>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span className="text-link">Read lesson · {article.duration} <ArrowRight size={14} /></span>
        </Link>
      ))}
    </div>
  );
}

export function ComparisonPreview() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="comparison-card">
      <div className="comparison-head">
        <div>
          <span className="eyebrow">EVIDENCE FRAMEWORK</span>
          <h3>Hamilton Municipal Election · October 26, 2026</h3>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--stone)" }}>Candidates not yet fully declared — framework ready.</p>
        </div>
        <button className="filter-button" type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide explanation" : "How we assess"} <ChevronDown size={15} />
        </button>
      </div>
      {expanded ? (
        <div className="comparison-foot" style={{ borderTop: "1px solid var(--line)", margin: 0 }}>
          <CircleHelp size={16} />
          <p>When candidates declare, Kingdom Civics will document alignment, tension, uncertainty, and counter-evidence—not a “Christian score.”</p>
        </div>
      ) : (
        <div className="comparison-table comparison-single">
          <div className="comparison-row comparison-labels"><strong>Biblical principle</strong><strong>Assessment approach</strong></div>
          {evidenceMatrix.map((row) => (
            <div className="comparison-row" key={row.principle}>
              <strong>{row.principle}</strong>
              <span className={`assessment ${row.state}`}><i />{row.note}</span>
            </div>
          ))}
        </div>
      )}
      <div className="comparison-foot">
        <CircleHelp size={16} />
        <p>Assessments describe available evidence—not a person&apos;s faith, worth, or God&apos;s endorsement.</p>
        <Link href="/elections">Hamilton election hub <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  return sent ? (
    <div className="success-message">
      <Check size={18} /> Saved on this device. We&apos;ll use this list for local city-launch reminders once email delivery is connected.
    </div>
  ) : (
    <form
      className="newsletter-form"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          const existing = JSON.parse(window.localStorage.getItem("kingdom-civics-notify") ?? "[]") as string[];
          window.localStorage.setItem("kingdom-civics-notify", JSON.stringify([...new Set([...existing, email.trim().toLowerCase()])]));
        } catch {
          /* ignore */
        }
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="email">Email address</label>
      <input
        id="email"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Notify me when my city goes live"
      />
      <button className="button button-gold" type="submit">Notify me</button>
    </form>
  );
}

export function GlobalSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = searchSite(query, 10);

  return (
    <div className="search-panel">
      <Search size={21} />
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search leaders, Scripture, civic topics, cities…"
        aria-label="Search"
      />
      <kbd>⌘ K</kbd>
      <div className="search-results">
        {(query ? results : searchIndex.slice(0, 8)).map((hit) => (
          <Link key={hit.href + hit.title} href={hit.href}>
            <small style={{ display: "block", fontSize: 10, letterSpacing: ".08em", color: "var(--stone)" }}>{hit.category}</small>
            {hit.title}
          </Link>
        ))}
        {query && results.length === 0 && <p style={{ padding: "12px 0", color: "var(--stone)" }}>No matches — try “Hamilton”, “pray”, or “housing”.</p>}
      </div>
    </div>
  );
}

export { KingdomLensChat };
