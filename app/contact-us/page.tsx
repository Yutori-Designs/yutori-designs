import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Yutori Designs",
  description: "Get in touch with Yutori Designs for your interior design project in Mangalore or Udupi.",
};

export default function ContactUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Let's talk"
        title="Start your project with us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-10">
        <ContactForm />
      </section>
    </main>
  );
}
