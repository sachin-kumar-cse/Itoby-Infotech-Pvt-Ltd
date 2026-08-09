import type { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Itoby Infotech",
  description:
    "Itoby Infotech Pvt. Ltd. builds native iOS, Android, and Flutter cross-platform mobile apps with real-time cloud sync, biometric security, and offline support.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services/mobile-app",
  },
  openGraph: {
    title: "Mobile App Development Services | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. builds native iOS, Android, and Flutter cross-platform mobile apps with real-time cloud sync, biometric security, and offline support.",
    url: "https://www.itobyinfotech.com/services/mobile-app",
    siteName: "Itoby Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. builds native iOS, Android, and Flutter cross-platform mobile apps with real-time cloud sync, biometric security, and offline support.",
  },
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}
