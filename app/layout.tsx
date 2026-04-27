import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, TWITTER_HANDLE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s · Abhijeet Sakpal",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Abhijeet Sakpal",
  keywords: [
    "Abhijeet Sakpal",
    "Senior Full-Stack Engineer",
    "Freelance .NET developer",
    "Freelance Angular developer",
    "LLM integration",
    "Freelance developer India",
    "Microservices",
    "Microsoft Azure",
    "Kubernetes",
    "Docker",
    "Maritime software",
    "Rail logistics software",
    "Customer support automation",
    "VB.NET to .NET Core migration",
  ],
  authors: [{ name: "Abhijeet Sakpal", url: SITE_URL }],
  creator: "Abhijeet Sakpal",
  publisher: "Abhijeet Sakpal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: "Abhijeet Sakpal",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abhijeet Sakpal — Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Run before React hydrates — applies dark class synchronously to avoid theme flash
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var isDark = stored ? stored === 'dark' : true;
        if (isDark) document.documentElement.classList.add('dark');
      } catch (e) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Tells browsers + OS UI (scrollbars, form controls) we support both modes */}
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
