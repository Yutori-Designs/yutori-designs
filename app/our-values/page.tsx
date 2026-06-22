import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValueCard from "@/components/ValueCard";

export const metadata: Metadata = {
  title: "Our Values | Yutori Designs",
  description:
    "Mindfulness, simplicity, storytelling, and responsible design — the principles shaping every Yutori Designs interior.",
};

const values = [
  {
    icon: "Heart" as const,
    title: "We design around your vision",
    description:
      "A space is more than walls and furniture — it's a reflection of who you are and how you want to feel. We start by listening, then shape cosy, inviting homes and inspiring, functional offices around what we hear.",
  },
  {
    icon: "Leaf" as const,
    title: "We design responsibly",
    description:
      "Good design considers tomorrow as much as today. We choose sustainable, responsibly sourced materials — eco-friendly paints, reclaimed wood, energy-efficient lighting, natural fibres — without compromising on style.",
  },
  {
    icon: "Ruler" as const,
    title: "Spaciousness meets serenity",
    description:
      "Sophistication and comfort, not excess. Every detail is a reflection of refined taste, blending timeless elegance with modern sensibility.",
  },
  {
    icon: "BookOpen" as const,
    title: "Form, function, and finesse",
    description:
      "From concept to completion, spaces are shaped into sanctuaries tailored to each client's lifestyle — where how a room feels matters as much as how it looks.",
  },
];

export default function OurValuesPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Principles behind every interior we shape"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Values" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <p className="max-w-2xl text-ink-700 text-[17px] leading-relaxed mb-14">
          At the heart of our philosophy lies a commitment to crafting interiors
          that exude sophistication, comfort, and effortless luxury — where
          spaciousness meets serenity and sustainability is woven into every
          decision we make.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
