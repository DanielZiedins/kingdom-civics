"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  CircleHelp,
  Compass,
  ExternalLink,
  FileCheck2,
  Globe,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ShareButton } from "@/components/share-button";
import type { LensResponse } from "@/lib/ai/constitution";
import { cityLabel, getAllCities, getDefaultCity } from "@/lib/jurisdictions/registry";

const globalPrompts = [
  "Why should Christians engage in civic life?",
  "What does the Bible say about government?",
  "How do levels of government work?",
  "How should Christians pray for leaders?",
  "Does Kingdom Civics endorse political parties?",
];

type Props = { compact?: boolean; citySlug?: string; initialQuestion?: string };

export function KingdomLensChat({ compact = false, citySlug, initialQuestion }: Props) {
  const cities = getAllCities();
  const defaultCity = getDefaultCity();
  const [selectedSlug, setSelectedSlug] = useState(citySlug ?? "global");
  const selectedCity = selectedSlug === "global" ? null : cities.find((c) => c.slug === selectedSlug) ?? defaultCity;

  const prompts =
    selectedCity?.status === "live"
      ? [...selectedCity.exampleQuestions, ...globalPrompts.slice(0, 2)]
      : globalPrompts;

  const [question, setQuestion] = useState(initialQuestion ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<LensResponse | null>(null);

  async function ask(preset?: string) {
    const text = (preset ?? question).trim();
    if (text.length < 3) {
      setError("Please ask a question with at least 3 characters.");
      return;
    }
    setLoading(true);
    setError(null);
    if (preset) setQuestion(preset);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("q", text);
      window.history.replaceState({}, "", url.toString());
    }

    try {
      const res = await fetch("/api/kingdom-lens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: text,
          jurisdiction: selectedCity ? cityLabel(selectedCity) : "Global",
          citySlug: selectedCity?.slug,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setResponse(data as LensResponse);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to reach Kingdom Lens.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!initialQuestion || initialQuestion.length < 3) return;
    const timer = window.setTimeout(() => {
      void ask(initialQuestion);
    }, 0);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void ask();
  }

  const shareUrl =
    typeof window !== "undefined" && question
      ? `${window.location.origin}${window.location.pathname}?q=${encodeURIComponent(question)}`
      : "";

  const followUps = response
    ? [
        "How should Christians pray for leaders?",
        "What biblical principles apply here?",
        selectedCity?.status === "live"
          ? `Who is the mayor of ${selectedCity.name}?`
          : "Should Christians consider running for office?",
        response.uncertainties[0] ? `What do we still not know about: ${response.uncertainties[0].slice(0, 60)}` : "How do levels of government work?",
      ].filter((item, index, arr) => arr.indexOf(item) === index).slice(0, 3)
    : [];

  return (
    <div className={`lens-window ${compact ? "lens-compact" : ""}`}>
      <div className="lens-sidebar">
        <div className="lens-badge"><Compass size={19} /><span>KINGDOM<br /><strong>LENS</strong></span></div>
        <p>Examine public life through Scripture, evidence, and wisdom—anywhere in the world.</p>
        <div className="lens-steps">
          {["Ask carefully", "Review evidence", "Inspect sources"].map((step, i) => (
            <span key={step}><b>{i + 1}</b>{step}</span>
          ))}
        </div>
        <div className="lens-city-picker">
          <Globe size={15} />
          <label className="sr-only" htmlFor="lens-city">City context</label>
          <select
            id="lens-city"
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            disabled={loading}
          >
            <option value="global">Global · Biblical civic guidance</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name}, {city.region} {city.status === "live" ? "· Live" : "· Coming soon"}
              </option>
            ))}
          </select>
        </div>
        <div className="constitution">
          <ShieldCheck size={16} />
          <span>
            AI Constitution active · {selectedCity?.status === "live" ? `${selectedCity.name} live data` : "Global guidance"}
          </span>
        </div>
      </div>
      <div className="lens-chat">
        <div className="lens-top">
          <div><span className="live-dot" /> {selectedCity?.status === "live" ? "Live civic data" : "Global civic guidance"}</div>
          <span>{selectedCity?.status === "live" ? cityLabel(selectedCity) : "Worldwide"}</span>
        </div>
        <div className="prompt-row">
          {prompts.map((label) => (
            <button key={label} type="button" onClick={() => void ask(label)} disabled={loading}>{label}</button>
          ))}
        </div>
        <div className="answer-card">
          <div className="answer-heading">
            <Sparkles size={18} /><span>KINGDOM LENS</span>
            <small>{response ? `${response.confidence.replace(/_/g, " ")} confidence` : "Evidence-based answer"}</small>
          </div>
          {loading ? (
            <div className="answer-loading"><i /><i /><i /></div>
          ) : error ? (
            <p className="lens-error">{error}</p>
          ) : response ? (
            <>
              <p>{response.answer}</p>
              {response.scripture.length > 0 && (
                <div className="lens-scripture-block">
                  {response.scripture.map((s) => (
                    <blockquote key={s.reference}>
                      <strong>{s.reference}</strong> — {s.application}
                    </blockquote>
                  ))}
                </div>
              )}
              <div className="answer-meta">
                <span><FileCheck2 size={15} /> {response.sources.length} sources</span>
                <span><ShieldCheck size={15} /> {response.confidence.replace(/_/g, " ")}</span>
                {response.lastVerified && <span>Verified {response.lastVerified}</span>}
                {response.uncertainties.length > 0 && (
                  <span><CircleHelp size={15} /> {response.uncertainties.length} unknowns</span>
                )}
              </div>
              {response.sources.length > 0 && (
                <ul className="lens-sources">
                  {response.sources.map((s) => (
                    <li key={s.id}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.title} <ExternalLink size={12} />
                      </a>
                      <small>Tier {s.tier} · {s.publisher}</small>
                    </li>
                  ))}
                </ul>
              )}
              {response.counterpoints && response.counterpoints.length > 0 && (
                <div className="lens-counterpoints">
                  <strong>Counterpoints & nuance</strong>
                  <ul>{response.counterpoints.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              )}
              {response.uncertainties.length > 0 && (
                <div className="lens-unknowns">
                  <strong>What remains unknown</strong>
                  <ul>{response.uncertainties.map((u) => <li key={u}>{u}</li>)}</ul>
                </div>
              )}
              <div className="lens-actions">
                {shareUrl && (
                  <ShareButton
                    title="Kingdom Lens answer"
                    text={response.answer.slice(0, 120)}
                    url={shareUrl}
                    label="Share answer"
                    tone="dark"
                  />
                )}
                <Link href="/trust" className="show-work">Show your work <ExternalLink size={14} /></Link>
              </div>
              {followUps.length > 0 && (
                <div className="lens-followups">
                  <strong>Ask a follow-up</strong>
                  <div className="prompt-row">
                    {followUps.map((chip) => (
                      <button key={chip} type="button" onClick={() => void ask(chip)} disabled={loading}>
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="lens-placeholder">
              Ask about government anywhere, biblical principles, Scripture, prayer for leaders, elections, or—where live—officials in {defaultCity.name}.
            </p>
          )}
        </div>
        <form className="lens-input" onSubmit={onSubmit}>
          <MessageCircle size={18} />
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about government, Scripture, your city, or civic engagement…"
            aria-label="Ask Kingdom Lens"
            disabled={loading}
          />
          <button type="submit" aria-label="Submit question" disabled={loading}><ArrowRight size={18} /></button>
        </form>
        <p className="ai-disclaimer">{response?.disclaimer ?? "Kingdom Lens can make mistakes. Verify important claims using the linked original sources."}</p>
      </div>
    </div>
  );
}
