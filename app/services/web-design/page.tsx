import type { Metadata } from "next";
import WebDesignClient from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Web Development Company | Custom Next.js & Web Apps | Itoby Infotech",
  description:
    "Leading website development company engineering custom Next.js web applications, headless e-commerce storefronts, and 100/100 Core Web Vitals portals.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services/web-design",
  },
  openGraph: {
    title: "Web Development Company | Custom Next.js & Web Apps | Itoby Infotech",
    description:
      "Leading website development company engineering custom Next.js web applications, headless e-commerce storefronts, and 100/100 Core Web Vitals portals.",
    url: "https://www.itobyinfotech.com/services/web-design",
    siteName: "Itoby Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | Custom Next.js & Web Apps | Itoby Infotech",
    description:
      "Leading website development company engineering custom Next.js web applications, headless e-commerce storefronts, and 100/100 Core Web Vitals portals.",
  },
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}
