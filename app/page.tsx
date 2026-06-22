import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <AboutSection />
      <Services />
      <FeaturedProjects />
      <WhyUs />
      <Testimonials />
      <CtaStrip />
    </main>
  );
}
