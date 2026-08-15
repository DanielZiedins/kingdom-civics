"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CornerDownLeft, Search, Sparkles } from "lucide-react";
import { searchIndex, searchSite } from "@/lib/search-index";

const RECENT_KEY = "kingdom-civics-recent-search";

function readRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(RECENT_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

function pushRecent(query: string) {
  const next = [query, ...readRecent().filter((q) => q !== query)].slice(0, 5);
  window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    return searchSite(query, 8);
  }, [query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("kingdom-civics:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("kingdom-civics:open-search", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      setRecent(readRecent());
      inputRef.current?.focus();
      setActive(0);
    }, 0);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string, label?: string) {
    if (query.trim()) pushRecent(query.trim());
    else if (label) pushRecent(label);
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  if (!open) return null;

  return (
    <div className="cmdk-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <button type="button" className="cmdk-backdrop" aria-label="Close search" onClick={() => setOpen(false)} />
      <div className="cmdk-panel">
        <div className="cmdk-input-row">
          <Search size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                e.preventDefault();
                go(results[active].href, results[active].title);
              }
            }}
            placeholder="Search leaders, lessons, issues, cities…"
            aria-label="Command search"
          />
          <kbd>ESC</kbd>
        </div>
        {!query && recent.length > 0 && (
          <div className="cmdk-recents">
            <small>Recent</small>
            {recent.map((item) => (
              <button key={item} type="button" onClick={() => setQuery(item)}>{item}</button>
            ))}
          </div>
        )}
        <ul className="cmdk-results">
          {results.map((hit, i) => (
            <li key={hit.href + hit.title}>
              <button
                type="button"
                className={i === active ? "active" : ""}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(hit.href, hit.title)}
              >
                <span>
                  <small>{hit.category}</small>
                  <strong>{hit.title}</strong>
                </span>
                <CornerDownLeft size={14} />
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="cmdk-empty">No matches — try “pray”, “Hamilton”, or “run”.</li>}
        </ul>
        <div className="cmdk-foot">
          <Sparkles size={14} />
          <span>Tip: ask Kingdom Lens deeper questions after you land.</span>
          <Link href="/kingdom-lens" onClick={() => setOpen(false)}>Open Lens</Link>
        </div>
      </div>
    </div>
  );
}
