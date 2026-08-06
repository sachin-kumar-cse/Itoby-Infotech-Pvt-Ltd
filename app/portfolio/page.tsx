import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies",
  description:
    "Explore Itoby Infotech's portfolio of successful client projects: custom web platforms, mobile apps, SaaS tools, CRM dashboards, and digital growth.",
  alternates: {
    canonical: "https://itobyinfotech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
