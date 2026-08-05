import type { Metadata } from "next";
import SoftwareSolutionsClient from "./SoftwareSolutionsClient";

export const metadata: Metadata = {
  title: "Custom Software Solutions - CRM, ERP & Enterprise Automation",
  description:
    "Bespoke software development, custom CRM/ERP platforms, enterprise admin dashboards, and automation tools engineered by Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/software-solutions",
  },
};

export default function SoftwareSolutionsPage() {
  return <SoftwareSolutionsClient />;
}
