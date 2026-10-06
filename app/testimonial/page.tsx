import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Client Testimonials – Mangalore & Udupi",
  description:
    "What clients say about working with Yutori Designs across Mangalore and Udupi.",
};

export default function TestimonialPage() {
  return (
    <main>
      
      
      <Testimonials />
    </main>
  );
}
