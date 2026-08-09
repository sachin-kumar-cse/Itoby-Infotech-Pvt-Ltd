import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Digital Services & Solutions",
  description:
    "Explore Itoby Infotech's full suite of digital services: custom web design, mobile app development, performance marketing, and enterprise software.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
