import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Interior Designers in Udupi | Yutori Designs",
  description:
    "Yutori Designs is a Udupi-based interior design and turnkey execution studio serving homes, offices, and commercial spaces across the city. Space planning, residential, and commercial interiors under one roof.",
  keywords: [
    "interior designers Udupi",
    "best interior designers Udupi",
    "interior design company Udupi",
    "home interior designers Udupi",
    "commercial interior design Udupi",
  ],
};

const udupiFaqs = [
  {
    question: "What does an interior designer in Udupi do?",
    answer:
      "An interior designer plans and executes the layout, materials, and finishes of a space — from a single room to a full home or office — so it functions well and reflects how the people using it actually live or work.",
  },
  {
    question: "Does Yutori Designs provide turnkey execution in Udupi?",
    answer:
      "Yes. Our Udupi studio manages complete turnkey projects — design, material sourcing, civil work, carpentry, electrical, and plumbing — under one accountable team, based right here in Kinnimulki.",
  },
  {
    question: "Do you design apartments and villas in Udupi?",
    answer:
      "Yes, we design both — from compact apartment interiors to larger independent homes and villas across Udupi.",
  },
  {
    question: "Do you provide commercial interior design in Udupi?",
    answer:
      "Yes. We design and execute commercial interiors in Udupi including offices and retail spaces, alongside our residential work.",
  },
  {
    question: "How can I start a project with Yutori Designs?",
    answer:
      "Reach out through our contact form or visit our studio in Kinnimulki, Udupi. We start with a consultation to understand your space and budget before proposing a concept.",
  },
];

const udupiProjects = projects
  .filter((p) => p.location?.toLowerCase().includes("udupi"))
  .slice(0, 6);

export default function InteriorDesignersUdupiPage() {
  return (
    <main>
      <PageHero
        eyebrow="Udupi"
        title="Interior Designers in Udupi"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Interior Designers in Udupi" },
        ]}
      />

      <section className="relative h-[320px] sm:h-[420px]">
        <Image
          src="/images/brand/udupi.jpg"
          alt="Interior design projects in Udupi by Yutori Designs"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
        <div className="absolute bottom-8 left-6 lg:left-10">
          <span className="inline-flex items-center gap-1.5 text-brand-300 text-xs uppercase tracking-wider mb-2">
            <MapPin size={13} /> Based in Kinnimulki, Udupi
          </span>
          <p className="font-display text-3xl sm:text-4xl text-paper max-w-xl">
            A local studio for Udupi homes and workspaces
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          A studio in your city
        </span>
        <h2 className="font-display text-3xl sm:text-4xl mt-3 mb-6 text-ink-900 text-balance">
          Interior design, based in Udupi
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Yutori Designs is headquartered in Kinnimulki, Udupi — not a design team visiting from another city, but a studio that works, sources materials, and builds relationships with vendors right here. Our team has completed 49 projects across Coastal Karnataka, including homes, apartments, and workspaces throughout Udupi and its surrounding areas.
        </p>
        <p className="mt-5 text-ink-700 text-[17px] leading-relaxed text-justify">
          Being based locally means shorter turnaround on site visits, faster material sourcing, and a design approach shaped by Udupi&apos;s own mix of traditional coastal homes and newer apartment developments. Whether it&apos;s a family home, a compact flat, or a small business space, we design around how the space will actually be used — not a template.
        </p>
      </section>

      <ProjectGallerySection projects={udupiProjects} cityLabel="Udupi" />

      <section className="pt-16 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          Questions
        </span>
        <h2 className="font-display text-3xl  text-ink-900">
          Frequently asked questions
        </h2>
        <FAQSection faqs={udupiFaqs} />
      </section>

      <section className="pt-8 pb-20 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink-900">
          Start your Udupi interior project
        </h2>
        <p className="mt-4 text-ink-700">
          Visit our studio in Kinnimulki or reach out online — we&apos;ll get back to you within 2 business days.
        </p>
        <Link
          href="/contact-us"
          className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors group"
        >
          Get in touch
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}