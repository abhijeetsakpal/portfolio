import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Writing — Engineering notes",
  description:
    "Engineering notes on LLM integration, .NET modernization, Kubernetes, and lessons from shipping production software.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Writing · ${SITE_NAME}`,
    description:
      "Engineering notes on LLM integration, .NET modernization, Kubernetes, and lessons from shipping production software.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 pb-24">
        <div className="container-x max-w-4xl">
          <div className="section-eyebrow">Writing</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 leading-[1.1]">
            Engineering notes,{" "}
            <span className="gradient-text">
              from production
            </span>
          </h1>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl leading-relaxed">
            Things I&apos;ve learned shipping enterprise software — LLM
            integration, .NET microservices, legacy modernization. No
            hot-takes; only what&apos;s held up under real load.
          </p>

          {posts.length === 0 ? (
            <div className="card p-10 text-center">
              <p className="text-foreground/70 leading-relaxed">
                First post coming very soon. Check back this week.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block card p-7 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-3 tracking-wider">
                    <time dateTime={p.date} className="font-mono">
                      {formatDate(p.date)}
                    </time>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} />
                      {p.readingTimeMin} min read
                    </span>
                    {p.tags.length > 0 && (
                      <>
                        <span aria-hidden>·</span>
                        <span className="inline-flex items-center gap-1.5 flex-wrap">
                          <Tag size={12} />
                          {p.tags.slice(0, 3).join(" · ")}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="card-title group-hover:text-accent transition-colors mb-2">
                    {p.title}
                    {p.draft && (
                      <span className="ml-2 text-xs font-mono uppercase text-accent2">
                        [draft]
                      </span>
                    )}
                  </h2>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read post
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
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
