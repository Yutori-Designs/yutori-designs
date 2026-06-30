import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceTimeline from "@/components/ServiceTimeline";

export const metadata: Metadata = {
  title: "Our Operating Model | Yutori Designs",
  description: "How Yutori Designs runs a project from first enquiry to final handover.",
};

const steps = [
  {
    title: "Initial Consultation: Understand client needs and vision",
    points: [
      "Architect to have a detailed discussion with the customer and understand the expectations",
      "Understand the customer preferences - e.g. type of designs, material, colors etc.",
      "Get initial details from the customer - e.g. site location, type, area, scope, budget etc.",
    ],
  },
  {
    title: "Design Development: Create design concepts and plans",
    points: [
      "Get the customer sign off on the high level design",
      "First create a high level design",
      "Engineering team to estimate the project cost based on the design",
      "Sales team to communicate the project cost to the customer based on the pricing model and project cost",
      "Once the customer signs off on the estimate, team to start with the execution",
      "Parallely, the architects to continue working with the customer on the detailed design",
    ],
  },
  {
    title: "Implementation: Manage the project and bring the design to life",
    points: [
      "Prepare the project plan based on the design and estimates",
      "Prepare the site for start of work",
      "Finalize the vendors needed for the work",
      "Finalize the material required and place orders",
      "Begin the execution as per the project plan",
      "Implementation could include both Civil and Interiors work",
      "Implementation to include various aspects like tiling, painting, electrical & plumbing work, air conditioning, carpentry & furniture, decor items etc.",
      "Project management of the entire project also to be part of Implementation",
      "Provide regular updates to the customer on the progress of the project",
    ],
  },
  {
    title: "Final Review: Ensure client satisfaction with the completed project",
    points: [
      "Once the implementation is completed, the design team to review the work in detail and provide feedback",
      "Once the design team signs off on the work quality, the customer to be informed to review the work",
      "Once customer is satisfied with the work completion, the project to be considered as completed",
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
        <p className="max-w-2xl text-ink-700 font-bold text-ink-700 md:text-4xl   text-4xl text-[17px] leading-relaxed mb-4">
          How Yutori Designs Operates
        </p>
        <ServiceTimeline steps={steps} />
      </section>
    </main>
  );
}
