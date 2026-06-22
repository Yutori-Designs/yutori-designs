"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const rounded = useTransform(springValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { value: 55, label: "Projects completed" },
  { value: 38, label: "Turnkey projects" },
  { value: 17, label: "Interior designs" },
  { value: 8, label: "In progress" },
];

export default function StatsBar() {
  return (
    <section className="bg-paper-dim border-y border-ink-900/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <div className="font-display text-5xl text-brand-600 tabular-nums">
              <Counter value={s.value} />
              <span className="text-ink-900">+</span>
            </div>
            <p className="mt-1.5 text-ink-700 text-sm tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
