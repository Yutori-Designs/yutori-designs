import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | Yutori Designs",
  description: "The architects, designers, and project managers behind Yutori Designs.",
};

export const team = [
  {
    name: "Design Lead",
    role: "Principal Architect",
    bio: "Leads concept development and design sign-off across all commercial and residential projects.",
  },
  {
    name: "Project Manager",
    role: "Turnkey Execution",
    bio: "Owns site execution end-to-end — vendor coordination, scheduling, and on-site quality checks.",
  },
  {
    name: "Design Associate",
    role: "3D Visualisation",
    bio: "Translates concepts into detailed 3D renders so clients can sign off with confidence before work begins.",
  },
];

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="The people behind the work"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
      />
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <p className="max-w-2xl text-ink-700 text-[17px] leading-relaxed mb-14">
          A small, hands-on team that stays involved from the first sketch to
          final handover — so nothing gets lost between design and delivery.
        </p>
        <TeamGrid team={team} />
      </section>
    </main>
  );
}
