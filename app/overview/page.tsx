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
        title="Overview"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Overview" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 text-ink-700 text-[17px] leading-relaxed text-justify">
            <p>
              At Yutori Designs, we believe that interior design is more than just arranging furniture or choosing colors—it&apos;s about creating meaningful experiences within the spaces we live and work. Our mission is to bring harmony, functionality, and beauty into every corner of your environment. We approach every project with the understanding that well-designed spaces enhance daily life, evoke emotion, and tell stories unique to each client.
            </p>
            <p>
              Rooted in the culturally rich and naturally vibrant region of Mangalore, Udupi, and the greater Coastal Karnataka, our work draws inspiration from the local ethos—embracing coastal breezes, natural textures, traditional craftsmanship, and the laid-back charm of the region. This regional influence guides our design language while we infuse it with a modern edge, allowing us to create interiors that feel both grounded and contemporary.
            </p>
            <p>
              From cozy apartments to spacious coastal villas, and boutique offices to retail environments, we offer bespoke interior solutions tailored to each client’s lifestyle and aspirations. Our approach is collaborative and detail-oriented, ensuring that every space we design is not just visually striking but also deeply personal and functional. Every layout, material, and fixture is selected with the user’s experience in mind.
            </p>
            <p>The name “Yutori Designs”, derived from the Japanese concept of calm spaciousness, perfectly represents our core philosophy. We believe that true luxury lies in thoughtful space management, mindful minimalism, and purposeful design choices. At Yutori Designs, we strive to design with soul—where elegance meets efficiency, and creativity meets cultural context.</p>
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
