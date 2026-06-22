import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | Yutori Designs",
  description:
    "Notes on space planning, materials, and project execution from the Yutori Designs studio.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-ink-900/8 hover:border-brand-400 transition-colors"
            >
              <div className="relative h-52 overflow-hidden bg-ink-800">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 text-xs font-medium text-paper bg-ink-900/70 backdrop-blur px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center gap-4 text-stone-600 text-xs mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink-900 leading-snug mb-2.5">
                  {post.title}
                </h3>
                <p className="text-ink-700 text-[14px] leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-medium text-sm group-hover:gap-2.5 transition-[gap]">
                  Read more
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
