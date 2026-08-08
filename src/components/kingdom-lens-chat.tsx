"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CircleHelp,
  Compass,
  ExternalLink,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LensResponse } from "@/lib/ai/constitution";

const prompts = [
  "Who is the mayor of Hamilton?",
  "What authority does the mayor have?",
  "Why should Christians engage in civic life?",
  "What Scriptures relate to justice?",
  "When is Hamilton's next election?",
];

type Props = { compact?: boolean; jurisdiction?: string };

export function KingdomLensChat({ compact = false, jurisdiction = "Hamilton, ON" }: Props) {
  const [question, setQuestion] = useState("");
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
    try {
      const res = await fetch("/api/kingdom-lens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, jurisdiction }),
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

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void ask();
  }

  return (
    <div className={`lens-window ${compact ? "lens-compact" : ""}`}>
      <div className="lens-sidebar">
        <div className="lens-badge"><Compass size={19} /><span>KINGDOM<br /><strong>LENS</strong></span></div>
        <p>Examine public life through Scripture, evidence, and wisdom.</p>
        <div className="lens-steps">
          {["Ask carefully", "Review evidence", "Inspect sources"].map((step, i) => (
            <span key={step}><b>{i + 1}</b>{step}</span>
          ))}
        </div>
        <div className="constitution"><ShieldCheck size={16} /><span>AI Constitution active · Hamilton live data</span></div>
      </div>
      <div className="lens-chat">
        <div className="lens-top">
          <div><span className="live-dot" /> Live civic data</div>
          <span>{jurisdiction}</span>
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
              {response.uncertainties.length > 0 && (
                <div className="lens-unknowns">
                  <strong>What remains unknown</strong>
                  <ul>{response.uncertainties.map((u) => <li key={u}>{u}</li>)}</ul>
                </div>
              )}
              <Link href="/trust" className="show-work">Show your work <ExternalLink size={14} /></Link>
            </>
          ) : (
            <p className="lens-placeholder">Ask about Hamilton government, leaders, elections, biblical principles, or why Christians engage in public life.</p>
          )}
        </div>
        <form className="lens-input" onSubmit={onSubmit}>
          <MessageCircle size={18} />
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about government, a leader, an issue, or Scripture…"
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
