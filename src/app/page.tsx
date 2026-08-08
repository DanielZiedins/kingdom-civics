import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, CheckCircle2, Eye, Heart, Landmark, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ComparisonPreview, GovernmentExplorer, ImpactGrid, LeaderCards, LensDemo, NewsletterForm, PrincipleCards } from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-gridlines" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <span className="eyebrow gold-text">CHRISTIAN CIVIC DISCIPLESHIP</span>
              <h1>Understand government.<br />Discern leadership.<br /><em>Seek the Kingdom.</em></h1>
              <p>Trustworthy civic education, transparent biblical principles, sourced public records, and practical ways to pray and serve.</p>
              <div className="hero-actions">
                <Link href="#explore" className="button button-gold"><MapPin size={17} /> Explore my government</Link>
                <Link href="/kingdom-lens" className="button button-outline-light"><Sparkles size={17} /> Ask Kingdom Lens</Link>
              </div>
              <div className="hero-trust"><ShieldCheck size={17} /><span>See the sources behind every conclusion.</span><Link href="/trust">Our methodology <ArrowRight size={14} /></Link></div>
            </div>
            <div className="hero-visual" aria-label="Kingdom Civics civic map illustration">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="map-lines" />
              <div className="civic-pin pin-one"><Landmark size={21} /><span>Local council<small>3.2 km</small></span></div>
              <div className="civic-pin pin-two"><Users size={21} /><span>Your leaders<small>7 representatives</small></span></div>
              <div className="civic-pin pin-three"><BookOpen size={21} /><span>Election guide<small>Oct 19, 2026</small></span></div>
              <div className="lens-orb"><div><Eye size={27} /><span>KINGDOM<br /><strong>LENS</strong></span></div><small>EVIDENCE · SCRIPTURE · WISDOM</small></div>
            </div>
          </div>
          <a href="#impact" className="scroll-cue"><span>EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="statement-strip"><div className="page-width"><span>Kingdom first.</span><p>No party, politician, nation, or movement is synonymous with the Kingdom of God.</p></div></section>

        <section id="impact" className="section section-light">
          <div className="page-width split-heading"><div><span className="eyebrow">CIVIC LIFE, MADE CLEAR</span><h2>Government affects<br />more than elections.</h2></div><p>From the street outside your home to the curriculum in a classroom, public decisions shape daily life. Learn who is responsible—and how you can participate.</p></div>
          <div className="page-width"><ImpactGrid /></div>
        </section>

        <section id="explore" className="section section-parchment">
          <div className="page-width two-column">
            <div className="section-copy">
              <span className="eyebrow gold-text-dark">START WHERE YOU ARE</span><h2>Explore your government.</h2>
              <p>Enter a location to see the jurisdictions, offices, current leaders, and elections that affect your community.</p>
              <ul className="check-list"><li><CheckCircle2 /> Understand each level of government</li><li><CheckCircle2 /> Find the people who represent you</li><li><CheckCircle2 /> Follow upcoming elections and civic dates</li></ul>
              <small className="demo-note">This launch demo uses a fictional city so every political claim is clearly separated from real-world data.</small>
            </div>
            <GovernmentExplorer />
          </div>
        </section>

        <section className="section section-white">
          <div className="page-width section-heading center-heading"><span className="eyebrow">PUBLIC LEADERSHIP</span><h2>Meet your leaders.</h2><p>Know who serves, what their office controls, and how to contact them.</p></div>
          <div className="page-width"><LeaderCards /><div className="center-link"><Link href="/leaders" className="button button-navy">Find all my leaders <ArrowRight size={16} /></Link></div></div>
        </section>

        <section className="section section-navy lens-section">
          <div className="page-width section-heading section-heading-light"><span className="eyebrow gold-text">AI-ASSISTED CIVIC RESEARCH</span><h2>Ask questions. <em>Inspect the evidence.</em></h2><p>Kingdom Lens helps you examine public life carefully—without telling you what to think.</p></div>
          <div className="page-width"><LensDemo /></div>
        </section>

        <section className="section section-light">
          <div className="page-width split-heading"><div><span className="eyebrow">A TRANSPARENT FOUNDATION</span><h2>Principles before<br />politics.</h2></div><p>Our framework begins with Scripture-linked principles, not candidates. We distinguish biblical teaching, interpretation, prudential judgment, and policy preference.</p></div>
          <div className="page-width"><PrincipleCards /><div className="center-link"><Link href="/biblical-principles" className="text-link">Explore the full biblical framework <ArrowRight size={15} /></Link></div></div>
        </section>

        <section className="section section-white">
          <div className="page-width section-heading center-heading narrow-heading"><span className="eyebrow">COMPARE WITHOUT MANIPULATION</span><h2>Evidence, not endorsements.</h2><p>We surface alignment, tension, uncertainty, and counter-evidence—then let you inspect the original sources.</p></div>
          <div className="page-width"><ComparisonPreview /></div>
        </section>

        <section className="prayer-serve">
          <div className="prayer-panel"><div className="panel-content"><Heart size={27} /><span className="eyebrow">PRAY FOR THOSE IN AUTHORITY</span><h2>Pray faithfully.</h2><blockquote>“I urge that supplications, prayers, intercessions, and thanksgivings be made… for kings and all who are in high positions.”</blockquote><small>1 TIMOTHY 2:1–2</small><p>Pray for leaders you agree with—and leaders you disagree with.</p><Link href="/pray" className="button button-cream">Open the Prayer Center <ArrowRight size={16} /></Link></div></div>
          <div className="serve-panel"><div className="panel-content"><Users size={27} /><span className="eyebrow gold-text">PUBLIC LEADERSHIP IS SERVICE</span><h2>Serve humbly.</h2><p>Discover practical pathways to show up, speak wisely, volunteer, join a public board, or explore elected office.</p><div className="serve-path">{["Start", "Show up", "Speak", "Serve", "Lead", "Run"].map((item, i) => <span key={item}><b>{i + 1}</b>{item}</span>)}</div><Link href="/serve" className="button button-gold">Explore ways to serve <ArrowRight size={16} /></Link></div></div>
        </section>

        <section className="section trust-section">
          <div className="page-width trust-grid">
            <div><span className="eyebrow gold-text-dark">BUILT FOR TRUST</span><h2>See the sources behind every conclusion.</h2><p>A skeptic should be able to inspect our methodology. A candidate should be able to challenge an error. Honest uncertainty is a feature, not a failure.</p><Link href="/trust" className="button button-navy">Visit the Trust Center <ArrowRight size={16} /></Link></div>
            <div className="trust-points">{[["Primary sources first", "Official records, full interviews, legislation, and direct statements."], ["Show your work", "Reasoning, evidence, counter-evidence, confidence, and review date."], ["Human verification", "Sensitive assessments are never published from automation alone."], ["Transparent corrections", "Report errors and inspect meaningful correction history."]].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
          </div>
        </section>

        <section className="newsletter"><div className="page-width newsletter-inner"><div><span className="eyebrow gold-text">THOUGHTFUL, NOT REACTIVE</span><h2>Stay informed without the outrage.</h2><p>New learning resources, official election information, and ways to pray and serve.</p></div><NewsletterForm /></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
