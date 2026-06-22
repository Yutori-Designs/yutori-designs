import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import PageHero from "@/components/PageHero";
import ServiceTimeline from "@/components/ServiceTimeline";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return { title: service.metaTitle, description: service.intro };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const related = projects
    .filter((p) => p.category === service.relatedCategory)
    .slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={service.name}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: service.name },
        ]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink-900 mb-4">What we do</h2>
            <p className="text-ink-700 text-[17px] leading-relaxed">{service.intro}</p>
            <h2 className="font-display text-3xl text-ink-900 mt-10 mb-4">
              Why choose Yutori
            </h2>
            <p className="text-ink-700 text-[17px] leading-relaxed">{service.whyUs}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-dim">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <span className="text-brand-600 text-sm tracking-[0.18em] uppercase">
            Our process
          </span>
          <h2 className="font-display text-4xl mt-3 text-ink-900 text-balance">
            Yutori&apos;s approach to {service.name.toLowerCase()}
          </h2>
          <ServiceTimeline steps={service.steps} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl text-ink-900 mb-8">Related projects</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((project) => (
              <Link
                key={project.id}
                href="/our-projects"
                className="group relative rounded-xl overflow-hidden h-64 bg-ink-800"
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-paper text-sm font-medium line-clamp-2">
                    {project.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-20 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink-900">
          Start your {service.name.toLowerCase()} project
        </h2>
        <Link
          href="/contact-us"
          className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors group"
        >
          Start your project
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}
