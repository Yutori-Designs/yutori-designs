import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

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
        <div className="bg-brand-50 border border-brand-300 rounded-xl p-5 mb-10 text-sm text-brand-700">
          Placeholder content — replace with the original Terms &amp; Conditions
          copy from the existing site, or have these reviewed by a lawyer before
          launch. This page is not legal advice.
        </div>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">1. Use of this site</h2>
        <p className="mb-6">
          By accessing this website, you agree to use it only for lawful purposes
          and in a way that does not infringe the rights of others.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">2. Project enquiries</h2>
        <p className="mb-6">
          Submitting an enquiry through this site does not constitute a binding
          agreement. Project scope, pricing, and timelines are confirmed
          separately in writing once a brief is finalised.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">3. Intellectual property</h2>
        <p className="mb-6">
          All content on this site — including project photography, text, and
          design work — is the property of Yutori Designs unless otherwise
          credited, and may not be reproduced without permission.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">4. Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:info@yutoridesigns.in" className="text-brand-600 hover:underline">
            info@yutoridesigns.in
          </a>
          .
        </p>
      </section>
    </main>
  );
}
