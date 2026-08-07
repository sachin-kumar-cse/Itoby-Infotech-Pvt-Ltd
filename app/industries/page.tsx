import type { Metadata } from "next";
import IndustriesHubClient from "./IndustriesHubClient";

export const metadata: Metadata = {
  title: "Industry Solutions & IT Expertise",
  description: "Explore tailored software engineering, web design, and AI solutions across 17+ industry verticals including Healthcare, Real Estate, FinTech, and Ecommerce.",
  alternates: {
    canonical: "https://itobyinfotech.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesHubClient />;
}
