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
  Sparkles,
} from "lucide-react";
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
    loading: () => (
      <div className="lens-window lens-compact lens-skeleton" aria-busy="true" aria-label="Loading Kingdom Lens">
        <div className="lens-skel-sidebar" />
        <div className="lens-skel-chat">
          <div className="lens-skel-line" />
          <div className="lens-skel-line short" />
          <div className="lens-skel-block" />
        </div>
      </div>
    ),
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

export function DiscernLeadersSection() {
  const prompts = [
    { q: "How should I evaluate a leader using biblical principles?", label: "Evaluate with Scripture" },
    { q: "What does servant leadership look like in public office?", label: "Servant leadership" },
    { q: "How do I find who represents me in my city?", label: "Find my representatives" },
    { q: "What questions should I ask before supporting a candidate?", label: "Before you support" },
  ];
  return (
    <section className="section section-discern" id="discern">
      <div className="page-width discern-layout">
        <div className="discern-copy">
          <span className="eyebrow gold-text-dark">WORLDWIDE DISCERNMENT</span>
          <h2>Know who leads—and how they align with Kingdom principles.</h2>
          <p>
            Kingdom Civics is built for Christians everywhere. Use Kingdom Lens to examine offices, claims, and public records through
            truth, dignity, justice, servant leadership, conscience, and stewardship—so you can pray wisely, support thoughtfully, get involved, and refuse partisan idolatry.
          </p>
          <ul className="check-list">
            <li><Check size={16} /> Ask about leaders and offices in your city or country</li>
            <li><Check size={16} /> Compare claims against Scripture-linked principles</li>
            <li><Check size={16} /> Inspect sources—never settle for vibes or party branding</li>
            <li><Check size={16} /> Remember: evidence, not endorsements; Kingdom first</li>
          </ul>
          <div className="discern-actions">
            <Link href="/kingdom-lens" className="button button-navy"><Sparkles size={16} /> Ask Kingdom Lens</Link>
            <Link href="/biblical-principles" className="text-link">See the principles framework <ArrowRight size={14} /></Link>
          </div>
        </div>
        <div className="discern-prompts">
          <small className="eyebrow">TRY ASKING</small>
          {prompts.map((item) => (
            <Link key={item.q} href={`/kingdom-lens?q=${encodeURIComponent(item.q)}`} className="discern-prompt-card">
              <Sparkles size={16} />
              <span>{item.label}</span>
              <ArrowRight size={15} />
            </Link>
          ))}
          <p className="discern-note">We never score people as “most Christian” or claim God endorses a candidate. Discernment is about principles and evidence.</p>
        </div>
      </div>
    </section>
  );
}

export function ConsiderRunningSection() {
  const steps = [
    { n: "01", title: "Examine motives", body: "Is this servant leadership—or a desire to win, punish, or be seen?" },
    { n: "02", title: "Test character", body: "Ask trusted believers who know your private life, not just your opinions." },
    { n: "03", title: "Learn the office", body: "Map powers, limits, budgets, and nomination rules before you campaign." },
    { n: "04", title: "Start serving now", body: "Show up, volunteer, join a board—prove faithfulness in quiet places first." },
    { n: "05", title: "Count the cost", body: "Family, church, work, reputation, and spiritual health matter more than a title." },
    { n: "06", title: "Run with humility", body: "Tell the truth. Love opponents. Never baptize a party or claim God’s endorsement." },
  ];
  return (
    <section className="section section-run" id="consider-running">
      <div className="page-width">
        <div className="run-hero-copy">
          <span className="eyebrow">CALLED TO SERVE?</span>
          <h2>Thinking about running for office?</h2>
          <p>
            Some Christians are called to seek elected office as stewardship for their neighbours. Kingdom Civics helps you discern wisely—
            with Scripture, practical steps, and no fantasy that politics saves the world.
          </p>
        </div>
        <div className="run-grid">
          {steps.map((step) => (
            <article className="run-card" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="run-cta">
          <Link href="/learn/consider-running" className="button button-navy">Read the full guide <ArrowRight size={15} /></Link>
          <Link href="/kingdom-lens?q=Should%20Christians%20consider%20running%20for%20office" className="button button-ghost">Ask Kingdom Lens</Link>
          <Link href="/serve" className="text-link">Explore the serve pathway <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}

export function ComparisonPreview() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="comparison-card">
      <div className="comparison-head">
        <div>
          <span className="eyebrow">EVIDENCE FRAMEWORK</span>
          <h3>Evidence before endorsements</h3>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--stone)" }}>
            A transparent framework for examining public leadership—ready wherever you live.
          </p>
        </div>
        <button className="filter-button" type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? "Hide explanation" : "How we assess"} <ChevronDown size={15} />
        </button>
      </div>
      <div className="comparison-table comparison-single">
        <div className="comparison-row comparison-labels"><strong>Biblical principle</strong><strong>Assessment approach</strong></div>
        {evidenceMatrix.map((row) => (
          <div className="comparison-row" key={row.principle}>
            <strong>{row.principle}</strong>
            <span className={`assessment ${row.state}`}><i />{row.note}</span>
          </div>
        ))}
      </div>
      {expanded && (
        <div className="comparison-foot" style={{ borderTop: "1px solid var(--line)", margin: 0 }}>
          <CircleHelp size={16} />
          <p>When candidates declare, Kingdom Civics documents alignment, tension, uncertainty, and counter-evidence—not a “Christian score.”</p>
        </div>
      )}
      <div className="comparison-foot">
        <CircleHelp size={16} />
        <p>Assessments describe available evidence—not a person&apos;s faith, worth, or God&apos;s endorsement.</p>
        <Link href="/biblical-principles">Biblical principles <ArrowRight size={14} /></Link>
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
      <kbd className="search-kbd" aria-hidden="true">⌘K opens search</kbd>
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
