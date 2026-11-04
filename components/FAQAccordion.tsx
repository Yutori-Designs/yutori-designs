"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface FAQLink {
  text: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  links?: FAQLink[];
}



export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <div
          key={faq.question}
          className="border border-ink-900/10 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
          >
            <span className="text-ink-900 font-medium">{faq.question}</span>
            <ChevronDown
              size={18}
              className={`text-brand-600 shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === i && (
            <div className="px-6 pb-5 text-ink-700 text-[15px] leading-relaxed">
              <p>{faq.answer}</p>
              {faq.links && faq.links.length > 0 && (
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {faq.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-brand-600 font-medium underline hover:text-brand-700 transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}