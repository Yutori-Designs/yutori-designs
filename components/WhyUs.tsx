"use client";

import { motion } from "framer-motion";
import { Compass, MapPinned, Timer } from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "End-to-end delivery",
    description:
      "Design and execution under one roof — concept, approvals, materials, and on-site work, managed by a single team.",
  },
  {
    icon: MapPinned,
    title: "Rooted in the coast",
    description:
      "Based in Mangalore and Udupi, drawing on local materials, climate, and craftsmanship others overlook.",
  },
  {
    icon: Timer,
    title: "Built on timelines",
    description:
      "Clear project plans with regular updates, so your space opens when we say it will.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            Why Yutori
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-ink-900 text-balance">
            Interior design is more than arranging furniture
          </h2>
          <p className="mt-6 text-ink-700 text-[17px] leading-relaxed max-w-md">
            It&apos;s about creating meaningful experiences within the spaces
            where we live and work — bringing harmony, functionality, and
            beauty into every corner, inspired by the coastal breezes and
            traditional craftsmanship of Karnataka.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-ink-900/8 hover:border-brand-300 transition-colors"
            >
              <span className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <reason.icon size={22} className="text-brand-600" />
              </span>
              <div>
                <h3 className="font-display text-xl text-ink-900">{reason.title}</h3>
                <p className="mt-1.5 text-ink-700 text-[15px] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
