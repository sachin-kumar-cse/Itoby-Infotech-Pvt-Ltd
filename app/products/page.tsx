import type { Metadata } from "next";
import ProductsHubClient from "./ProductsHubClient";

export const metadata: Metadata = {
  title: "SaaS Software Products & AI Platforms | Itoby Infotech",
  description:
    "Explore proprietary SaaS software products engineered by Itoby Infotech Pvt. Ltd., including IIPL Lead, IIPL Billing, IIPL Renting, IIPL Cashmemo, and IIPL Calling AI Voice Agents.",
  alternates: {
    canonical: "https://itobyinfotech.com/products",
  },
  openGraph: {
    title: "SaaS Software Products & AI Platforms | Itoby Infotech",
    description:
      "Explore proprietary SaaS software products engineered by Itoby Infotech Pvt. Ltd., including IIPL Lead, IIPL Billing, IIPL Renting, IIPL Cashmemo, and IIPL Calling AI Voice Agents.",
    url: "https://itobyinfotech.com/products",
    siteName: "Itoby Infotech",
    type: "website",
  },
};

export default function ProductsHubPage() {
  return <ProductsHubClient />;
}
