import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { team } from "@/lib/team";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name}, ${member.role} | Yutori Designs`,
    description: member.bio.split(/\n\s*\n/)[0].slice(0, 155),
    alternates: {
      canonical: `https://yutoridesigns.in/our-team/${member.slug}`,
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Yutori Designs",
      url: "https://yutoridesigns.in",
    },
    url: `https://yutoridesigns.in/our-team/${member.slug}`,
    ...(member.image && { image: `https://yutoridesigns.in${member.image}` }),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Our team"
        title={member.role}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/our-team" },
          { label: member.name },
        ]}
      />

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {member.image && (
            <div className="relative shrink-0 w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden bg-ink-800">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role} at Yutori Designs`}
                fill
                sizes="192px"
                className="object-cover object-top"
                priority
              />
            </div>
          )}
          <div className="sm:pt-4">
            <h2 className="font-display text-3xl text-ink-900">{member.name}</h2>
            <p className="text-brand-600 mt-1">{member.role}</p>
          </div>
        </div>








        <div className="mt-10 pt-8 border-t border-ink-900/10 flex flex-col gap-5">
          {member.bio.split(/\n\s*\n/).map((para, i) => (
            <p key={i} className="text-ink-700 text-[17px] leading-[1.8] text-justify">
              {para}
            </p>
          ))}
        </div>

        <Link
          href="/our-team"
          className="mt-12 inline-flex items-center gap-2 text-ink-800 font-medium hover:text-brand-600 transition-colors"
        >
          <ArrowLeft size={16} /> All team members
        </Link>
      </section>
    </main>
  );
}