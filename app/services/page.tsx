import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Digital Services - Web Design, Mobile Apps, Marketing & Software",
  description:
    "Explore Itoby Infotech's full suite of digital services: custom web design, mobile app development, performance digital marketing, software solutions, and Microsoft 365 services.",
  alternates: {
    canonical: "https://itobyinfotech.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
