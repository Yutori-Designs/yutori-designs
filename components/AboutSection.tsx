"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/13]"
        >
          <Image
            src="/images/about/team-photo.png"
            alt="The Yutori Designs team at the studio"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            About Yutori Designs
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-6 text-ink-900 text-balance leading-[1.1]">
            Your trusted interior contractors in Mangalore
          </h2>

          <div className="space-y-5 text-ink-700 text-[16px] leading-relaxed text-justify">
            <p>
              
              {/* <Link
                href="/overview"
                className="text-brand-600 font-medium underline decoration-brand-300 hover:decoration-brand-600 transition-colors"
              >
                interior design
              </Link>{" "} */}
              At Yutori Designs, we believe that interior design is more than just arranging furniture—it’s 
              about creating meaningful experiences within the spaces where we live and work.
              As one of the premier interior design companies in Mangalore, our mission is to bring harmony, 
              functionality, and beauty into every corner of your environment. 
              We approach every project with the understanding that well-designed spaces enhance daily life, 
              and as dedicated interior design firms in Mangalore, we strive to evoke emotion and tell stories unique to each client.
            </p>
            <p>
              Rooted in the culturally rich region of Coastal Karnataka, we serve as expert 
              interior contractors in Mangalore, ensuring every detail is executed with precision. 
              Whether you are looking for a bespoke interior design company in Udupi or a turnkey partner in Mangalore, 
              our work draws inspiration from the local ethos—embracing coastal breezes, natural textures, 
              traditional craftsmanship, and the laid-back charm of the region.
            </p>
          </div>

          <Link
            href="/overview"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 text-paper font-medium hover:bg-brand-600 transition-colors"
          >
            More about us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
