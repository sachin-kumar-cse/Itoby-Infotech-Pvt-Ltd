import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Itoby Infotech Pvt. Ltd. | Web & AI Company",
  description:
    "Learn about Itoby Infotech Pvt. Ltd. — a leading web development, mobile app, AI solutions & enterprise custom software company for global businesses.",
  alternates: {
    canonical: "https://itobyinfotech.com/about",
  },
  openGraph: {
    title: "About Itoby Infotech Pvt. Ltd. | Web & AI Company",
    description:
      "Learn about Itoby Infotech Pvt. Ltd. — a leading web development, mobile app, AI solutions & enterprise custom software company for global businesses.",
    url: "https://itobyinfotech.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
