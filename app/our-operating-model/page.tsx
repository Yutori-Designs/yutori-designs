import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceTimeline from "@/components/ServiceTimeline";

export const metadata: Metadata = {
  title: "Our Operating Model | Yutori Designs",
  description: "How Yutori Designs runs a project from first enquiry to final handover.",
};

const steps = [
  {
    title: "Enquiry & consultation",
    points: [
      "A detailed conversation to understand the brief, the site, and the budget",
      "Preferences captured early — style, materials, colour direction",
    ],
  },
  {
    title: "Design & sign-off",
    points: [
      "A high-level concept is created and shared for approval",
      "Cost estimate prepared once the concept is signed off",
      "Detailed design continues in parallel with execution planning",
    ],
  },
  {
    title: "Execution",
    points: [
      "Vendors finalised, materials ordered, project plan locked",
      "Civil and interior work carried out together — tiling, electrical, plumbing, carpentry, decor",
      "Regular progress updates shared with the client throughout",
    ],
  },
  {
    title: "Handover",
    points: [
      "Internal quality review against the original design brief",
      "Final walkthrough and handover once sign-off is complete",
    ],
  },
];

export default function OperatingModelPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="How we run a project, start to finish"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Operating Model" }]}
      />
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-10">
        <p className="max-w-2xl text-ink-700 text-[17px] leading-relaxed mb-4">
          The same four-stage process runs across every project — commercial,
          industrial, or residential — so clients always know what comes next.
        </p>
        <ServiceTimeline steps={steps} />
      </section>
    </main>
  );
}
