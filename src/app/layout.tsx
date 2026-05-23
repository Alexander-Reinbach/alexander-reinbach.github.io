import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Reinbach — Architecting the Future of Agentic AI",
  description:
    "Applied GenAI Lead at BMW Group. Full-Stack AI Builder. Bridge between frontier AI vendors and certified enterprise production, from technical discovery to production deployment, across 8 markets.",
  keywords: [
    "Alex Reinbach",
    "Applied GenAI",
    "AI Solution Architect",
    "Forward Deployed Engineer",
    "BMW",
    "Multi-Agent Systems",
    "MCP",
    "Vertex AI",
    "Gemini",
    "LLMOps",
    "Enterprise AI",
  ],
  authors: [{ name: "Alex Reinbach" }],
  creator: "Alex Reinbach",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alex Reinbach — Architecting the Future of Agentic AI",
    description:
      "Applied GenAI Lead at BMW Group. Founder of SyncMode. Bridge between frontier AI and certified enterprise production, across 8 markets.",
    siteName: "Alex Reinbach",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Reinbach — Architecting the Future of Agentic AI",
    description:
      "Applied GenAI Lead at BMW Group. Full-Stack AI Builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
