import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Yutori Designs`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const next = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: post.title },
        ]}
      />

      <article className="py-20 max-w-3xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-5 text-stone-600 text-sm mb-10">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-12 bg-ink-800">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-ink-700 text-[17px] leading-[1.8]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-ink-800 font-medium hover:text-brand-600 transition-colors"
          >
            <ArrowLeft size={16} /> All posts
          </Link>
          <Link
            href={`/blogs/${next.slug}`}
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-[gap]"
          >
            Next: {next.title}
            <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </main>
  );
}
