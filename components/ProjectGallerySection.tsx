"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectGallerySection({
  projects,
  cityLabel,
}: {
  projects: Project[];
  cityLabel: string;
}) {
  const [active, setActive] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 lg:px-10 bg-paper-dim">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-3xl mt-2 text-ink-900">
            {cityLabel} projects
          </h2>
        </div>
        <Link
          href="/our-projects"
          className="hidden sm:inline-flex items-center gap-1.5 text-brand-600 text-sm font-medium hover:gap-2.5 transition-[gap]"
        >
          View all projects <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActive(project)}
            className="group relative text-left rounded-xl overflow-hidden h-64 bg-ink-800"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-1 text-xs text-brand-300 mb-1.5">
                <MapPin size={11} /> {project.location}
              </span>
              <p className="text-paper text-sm font-medium line-clamp-2">
                {project.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          href="/our-projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-900/20 text-ink-900 hover:bg-brand-600 hover:border-brand-600 hover:text-paper transition-colors font-medium"
        >
          View all projects <ArrowRight size={16} />
        </Link>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}