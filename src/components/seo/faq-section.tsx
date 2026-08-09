"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/seo/faqs";

export function FaqSection({
  title = "Frequently asked questions",
  description = "Clear answers for search engines, AI assistants, and curious citizens.",
  faqs,
}: {
  title?: string;
  description?: string;
  faqs: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-light faq-section" aria-labelledby="faq-heading">
      <div className="page-width">
        <div className="section-heading center-heading narrow-heading">
          <span className="eyebrow">ANSWERS THAT TRAVEL</span>
          <h2 id="faq-heading">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={isOpen ? "faq-chevron open" : "faq-chevron"} size={18} />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
