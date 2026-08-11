import type { Metadata } from "next";
import SoftwareSolutionsClient from "./SoftwareSolutionsClient";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Itoby Infotech",
  description:
    "Itoby Infotech Pvt. Ltd. is a custom software development company engineering bespoke enterprise software, scalable microservices, custom ERP/CRM tools, and API integrations.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services/software-solutions",
  },
  openGraph: {
    title: "Custom Software Development Company | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. is a custom software development company engineering bespoke enterprise software, scalable microservices, custom ERP/CRM tools, and API integrations.",
    url: "https://www.itobyinfotech.com/services/software-solutions",
    siteName: "Itoby Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. is a custom software development company engineering bespoke enterprise software, scalable microservices, custom ERP/CRM tools, and API integrations.",
  },
};

export default function SoftwareSolutionsPage() {
  return <SoftwareSolutionsClient />;
}
