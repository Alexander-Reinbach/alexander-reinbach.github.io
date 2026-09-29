import type { Metadata } from "next";
import { WaymoLanding } from "@/components/WaymoLanding";

export const metadata: Metadata = {
  title: "Alex Reinbach · Waymo Germany",
  description:
    "Application for Strategy & BizOps Lead, Germany: eight years inside BMW in Munich, a business built from zero, and new technology taken through German approvals.",
  // Own preview text, otherwise link previews show the main site's AI tagline.
  openGraph: {
    title: "Alex Reinbach · Strategy & BizOps Lead, Germany",
    description:
      "Eight years inside BMW in Munich, one business built from zero, and new technology taken through German approvals.",
  },
  twitter: {
    title: "Alex Reinbach · Strategy & BizOps Lead, Germany",
    description: "Eight years inside BMW in Munich, one business built from zero.",
  },
  // Unlisted: not linked from the main page and closed to search engines.
  // The link is only meant for the Waymo application.
  robots: {
    index: false,
    follow: false,
  },
};

export default function WaymoPage() {
  return <WaymoLanding />;
}
