import type { Metadata } from "next";
import SoftwareSolutionsClient from "./SoftwareSolutionsClient";

export const metadata: Metadata = {
  title: "Custom Enterprise Software Solutions",
  description:
    "Bespoke enterprise software development, custom CRM and ERP platforms, admin dashboards, and business automation engineered by Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/software-solutions",
  },
};

export default function SoftwareSolutionsPage() {
  return <SoftwareSolutionsClient />;
}
