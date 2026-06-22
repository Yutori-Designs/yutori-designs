"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Images } from "lucide-react";
import { events, type EventItem } from "@/lib/events";
import PageHero from "@/components/PageHero";
import EventModal from "@/components/EventModal";

export default function EventsPage() {
  const [active, setActive] = useState<EventItem | null>(null);

  return (
    <main>
      <PageHero
        eyebrow="Moments"
        title="Milestones from the studio"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <p className="max-w-xl text-ink-700 text-[17px] leading-relaxed mb-14">
          Tap any cover photo to scroll through the full set of pictures from
          that day.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.button
              key={event.id}
              onClick={() => setActive(event)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative text-left overflow-hidden bg-ink-800 h-96 rounded-3xl hover:rounded-none transition-[border-radius] duration-500 ease-out"
            >
              <Image
                src={event.cover}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/15 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="inline-flex w-fit items-center gap-1.5 text-xs text-paper/80 bg-paper/10 backdrop-blur px-2.5 py-1 rounded-full mb-3">
                  <Images size={12} /> {event.gallery.length} photos
                </span>
                <h3 className="font-display text-2xl text-paper leading-snug">
                  {event.title}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-mist-300 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {event.location}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <EventModal event={active} onClose={() => setActive(null)} />
    </main>
  );
}
