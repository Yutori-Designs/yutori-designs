"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Commercial ",
    title: "Blending tradition\ninto business",
    sub: "End-to-end commercial interiors that elevate your brand and your team.",
    href: "/service/commercial",
    image: "/images/hero/hero-commercial.png",
  },
  {
    eyebrow: "Workplace Design",
    title: "Inviting workspaces\nfor your employees",
    sub: "Spaces engineered around how people actually work, move, and gather.",
    href: "/service/office-space",
    image: "/images/hero/hero-workspace.png",
  },
  {
    eyebrow: "Residential",
    title: "Homes that\ntalk to you",
    sub: "Coastal textures, natural light, and craftsmanship rooted in Karnataka.",
    href: "/service/residential",
    image: "/images/hero/hero-residential.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink-900">
      <AnimatePresence mode="sync">
        {slides.map(
          (slide, i) =>
            i === active && (
              <motion.div
                key={slide.href + i}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/20" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-brand-300 text-sm tracking-[0.18em] uppercase mb-5">
              {slides[active].eyebrow}
            </span>
            <h1 className="font-display text-paper text-5xl sm:text-6xl lg:text-7xl leading-[1.05] whitespace-pre-line text-balance">
              {slides[active].title}
            </h1>
            <p className="mt-6 text-stone-300 text-lg max-w-md">{slides[active].sub}</p>
            <Link
              href={slides[active].href}
              className="mt-9 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors group"
            >
              View details
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group py-2"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === active ? "w-12 bg-brand-300" : "w-6 bg-paper/30 group-hover:bg-paper/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 text-paper/60 text-xs tracking-widest uppercase"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="w-px h-10 bg-paper/30" />
      </motion.div>
    </section>
  );
}
