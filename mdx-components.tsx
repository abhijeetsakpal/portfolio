import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides.
 * Applies to every .mdx file in the project (blog posts, etc.).
 *
 * Tailwind classes here drive the prose styling for blog content.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mt-12 mb-6 leading-[1.15]"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-4 leading-[1.2]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl font-bold tracking-tight mt-8 mb-3 text-foreground"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="text-base leading-relaxed text-foreground/85 mb-5"
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-accent underline underline-offset-4 hover:text-accent2 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc pl-6 mb-5 space-y-2 text-foreground/85 marker:text-accent"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal pl-6 mb-5 space-y-2 text-foreground/85 marker:text-accent"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-2 border-accent pl-4 my-6 italic text-foreground/70"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-surface border border-border px-1.5 py-0.5 text-sm font-mono text-accent2"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="rounded-xl border border-border bg-surface/60 p-4 my-6 overflow-x-auto text-sm font-mono leading-relaxed [&_code]:!bg-transparent [&_code]:!border-0 [&_code]:!p-0 [&_code]:!text-foreground/90"
        {...props}
      >
        {children}
      </pre>
    ),
    hr: ({ ...props }) => (
      <hr className="my-10 border-border" {...props} />
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-foreground font-semibold" {...props}>
        {children}
      </strong>
    ),
    ...components,
  };
}
