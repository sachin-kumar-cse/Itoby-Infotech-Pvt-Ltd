import type { Metadata } from "next";
import PricingHubClient from "./PricingHubClient";

export const metadata: Metadata = {
  title: "Website & Software Development Cost Pricing Guides",
  description: "Transparent cost guides and pricing calculators for website development, custom software engineering, mobile apps, and SaaS platforms.",
  alternates: {
    canonical: "https://itobyinfotech.com/pricing",
  },
};

export default function PricingHubPage() {
  return <PricingHubClient />;
}
