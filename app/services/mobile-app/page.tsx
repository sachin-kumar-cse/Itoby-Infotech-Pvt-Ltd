import type { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Native iOS, Android, and Flutter mobile app development services by Itoby Infotech with real-time sync, top performance, and intuitive UI/UX design.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/mobile-app",
  },
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}
