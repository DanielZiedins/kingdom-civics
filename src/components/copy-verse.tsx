"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyVerse({ text, refLabel }: { text: string; refLabel: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const payload = `"${text}" — ${refLabel}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" className="copy-verse" onClick={copy} aria-label={`Copy ${refLabel}`}>
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy verse"}
    </button>
  );
}
