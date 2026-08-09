import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the official Privacy Policy of Itoby Infotech. Learn how we collect, use, encrypt, and safeguard your personal information and data privacy.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyClient />;
}
