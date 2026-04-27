/**
 * Single source of truth for site-level SEO and canonical URLs.
 *
 * Update SITE_URL when you point a custom domain. Everything else
 * (sitemap, robots, JSON-LD, OG images, blog metadata) reads from
 * this file so the migration is one line.
 */

import { profile } from "./data";

export const SITE_URL = "https://abhijeetsakpal.vercel.app";

export const SITE_NAME = "Abhijeet Sakpal — Senior Full-Stack Engineer";

export const SITE_DESCRIPTION =
  "Senior full-stack engineer (4+ years) specializing in .NET microservices, Angular, and LLM-powered automation. Available for freelance builds, integrations, and modernization.";

export const TWITTER_HANDLE: string | undefined = undefined; // Set when you have one

/** Person schema — describes you to Google */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thane",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    ".NET Core",
    "Angular",
    "LLM Integration",
    "Microservices",
    "Microsoft Azure",
    "Kubernetes",
    "Docker",
    "SQL Server",
    "TypeScript",
    "C#",
  ],
};

/** ProfessionalService schema — describes your freelance practice */
export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  priceRange: "$$",
  email: profile.email,
  telephone: profile.phone,
  founder: {
    "@type": "Person",
    name: profile.name,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thane",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Worldwide (remote)" },
  ],
  serviceType: [
    "LLM Integration",
    ".NET Application Development",
    "Angular Application Development",
    "Cloud Migration & DevOps",
    "Legacy Modernization",
    "MVP Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productized engagements",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LLM Integration Audit",
          description:
            "5-day deep-dive identifying high-ROI LLM use cases inside an existing product, with a working prototype.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dockerize My .NET App",
          description:
            "Containerize and deploy a .NET Core application on Azure or Kubernetes in 2 weeks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP / Greenfield Build",
          description:
            "Architect, build, and ship a production-ready MVP in 4–8 weeks.",
        },
      },
    ],
  },
};

/** Helper for case-study Article schema */
export function articleJsonLd(args: {
  headline: string;
  description: string;
  slug: string;
  datePublished?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    image: `${SITE_URL}/photo.jpg`,
    author: { "@type": "Person", name: profile.name, url: SITE_URL },
    publisher: { "@type": "Person", name: profile.name, url: SITE_URL },
    datePublished: args.datePublished ?? new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${args.slug}` },
    articleSection: args.category,
  };
}
