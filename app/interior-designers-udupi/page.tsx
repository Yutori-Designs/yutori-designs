import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

// CONFIRM this matches the route folder name of this page.
const PAGE_URL = "https://www.yutoridesigns.in/interior-designers-udupi";
const OG_IMAGE = "https://www.yutoridesigns.in/images/brand/og-image.png";

// The root layout appends " | Yutori Designs" to page titles, so the brand is NOT repeated here.
const SEO_TITLE = "Interior Designers in Udupi – Turnkey";
const SEO_TITLE_FULL = `${SEO_TITLE} | Yutori Designs`;
const SEO_DESCRIPTION =
  "Udupi studio for interior design & turnkey execution: offices, homes, hotels, showrooms. 49 projects, 36 turnkey. Request a quote.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "interior designers Udupi",
    "best interior designers Udupi",
    "interior design company Udupi",
    "home interior designers Udupi",
    "commercial interior design Udupi",
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
        alt: "Yutori Designs: interior designers in Udupi and Mangalore",
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

const udupiFaqs = [
  {
    question: "What does an interior designer in Udupi do?",
    answer:
      "An interior designer plans and executes the layout, materials, and finishes of a space, from a single room to a full home or office, so it works well and reflects how the people using it actually live or work.",
  },
  {
    question: "Does Yutori Designs provide turnkey execution in Udupi?",
    answer:
      "Yes. Our Udupi studio manages complete turnkey projects, covering design, material sourcing, civil work, carpentry, electrical and plumbing, under one accountable team based in Kinnimulki.",
  },
  {
    question: "Do you design apartments and villas in Udupi?",
    answer:
      "Yes, we design both, from compact apartment interiors to larger independent homes and villas across Udupi.",
  },
  {
    question: "Do you provide commercial interior design in Udupi?",
    answer:
      "Yes. We design and execute commercial interiors in Udupi, including offices and retail spaces, alongside our residential work. Recent examples include the Timeless Collections showroom in Udupi, the Xpheno office in Manipal and project execution for Hotel Jewel Park in Hemmady.",
  },
  {
    question: "Which areas around Udupi do you serve?",
    answer:
      "We work across Udupi and nearby areas including Manipal and Hemmady, and across Coastal Karnataka. Our studio is at Silver Bell, Kinnimulki. Reach out to confirm coverage for your specific location.",
  },
  {
    question: "How long does an interior project take in Udupi?",
    answer:
      "Timelines depend on scope and scale. A single room may take a few weeks, while a full turnkey office or home can take several months. We share a clear project plan and timeline once your scope is confirmed.",
  },
  {
    question: "How much does interior design cost in Udupi?",
    answer:
      "It depends mainly on how much civil and electrical work the space needs, the finishes you choose, and how much of the furniture is built in. The same floor area can cost very different amounts depending on its starting condition, which is why we quote once your scope is confirmed.",
  },
  {
    question: "Do you also work in Mangalore?",
    answer:
      "Yes. We have a second studio at Vruddhi Enclave, Konchady, Derebail, Mangalore, and our work there includes offices for Niveus Solutions and the Novigo IT Development Center.",
  },
  {
    question: "How can I start a project with Yutori Designs?",
    answer:
      "Reach out through our contact form or visit our studio in Kinnimulki, Udupi. We start with a consultation to understand your space and budget before proposing a concept.",
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
    title: "A studio in Udupi",
    text: "Our team is based in Kinnimulki, so site visits and material sourcing don't depend on a team travelling in from another city.",
  },
  {
    title: "One accountable team",
    text: "Design and execution sit together, so the people who drew the detail are the people who answer for it on site.",
  },
  {
    title: "An architect and a civil engineer lead the studio",
    text: "Design judgment from one, site and construction judgment from the other, with nearly five decades of combined experience.",
  },
  {
    title: "A record you can check",
    text: "49 projects across Coastal Karnataka, 36 delivered as full turnkey, from concept to handover.",
  },
];

const udupiProjects = projects
  .filter((p) => p.location?.toLowerCase().includes("udupi"))
  .slice(0, 6);

const linkClass =
  "text-brand-600 underline underline-offset-4 hover:text-brand-500 transition-colors";

