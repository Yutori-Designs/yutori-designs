"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";


const textTestimonials = [
  {
    quote:
      "As our organization prepared to move from our 150-seater office to a new 400-seater space, we wanted to create more than just a workplace. We envisioned a vibrant environment where our employees could truly enjoy coming to work every day. Drawing inspiration from some of the best global workspaces we've visited, we aspired to bring together functionality, creativity, and comfort in one place - our new office at Falnir.",
    name: "Shihab Kalandar",
    role: "CCO, Novigo Solutions",
  },
  {
    quote:
      "Yutori Designs, in my experience, is a firm grounded in integrity and honesty. Their holistic understanding of space and design is truly commendable. At Jade Invent, we recognized the firm's potential and capabilities and felt it deserved to be nominated among young, up-and-coming design studios in the early stages of its journey.",
    name: "Devendranath B",
    role: "Managing Partner, Jade Invent",
  },
];

export default function Testimonials() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <div>
          <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
            Client voices
          </span>

          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper text-balance max-w-xl">
            Delivering excellence for top firms in coastal Karnataka
          </h2>
        </div>

        {/* Main Testimonials Layout */}
        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-stretch">

          {/* Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-ink-800 min-h-[400px]"
          >
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play testimonial video"
              >
                {/* Poster Image */}
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('/images/testimonials/niveus-poster.jpg')",
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-ink-900/40 group-hover:bg-ink-900/30 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play
                      size={22}
                      className="text-paper fill-paper ml-0.5"
                    />
                  </span>
                </div>

                {/* Video Information */}
                <div className="absolute bottom-5 left-5 text-left">
                  <p className="font-display text-paper text-lg">
                    Suyog Shetty
                  </p>

                  <p className="text-stone-300 text-sm">
                    CEO &amp; Co-founder, Niveus Solutions
                  </p>
                </div>
              </button>
            ) : (
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source
                    src="/images/testimonials/Nivesus_Testimonial.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </motion.div>

          {/* Two Text Testimonials */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {textTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="bg-ink-800 rounded-xl p-6 flex-1"
              >
                {/* Quote Icon */}
                <Quote
                  size={18}
                  className="text-brand-500 mb-3"
                />

                {/* Testimonial */}
                <p className="text-stone-300 text-[15px] leading-relaxed">
                  {t.quote}
                </p>

                {/* Client Details */}
                <div className="mt-5">
                  <p className="font-display text-paper">
                    {t.name}
                  </p>

                  <p className="text-stone-500 text-sm">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* View All Testimonials Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/testimonial"
            className="inline-flex items-center justify-center rounded-full border border-brand-500/40 bg-brand-600 px-7 py-3 text-sm font-medium text-paper transition-all duration-300 hover:bg-brand-500 hover:scale-105"
          >
            View All Testimonials
          </Link>
        </div>

      </div>
    </section>
  );
}