"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Commercial interiors",
    title: "Blending tradition\ninto business",
    sub: "Commercial interior design and turnkey execution in Mangalore & Udupi, built to elevate your brand and your team.",
    href: "/service/commercial",
    cta: "Explore commercial interiors",
    image: "/images/hero/hero-commercial.png",
    alt: "Commercial interior designed by Yutori Designs in Udupi", // replace with a real project description
  },
  {
    eyebrow: "Office interiors",
    title: "Inviting workspaces\nfor your employees",
    sub: "Office interior design in Udupi and Mangalore, planned around how people actually work, move and gather.",
    href: "/service/office-space",
    cta: "See office interior design",
    image: "/images/hero/hero-workspace.png",
    alt: "Modern office workspace interior by Yutori Designs", // replace with a real project description
  },
  {
    eyebrow: "Residential interiors",
    title: "Homes that\ntalk to you",
    sub: "Home interior design in Mangalore & Udupi, with coastal textures, natural light and craftsmanship rooted in Karnataka.",
    href: "/service/residential",
    cta: "Explore Residential interiors",
    image: "/images/hero/hero-residential.png",
    alt: "Residential home interior by Yutori Designs in coastal Karnataka", // replace with a real project description
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      aria-label="Yutori Designs featured services"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink-900"
    >
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
                {/* next/image gives real alt text, auto WebP/AVIF, and correct sizing */}
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/20" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28 pt-32">
        {/* The ONE H1 on the page: static, keyword-bearing, never changes with the slide */}
        <h1 className="inline-block text-brand-300 text-sm tracking-[0.18em] uppercase mb-5">
          Interior Designers in Mangalore &amp; Udupi
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Slide tagline is now an H2: same look, correct heading level */}
            <h2 className="font-display text-paper text-5xl sm:text-6xl lg:text-7xl leading-[1.05] whitespace-pre-line text-balance">
              {slides[active].title}
            </h2>
            <p className="mt-6 text-stone-300 text-lg max-w-md">{slides[active].sub}</p>
            <Link
              href={slides[active].href}
              aria-label={slides[active].cta}
              className="mt-9 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors group"
            >
              {slides[active].cta}
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex items-center gap-3">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
              aria-current={i === active}
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
        aria-hidden="true"
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