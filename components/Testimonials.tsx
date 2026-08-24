"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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

  {
    quote:
      "I think anyone who's come to our office will be amazed by the kind of architecture and the simplicity we have. I think it's all kudos to Yutori and the team. We've been working with them for the last couple of years to put together all our offices, both in Mangalore and Udupi.",
    paragraph:
      "Thank you again for all your contribution and for being part of our journey in the last couple of years. Thank you.",

    name: "Suyog Shetty",
    role: "CEO and Co-founder-Niveus Solutions(Part of NTT Data)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ink-900 overflow-hidden text-justify">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
            Client Voices
          </span>

          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-paper leading-tight max-w-3xl">
            Delivering excellence through thoughtful design
          </h2>

          <p className="mt-5 text-stone-400 leading-relaxed">
            Every project is built on collaboration, trust, and a shared vision.
            Hear directly from the people and organisations we have had the
            privilege to work with.
          </p>
        </div>

        {/* All Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {textTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col rounded-2xl border border-paper/10 bg-ink-800 p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-600/15">
                <Quote size={20} className="text-brand-400" />
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-stone-300 text-[15px] leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <p className="text-stone-400 text-[15px] leading-relaxed">
                  {testimonial.paragraph}
                </p>

                <p className="text-stone-400 text-[15px] leading-relaxed">
                  {testimonial.paragraph1}
                </p>

                {testimonial.paragraph2 && (
                  <p className="text-stone-400 text-[15px] leading-relaxed">
                    {testimonial.paragraph2}
                  </p>
                )}
              </div>

              {/* Client Details */}
              <div className="mt-8 pt-5 border-t border-paper/10">
                <p className="font-display text-lg text-paper">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-stone-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}