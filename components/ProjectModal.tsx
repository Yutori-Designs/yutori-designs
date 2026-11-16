
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();

  const project = projects.find(
    (p) => p.id === params.slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-ink-900 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-3xl text-paper">
          Project not found
        </h1>
        <p className="text-stone-300 mt-3">
          The project you are looking for does not exist.
        </p>
        <Link
          href="/our-projects"
          className="mt-6 px-6 py-3 rounded-full bg-brand-600 text-paper hover:bg-brand-500 transition-colors"
        >
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink-900">

      {/* Project Header */}
      <div className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur-md border-b border-paper/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">

          <div>
            <h1 className="font-display text-xl sm:text-2xl text-paper">
              {project.title}
            </h1>

            <p className="mt-1 flex items-center gap-1.5 text-stone-300 text-sm">
              <MapPin size={14} />
              {project.location}
            </p>
          </div>

          <Link
            href="/our-projects"
            aria-label="Back to projects"
            className="w-11 h-11 rounded-full bg-paper/10 hover:bg-brand-600 flex items-center justify-center text-paper transition-colors shrink-0"
          >
            <X size={20} />
          </Link>

        </div>
      </div>

      {/* Project Gallery */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-6">

        {project.gallery.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-xl overflow-hidden bg-ink-800"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </motion.div>
        ))}

        <p className="text-center text-stone-300 text-sm pt-4">
          
        </p>

        <div className="flex justify-center pb-10">
          <Link
            href="/our-projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/20 text-paper hover:bg-brand-600 hover:border-brand-600 transition-colors"
          >
            Back to all projects
          </Link>
        </div>

      </div>
    </main>
  );
}
