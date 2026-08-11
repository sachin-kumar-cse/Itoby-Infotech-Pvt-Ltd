import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Software Engineering Portfolio & Case Studies | Itoby Infotech",
  description:
    "Explore Itoby Infotech's software engineering portfolio: custom SaaS platforms, mobile applications, AI agents, enterprise ERPs, and PropTech solutions.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/portfolio",
  },
  openGraph: {
    title: "Software Engineering Portfolio & Case Studies | Itoby Infotech",
    description:
      "Explore Itoby Infotech's software engineering portfolio: custom SaaS platforms, mobile applications, AI agents, enterprise ERPs, and PropTech solutions.",
    url: "https://www.itobyinfotech.com/portfolio",
    siteName: "Itoby Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Portfolio & Case Studies | Itoby Infotech",
    description:
      "Explore Itoby Infotech's software engineering portfolio: custom SaaS platforms, mobile applications, AI agents, enterprise ERPs, and PropTech solutions.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
