import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Yutori Designs",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms &amp; Conditions"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="py-20 max-w-3xl mx-auto px-6 lg:px-10 text-ink-700 leading-relaxed">


        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">1. Website Usage</h2>
        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            This website is for general information and marketing purposes about Yutori Designs’ services.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            You agree not to misuse, hack, or damage the site or attempt to disrupt its functionality.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Unauthorized use of the website may lead to legal action.
          </li>
        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">2. Intellectual Property</h2>
        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            All content (text, images, graphics, layouts, and logos) is owned by Yutori Designs and protected by copyright laws.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            You may not copy, reuse, or distribute any website content without written permission.
          </li>

        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">3. Accuracy of Information</h2>
        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            We strive to keep content accurate and updated, but we do not guarantee completeness, reliability, or error-free information.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            We may modify content or remove it at any time without notice.
          </li>

        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">4. External Links</h2>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Our website may link to third-party sites for your convenience.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            We are not responsible for their content, availability, or privacy practices.
          </li>

        </ul>


        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">5. Limitation of Liability</h2>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Yutori Designs is not liable for any damages resulting from your use of or inability to use the website.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            We do not guarantee that the site will always be available or free from errors or viruses.
          </li>

        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">6. Privacy</h2>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Any data you submit through our forms is handled as per our [Privacy Policy].
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            We will not sell or share your information without your consent.
          </li>

        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">7. Changes to Terms</h2>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            These terms may be updated at any time. Continued use of the site implies acceptance of the updated terms.
          </li>

        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">8. Governing Law</h2>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            These terms are governed by the laws of India. Disputes will be resolved under the jurisdiction of Mangalore, Karnataka.
          </li>

        </ul>
        <p>
          {" "}
          <a
            href="mailto:info@yutoridesigns.in"
            className="inline-flex items-center gap-1.5 text-brand-600 hover:underline"
          >
            <Mail size={15} />
            info@yutoridesigns.in
          </a>
        </p>


        <p className="inline-flex items-center gap-1.5">
          <MapPin size={15} className="text-brand-600 shrink-0" />
          1st Floor, Silver Bell, Kinnimulki, Udupi, Karnataka - 576101
        </p>
      </section>
    </main>
  );
}
