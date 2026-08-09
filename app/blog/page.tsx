import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Tech Blog & Insights",
  description:
    "Explore the latest software engineering guides, Next.js tutorials, AI trends, and digital growth strategies from the Itoby Infotech team.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
