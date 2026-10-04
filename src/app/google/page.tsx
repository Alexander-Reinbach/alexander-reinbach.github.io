import type { Metadata } from "next";
import { GoogleLanding } from "@/components/GoogleLanding";

export const metadata: Metadata = {
  title: "Alex Reinbach · Google Cloud",
  description:
    "Application for Customer Engineer at Google Cloud: AI agents taken from discovery to production at BMW, Gemini in production at SyncMode.",
  // Own preview text, otherwise link previews show the main site's tagline.
  openGraph: {
    title: "Alex Reinbach · Customer Engineer, Google Cloud",
    description:
      "Eight years inside BMW in Munich. AI agents from discovery to production.",
  },
  twitter: {
    title: "Alex Reinbach · Customer Engineer, Google Cloud",
    description: "Eight years inside BMW. AI agents in production.",
  },
  // Unlisted: not linked from the main page and closed to search engines.
  // The link is only meant for the Google Cloud applications.
  robots: {
    index: false,
    follow: false,
  },
};

export default function GooglePage() {
  return <GoogleLanding />;
}
