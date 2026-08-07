import type { Metadata } from "next";
import TechHubClient from "./TechHubClient";

export const metadata: Metadata = {
  title: "Modern Tech Stacks & Development Tools",
  description: "Explore our core technology stacks including Next.js, React, Node.js, Flutter, Supabase, and AI models engineered for enterprise applications.",
  alternates: {
    canonical: "https://itobyinfotech.com/technology",
  },
};

export default function TechnologyPage() {
  return <TechHubClient />;
}
