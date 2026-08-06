import type { Metadata } from "next";
import RequestQuoteClient from "./RequestQuoteClient";

export const metadata: Metadata = {
  title: "Request a Quote - Project Estimate",
  description:
    "Get a custom price estimate for your web design, mobile app, digital marketing, or enterprise software project from Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/request-quote",
  },
};

export default function RequestQuotePage() {
  return <RequestQuoteClient />;
}
