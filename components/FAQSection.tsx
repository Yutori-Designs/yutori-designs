"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}
export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 lg:px-10">
      <h2 className="font-display text-3xl text-ink-900 mb-8">

      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-ink-900/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-medium text-ink-900">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-brand-600 transition-transform ${openIndex === i ? "rotate-180" : ""
                  }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-ink-700 text-[15px] leading-relaxed">
                {faq.answer}
                {faq.linkHref && (
                  <>
                    {" "}
                    <a
                      href={faq.linkHref}
                      className="text-brand-400 font-medium underline hover:text-brand-300 transition-colors"
                    >
                      {faq.linkText ?? faq.linkHref}
                    </a>
                    .
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}