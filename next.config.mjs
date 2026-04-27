import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  // Default remark/rehype plugins are fine for now. Add later if needed:
  // options: { remarkPlugins: [], rehypePlugins: [] }
});

export default withMDX(nextConfig);
