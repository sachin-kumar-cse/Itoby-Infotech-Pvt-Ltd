import type { Metadata } from "next";
import WebDesignClient from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description:
    "Custom web design and Next.js development services by Itoby Infotech. UI/UX design, e-commerce development, landing pages, and speed optimization.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/web-design",
  },
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}
