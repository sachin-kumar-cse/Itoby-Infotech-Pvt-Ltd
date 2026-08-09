import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services",
  description:
    "Drive target traffic and conversions with data-driven digital marketing, SEO, Google Ads, Meta Ads, and AI search optimization by Itoby Infotech.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
