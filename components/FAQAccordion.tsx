"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/10 rounded-xl border border-white/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-sm font-medium text-[#FAFAFA] sm:text-base">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-[#C9A84C] transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all ${
              openIndex === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="px-6 text-sm leading-relaxed text-[#FAFAFA]/60">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
