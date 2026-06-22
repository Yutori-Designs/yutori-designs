import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Yutori Designs | Interior Studio in Coastal Karnataka",
  description:
    "Yutori Designs is a Udupi & Mangalore-based interior studio blending mindful design, thoughtful layouts, and full-service execution.",
};

export default function OverviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Designed with soul, rooted in the coast"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Overview" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 text-ink-700 text-[17px] leading-relaxed">
            <p>
              At Yutori Designs, interior design is more than arranging furniture
              or choosing colours — it&apos;s about creating meaningful experiences
              within the spaces we live and work in. Every project is approached
              with one belief: well-designed spaces enhance daily life and tell a
              story unique to the people inside them.
            </p>
            <p>
              We&apos;re rooted in the culturally rich, naturally vibrant region of
              Mangalore, Udupi, and the greater Coastal Karnataka. Our work draws
              on the local ethos — coastal breezes, natural textures, traditional
              craftsmanship, and the region&apos;s laid-back charm — and brings a
              modern edge to it, so the result feels grounded and contemporary at
              once.
            </p>
            <p>
              From cosy apartments to spacious coastal villas, boutique offices to
              retail environments, every space is shaped around the client&apos;s
              lifestyle and aspirations — visually striking, but just as importantly,
              functional and personal.
            </p>
          </div>

          <div className="bg-ink-900 rounded-2xl p-10 lg:sticky lg:top-28">
            <span className="font-display text-3xl text-brand-300 italic">
              &ldquo;Yutori&rdquo;
            </span>
            <p className="mt-4 text-stone-300 text-[16px] leading-relaxed">
              The name is derived from the Japanese concept of calm
              spaciousness — the idea that true luxury lies in thoughtful space
              management, mindful minimalism, and purposeful design choices.
            </p>
            <p className="mt-4 text-stone-300 text-[16px] leading-relaxed">
              We design with that philosophy at the centre: where elegance meets
              efficiency, and creativity meets cultural context.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[420px]">
        <Image
          src="/images/services/"
          alt="A Yutori Designs interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink-900/30" />
      </section>
    </main>
  );
}
