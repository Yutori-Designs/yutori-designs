
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
    (item) => item.id === params.slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-ink-900 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-3xl text-paper font-display">
            Project not found
          </h1>
          <Link
            href="/our-projects"
            className="inline-block mt-6 text-brand-400"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink-900">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-ink-900/90 backdrop-blur-md border-b border-paper/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">

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
            aria-label="Close gallery"
            className="w-11 h-11 rounded-full bg-paper/10 hover:bg-brand-600 flex items-center justify-center text-paper transition-colors"
          >
            <X size={20} />
          </Link>

        </div>
      </div>

      {/* Gallery */}
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

        

      </div>
    </main>
  );
}
