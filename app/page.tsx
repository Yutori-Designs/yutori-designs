import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Testimonialshome from "@/components/Testimonialshome";

import CtaStrip from "@/components/CtaStrip";

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
