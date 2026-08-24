"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const textTestimonials = [
  {
    quote:
      "I think anyone who's come to our office will be amazed by the kind of architecture and the simplicity we have. I think it's all kudos to Yutori and the team. We've been working with them for the last couple of years to put together all our offices, both in Mangalore and Udupi.Thank you again for all your contribution and for being part of our journey in the last couple of years. Thank you.",
    name: "Suyog Shetty",
    role: "  CEO and Co-founder Niveus Solutions(Part of NTT Data)",
  },


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
  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <div>
          <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
            Client Voices
          </span>

          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper max-w-2xl">
            Delivering excellence for top firms in coastal Karnataka
          </h2>
        </div>

        {/* Two Testimonials - Horizontal */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              className="bg-ink-800 rounded-2xl p-7 lg:p-8 flex flex-col border border-paper/5"
            >
              {/* Quote Icon */}
              <Quote
                size={24}
                className="text-brand-500 mb-5"
              />

              {/* Testimonial */}
              <p className="text-stone-300 text-[15px] leading-relaxed flex-1 text-justify">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client Details */}
              <div className="mt-8 pt-5 border-t border-paper/10">
                <p className="font-display text-paper text-lg">
                  {t.name}
                </p>

                <p className="text-stone-500 text-sm mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
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