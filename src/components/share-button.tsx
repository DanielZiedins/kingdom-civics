"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

export function ShareButton({
  title,
  text,
  url,
  label = "Share",
  tone = "light",
}: {
  title: string;
  text: string;
  url: string;
  label?: string;
  tone?: "light" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to copy
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      className={`share-button ${tone === "light" ? "share-button-light" : ""}`}
      onClick={() => void share()}
    >
      {copied ? <Check size={15} /> : <Share2 size={15} />}
      {copied ? "Link copied" : label}
    </button>
  );
}
