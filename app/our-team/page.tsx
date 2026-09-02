import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | Yutori Designs",
  description:
    "Meet the architects, designers, engineers, and project professionals behind Yutori Designs.",
};

export const team = [
  {
    name: "Dakshath M. Kidiyoor",
    role: "Design Head",
    image: "/images/team/dakshath.jpg",
    bio: `Dakshath M. Kidiyoor is a registered architect (COA: CA/2008/43179) with nearly two decades of experience spanning architectural practice, built heritage conservation, and academia. A graduate of the School of Architecture at M.S. Ramaiah Institute of Technology, Bangalore (2007), he has cultivated a diverse portfolio that reflects a deep passion for design, cultural heritage, and environmental consciousness.

He is the founder of G7 Collaborative, an architecture practice based in Bangalore and formerly in Goa, through which he has led projects ranging from contemporary residences and office interiors to context-sensitive holiday homes and resorts across India—including Mangalore, Varanasi, Goa, and Bengaluru. He also served as a partner at ABCD Design Fundamentals, Mangalore.

Dakshath has been actively involved in architectural education, having served as a visiting and guest faculty at reputed institutions such as PESSOA (Bengaluru), Manipal University, and the Nitte Institute of Architecture. He brings a unique blend of academic insight and professional expertise into the classroom.

A dedicated conservationist, his work with organizations like UNESCO, Aadhar, and under Dr. Rohit Jigyasu includes significant contributions to heritage risk preparedness, disaster management planning, and architectural documentation at World Heritage Sites like Ellora and Ajantha Caves, as well as historic forts such as Chitradurga and Gobindgarh.

Known for his analytical thinking, creative acumen, and collaborative leadership, he excels in conceptualizing and developing projects from ideation to execution. His interests in photography, sketching, and travel complement his design sensibility and enrich his architectural narrative.`,
  },
  {
    name: "Sundeep Leo Almeida",
    role: "Engineering Head",
    image: "/images/team/Sundeep-A.jpg",
    bio: `Sundeep Leo Almeida is a seasoned civil engineer and project management consultant with over two decades of experience in the construction and infrastructure sector. He earned his Bachelor's degree in Civil Engineering from M.S. Ramaiah Institute of Technology, Bangalore (2001–2005), followed by a postgraduate specialization from the prestigious NICMAR, Hyderabad.

Sundeep began his career with DLF, one of India’s leading real estate developers, where he gained valuable experience over six years managing large-scale urban projects. Driven by a passion for design and rooted community development, he later relocated to Kundapura, Udupi, where he established his independent consulting practice.

Over the past 15 years, Sundeep has made a significant mark in the coastal Karnataka region, successfully executing a wide array of projects including private residences, churches, hotels, and community infrastructure. His work is known for blending functionality with aesthetics, while ensuring efficient project delivery. With a deep understanding of both technical execution and client needs, he continues to contribute meaningfully to the built environment in the region.`,
  },
];

const teamStats = [
  {
    number: "04",
    label: "Architects",
  },
  {
    number: "07",
    label: "Engineering & Project Professionals",
  },
  {
    number: "03",
    label: "Creative & Visualization Specialists",
  },

  {
    number: "30",
    label: "Site & Field Professionals",
  }

];

const expertise = [
  {
    number: "01",
    title: "Architects",
    description:
      "Developing thoughtful architectural concepts, spatial planning, contextual responses, and design solutions.",
  },
  {
    number: "02",
    title: "Interior Designers",
    description:
      "Creating refined interiors through spatial planning, material selection, furniture, lighting, and detailing.",
  },
  {
    number: "03",
    title: "Engineers",
    description:
      "Bringing technical expertise, structural understanding, coordination, and practical solutions to every project.",
  },
  {
    number: "04",
    title: "Project Managers",
    description:
      "Coordinating people, timelines, consultants, and site activities to ensure smooth project execution.",
  },
  {
    number: "05",
    title: "3D & Visualization",
    description:
      "Transforming design concepts into compelling visual experiences that help communicate ideas clearly.",
  },
  {
    number: "06",
    title: "Execution Team",
    description:
      "Working closely with site teams and contractors to translate design intent into carefully executed spaces.",
  },
];

const process = [
  {
    number: "01",
    title: "Ideate",
    description: "Understanding the vision, context, and possibilities.",
  },
  {
    number: "02",
    title: "Design",
    description: "Developing concepts into thoughtful spatial solutions.",
  },
  {
    number: "03",
    title: "Engineer",
    description: "Resolving technical requirements and project details.",
  },
  {
    number: "04",
    title: "Coordinate",
    description: "Bringing consultants, teams, and stakeholders together.",
  },
  {
    number: "05",
    title: "Execute",
    description: "Transforming design intent into meaningful built spaces.",
  },
];

