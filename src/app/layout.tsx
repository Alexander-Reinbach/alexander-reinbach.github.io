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
  title: "Alex Reinbach · Applied GenAI at BMW, founder of SyncMode.io",
  description:
    "Engineering team lead and Applied GenAI lead at BMW Group in Munich. Founder of SyncMode.io. I bring new technology into daily use: an internal AI agent with about 500 weekly users, a platform rollout into eight markets, a business built from zero.",
  keywords: [
    "Alex Reinbach",
    "Applied GenAI",
    "BMW",
    "MCP",
    "AI adoption",
    "Enterprise AI",
    "Munich",
  ],
  authors: [{ name: "Alex Reinbach" }],
  creator: "Alex Reinbach",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alex Reinbach · Applied GenAI at BMW, founder of SyncMode.io",
    description:
      "Eight years at BMW in Munich. An internal AI agent with about 500 weekly users, a rollout into eight markets, a business built from zero.",
    siteName: "Alex Reinbach",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Reinbach · Applied GenAI at BMW, founder of SyncMode.io",
    description: "Eight years at BMW in Munich. Founder of SyncMode.io.",
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
