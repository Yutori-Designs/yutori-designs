"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

const featured = projects.slice(0, 5);

export default function FeaturedProjects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            Selected work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-ink-900 text-balance">
            Spaces we&apos;ve brought to life
          </h2>
        </div>
        <Link
          href="/our-projects"
          className="inline-flex items-center gap-2 text-ink-900 font-medium hover:text-brand-600 transition-colors group"
        >
          View all projects
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:grid-rows-2 lg:h-[640px]">
        {featured.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => setActive(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`group relative text-left overflow-hidden bg-ink-800 rounded-3xl hover:rounded-none transition-[border-radius] duration-500 ease-out ${
              i === 0
                ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 h-72 lg:h-full"
                : "h-72 lg:h-full"
            }`}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <span className="inline-flex w-fit items-center gap-1.5 text-xs text-paper/80 bg-paper/10 backdrop-blur px-2.5 py-1 rounded-full mb-2.5">
                <Images size={12} /> {project.category}
              </span>
              <h3 className="font-display text-paper text-lg leading-snug line-clamp-2">
                {project.title}
              </h3>
              <p className="text-stone-300 text-sm mt-1">{project.location}</p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={15} className="text-paper -rotate-45" />
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
