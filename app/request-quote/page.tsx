import type { Metadata } from "next";
import RequestQuoteClient from "./RequestQuoteClient";

export const metadata: Metadata = {
  title: "Request a Quote - Custom Project Estimate | Itoby Infotech",
  description:
    "Get an instant custom price estimate for your web design, mobile app, digital marketing, or software development project.",
  alternates: {
    canonical: "https://itobyinfotech.com/request-quote",
  },
};

export default function RequestQuotePage() {
  return <RequestQuoteClient />;
}
