import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio - Web, Mobile, Marketing & Software",
  description:
    "Explore Itoby Infotech's portfolio of successful client projects: custom web platforms, mobile apps, SaaS tools, CRM/ERP dashboards, and ROI marketing campaigns.",
  alternates: {
    canonical: "https://itobyinfotech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
