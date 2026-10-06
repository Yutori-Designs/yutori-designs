import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

const PAGE_URL = "https://www.yutoridesigns.in/interior-designers-mangalore";
const OG_IMAGE = "https://www.yutoridesigns.in/images/brand/og-image.png";

// The root layout appends " | Yutori Designs" to page titles (the live title was
// "... | Yutori Designs | Yutori Designs"), so the brand is NOT repeated here.
const SEO_TITLE = "Interior Designers in Mangalore – Turnkey";
const SEO_TITLE_FULL = `${SEO_TITLE} | Yutori Designs`;
const SEO_DESCRIPTION =
  "Architect-led interior design & turnkey execution in Mangalore: offices, homes, retail. 49 projects, 36 turnkey. Request a quote.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "interior designers Mangalore",
    "best interior designers Mangalore",
    "interior design company Mangalore",
    "interior contractors Mangalore",
    "turnkey interior design Mangalore",
  ],
  alternates: { canonical: PAGE_URL },
  // Page-level openGraph replaces the layout's, so siteName, locale and image are repeated.
  openGraph: {
    title: { absolute: SEO_TITLE_FULL },
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Yutori Designs",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yutori Designs: interior designers in Mangalore and Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: SEO_TITLE_FULL },
    description: SEO_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const mangaloreFaqs = [
  {
    question: "Does Yutori Designs provide turnkey interior execution in Mangalore?",
    answer:
      "Yes. Yutori Designs handles complete turnkey project execution in Mangalore, from design and material selection through civil work, carpentry, electrical, plumbing and décor, managed by a single accountable team with one point of contact from start to handover.",
  },
  {
    question: "Do you design offices and commercial spaces in Mangalore?",
    answer:
      "Yes. We design and execute commercial interiors in Mangalore, including offices, retail showrooms and hospitality spaces. Our Mangalore work includes offices for Niveus Solutions and the Novigo IT Development Center, plus a college building in Jeppu. Layouts are planned around headcount, daily footfall and how the space is actually used.",
  },
  {
    question: "Which areas in Mangalore do you serve?",
    answer:
      "We serve Mangalore city and the surrounding areas, and we've delivered projects in Falnir, Kadri and Jeppu. Our Mangalore office is at Vruddhi Enclave, Konchady, Derebail. Reach out to us directly to confirm coverage for your specific location. We also take projects in Udupi and Manipal.",
  },
  {
    question: "How long does a typical interior project take?",
    answer:
      "Project timelines depend on scope and scale. A single room may take a few weeks, while a full turnkey office or home can take several months. We share a clear project plan and timeline once your project's scope is confirmed.",
  },
  {
    question: "How much does interior design cost in Mangalore?",
    answer:
      "It depends mainly on how much civil and electrical work the space needs, the finishes you choose, and how much of the furniture is built in. The same floor area can cost very different amounts depending on the starting condition, which is why we quote once your scope is confirmed. Tell us about your space and we'll take it from there.",
  },
  {
    question: "Which materials suit Mangalore's humid, coastal climate?",
    answer:
      "Kitchens, bathrooms and wardrobes need moisture-resistant boards and corrosion-resistant hardware, and finishes that wipe clean easily. Layout matters as much as material: leave air behind tall units and keep storage off damp external walls. We plan for humidity from the first layout, not as an afterthought.",
  },
  {
    question: "What is the difference between an interior designer and an interior contractor?",
    answer:
      "A designer draws the space and a contractor builds it. When they are two different companies, you end up refereeing between them. We do both, so the drawings are built by the team that drew them and the estimate matches the design.",
  },
  {
    question: "Do you take projects in Udupi and Manipal?",
    answer:
      "Yes. We have a studio in Udupi at Silver Bell, Kinnimulki. Our work there includes the Xpheno office in Manipal, Hotel Jewel Park in Hemmady and the Timeless Collections showroom in Udupi.",
  },
];

const turnkeySteps = [
  {
    title: "Brief and site study",
    text: "We start with what the space has to do and the building it sits in: area, structure, light and services.",
  },
  {
    title: "Space planning",
    text: "Layouts built around real movement, light and structure, before a single finish is chosen.",
  },
  {
    title: "Design and material selection",
    text: "Finishes, fittings and furniture are decided together, so the estimate matches the drawings.",
  },
  {
    title: "Scope, plan and timeline",
    text: "Once your scope is confirmed, we share a clear project plan and timeline.",
  },
  {
    title: "Execution",
    text: "Civil work, carpentry, electrical, plumbing and décor, managed by one team with a single point of contact.",
  },
  {
    title: "Handover",
    text: "The team that built the space hands it over to you.",
  },
];

const whyYutori = [
  {
    title: "One accountable team",
    text: "Design and execution sit together, so the people who drew the detail are the people who answer for it on site.",
  },
  {
    title: "An architect and a civil engineer lead the studio",
    text: "Design judgment from one, site and construction judgment from the other, with nearly five decades of combined experience.",
  },
  {
    title: "Local roots on this coast",
    text: "A studio in Mangalore, a studio in Udupi, and a portfolio of real clients in both.",
  },
  {
    title: "A record you can check",
    text: "49 projects across Coastal Karnataka, 36 delivered as full turnkey, from concept to handover.",
  },
];

const mangaloreProjects = projects
  .filter((p) => p.location?.toLowerCase().includes("mangalore"))
  .slice(0, 6);

const linkClass =
  "text-brand-600 underline underline-offset-4 hover:text-brand-500 transition-colors";

// Add the cost table, team section and project timelines here once you have real
// numbers and names (see mangalore-page-content.md). Only publish figures that are true.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior design and turnkey project execution",
    provider: { "@type": "LocalBusiness", name: "Yutori Designs" },
    areaServed: { "@type": "City", name: "Mangalore" },
  },
];

export default function InteriorDesignersMangalorePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          src="/images/brand/Mangalore.jpg"
          alt="Interior design projects in Mangalore by Yutori Designs"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
        <div className="absolute bottom-8 left-6 lg:left-10">
          <span className="inline-flex items-center gap-1.5 text-brand-300 text-xs uppercase tracking-wider mb-2">
            <MapPin size={13} /> Serving Mangalore
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
          Interior designers in Mangalore, with execution under one roof
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Yutori Designs is an interior design and{" "}
          <Link href="/service/turnkey-project-execution" className={linkClass}>
            turnkey execution
          </Link>{" "}
          studio in Mangalore, led by a registered architect and a civil engineer with nearly
          five decades of combined experience. One team handles design, civil work, carpentry,
          electrical, plumbing and décor through to handover. We&apos;ve completed 49 projects
          across Coastal Karnataka, 36 of them as full turnkey.
        </p>
        <p className="mt-5 text-ink-700 text-[17px] leading-relaxed text-justify">
          Mangalore doesn&apos;t suit a copied catalogue. Layouts are tight in the city,
          humidity sits on everything for months, and a house in Kadri has little in common with
          an office floor in Falnir. We design for the building and the weather first, then
          choose finishes. That means{" "}
          <Link href="/service/interior-design" className={linkClass}>
            interior design
          </Link>{" "}
          shaped by the site, with{" "}
          <Link href="/service/space-planning" className={linkClass}>
            space planning
          </Link>{" "}
          done before any finish is picked.
        </p>
      </section>

      <section className="pb-16 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-ink-900 text-balance">
          What we design in Mangalore
        </h2>

        <h3 className="font-display text-2xl text-ink-900">Offices and workspaces</h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          Workspaces are a regular part of our Mangalore portfolio. We&apos;ve designed offices
          for IT companies in Falnir and fitted out workplaces for Niveus Solutions and the
          Novigo IT Development Center. A good office plan starts with headcount and how the
          team actually works: desk density, meeting rooms that don&apos;t leak sound into the
          open floor, and the daily footfall the space has to take. See our{" "}
          <Link href="/service/commercial" className={linkClass}>
            commercial interiors
          </Link>{" "}
          work.
        </p>

        <h3 className="font-display text-2xl text-ink-900 mt-8">Homes and residences</h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          For homes we begin with how the family lives: where storage has to go, how the
          kitchen works, where the light falls through the day. We plan around natural light,
          ventilation and Vastu where it matters to the client. Recent residence work includes
          Kadri Enclave.
        </p>

        <h3 className="font-display text-2xl text-ink-900 mt-8">
          Institutional, retail and hospitality spaces
        </h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          Our Mangalore portfolio also includes a college building in Jeppu, where finishes
          have to survive heavy daily footfall. Retail and hospitality interiors are part of our
          commercial work too, and our hotel and showroom projects so far are in Udupi district.
        </p>
      </section>

      <section className="pb-16 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink-900 text-balance">
          How Mangalore&apos;s climate shapes the design
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Picture a wardrobe installed in May. By August, after two months of monsoon, the doors
          are bowing and the hinges have a green crust. Nobody designed that. Somebody just
          specified for a dry city.
        </p>
        <p className="mt-5 text-ink-700 text-[17px] leading-relaxed text-justify">
          Moisture is the first thing we plan for. Kitchens, bathrooms and wardrobes need
          moisture-resistant boards and corrosion-resistant hardware, and matte, wipe-clean
          finishes hide dust better than high gloss. Layout matters most. Leaving air behind tall
          units and keeping storage off damp external walls costs nothing and prevents most of
          the damage. It&apos;s the same reason our commercial spaces are built for daily foot
          traffic and monsoon humidity alike.
        </p>
      </section>

      <section className="pb-16 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-ink-900 text-balance">
          How a turnkey interior project runs
        </h2>
        <ol className="space-y-5">
          {turnkeySteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="font-display text-2xl text-brand-600 w-8 shrink-0">{i + 1}</span>
              <p className="text-ink-700 text-[17px] leading-relaxed">
                <strong className="text-ink-900">{step.title}.</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-ink-700 text-[17px] leading-relaxed">
          Timelines depend on scope and scale. A single room may take a few weeks, while a full
          turnkey office or home can take several months.
        </p>
      </section>

      <ProjectGallerySection projects={mangaloreProjects} cityLabel="Mangalore" />

      <section className="pt-16 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink-900 text-balance">
          Where we work in Mangalore
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Our Mangalore studio is at Vruddhi Enclave, Konchady, Derebail. We&apos;ve delivered
          projects in Falnir, Kadri and Jeppu, and we serve Mangalore city (also written
          Mangaluru on maps) and the surrounding areas. A second studio at Silver Bell,
          Kinnimulki, Udupi covers Udupi, Manipal and the rest of Coastal Karnataka. Browse all
          our{" "}
          <Link href="/our-projects" className={linkClass}>
            projects
          </Link>{" "}
          or read what{" "}
          <Link href="/testimonial" className={linkClass}>
            clients say
          </Link>
          .
        </p>
      </section>

      <section className="pt-8 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-ink-900 text-balance">
          Why clients choose Yutori Designs
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {whyYutori.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
              <p className="mt-2 text-ink-700 text-[16px] leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-16 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
          Questions
        </span>
        <h2 className="font-display text-3xl text-ink-900">
          Frequently asked questions about interior design in Mangalore
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
        <address className="mt-8 not-italic text-ink-700 text-[16px] leading-relaxed">
          Yutori Designs, Vruddhi Enclave, Konchady, Derebail, Mangalore – 575008
          <br />
          <a href="tel:+916360732460" className={linkClass}>
            +91 6360732460
          </a>
          {" · "}
          <a href="mailto:info@yutoridesigns.in" className={linkClass}>
            info@yutoridesigns.in
          </a>
        </address>
      </section>
    </main>
  );
}