// Add a cost table, named team section and a residential project once you have real
// details. Only publish figures that are true.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yutori Designs",
    url: "https://www.yutoridesigns.in/",
    telephone: "+91 6360732460",
    email: "info@yutoridesigns.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Silver Bell, Kinnimulki",
      addressLocality: "Udupi",
      addressRegion: "Karnataka",
      postalCode: "576101",
      addressCountry: "IN",
    },
    areaServed: ["Udupi", "Manipal", "Hemmady", "Mangalore"],
    sameAs: [
      "https://www.instagram.com/yutoridesignsin",
      "https://www.facebook.com/people/Yutori-Designs/61579105091629/",
      "https://www.youtube.com/@yutoridesigns",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior design and turnkey project execution",
    provider: { "@type": "LocalBusiness", name: "Yutori Designs" },
    areaServed: { "@type": "City", name: "Udupi" },
  },
];

export default function InteriorDesignersUdupiPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          Interior designers in Udupi, with execution under one roof
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Yutori Designs is an interior design and{" "}
          <Link href="/service/turn-key-project-execution" className={linkClass}>
            turnkey execution
          </Link>{" "}
          studio at Silver Bell, Kinnimulki, Udupi. A registered architect and a civil engineer
          with nearly five decades of combined experience lead the team. One team handles design,
          material sourcing, civil work, carpentry, electrical and plumbing through to handover.
          We&apos;ve completed 49 projects across Coastal Karnataka, 36 of them as full turnkey.
        </p>
        <p className="mt-5 text-ink-700 text-[17px] leading-relaxed text-justify">
          Working from Udupi means we&apos;re close to the site. Visits are quicker, and
          material sourcing doesn&apos;t depend on a team travelling in from elsewhere. It also
          means we know the mix of traditional coastal homes and newer apartment developments
          that Udupi projects start from. We design around how the space will actually be used,
          starting with{" "}
          <Link href="/service/space-planning" className={linkClass}>
            space planning
          </Link>{" "}
          and{" "}
          <Link href="/service/interior-design" className={linkClass}>
            interior design
          </Link>{" "}
          rather than a template.
        </p>
      </section>

      <section className="pb-16 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-ink-900 text-balance">
          What we design in Udupi
        </h2>

        <h3 className="font-display text-2xl text-ink-900">Offices and workspaces</h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          We&apos;ve designed offices in Udupi and Manipal, including the Xpheno office in
          Manipal, and the offices of Vruddhi Properties and our own studio in Udupi. A good
          office plan starts with headcount and how the team actually works, then moves to
          meeting rooms, storage and circulation. See our{" "}
          <Link href="/service/commercial" className={linkClass}>
            commercial interiors
          </Link>{" "}
          work.
        </p>

        <h3 className="font-display text-2xl text-ink-900 mt-8">
          Retail, showrooms and hospitality
        </h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          Commercial spaces have to bring in customers and survive daily use. Our Udupi work
          includes the Timeless Collections showroom and project execution for Hotel Jewel Park
          in Hemmady, where we managed the build on site.
        </p>

        <h3 className="font-display text-2xl text-ink-900 mt-8">Homes and apartments</h3>
        <p className="mt-3 text-ink-700 text-[17px] leading-relaxed text-justify">
          For homes, we begin with how the family lives: where storage has to go, how the
          kitchen works, where the light falls through the day. We design both compact apartment
          interiors and larger independent homes and villas, planning around natural light,
          ventilation and Vastu where it matters to the client.
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

      <ProjectGallerySection projects={udupiProjects} cityLabel="Udupi" />

      <section className="pt-16 pb-8 max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink-900 text-balance">
          Where we work around Udupi
        </h2>
        <p className="text-ink-700 text-[17px] leading-relaxed text-justify">
          Our Udupi studio is at 1st Floor, Silver Bell, Kinnimulki, Udupi 576101. We work across
          Udupi and nearby areas including Manipal and Hemmady, and take projects across Coastal
          Karnataka. A second studio in Konchady, Derebail serves Mangalore. See our{" "}
          <Link href="/interior-designers-mangalore" className={linkClass}>
            interior designers in Mangalore
          </Link>{" "}
          page, browse all our{" "}
          <Link href="/our-projects" className={linkClass}>
            projects
          </Link>
          , or read what{" "}
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
          Frequently asked questions about interior design in Udupi
        </h2>
        <FAQSection faqs={udupiFaqs} />
      </section>

      <section className="pt-8 pb-20 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink-900">
          Start your Udupi interior project
        </h2>
        <p className="mt-4 text-ink-700">
          Visit our studio in Kinnimulki or reach out online. We&apos;ll get back to you within 2
          business days.
        </p>
        <Link
          href="/contact-us"
          className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors group"
        >
          Get in touch
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <address className="mt-8 not-italic text-ink-700 text-[16px] leading-relaxed">
          Yutori Designs, 1st Floor, Silver Bell, Kinnimulki, Udupi, Karnataka – 576101
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