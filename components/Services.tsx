"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tagline: "Yutori Designs: Home Interior",
    title: "Interior Design",
    description:
      "Bespoke interiors for homes, offices, and retail spaces — shaped around how the space will actually be lived in.",
    href: "/service/interior-design",
    image: "/images/services/interior-design.jpg",
  },
  {
    tagline: "Yutori Designs: Smart Layouts",
    title: "Space Planning",
    description:
      "Smart layouts built around real movement, light, and structure — before a single finish is chosen.",
    href: "/service/space-planning",
    image: "/images/services/space-planning.jpg",
  },
  {
    tagline: "Yutori Designs: End-to-End Delivery",
    title: "Turnkey Project Execution",
    description:
      "Design and execution under one accountable team — concept to handover, with one point of contact throughout.",
    href: "/service/turn-key-project-execution",
    image: "/images/services/turnkey.jpg",
  },
];

function TiltCard({ service }: { service: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rotateY: x * 10, rotateX: -y * 10 });
  }

  return (
    <Link href={service.href} className="block [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
        animate={{ rotateX: style.rotateX, rotateY: style.rotateY }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="group relative h-[420px] overflow-hidden bg-ink-800 [transform-style:preserve-3d] rounded-3xl hover:rounded-none transition-[border-radius] duration-500 ease-out"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-transparent" />

        <div className="relative h-full flex flex-col justify-end p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-brand-300 text-xs tracking-[0.1em] uppercase">
                {service.tagline}
              </span>
              <h3 className="font-display text-2xl text-paper leading-snug mt-1">
                {service.title}
              </h3>
            </div>
            <span className="shrink-0 w-10 h-10 rounded-full bg-paper/10 backdrop-blur flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
              <ArrowUpRight size={18} className="text-paper" />
            </span>
          </div>
          <p className="mt-3 text-stone-300 text-[15px] leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            What we do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-ink-900 text-balance">
            Design services across<br />every space you build
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <TiltCard key={service.href} service={service} />
        ))}
      </div>
    </section>
  );
}
