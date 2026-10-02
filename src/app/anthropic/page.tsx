import type { Metadata } from "next";
import { AnthropicLanding } from "@/components/AnthropicLanding";

export const metadata: Metadata = {
  title: "Alex Reinbach · Anthropic, Munich",
  description:
    "Application for Applied AI Architect, Industries: legacy engineering data connected to an AI system through a self-built MCP server, model evaluation and enterprise rollout at BMW.",
  // Own preview text, otherwise link previews show the main site's tagline.
  openGraph: {
    title: "Alex Reinbach · Applied AI Architect, Industries",
    description:
      "Eight years at BMW in Munich. An MCP integration from discovery to production, model evaluation and the rollout to engineers.",
  },
  twitter: {
    title: "Alex Reinbach · Applied AI Architect, Industries",
    description: "Eight years at BMW in Munich. From discovery to deployment of enterprise AI.",
  },
  // Unlisted: not linked from the main page and closed to search engines.
  // The link is only meant for the Anthropic application.
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnthropicPage() {
  return <AnthropicLanding />;
}
