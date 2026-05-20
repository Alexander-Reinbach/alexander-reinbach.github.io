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
    "GenAI Lead at BMW Group. Full-Stack AI Builder. Turning complex enterprise legacy and multi-agent workflows into high-impact production reality.",
  keywords: [
    "Alex Reinbach",
    "GenAI",
    "AI Architect",
    "BMW",
    "Multi-Agent Systems",
    "MCP",
    "Head of AI",
    "Solutions Architect",
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
      "GenAI Lead at BMW Group. Founder of SyncMode.io. Building production multi-agent systems at enterprise scale.",
    siteName: "Alex Reinbach",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Reinbach — Architecting the Future of Agentic AI",
    description:
      "GenAI Lead at BMW Group. Full-Stack AI Builder.",
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