export default function OurTeamPage() {
  return (
    <main className="bg-paper">
      {/* HERO */}
      <PageHero
        eyebrow="About us"
        title="The people behind the work"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
      />

      {/* LEADERSHIP */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600 font-medium mb-4">
            Leadership
          </p>

          <h2 className="font-display text-4xl md:text-6xl text-ink-900 leading-tight">
            Our Team
          </h2>

          <p className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed">
            At the core of Yutori Designs is a multidisciplinary team that
            brings together design thinking, technical expertise, and
            experience to create meaningful spaces.
          </p>
        </div>

        <TeamGrid team={team} />
      </section>

      {/* TEAM INTRO */}
      <section className="py-20 md:py-28 bg-ink-900 text-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-brand-400 text-sm uppercase tracking-[0.25em] font-medium mb-5">
                Beyond individuals
              </p>

              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                <span className="md:whitespace-nowrap">
                  A multidisciplinary team built around
                </span>
                <br />
                every detail.
              </h2>
            </div>

            <div>
              {/* <p className="text-paper/70 text-base md:text-lg leading-relaxed">
                Great spaces are rarely created by one person. They emerge
                through collaboration between architects, interior designers,
                engineers, project managers, visualizers, and execution teams.
              </p>

              <p className="mt-5 text-paper/70 text-base md:text-lg leading-relaxed">
                At Yutori Designs, diverse expertise comes together at every
                stage of a project—from the first idea and design development
                to technical coordination and execution.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM STATS */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600 font-medium mb-4">
              Yutori by numbers
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-ink-900">
              Our team at a glance
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border border-ink-900/10 rounded-3xl overflow-hidden bg-white">
            {teamStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-7 md:p-10 text-center ${index !== teamStats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-ink-900/10"
                  : ""
                  } ${index === 0 || index === 2
                    ? "border-r border-ink-900/10"
                    : ""
                  }`}
              >
                <div className="font-display text-4xl md:text-6xl text-brand-600">
                  {stat.number}
                </div>

                <p className="mt-3 text-sm md:text-base text-ink-700 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP PHOTO */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600 font-medium mb-4">
              The people behind every project
            </p>

            <h2 className="font-display text-4xl md:text-6xl text-ink-900">
              One team. Many perspectives.
            </h2>
          </div>

          <div className="relative w-full aspect-[21/9]   w-[300px] rounded-3xl overflow-hidden bg-ink-800 lg:aspect-[8/4]">
            <Image
              src="/images/about/Yutori-team-photo.png"
              alt="Yutori Designs team"
              fill
              priority
              className="object-cover"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 md:p-10">
              <p className="text-white text-lg md:text-2xl font-medium">

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 md:py-28 bg-stone-100 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14 ">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600 font-medium mb-4">
              Our expertise
            </p>

            <h2 className="font-display text-4xl md:text-6xl text-ink-900 leading-tight">
              Different disciplines. One shared vision.
            </h2>

            <p className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed">
              Our multidisciplinary approach allows every project to be
              explored from creative, technical, functional, and execution
              perspectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 rounded-3xl overflow-hidden">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="bg-white p-7 md:p-9 min-h-[250px] group hover:bg-ink-900 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-brand-600 group-hover:text-brand-400">
                    {item.number}
                  </span>

                  <span className="w-8 h-px bg-ink-900/20 group-hover:bg-brand-400 mt-2" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-ink-900 group-hover:text-white mt-10">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-700 group-hover:text-paper/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600 font-medium mb-4">
              Collaboration
            </p>

            <h2 className="font-display text-4xl md:text-6xl text-ink-900">
              One team. From idea to execution.
            </h2>

            <p className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed">
              Every project moves through a collaborative process where
              creative thinking and technical expertise work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {process.map((item, index) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-ink-900/10 bg-white p-6 md:p-7"
              >
                <span className="text-brand-600 text-sm font-medium">
                  {item.number}
                </span>

                <h3 className="font-display text-2xl text-ink-900 mt-8">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-700 leading-relaxed mt-3">
                  {item.description}
                </p>

                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-3 h-3 border-t border-r border-ink-900/30 rotate-45 bg-paper" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-brand-600 px-7 py-14 md:px-14 md:py-20 text-center">
            <p className="text-white/70 text-sm uppercase tracking-[0.25em] font-medium">
              Work with us
            </p>

            <h2 className="font-display text-4xl md:text-6xl text-white mt-4">
              Let&apos;s create something meaningful together.
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-white/80 text-base sm:text-lg md:text-xl mx-auto text-center max-w-[340px] sm:max-w-2xl">
              From the first conversation to the final detail, our team is
              ready to bring your vision to life.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center justify-center mt-8 px-7 py-3.5 rounded-full bg-white text-ink-900 font-medium hover:bg-ink-900 hover:text-white transition-colors duration-300"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}