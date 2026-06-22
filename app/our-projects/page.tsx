"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";
import { projects, categories, type Project, type ProjectCategory } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

export default function OurProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          Portfolio
        </span>
        <h1 className="font-display text-5xl sm:text-6xl mt-3 text-ink-900 text-balance">
          Our projects
        </h1>
        <p className="mt-5 text-ink-700 text-lg max-w-xl">
          Tap any cover image to scroll through the full set of photos for that
          project.
        </p>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === cat
                  ? "bg-ink-900 text-paper border-ink-900"
                  : "border-ink-900/15 text-ink-700 hover:border-brand-400 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(project)}
                className="group relative text-left overflow-hidden bg-ink-800 h-80 rounded-3xl hover:rounded-none transition-[border-radius] duration-500 ease-out"
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="inline-flex w-fit items-center gap-1.5 text-xs text-paper/80 bg-paper/10 backdrop-blur px-2.5 py-1 rounded-full mb-2.5">
                    <Images size={12} /> {project.category}
                  </span>
                  <h3 className="font-display text-paper text-lg leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-300 text-sm mt-1">{project.location}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
