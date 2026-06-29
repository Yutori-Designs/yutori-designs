import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | Yutori Designs",
  description: "The architects, designers, and project managers behind Yutori Designs.",
};

export const team = [
  {
    name: "Dakshath M. Kidiyoor",
    role: "Design Head",
    image:"/images/team/dakshath-1.jpg",
    bio: "Dakshath M. Kidiyoor is a registered architect (COA: CA/2008/43179) with nearly two decades of experience spanning architectural practice, built heritage conservation, and academia. A graduate of the School of Architecture at M.S. Ramaiah Institute of Technology, Bangalore (2007), he has cultivated a diverse portfolio that reflects a deep passion for design, cultural heritage, and environmental consciousness.\n\nHe is the founder of G7 Collaborative, an architecture practice based in Bangalore and formerly in Goa, through which he has led projects ranging from contemporary residences and office interiors to context-sensitive holiday homes and resorts across India—including Mangalore, Varanasi, Goa, and Bengaluru. He also served as a partner at ABCD Design Fundamentals, Mangalore.\n\nDakshath has been actively involved in architectural education, having served as a visiting and guest faculty at reputed institutions such as PESSOA (Bengaluru), Manipal University, and the Nitte Institute of Architecture. He brings a unique blend of academic insight and professional expertise into the classroom.\n\nA dedicated conservationist, his work with organizations like UNESCO, Aadhar, and under Dr. Rohit Jigyasu includes significant contributions to heritage risk preparedness, disaster management planning, and architectural documentation at World Heritage Sites like Ellora and Ajantha Caves, as well as historic forts such as Chitradurga and Gobindgarh.\n\nKnown for his analytical thinking, creative acumen, and collaborative leadership, he excels in conceptualizing and developing projects from ideation to execution. His interests in photography, sketching, and travel complement his design sensibility and enrich his architectural narrative.",
  },
  {
    name: "Sundeep Leo Almeida",
    role: "Engineering Head",
    image: "/images/team/Sundeep.jpg",
    bio: "Sundeep Leo Almeida is a seasoned civil engineer and project management consultant with over two decades of experience in the construction and infrastructure sector. He earned his Bachelor's degree in Civil Engineering from M.S. Ramaiah Institute of Technology, Bangalore (2001–2005), followed by a postgraduate specialization from the prestigious NICMAR, Hyderabad.\n\nSundeep began his career with DLF, one of India’s leading real estate developers, where he gained valuable experience over six years managing large-scale urban projects. Driven by a passion for design and rooted community development, he later relocated to Kundapura, Udupi, where he established his independent consulting practice.\n\nOver the past 15 years, Sundeep has made a significant mark in the coastal Karnataka region, successfully executing a wide array of projects including private residences, churches, hotels, and community infrastructure. His work is known for blending functionality with aesthetics, while ensuring efficient project delivery. With a deep understanding of both technical execution and client needs, he continues to contribute meaningfully to the built environment in the region.",
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
        <p className="max-w-2xl mx-auto text-center text-4xl md:text-6xl font-bold text-ink-700 leading-relaxed mb-14">
  Our Team
        </p>
        <TeamGrid team={team} />
      </section>
    </main>
  );
}
