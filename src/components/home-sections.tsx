"use client";

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
import { hamiltonCouncillors, hamiltonFederal, hamiltonMayor, hamiltonMeta, matchesHamilton } from "@/lib/hamilton";
import { evidenceMatrix, impactAreas, leaders, principles } from "@/lib/data";

export function ImpactGrid() {
  return (
    <div className="impact-grid">
      {impactAreas.map(({ label, icon: Icon }) => (
        <Link href={`/issues?topic=${label.toLowerCase()}`} className="impact-item" key={label}>
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
  const [place, setPlace] = useState("Hamilton, ON");
  const [shown, setShown] = useState(true);
  const isHamilton = matchesHamilton(place) || shown;

  function submit(event: FormEvent) {
    event.preventDefault();
    setShown(true);
  }

  return (
    <div className="government-demo">
      <form className="location-search" onSubmit={submit}>
        <MapPin size={19} />
        <label className="sr-only" htmlFor="location">Enter city or postal code</label>
        <input
          id="location"
          value={place}
          onChange={(e) => { setPlace(e.target.value); setShown(false); }}
          placeholder="Try Hamilton, ON or your postal code"
        />
        <button className="button button-gold" type="submit">Explore</button>
      </form>
      {shown && isHamilton && (
        <div className="jurisdiction-card">
          <div className="demo-label"><span className="live-dot" /> LIVE DATA · HAMILTON, ON</div>
          <div className="jurisdiction-title">
            <div className="city-seal"><Landmark size={24} /></div>
            <div>
              <small>Your local government</small>
              <h3>Hamilton</h3>
              <p>Ontario, Canada · Verified {hamiltonMeta.lastVerified}</p>
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
      {shown && !isHamilton && (
        <div className="jurisdiction-card jurisdiction-muted">
          <p>Hamilton, Ontario is our first live coverage area. More cities are coming. Try <button type="button" className="inline-link" onClick={() => setPlace("Hamilton, ON")}>Hamilton, ON</button> to see real officials and election data.</p>
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

export function LensDemo() {
  return <KingdomLensChat compact jurisdiction="Hamilton, ON" />;
}

export function ComparisonPreview() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="comparison-card">
      <div className="comparison-head">
        <div>
          <span className="eyebrow">EVIDENCE FRAMEWORK</span>
          <h3>Hamilton Municipal Election · October 26, 2026</h3>
        </div>
        <button className="filter-button" type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show framework" : "How we assess"} <ChevronDown size={15} />
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
  return sent ? (
    <div className="success-message"><Check size={18} /> You&apos;re on the list. Watch your inbox for thoughtful civic updates.</div>
  ) : (
    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <label className="sr-only" htmlFor="email">Email address</label>
      <input id="email" required type="email" placeholder="Your email address" />
      <button className="button button-gold" type="submit">Stay informed</button>
    </form>
  );
}

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();
  const results = [
    q.includes("hamilton") || q.includes("mayor") ? ["Andrea Horwath — Mayor of Hamilton", "/leaders/andrea-horwath"] : null,
    q.includes("election") || q.includes("vote") ? ["Hamilton 2026 Municipal Election", "/elections"] : null,
    q.includes("pray") || q.includes("leader") ? ["Pray for Hamilton leaders", "/pray"] : null,
    q.includes("christian") || q.includes("engage") || q.includes("why") ? ["Why Christians engage in civic life", "/why-engage"] : null,
    q.includes("justice") || q.includes("scripture") || q.includes("bible") ? ["Biblical principles framework", "/biblical-principles"] : null,
    ["How Hamilton City Council works", "/learn"],
  ].filter(Boolean) as Array<[string, string]>;

  return (
    <div className="search-panel">
      <Search size={21} />
      <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search leaders, issues, Scripture, Hamilton…" aria-label="Search" />
      <kbd>⌘ K</kbd>
      {query && (
        <div className="search-results">
          {results.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      )}
    </div>
  );
}

export { KingdomLensChat };
