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
      "A space is more than just walls and furniture — it’s a reflection of who you are and how you want to feel, whether at home or at work. That’s why we start by listening, taking the time to understand not just what you need, but how you want to experience the space. For homes, we create cozy, inviting environments where you can truly relax and feel at ease. For offices, we design inspiring, functional spaces that foster creativity and productivity. Every texture, color, and detail is thoughtfully chosen to create a harmonious atmosphere that feels uniquely yours.",
  },
  {
    icon: "Leaf" as const,
    title: "We design responsibly",
    description:
      "We believe that true design goes beyond aesthetics — it’s about creating a positive and lasting impact on the world around us. That’s why we are deeply mindful of the choices we make, considering not only how a space looks and feels today but also how it will affect future generations. We thoughtfully select materials that are sustainable, responsibly sourced, and designed to coexist harmoniously with nature. From eco-friendly paints and reclaimed wood to energy-efficient lighting and natural fibers, every element is chosen with care to reduce environmental impact without compromising on style or comfort. Our goal is to create spaces that inspire and endure — blending timeless beauty with environmental responsibility, so that the spaces we create today can be cherished for generations to come.",
  },
  {
    icon: "Ruler" as const,
    title: "We prioritize quality and longevity",
    description:
      "We take quality very seriously because we believe that a well-crafted space should not only look beautiful but also stand the test of time. From the materials we choose to the precision in our workmanship, every detail is carefully considered to ensure durability and lasting comfort. When we hand over the space, our goal is for you to feel completely at ease — knowing that everything has been built to last, with minimal maintenance required. We want you to settle in and enjoy your space without the stress of upkeep, confident that it has been designed and constructed with the highest standards of quality and care.",
  },
  {
    icon: "BookOpen" as const,
    title: "Integrity - Do what is right, not what is easy!",
    description:
      "At the heart of our business is integrity — it’s the foundation of everything we do. We believe in doing things the right way, not the easy way. Shortcuts and compromises have no place in our work because we are passionate about what we do and take pride in delivering excellence. Every step of the process, from design to execution, is guided by honesty, transparency, and a commitment to quality. An honest job, done with care and precision, is what gives us peace of mind at the end of the day — knowing that we’ve stayed true to our values and delivered a space that reflects not just our expertise, but also our integrity.",
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

      <section className="py-10 w-full px-6 lg:px-10">
        <p className="max-w-7xl text-ink-700 text-[17px] leading-relaxed mb-14 text-justify justify-center mx-auto">
          At the heart of our philosophy lies a commitment to crafting interior spaces that exude sophistication, comfort, and a sense of effortless luxury. We specialize in curating environments where spaciousness meets serenity, and every detail is a reflection of refined taste. Our design approach blends timeless elegance with modern sensibilities, creating bespoke interiors that elevate everyday living.
        </p>

        <p className="max-w-7xl text-ink-700 text-[17px] leading-relaxed  text-justify justify-center mx-auto">
         Sustainability is woven into our process, ensuring that beauty and responsibility coexist seamlessly. From concept to completion, we transform spaces into luxurious sanctuaries tailored to the unique lifestyle of each client—where form, function, and finesse come together in perfect harmony.
        </p>
      </section>

      <section className="py-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
