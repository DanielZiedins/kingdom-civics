"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  ExternalLink,
  FileCheck2,
  Landmark,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { evidenceMatrix, impactAreas, kingdomLensAnswers, leaders, principles } from "@/lib/data";

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

export function GovernmentExplorer() {
  const [place, setPlace] = useState("Harbor City, ON");
  const [shown, setShown] = useState(true);
  function submit(event: FormEvent) {
    event.preventDefault();
    setShown(true);
  }
  return (
    <div className="government-demo">
      <form className="location-search" onSubmit={submit}>
        <MapPin size={19} />
        <label className="sr-only" htmlFor="location">Enter city or postal code</label>
        <input id="location" value={place} onChange={(e) => { setPlace(e.target.value); setShown(false); }} placeholder="Enter city or postal code" />
        <button className="button button-gold" type="submit">Explore</button>
      </form>
      {shown && (
        <div className="jurisdiction-card">
          <div className="demo-label"><span className="live-dot" /> DEMO JURISDICTION</div>
          <div className="jurisdiction-title">
            <div className="city-seal"><Landmark size={24} /></div>
            <div><small>Your local government</small><h3>Harbor City</h3><p>Ontario, Canada · Sample data</p></div>
          </div>
          <div className="jurisdiction-levels">
            {["Municipal", "Provincial", "Federal"].map((level, i) => (
              <div key={level}><span>{i + 1}</span><div><small>{level}</small><strong>{["Harbor City Council", "Ontario Legislature", "Parliament of Canada"][i]}</strong></div><Check size={16} /></div>
            ))}
          </div>
          <Link href="/leaders" className="text-link">View 7 representatives <ArrowRight size={15} /></Link>
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
            <span className="status-chip">{leader.status}</span>
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
  const [question, setQuestion] = useState("");
  const [answerKey, setAnswerKey] = useState<keyof typeof kingdomLensAnswers>("compare");
  const [loading, setLoading] = useState(false);
  const prompts = [
    ["Compare the mayoral candidates on housing", "compare"],
    ["What authority does my mayor have?", "mayor"],
    ["What Scriptures relate to justice?", "scripture"],
  ] as const;
  function ask(key?: keyof typeof kingdomLensAnswers) {
    setLoading(true);
    const next = key ?? (question.toLowerCase().includes("scripture") ? "scripture" : question.toLowerCase().includes("authority") ? "mayor" : "compare");
    window.setTimeout(() => { setAnswerKey(next); setLoading(false); }, 450);
  }
  return (
    <div className="lens-window">
      <div className="lens-sidebar">
        <div className="lens-badge"><Compass size={19} /><span>KINGDOM<br /><strong>LENS</strong></span></div>
        <p>Examine public life through Scripture, evidence, and wisdom.</p>
        <div className="lens-steps">
          {["Ask carefully", "Review evidence", "Inspect sources"].map((step, i) => <span key={step}><b>{i + 1}</b>{step}</span>)}
        </div>
        <div className="constitution"><ShieldCheck size={16} /><span>AI Constitution active</span></div>
      </div>
      <div className="lens-chat">
        <div className="lens-top"><div><span className="live-dot" /> Evidence mode</div><span>Demo city: Harbor City</span></div>
        <div className="prompt-row">
          {prompts.map(([label, key]) => <button key={key} onClick={() => ask(key)}>{label}</button>)}
        </div>
        <div className="answer-card">
          <div className="answer-heading"><Sparkles size={18} /><span>KINGDOM LENS</span><small>Evidence-based answer</small></div>
          {loading ? <div className="answer-loading"><i /><i /><i /></div> : (
            <>
              <p>{kingdomLensAnswers[answerKey]}</p>
              <div className="answer-meta">
                <span><FileCheck2 size={15} /> 4 sources</span>
                <span><ShieldCheck size={15} /> Moderate confidence</span>
                <span><CircleHelp size={15} /> 2 unknowns</span>
              </div>
              <Link href="/kingdom-lens" className="show-work">Show your work <ExternalLink size={14} /></Link>
            </>
          )}
        </div>
        <form className="lens-input" onSubmit={(e) => { e.preventDefault(); ask(); }}>
          <MessageCircle size={18} />
          <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask about government, a leader, an issue, or Scripture…" aria-label="Ask Kingdom Lens" />
          <button type="submit" aria-label="Submit question"><ArrowRight size={18} /></button>
        </form>
        <p className="ai-disclaimer">Kingdom Lens can make mistakes. Verify important claims using the linked original sources.</p>
      </div>
    </div>
  );
}

export function ComparisonPreview() {
  const [primaryOnly, setPrimaryOnly] = useState(true);
  return (
    <div className="comparison-card">
      <div className="comparison-head">
        <div><span className="eyebrow">SAMPLE COMPARISON</span><h3>Harbor City Mayoral Election</h3></div>
        <button className="filter-button" onClick={() => setPrimaryOnly(!primaryOnly)}>{primaryOnly ? "Primary sources only" : "All evidence"} <ChevronDown size={15} /></button>
      </div>
      <div className="comparison-table">
        <div className="comparison-row comparison-labels"><strong>Biblical principle</strong><strong>Elena Moreno</strong><strong>Marcus Cole</strong></div>
        {evidenceMatrix.map((row) => (
          <div className="comparison-row" key={row.principle}>
            <strong>{row.principle}</strong>
            <span className={`assessment ${row.morenoState}`}><i />{row.moreno}<small>View evidence</small></span>
            <span className={`assessment ${row.coleState}`}><i />{row.cole}<small>View evidence</small></span>
          </div>
        ))}
      </div>
      <div className="comparison-foot"><CircleHelp size={16} /><p>Assessments describe available evidence—not a person’s faith, worth, or God’s endorsement.</p><Link href="/compare">Open full comparison <ArrowRight size={14} /></Link></div>
    </div>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className="success-message"><Check size={18} /> You’re on the list. Watch your inbox for thoughtful civic updates.</div>
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
  return (
    <div className="search-panel">
      <Search size={21} />
      <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search leaders, issues, offices, Scripture…" aria-label="Search" />
      <kbd>⌘ K</kbd>
      {query && <div className="search-results"><Link href="/learn">Learning module: How government works</Link><Link href="/issues">Issue guide: Justice & public policy</Link><Link href="/leaders">Leader records in Harbor City</Link></div>}
    </div>
  );
}
