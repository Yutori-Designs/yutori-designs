import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

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




        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-6">
          We may collect the following types of information when you visit our website or contact us:
        </p>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Personal Information: Name, email address, phone number, and other details you provide via contact forms or inquiries.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Browser type, IP address, device information, and website usage data (collected through cookies or analytics tools).
          </li>
        </ul>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-6">
          The information we collect is used to:
        </p>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Respond to your inquiries or project requests.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Improve our website and service offerings.
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Send occasional updates or newsletters (only if you opt-in).
          </li>

          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Ensure website functionality, performance, and security.
          </li>
        </ul>

        <p className="mb-6">
          We do not sell, rent, or trade your personal information to third parties.
        </p>


        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          3. Cookies & Tracking Technologies
        </h2>
        <p className="mb-6">
          Our website may use cookies and similar tracking tools to:
        </p>

        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Enhance user experience
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Analyze website traffic and visitor behavior
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Improve content and navigation
          </li>
        </ul>
        <p className="mb-6">
          You can disable cookies in your browser settings if you prefer not to be tracked.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          4. Data Security
        </h2>

        <p className="mb-6">
          We implement standard security measures to protect your personal data from unauthorized access, misuse, or disclosure. However, please note that no method of data transmission over the internet is 100% secure.
        </p>

        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          5. Third-Party Links
        </h2>

        <p className="mb-6">
          Our website may contain links to external sites. We are not responsible for the content or privacy practices of those sites. We recommend reviewing their privacy policies separately.
        </p>
        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          6. Your Rights
        </h2>

        <p className="mb-6">
          You have the right to:
        </p>
        <ul className="mb-6 flex flex-col gap-2 pl-2">
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Request access to the personal data we hold about you
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Ask us to update, correct, or delete your information
          </li>
          <li className="flex gap-2.5 text-ink-700">
            <span className="text-brand-600 mt-1.5 shrink-0">•</span>
            Opt out of receiving promotional emails at any time.
          </li>
        </ul>
        <p className="mb-6">
          To exercise these rights, contact us at [Insert Email Address].
        </p>
        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          7. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy periodically. The updated version will be posted on this page with a revised effective date.
        </p>
        <h2 className="font-display text-2xl text-ink-900 mt-8 mb-3">
          8. Contact Us
        </h2>
        <p className="mb-6">
          If you have questions or concerns about this Privacy Policy or how your data is handled, you can contact us at:
        </p>
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
    </main >
  );
}
