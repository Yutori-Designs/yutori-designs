import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <div className="bg-ink-900 pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-1.5 text-stone-300 text-sm mb-5">
          {breadcrumb.map((b, i) => (
            <span key={b.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={13} />}
              {b.href ? (
                <Link href={b.href} className="hover:text-brand-300 transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-brand-300">{b.label}</span>
              )}
            </span>
          ))}
        </div>
        <span className="text-brand-300 text-sm tracking-[0.18em] uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-paper text-balance max-w-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
