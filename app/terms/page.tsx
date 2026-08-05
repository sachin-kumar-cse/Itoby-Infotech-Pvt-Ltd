import type { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service - Itoby Infotech",
  description:
    "Read the terms of service and conditions for using Itoby Infotech's web, app, and software development services.",
  alternates: {
    canonical: "https://itobyinfotech.com/terms",
  },
};

export default function TermsPage() {
  return <TermsOfServiceClient />;
}
