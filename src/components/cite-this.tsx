"use client";

import { Check, Quote } from "lucide-react";
import { useState } from "react";
import { CREATOR, SITE_NAME, absoluteUrl } from "@/lib/seo/site";

export function CiteThis({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const [copied, setCopied] = useState<"apa" | "url" | null>(null);
  const url = absoluteUrl(path);
  const year = new Date().getFullYear();
  const apa = `${CREATOR.name} (${year}). ${title}. ${SITE_NAME}. ${url}`;

  async function copy(kind: "apa" | "url") {
    const value = kind === "apa" ? apa : url;
    await navigator.clipboard.writeText(value);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 2000);
  }

  return (
    <aside className="cite-this" aria-label="Cite this page">
      <div className="cite-this-head">
        <Quote size={16} />
        <strong>Cite this page</strong>
      </div>
      <p className="cite-this-apa">{apa}</p>
      <div className="cite-this-actions">
        <button type="button" onClick={() => void copy("apa")}>
          {copied === "apa" ? <><Check size={14} /> Copied citation</> : "Copy citation"}
        </button>
        <button type="button" onClick={() => void copy("url")}>
          {copied === "url" ? <><Check size={14} /> Copied URL</> : "Copy URL"}
        </button>
      </div>
    </aside>
  );
}
