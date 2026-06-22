import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaStrip() {
  return (
    <section className="relative py-28 bg-brand-600 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none flex items-center">
        <div className="whitespace-nowrap font-display text-[10rem] text-paper leading-none animate-[marquee_30s_linear_infinite]">
          Yutori Designs &nbsp; Yutori Designs &nbsp; Yutori Designs &nbsp;
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-paper text-balance">
          Ready to transform your space?
        </h2>
        <p className="mt-5 text-brand-50/90 text-lg max-w-lg mx-auto">
          Tell us about your project and we&apos;ll get back to you within a day.
        </p>
        <Link
          href="/contact-us"
          className="mt-9 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ink-900 text-paper font-medium hover:bg-ink-800 transition-colors group"
        >
          Get in touch
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
