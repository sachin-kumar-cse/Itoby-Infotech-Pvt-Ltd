import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, PPC, Meta Ads & Lead Gen",
  description:
    "Data-driven digital marketing, SEO, Google Ads, Meta Ads & lead generation services by Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
