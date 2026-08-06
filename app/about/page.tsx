import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Global Technology Agency",
  description:
    "Learn about Itoby Infotech — a premier global digital agency engineering web applications, mobile apps, software solutions, and enterprise AI SaaS platforms.",
  alternates: {
    canonical: "https://itobyinfotech.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
