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

  const sourceText = post.sourceLabel ? post.sourceLabel : post.source;

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

        <div className="flex flex-col gap-5">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="font-display text-2xl text-ink-900 mt-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "bullets") {
              return (
                <ul key={i} className="flex flex-col gap-2 pl-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-ink-700 text-[16px] leading-relaxed">
                      <span className="text-brand-600 mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "detailbullets") {
              return (
                <ul key={i} className="flex flex-col gap-5 pl-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="text-brand-600 mt-1.5 shrink-0">•</span>
                      <div>
                        <span className="font-semibold text-ink-900 text-[16px]">
                          {item.label}:{" "}
                        </span>
                        <span className="text-ink-700 text-[16px] leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "image") {
              return (
                <div key={i} className="relative w-full rounded-2xl overflow-hidden my-4">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={768}
                    height={500}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              );
            }
            return (
              <p key={i} className="text-ink-700 text-[17px] leading-[1.8] text-justify">
                {block.text}
              </p>
            );
          })}
        </div>

        {post.source && (
          <div className="mt-10 pt-6 border-t border-ink-900/10">
            <p className="text-stone-400 text-xs">
              Source:{" "}

              <a href={post.source} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline break-all">{sourceText}</a>
            </p>
          </div>
        )}

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