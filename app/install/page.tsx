import type { Metadata } from "next";
import InstallClient from "./InstallClient";

export const metadata: Metadata = {
  title: "Install App - Progressive Web App",
  description:
    "Install the official Itoby Infotech Progressive Web App (PWA) on your mobile device or desktop for instant loading and offline capability.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/install",
  },
};

export default function InstallPage() {
  return <InstallClient />;
}
