import type { Metadata } from "next";
import { NvidiaLanding } from "@/components/NvidiaLanding";

export const metadata: Metadata = {
  title: "Alex Reinbach · NVIDIA Developer Relations",
  description:
    "Application for Senior Developer Relations Manager, Manufacturing (EMEA): eight years inside BMW, AI brought to its engineers, and a product of my own.",
  // Own preview text, otherwise link previews show the main site's tagline.
  openGraph: {
    title: "Alex Reinbach · Developer Relations, Manufacturing",
    description:
      "Eight years inside BMW in Munich. AI brought to its engineers, from discovery to production.",
  },
  twitter: {
    title: "Alex Reinbach · Developer Relations, Manufacturing",
    description: "Eight years inside BMW. AI brought to its engineers.",
  },
  // Unlisted: not linked from the main page and closed to search engines.
  // The link is only meant for the NVIDIA application.
  robots: {
    index: false,
    follow: false,
  },
};

export default function NvidiaPage() {
  return <NvidiaLanding />;
}
