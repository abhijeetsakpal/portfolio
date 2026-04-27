import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://abhijeetsakpal.dev"),
  title: {
    default: "Abhijeet Sakpal — Full Stack Developer | .NET, Angular & LLM Integration",
    template: "%s | Abhijeet Sakpal",
  },
  description:
    "Full Stack Developer with 4+ years of experience shipping enterprise apps in .NET Core, Angular, SQL Server, and LLM-powered automation. Available for freelance projects.",
  keywords: [
    "Abhijeet Sakpal",
    "Full Stack Developer",
    ".NET Core developer",
    "Angular developer",
    "LLM integration",
    "Freelance developer India",
    "Microservices",
    "Azure",
    "Kubernetes",
  ],
  authors: [{ name: "Abhijeet Sakpal" }],
  creator: "Abhijeet Sakpal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijeetsakpal.dev",
    title: "Abhijeet Sakpal — Full Stack Developer",
    description:
      "Full Stack Developer specializing in .NET Core, Angular, and LLM-powered automation. 4+ years building enterprise apps for logistics, maritime, and ticketing.",
    siteName: "Abhijeet Sakpal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Sakpal — Full Stack Developer",
    description:
      "Full Stack Developer specializing in .NET Core, Angular, and LLM-powered automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
