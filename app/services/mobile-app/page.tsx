import type { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS, Android & Flutter",
  description:
    "Native iOS, Android and Flutter cross-platform mobile app development services by Itoby Infotech. High performance, real-time sync & intuitive UI/UX.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/mobile-app",
  },
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}
