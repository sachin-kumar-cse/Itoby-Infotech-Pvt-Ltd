import type { Metadata } from "next";
import CaseStudiesHubClient from "./CaseStudiesHubClient";

export const metadata: Metadata = {
  title: "Client Case Studies & Engineering Results | Itoby Infotech",
  description:
    "Explore real-world client case studies and technical results delivered by Itoby Infotech: SaaS platforms, AI voice agents, PropTech CRMs, and custom software.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Engineering Results | Itoby Infotech",
    description:
      "Explore real-world client case studies and technical results delivered by Itoby Infotech: SaaS platforms, AI voice agents, PropTech CRMs, and custom software.",
    url: "https://www.itobyinfotech.com/case-studies",
    siteName: "Itoby Infotech",
    type: "website",
  },
};

export default function CaseStudiesHubPage() {
  return <CaseStudiesHubClient />;
}
