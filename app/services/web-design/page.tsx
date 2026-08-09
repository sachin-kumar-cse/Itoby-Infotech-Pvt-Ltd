import type { Metadata } from "next";
import WebDesignClient from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Web Development Services | Itoby Infotech",
  description:
    "Itoby Infotech Pvt. Ltd. delivers custom web development services, Next.js web applications, e-commerce portals, and enterprise web solutions.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/services/web-design",
  },
  openGraph: {
    title: "Web Development Services | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. delivers custom web development services, Next.js web applications, e-commerce portals, and enterprise web solutions.",
    url: "https://www.itobyinfotech.com/services/web-design",
    siteName: "Itoby Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. delivers custom web development services, Next.js web applications, e-commerce portals, and enterprise web solutions.",
  },
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}
