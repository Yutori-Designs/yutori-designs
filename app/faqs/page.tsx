import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Interior Design FAQs: Mangalore & Udupi",
  description:
    "Answers to common questions about interior design, turnkey execution, cost, timelines and process from Yutori Designs, an interior design studio in Mangalore and Udupi.",
  alternates: {
    canonical: "https://yutoridesigns.in/faqs",
  },
};


type FAQGroup = {
  heading: string;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    heading: "About Yutori Designs",
    items: [
      {
        question: "What does Yutori Designs do?",
        answer:
          "Yutori Designs is an interior design and turnkey execution studio in Mangalore and Udupi. We design and build homes, offices, retail spaces, hotels and institutions across coastal Karnataka. A registered architect and a civil engineer lead the team.",
      },
      {
        question: "Do you design offices, homes and commercial spaces?",
        answer:
          "Yes, all three. Our work includes offices for IT companies, a hotel project in Hemmady, a showroom in Udupi, and residential interiors in Mangalore and Udupi. A single room or a full building is both fine.",
        links: [
          { text: "Residential interiors", href: "/service/residential" },
          { text: "Commercial interiors", href: "/service/commercial" },
          { text: "Office space design", href: "/service/office-space" },
        ],
      },
      {
        question: "What's the difference between an interior designer and an interior contractor?",
        answer:
          "A designer plans the layout, materials and finishes. A contractor builds it. If they're separate firms, you coordinate between them. We do both under one team, with one point of contact.",
      },
      {
        question: 'What does "turnkey" mean?',
        answer:
          "Turnkey means we handle everything from concept to handover: design, civil work, carpentry, electrical, plumbing and décor. You don't manage separate contractors, and one team answers for the result.",
        links: [
          { text: "Turnkey project execution", href: "/service/turnkey-project-execution" },
        ],
      },
    ],
  },
  {
    heading: "Locations",
    items: [
      {
        question: "Which areas do you serve?",
        answer:
          "We serve Mangalore, Udupi, Manipal and the rest of coastal Karnataka. We've delivered projects in Falnir, Kadri, Jeppu, Hemmady, Kundapura  and Udupi, and we also take projects beyond the coast.",
        links: [
          { text: "Interior designers in Mangalore", href: "/interior-designers-mangalore" },
          { text: "Interior designers in Udupi", href: "/interior-designers-udupi" },
        ],
      },
      {
        question: "Where are your studios?",
        answer:
          "Our Mangalore studio is at Vruddhi Enclave, Konchady, Derebail, Mangalore 575008. Our Udupi studio is on the 1st Floor, Silver Bell, Kinnimulki, Udupi 576101.",
        links: [
          { text: "Mangalore page", href: "/interior-designers-mangalore" },
          { text: "Udupi page", href: "/interior-designers-udupi" },
        ],
      },
    ],
  },
  {
    heading: "Process and timeline",
    items: [
      {
        question: "How does your design process work?",
        answer:
          "We start with a consultation on your needs, preferences and budget. Next we develop a concept, which you approve, and our engineers estimate the cost against it. Then we run execution while detailed design continues. Finally we review the finished work against your brief, and you do the final walkthrough.",
        links: [{ text: "Our operating model", href: "/our-operating-model" }],
      },
      {
        question: "How long does an interior project take?",
        answer:
          "A single room takes a few weeks. A full turnkey office or home takes several months, depending on size and scope. Approving the concept early is the best way to keep a project on schedule.",
      },
      {
        question: "Will I get regular updates during the project?",
        answer:
          "Yes. We prepare a clear project plan and timeline once the scope is confirmed, and we send regular progress updates through execution.",
      },
    ],
  },
  {
    heading: "Cost",
    items: [
      {
        question: "How much does interior design cost in Mangalore and Udupi?",
        answer:
          "Cost depends on the size of the space, the scope of work, the finish level and how much civil work is needed. For a scoped estimate, share your space details and we'll prepare one.",
        links: [{ text: "Share your space details", href: "/contact-us" }],
      },
      {
        question: "What affects the cost of an interior project?",
        answer:
          "Four things matter most: the area, the scope (civil work, electrical, plumbing, air conditioning), the quality of boards, hardware and finishes, and how many changes happen after approval.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Tell us the size of the space, what you want done and your move-in date. Contact us or call +91 6360732460. We'll reply within 2 business days.",
        links: [{ text: "Contact us", href: "/contact-us" }],
      },
    ],
  },
  {
    heading: "Design questions",
    items: [
      {
        question: "Do you design for Mangalore's humid, coastal climate?",
        answer:
          "Yes. We specify moisture-resistant boards and corrosion-resistant hardware for kitchens, bathrooms and wardrobes. We also leave air behind tall storage units and keep storage away from damp external walls.",
      },
      {
        question: "Do you follow Vastu?",
        answer:
          "We plan around natural light, ventilation and Vastu where it matters to the client.",
      },
      
    ],
  },
];

// Flat list for the FAQPage structured data
const allFaqs = faqGroups.flatMap((group) =>
  group.items.map(({ question, answer }) => ({ question, answer }))
);

export default function FAQsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 flex flex-col gap-14">
        {faqGroups.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-2xl sm:text-3xl text-ink-900 mb-6">
              {group.heading}
            </h2>
            <FAQAccordion items={group.items} />
          </section>
        ))}
      </div>

      <section className="pb-24 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink-900">
          Still have a question?
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