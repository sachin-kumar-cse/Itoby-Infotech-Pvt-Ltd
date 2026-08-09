import type { Metadata } from "next";
import ComparisonHubClient from "./ComparisonHubClient";

export const metadata: Metadata = {
  title: "Tech Stack & Framework Comparisons",
  description: "In-depth technical comparisons analyzing Next.js vs React, Flutter vs React Native, and web frameworks for software decision-makers.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/comparison",
  },
};

export default function ComparisonHubPage() {
  return <ComparisonHubClient />;
}
