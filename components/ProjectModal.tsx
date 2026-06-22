"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink-900/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-ink-900/90 backdrop-blur-md border-b border-paper/10">
              <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-paper">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-stone-300 text-sm">
                    <MapPin size={14} /> {project.location}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close gallery"
                  className="w-11 h-11 rounded-full bg-paper/10 hover:bg-brand-600 flex items-center justify-center text-paper transition-colors shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

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
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </motion.div>
              ))}
              <p className="text-center text-stone-300 text-sm pt-4">
                End of gallery — press Esc or tap × to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
