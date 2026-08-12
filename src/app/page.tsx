import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, CheckCircle2, Eye, Heart, Landmark, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { globalFaqs } from "@/lib/seo/faqs";
import { faqPageSchema, governmentServiceSchema, speakableSchema, webPageSchema } from "@/lib/seo/schema";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo/site";
import {
  ComparisonPreview,
  GovernmentExplorer,
  ImpactGrid,
  LeaderCards,
  LearnCards,
  LensDemo,
  NewsletterForm,
  PrincipleCards,
  WhyEngageSection,
} from "@/components/home-sections";
import { hamiltonMeta } from "@/lib/data";

export const metadata: Metadata = buildPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  keywords: [
    "Christian civic education worldwide",
    "biblical government principles",
    "global Christian citizenship",
    "Kingdom Lens civic AI",
    "Hamilton Ontario live data",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
            path: "/",
          }),
          faqPageSchema(globalFaqs),
          governmentServiceSchema(),
          speakableSchema({ path: "/", cssSelectors: [".faq-question", ".faq-answer p"] }),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-glow hero-glow-secondary" />
          <div className="hero-gridlines" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <span className="eyebrow gold-text">GLOBAL CHRISTIAN CIVIC EDUCATION</span>
              <h1>Understand government.<br />Discern leadership.<br /><em>Seek the Kingdom.</em></h1>
              <p>Trustworthy civic education for every nation and city—transparent biblical principles, Kingdom Lens research, and live public records. Hamilton, Ontario is our first live city.</p>
              <div className="hero-actions">
                <Link href="#explore" className="button button-gold"><MapPin size={17} /> Find your government</Link>
                <Link href="/kingdom-lens" className="button button-outline-light"><Sparkles size={17} /> Ask Kingdom Lens</Link>
              </div>
              <div className="hero-trust">
                <ShieldCheck size={17} />
                <span>See the sources behind every conclusion.</span>
                <Link href="/trust">Our methodology <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="hero-visual" aria-label="Kingdom Civics civic map illustration">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="map-lines" />
              <div className="civic-pin pin-one"><Landmark size={21} /><span>Every nation<small>Local to federal</small></span></div>
              <div className="civic-pin pin-two"><Users size={21} /><span>Your leaders<small>Where you live</small></span></div>
              <div className="civic-pin pin-three"><BookOpen size={21} /><span>Scripture<small>Timeless principles</small></span></div>
              <div className="lens-orb"><div><Eye size={27} /><span>KINGDOM<br /><strong>LENS</strong></span></div><small>EVIDENCE · SCRIPTURE · WISDOM</small></div>
            </div>
          </div>
          <a href="#why-engage" className="scroll-cue"><span>EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="statement-strip">
          <div className="page-width">
            <span>Kingdom first.</span>
            <p>No party, politician, nation, or movement is synonymous with the Kingdom of God.</p>
          </div>
        </section>

        <WhyEngageSection />

        <section id="impact" className="section section-light">
          <div className="page-width split-heading">
            <div><span className="eyebrow">CIVIC LIFE, MADE CLEAR</span><h2>Government affects<br />more than elections.</h2></div>
            <p>From zoning near your home to school governance and federal law, public decisions shape daily life. <em>&ldquo;Seek the welfare of the city&rdquo;</em> (Jeremiah 29:7) begins with understanding who decides what.</p>
          </div>
          <div className="page-width"><ImpactGrid /></div>
        </section>

        <section id="explore" className="section section-parchment">
          <div className="page-width two-column">
            <div className="section-copy">
              <span className="eyebrow gold-text-dark">START WHERE YOU ARE</span>
              <h2>Explore your government.</h2>
              <p>Kingdom Civics is built for the whole world—with live official data rolling out city by city. Hamilton, Ontario is live now; Toronto, Nashville, London, and more are coming.</p>
              <ul className="check-list">
                <li><CheckCircle2 /> Understand local, state, and national government</li>
                <li><CheckCircle2 /> Find who represents you—wherever you live</li>
                <li><CheckCircle2 /> Follow elections with official source links</li>
              </ul>
              <small className="demo-note live-note">Hamilton live · Verified {hamiltonMeta.lastVerified} · More cities on the way</small>
            </div>
            <GovernmentExplorer />
          </div>
        </section>

        <section className="section section-white">
          <div className="page-width section-heading center-heading">
            <span className="eyebrow">PUBLIC LEADERSHIP</span>
            <h2>Meet your leaders.</h2>
            <p>Know who serves, what their office controls, and how to contact them—with links to official records. Live now in Hamilton; expanding globally.</p>
          </div>
          <div className="page-width">
            <LeaderCards />
            <div className="center-link">
              <Link href="/leaders" className="button button-navy">View all Hamilton leaders <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-navy lens-section">
          <div className="page-width section-heading section-heading-light">
            <span className="eyebrow gold-text">AI-ASSISTED CIVIC RESEARCH</span>
            <h2>Ask questions. <em>Inspect the evidence.</em></h2>
            <p>Kingdom Lens answers civic questions worldwide—from Scripture and biblical principles to live Hamilton data.</p>
          </div>
          <div className="page-width"><LensDemo /></div>
        </section>

        <section className="section section-light">
          <div className="page-width split-heading">
            <div><span className="eyebrow">A TRANSPARENT FOUNDATION</span><h2>Principles before<br />politics.</h2></div>
            <p>Our framework begins with Scripture-linked principles, not candidates. We distinguish biblical teaching, interpretation, prudential judgment, and policy preference.</p>
          </div>
          <div className="page-width">
            <PrincipleCards />
            <div className="center-link">
              <Link href="/biblical-principles" className="text-link">Explore the full biblical framework <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-parchment">
          <div className="page-width split-heading">
            <div><span className="eyebrow">KINGDOM CIVICS ACADEMY</span><h2>Learn how government<br />actually works.</h2></div>
            <p>Plain-language lessons on jurisdictions, Canada, Hamilton City Council, budgets, and discernment—built for the Church.</p>
          </div>
          <div className="page-width">
            <LearnCards />
            <div className="center-link">
              <Link href="/learn" className="button button-navy">Browse all lessons <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="page-width section-heading center-heading narrow-heading">
            <span className="eyebrow">COMPARE WITHOUT MANIPULATION</span>
            <h2>Evidence, not endorsements.</h2>
            <p>We surface alignment, tension, uncertainty, and counter-evidence—then let you inspect the original sources.</p>
          </div>
          <div className="page-width"><ComparisonPreview /></div>
        </section>

        <section className="prayer-serve">
          <div className="prayer-panel">
            <div className="panel-content">
              <Heart size={27} />
              <span className="eyebrow">PRAY FOR THOSE IN AUTHORITY</span>
              <h2>Pray faithfully.</h2>
              <blockquote>&ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made… for kings and all who are in high positions.&rdquo;</blockquote>
              <small>1 TIMOTHY 2:1–2</small>
              <p>Pray for the leaders where God has placed you—mayors, councillors, MPs, presidents, and prime ministers.</p>
              <Link href="/pray" className="button button-cream">Open the Prayer Center <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="serve-panel">
            <div className="panel-content">
              <Users size={27} />
              <span className="eyebrow gold-text">PUBLIC LEADERSHIP IS SERVICE</span>
              <h2>Serve humbly.</h2>
              <p>Attend council meetings, join public consultation, volunteer, apply for boards—or explore elected office as servant leadership.</p>
              <div className="serve-path">
                {["Start", "Show up", "Speak", "Serve", "Lead", "Run"].map((item, i) => <span key={item}><b>{i + 1}</b>{item}</span>)}
              </div>
              <Link href="/serve" className="button button-gold">Explore ways to serve <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="page-width trust-grid">
            <div>
              <span className="eyebrow gold-text-dark">BUILT FOR TRUST</span>
              <h2>See the sources behind every conclusion.</h2>
              <p>A skeptic should be able to inspect our methodology. A candidate should be able to challenge an error. Honest uncertainty is a feature, not a failure.</p>
              <Link href="/trust" className="button button-navy">Visit the Trust Center <ArrowRight size={16} /></Link>
            </div>
            <div className="trust-points">
              {[["Primary sources first", "Official government records, parliamentary pages, and direct statements worldwide."], ["Show your work", "Reasoning, evidence, counter-evidence, confidence, and review date."], ["Human verification", "Sensitive assessments are never published from automation alone."], ["Transparent corrections", "Report errors and inspect meaningful correction history."]].map(([title, text], i) => (
                <div key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions Christians—and search engines—often ask"
          description="Straight answers about Kingdom Civics, global civic engagement, Scripture, and live city data."
          faqs={globalFaqs}
        />

        <section className="newsletter">
          <div className="page-width newsletter-inner">
            <div>
              <span className="eyebrow gold-text">THOUGHTFUL, NOT REACTIVE</span>
              <h2>Stay informed without the outrage.</h2>
              <p>Hamilton election updates, city launch alerts, and ways to pray and serve—saved on this device until email delivery is connected.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
