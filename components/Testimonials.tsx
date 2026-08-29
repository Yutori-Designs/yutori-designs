"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";


type Reel = {
  youtubeId: string;
  project: string;
  credit: string;
};

const reels: Reel[] = [
  {
    youtubeId: "DFBxpT1aKpY",
    project: "Novigo Solutions Office, Falnir",
    credit: "Video Courtesy: Silicon Beach Program Team",
  },
  {
    youtubeId: "EAPY0zGkdcc",
    project: "Niveus Solutions Office, Mangalore",
    credit: "Video Courtesy: Silicon Beach Program Team",
  },
];


type TextTestimonial = {
  quote: string;
  paragraph: string;
  paragraph1?: string;
  paragraph2?: string;
  name: string;
  role: string;
};

const textTestimonials: TextTestimonial[] = [
  {
    quote:
      "As our organization prepared to move from our 150-seater office to a new 400-seater space, we wanted to create more than just a workplace. We envisioned a vibrant environment where our employees could truly enjoy coming to work every day. Drawing inspiration from some of the best global workspaces we've visited, we aspired to bring together functionality, creativity, and comfort in one place - our new office at Falnir.",
    paragraph:
      "Yutori Designs transformed this vision into reality. Their deep understanding of modern workspace needs, paired with their strong design sensibilities, resulted in a beautifully crafted, lively, and employee-centric office. The perfect blend of formal and informal seating areas caters seamlessly to diverse work styles and moods, making our new workspace both efficient and inspiring.",
    paragraph1:
      "We are truly delighted with the outcome and sincerely thank the Yutori Designs team for helping us build a space that reflects our culture and energizes our people every day.",
    name: "Shihab Kalandar",
    role: "CCO, Novigo Solutions",
  },
  {
    quote:
      "Yutori Designs, in my experience, is a firm grounded in integrity and honesty. Their holistic understanding of space and design is truly commendable. At Jade Invent, we recognized the firm's potential and capabilities and felt it deserved to be nominated among young, up-and-coming design studios in the early stages of its journey.",
    paragraph:
      "The team has a solid grasp of architecture as a whole, always ensuring compliance with the bye-laws stipulated by the state of Karnataka. Tirelessly, they craft solutions from multiple angles, presenting actionable options for every project assigned to them. No matter the size, their dedication remains consistently admirable.",
    paragraph1:
      "What truly distinguishes Yutori Designs is its welcoming attitude and genuine passion for design. The firm skillfully blends a keen understanding of clients' needs with a steadfast, old-school dedication, making it exceptionally reliable. Its honesty stands out, earning the admiration and confidence of everyone who works with them.",
    paragraph2:
      "In my opinion, any developer who shares these values should carefully consider their work and not turn the page on them.",
    name: "Devendranath B",
    role: "Managing Partner, Jade Invent",
  },
  {
    quote:
      "Working with Yutori Designs has been a genuinely refreshing experience. Unlike many architectural firms that prioritize maximizing FSI at the cost of essential design elements, Yutori Designs brings a creative approach that stays firmly rooted in balance and practicality. They thoughtfully integrate fundamentals like natural light, ventilation, wind direction, and Vastu into every design, while giving equal attention to day-to-day comforts such as staircase planning, kitchen layouts, and utility spaces.",
    paragraph:
      "For both my home and the residential building I developed, Yutori Designs has been the ideal partner. They focused on my vision and priorities without ever compromising on the basics that truly matter.",
    paragraph1:
      "The team is patient, understands client needs deeply, and has been extremely supportive during the execution and implementation stages of the project. I sincerely wish Yutori Designs continued success in all future endeavours.",
    name: "Bhisham Saini",
    role: "Absolute Leisure Private Limited",
  },
  {
    quote:
      "I think anyone who's come to our office will be amazed by the kind of architecture and the simplicity we have. I think it's all kudos to Yutori and the team. We've been working with them for the last couple of years to put together all our offices, both in Mangalore and Udupi.",
    paragraph:
      "Thank you again for all your contribution and for being part of our journey in the last couple of years. Thank you.",
    name: "Suyog Shetty",
    role: "CEO and Co-founder-Niveus Solutions(Part of NTT Data)",
  },
];

