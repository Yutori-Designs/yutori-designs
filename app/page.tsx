import type { Metadata } from "next";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyUs from "@/components/WhyUs";
import Testimonialshome from "@/components/Testimonialshome";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Interior Designers in Mangalore & Udupi | Yutori Designs",

  description:
    "Yutori Designs — leading interior design and turnkey execution studio in Mangalore and Udupi. We design commercial offices, residential homes, hotels, and retail spaces across coastal Karnataka. Call +91 6360732460.",

  keywords: [
    "interior designers Mangalore",
    "interior design company Mangalore",
    "interior contractors Udupi",
    "best interior designers Mangalore",
    "turnkey interior design Mangalore",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Services />
      <FeaturedProjects />
      <WhyUs />
      <Testimonialshome />
      <CtaStrip />
    </main>
  );
}