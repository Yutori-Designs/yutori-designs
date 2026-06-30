"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, BookOpen, Ruler } from "lucide-react";

const iconMap = { Heart, Leaf, BookOpen, Ruler } as const;
export type IconKey = keyof typeof iconMap;

export interface Value {
  icon: IconKey;
  title: string;
  description: string;
}

export default function ValueCard({ value, index }: { value: Value; index: number }) {
  const Icon = iconMap[value.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-7 rounded-2xl bg-white border border-ink-900/8 hover:border-brand-300 transition-colors"
    >
      <span className="inline-flex w-12 h-12 rounded-xl bg-brand-50 items-center justify-center mb-5">
        <Icon size={22} className="text-brand-600" />
      </span>
      <h3 className="font-display text-xl text-ink-900 mb-2">{value.title}</h3>
      <p className="text-ink-700 text-[15px] leading-relaxed text-justify ">{value.description}</p>
    </motion.div>
  );
}
