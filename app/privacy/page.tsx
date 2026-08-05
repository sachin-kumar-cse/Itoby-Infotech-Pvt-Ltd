import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy - Itoby Infotech",
  description:
    "Learn about how Itoby Infotech collects, uses, and protects your personal information and data privacy.",
  alternates: {
    canonical: "https://itobyinfotech.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyClient />;
}
