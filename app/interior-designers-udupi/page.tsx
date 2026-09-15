import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
export const metadata: Metadata = {
    title: "Interior Designers in Udupi | Yutori Designs",
    description:
        "Yutori Designs is a Udupi-based interior design and turnkey execution studio serving homes, offices, and commercial spaces across the city. Space planning, residential, and commercial interiors under one roof.",
    keywords: [
        "interior designers Udupi",
        "home interior designers Udupi",
        "interior design company Udupi",
        "interior contractors Udupi",
    ],
};
const mangaloreFaqs = [
    {
        question: "Does Yutori Designs provide turnkey interior execution in Mangalore?",
        answer:
            "Yes. Yutori Designs handles complete turnkey project execution in Mangalore — from design and material selection through civil work, carpentry, electrical, plumbing, and décor — managed by a single accountable team from start to finish.",
    },
    {
        question: "Do you design offices and commercial spaces in Mangalore?",
        answer:
            "Yes. We design and execute commercial interiors in Mangalore including offices, retail showrooms, and hospitality spaces, focused on both brand identity and everyday functionality.",
    },
    {
        question: "Which areas in Mangalore do you serve?",
        answer:
            "We serve Mangalore city and the surrounding areas, with our office based in Konchady, Derebail. Reach out to us directly to confirm coverage for your specific location.",
    },
    {
        question: "How long does a typical interior project take?",
        answer:
            "Project timelines depend on scope and scale — a single room may take a few weeks, while a full turnkey office or home can take several months. We share a clear project plan and timeline once your project's scope is confirmed.",
    },
];
export default function InteriorDesignersUdupiPage() {
    return (
        <main>
            <PageHero
                eyebrow="Udupi"
                title="Interior Designers in Udupi"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Interior Designers in Udupi" },
                ]}
            />

            <section className="py-20 max-w-4xl mx-auto px-6 lg:px-10">
                <p className="text-ink-700 text-[17px] leading-relaxed">
                    Yutori Designs is a Udupi-based interior design and turnkey
                    execution studio, delivering residential, commercial, and office
                    interiors across the city.
                </p>
            </section>

            <FAQSection faqs={mangaloreFaqs} />
        </main>
    );
}