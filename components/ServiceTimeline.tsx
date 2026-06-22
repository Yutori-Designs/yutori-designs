"use client";

import { motion } from "framer-motion";
import type { ServiceStep } from "@/lib/services";

export default function ServiceTimeline({ steps }: { steps: ServiceStep[] }) {
  return (
    <div className="mt-12 relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-900/12" />
      <div className="flex flex-col gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex gap-6"
          >
            <span className="shrink-0 w-10 h-10 rounded-full bg-ink-900 text-paper font-display flex items-center justify-center text-sm z-10">
              {i + 1}
            </span>
            <div className="bg-white rounded-xl p-6 flex-1 border border-ink-900/8">
              <h3 className="font-display text-xl text-ink-900 mb-3">{step.title}</h3>
              <ul className="space-y-2">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-ink-700 text-[15px] leading-relaxed">
                    <span className="text-brand-500 mt-1.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
