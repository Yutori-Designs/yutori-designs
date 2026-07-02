"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

const textTestimonials = [
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
];

export default function Testimonials() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
          Client voices
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper text-balance max-w-xl">
          Delivering excellence for top firms in coastal Karnataka
        </h2>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-ink-800 h-full min-h-[400px]"
          >
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play testimonial video"
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl justify-center items-center flex">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/testimonials/niveus-poster.jpg')" }}
                  />
                </div>
                <div className="absolute inset-0 bg-ink-900/40 group-hover:bg-ink-900/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-paper fill-paper ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 text-left">
                  <p className="font-display text-paper text-lg">Suyog Shetty</p>
                  <p className="text-stone-300 text-sm">CEO &amp; Co-founder, Niveus Solutions</p>
                </div>
              </button>
            ) : (
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/images/testimonials/Nivesus_Testimonial.mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {textTestimonials.slice(0, 2).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ink-800 rounded-xl p-6"
              >
                <Quote size={18} className="text-brand-500 mb-3" />
                <p className="text-stone-300 text-[15px] leading-relaxed">{t.quote}</p>
                <p className="mt-4 font-display text-paper">{t.name}</p>
                <p className="text-stone-600 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />
        <div className="flex gap-6 w-max animate-[scroll_32s_linear_infinite] hover:[animation-play-state:paused]">
          {[...textTestimonials, ...textTestimonials].map((t, i) => (
            <div
              key={i}
              className="w-[620px] shrink-0 bg-ink-800 rounded-xl p-7 border border-paper/5"
            >
              <Quote size={16} className="text-brand-500 mb-3" />
              <p className="text-stone-400 text-[13px] leading-relaxed mb-3 text-justify">
                {/* <p className="text-paper text-sm leading-relaxed  mb-3 te"></p> */}
                {t.quote}
              </p>
              <p className="text-stone-400 text-[13px] leading-relaxed mb-3 text-justify">
                {t.paragraph}
              </p>
              <p className="text-stone-400 text-[13px] leading-relaxed text-justify mb-3">
                {t.paragraph1}
              </p>
               <p className="text-stone-400 text-[13px] leading-relaxed mb-3 text-justify">
                {t.paragraph2}
              </p>
              <div className="mt-5 pt-4 border-t border-paper/10 flex items-center gap-3">
                {/* <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-paper text-xs font-display shrink-0">
                  {t.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                </div> */}
                <div>
                  <p className="font-display text-6xl text-paper text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
