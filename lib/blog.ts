import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTimeMin: number;
  draft?: boolean;
}

/**
 * Read all .mdx files in /content/blog and return their frontmatter +
 * computed reading time. Files starting with '_' are ignored, and posts
 * with frontmatter `draft: true` are filtered out in production.
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);

    // Reading time — ~200 words/min, rounded up
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTimeMin = Math.max(1, Math.round(wordCount / 200));

    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      readingTimeMin,
      draft: Boolean(data.draft ?? false),
    } satisfies BlogPost;
  });

  return posts
    .filter((p) => process.env.NODE_ENV === "development" || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Just the slugs — used by the sitemap. */
export function allBlogSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
