"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

const textTestimonials = [
  {
    quote:
      "Their deep understanding of modern workspace needs, paired with strong design sensibilities, resulted in a beautifully crafted, employee-centric office.",
    name: "Shihab Kalandar",
    role: "CCO, Novigo Solutions",
  },
  {
    quote:
      "Yutori Designs is a firm grounded in integrity and honesty. Their holistic understanding of space and design is truly commendable.",
    name: "Devendranath B",
    role: "Managing Partner, Jade Invent",
  },
  {
    quote:
      "Unlike many firms that prioritize maximizing space at the cost of design, Yutori brings a creative approach rooted in balance and practicality.",
    name: "Bhisham Saini",
    role: "Absolute Leisure Private Limited",
  },
];

export default function Testimonials() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
          Client voices
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper text-balance max-w-xl">
          Delivering excellence for top firms in coastal Karnataka
        </h2>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-ink-800 aspect-video"
          >
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play testimonial video"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/testimonials/niveus-poster.jpg)" }}
                />
                <div className="absolute inset-0 bg-ink-900/40 group-hover:bg-ink-900/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-paper fill-paper ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 text-left">
                  <p className="font-display text-paper text-lg">Suyog Shetty</p>
                  <p className="text-stone-300 text-sm">CEO &amp; Co-founder, Niveus Solutions</p>
                </div>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID?autoplay=1"
                title="Niveus Solutions testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {textTestimonials.slice(0, 2).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ink-800 rounded-xl p-6"
              >
                <Quote size={18} className="text-brand-500 mb-3" />
                <p className="text-stone-300 text-[15px] leading-relaxed">{t.quote}</p>
                <p className="mt-4 font-display text-paper">{t.name}</p>
                <p className="text-stone-600 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />
        <div className="flex gap-6 w-max animate-[scroll_32s_linear_infinite] hover:[animation-play-state:paused]">
          {[...textTestimonials, ...textTestimonials].map((t, i) => (
            <div
              key={i}
              className="w-[360px] shrink-0 bg-ink-800 rounded-xl p-6 border border-paper/5"
            >
              <p className="text-stone-300 text-sm leading-relaxed line-clamp-4">{t.quote}</p>
              <p className="mt-4 font-display text-paper text-[15px]">{t.name}</p>
              <p className="text-stone-600 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
