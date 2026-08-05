import type { Metadata } from "next";
import InstallClient from "./InstallClient";

export const metadata: Metadata = {
  title: "Install Web App - Itoby Infotech PWA",
  description:
    "Install the Itoby Infotech Progressive Web App (PWA) on your mobile device or desktop for instant loading and offline access.",
  alternates: {
    canonical: "https://itobyinfotech.com/install",
  },
};

export default function InstallPage() {
  return <InstallClient />;
}