function ReelEmbed({ reel }: { reel: Reel }) {
  const [loaded, setLoaded] = useState(false);

  // hqdefault.jpg always exists for every YouTube video; maxresdefault
  // sometimes 404s depending on how the video was uploaded, so hqdefault
  // is the safe default thumbnail.
  const thumbnail = `https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col items-center rounded-2xl border border-paper/10 bg-ink-800 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
    >
      {/*
        Standard YouTube 16:9 ratio. maxWidth keeps it a sensible, standard
        size instead of stretching to fill the whole grid column; aspectRatio
        derives the height from that width, so nothing gets cropped.
        Click-to-load facade (thumbnail + play button) first, so the heavy
        YouTube iframe/player script only loads once someone actually wants
        to watch — keeps the page fast.
      */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-ink-900">
        {loaded ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}?autoplay=1&rel=0`}
            title={reel.project}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play ${reel.project} video`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={thumbnail}
              alt={reel.project}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink-900/25 transition-colors duration-300 group-hover:bg-ink-900/40">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-900/70 backdrop-blur-sm text-paper transition-transform duration-300 group-hover:scale-110">
                <Play size={24} className="ml-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>

      {/* Caption row */}
      <div className="mt-5 flex w-full items-start justify-between gap-3 border-t border-paper/10 pt-4">
        <div>
          <p className="font-display text-base text-paper leading-snug">
            {reel.project}
          </p>
          <p className="mt-1 text-xs text-stone-500">{reel.credit}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TextTestimonialCard({
  testimonial,
  index,
}: {
  testimonial: TextTestimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl border border-paper/10 bg-ink-800 p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
    >
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-600/15">
        <Quote size={20} className="text-brand-400" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <p className="text-stone-400 text-base text-sm sm:text-base md:text-lg leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="text-stone-400 text-sm sm:text-base md:text-lg text-left leading-relaxed">
          {testimonial.paragraph}
        </p>
        {testimonial.paragraph1 && (
          <p className="text-stone-400  text-sm sm:text-base md:text-lg leading-relaxed">
            {testimonial.paragraph1}
          </p>
        )}
        {testimonial.paragraph2 && (
          <p className="text-stone-400 text-sm text-sm sm:text-base md:text-lg leading-relaxed">
            {testimonial.paragraph2}
          </p>
        )}
      </div>

      <div className="mt-8 pt-5 border-t border-paper/10">
        <p className="font-display text-base sm:text-lg md:text-xl text-paper">{testimonial.name}</p>
        <p className="mt-1 text-sm text-base sm:text-lg md:text-xl text-stone-500">{testimonial.role}</p>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden text-justify">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Reels Heading */}
        <div className="max-w-2xl">
          <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
            In Focus
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper leading-tight max-w-3xl text-left">
            Spaces We Brought to Life
          </h2>

          <p className="mt-5 text-stone-400 leading-relaxed text-left">
            A glimpse into spaces designed and brought to life by Yutori Designs, featured through videos created and shared by the Silicon Beach Program team.
          </p>
        </div>

        {/* Reels — 2 per row, each card centers a fixed-width 16:9 YouTube video */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reels.map((reel) => (
            <ReelEmbed key={reel.youtubeId} reel={reel} />
          ))}
        </div>

        {/* Text Testimonials Heading */}
        <div className="max-w-2xl mt-24 lg:mt-32">
          <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
            Client Voices
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper leading-tight max-w-3xl">
            Delivering excellence through thoughtful design
          </h2>
          <p className="mt-5 text-stone-400 leading-relaxed">
            Every project is built on collaboration, trust, and a shared
            vision. Hear directly from the people and organisations we have
            had the privilege to work with.
          </p>
        </div>

        {/* Text Testimonials Grid */}
        <div className="mt-14 grid  w-full max-w-[1700px] gap-6 md:grid-cols-4 xl:grid-cols-2">
          {textTestimonials.map((testimonial, index) => (
            <TextTestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}