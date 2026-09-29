import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Interior Designers in Mangalore | Yutori Designs",
  description:
    "Looking for interior designers in Mangalore? Yutori Designs delivers residential, commercial, and office interiors with full turnkey execution — led by a registered architect and civil engineer with nearly 5 decades combined experience.",
  keywords: [
    "interior designers Mangalore",
    "best interior designers Mangalore",
    "interior design company Mangalore",
    "interior contractors Mangalore",
    "turnkey interior design Mangalore",
  ],
};

const mangaloreFaqs = [
  {
    question: "Does Yutori Designs provide turnkey interior execution in Mangalore?",
    answer:
      "Yes. Yutori Designs handles complete turnkey project execution in Mangalore — from design and material selection through civil work, carpentry, electrical, plumbing, and décor — managed by a single accountable team from start to finish.",
  },
  {
    question: "Do you design offices and commercial spaces in Mangalore?",
    answer:
      "Yes. We design and execute commercial interiors in Mangalore including offices, retail showrooms, and hospitality spaces, focused on both brand identity and everyday functionality.",
  },
  {
    question: "Which areas in Mangalore do you serve?",
    answer:
      "We serve Mangalore city and the surrounding areas, with our office based in Konchady, Derebail. Reach out to us directly to confirm coverage for your specific location.",
  },
  {
    question: "How long does a typical interior project take?",
    answer:
      "Project timelines depend on scope and scale — a single room may take a few weeks, while a full turnkey office or home can take several months. We share a clear project plan and timeline once your project's scope is confirmed.",
  },
];

const mangaloreProjects = projects
  .filter((p) => p.location?.toLowerCase().includes("mangalore"))
  .slice(0, 6);

export default function InteriorDesignersMangalorePage() {
  return (
    <main>
      <PageHero
        eyebrow="Mangalore"
        title="Interior Designers in Mangalore"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Interior Designers in Mangalore" },
        ]}
      />

      <section className="relative h-[320px] sm:h-[420px]">
        <Image
          src="/images/brand/mangaluru.jpg"
          alt="Interior design projects in Mangalore by Yutori Designs"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
        <div className="absolute bottom-8 left-6 lg:left-10">
          <span className="inline-flex items-center gap-1.5 text-brand-300 text-xs uppercase tracking-wider mb-2">
            <MapPin size={13} /> Serving Mangalore City
          </span>
          <p className="font-display text-3xl sm:text-4xl text-paper max-w-xl">
            Offices, homes, and commercial spaces across Mangalore
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          Local expertise
        </span>
        <h2 className="font-display text-3xl sm:text-4xl mt-3 mb-6 text-ink-900 text-balance">
          Interior design rooted in Mangalore
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Yutori Designs is a Mangalore-based interior design and turnkey execution studio, delivering residential, commercial, and office interiors across the city. Led by a registered architect and a civil engineer with nearly five decades of combined experience, our team has completed 49 projects across Coastal Karnataka — 36 of them delivered as full turnkey execution, from concept to final handover.
        </p>
        <p className="mt-5 text-ink-700 text-[17px] leading-relaxed text-justify">
          Mangalore&apos;s coastal climate, dense urban layouts, and mix of traditional and contemporary architecture call for interior design that understands the region — not a template imported from elsewhere. We&apos;ve designed offices for IT companies in Falnir, homes across the city&apos;s residential neighbourhoods, and commercial spaces built to handle daily foot traffic and monsoon humidity alike.
        </p>
      </section>

      <ProjectGallerySection projects={mangaloreProjects} cityLabel="Mangalore" />

      <section className="pt-16 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          Questions
        </span>
        <h2 className="font-display text-3xl   text-ink-900">
          Frequently asked questions
        </h2>
        <FAQSection faqs={mangaloreFaqs} />
      </section>

      <section className="pt-8 pb-20 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl  text-ink-900">
          Start your Mangalore interior project
        </h2>
        <p className="mt-4 text-ink-700">
          Tell us about your space and we&apos;ll get back to you within 2 business days.
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