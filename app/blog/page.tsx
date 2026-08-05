import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Tech Insights - Software Engineering & Digital Strategy",
  description:
    "Explore the latest insights, tutorials, software engineering guides, and digital marketing trends from the Itoby Infotech team.",
  alternates: {
    canonical: "https://itobyinfotech.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
