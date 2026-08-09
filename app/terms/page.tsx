import type { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the official Terms of Service and legal agreements governing the use of Itoby Infotech web design, software development, and SaaS products.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/terms",
  },
};

export default function TermsPage() {
  return <TermsOfServiceClient />;
}
