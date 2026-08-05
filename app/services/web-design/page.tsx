import type { Metadata } from "next";
import WebDesignClient from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Web Design & Development Services - Custom High-Converting Websites",
  description:
    "Custom web design and development services by Itoby Infotech. Custom UI/UX, e-commerce development, landing pages, and speed optimization.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/web-design",
  },
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}
