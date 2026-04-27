import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_URL, articleJsonLd } from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Dynamic import of the MDX file at request time
  let MDXContent: React.ComponentType;
  try {
    const mod = await import(`@/content/blog/${params.slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  const jsonLd = articleJsonLd({
    headline: post.title,
    description: post.description,
    slug: `blog/${post.slug}`,
    datePublished: post.date,
    category: post.tags[0],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main" className="pt-28 pb-24">
        <article className="container-x max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to writing
          </Link>

          <div className="section-eyebrow">
            {post.tags[0] ?? "Engineering"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-5 leading-[1.1]">
            {post.title}
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-12 pb-8 border-b border-border tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} />
              <time dateTime={post.date} className="font-mono">
                {formatDate(post.date)}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTimeMin} min read
            </span>
            {post.tags.length > 0 && (
              <span className="inline-flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] font-semibold text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </span>
            )}
          </div>

          <div className="prose-content">
            <MDXContent />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
