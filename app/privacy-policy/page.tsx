import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Yutori Designs",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-20 max-w-3xl mx-auto px-6 lg:px-10 text-ink-700 leading-relaxed">
        <div className="bg-brand-50 border border-brand-300 rounded-xl p-5 mb-10 text-sm text-brand-700">
          Placeholder content — replace with the original Privacy Policy copy
          from the existing site, or have these reviewed by a lawyer before
          launch. This page is not legal advice.
        </div>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          1. Information we collect
        </h2>
        <p className="mb-6">
          When you submit the contact form on this site, we collect your name,
          email address, phone number, and message — only to respond to your
          enquiry.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          2. How we use it
        </h2>
        <p className="mb-6">
          Your details are used solely to get in touch about your project. We
          do not sell or share your information with third parties for
          marketing purposes.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          3. Cookies
        </h2>
        <p className="mb-6">
          This site may use basic analytics cookies to understand how visitors
          use it. No personal data is sold to advertisers.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          4. Contact
        </h2>
        <p>
          For questions about how your data is handled, write to{" "}
          <a href="mailto:info@yutoridesigns.in" className="text-brand-600 hover:underline">
            info@yutoridesigns.in
          </a>
          .
        </p>
      </section>
    </main>
  );
}
