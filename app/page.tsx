import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Website Development Company | AI, SaaS & Software Solutions",
  description:
    "Itoby Infotech Pvt. Ltd. provides Website Development, Custom Software, SaaS Development, AI Solutions, Mobile Apps, UI/UX Design and Digital Transformation services.",
  alternates: {
    canonical: "https://itobyinfotech.com",
  },
  openGraph: {
    title: "Website Development Company | AI, SaaS & Software Solutions",
    description:
      "Itoby Infotech Pvt. Ltd. provides Website Development, Custom Software, SaaS Development, AI Solutions, Mobile Apps, UI/UX Design and Digital Transformation services.",
    url: "https://itobyinfotech.com",
    type: "website",
    siteName: "Itoby Infotech",
    images: [
      {
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png",
        width: 1200,
        height: 630,
        alt: "Itoby Infotech Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itobyinfotech",
    title: "Website Development Company | AI, SaaS & Software Solutions",
    description:
      "Itoby Infotech Pvt. Ltd. provides Website Development, Custom Software, SaaS Development, AI Solutions, Mobile Apps, UI/UX Design and Digital Transformation services.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png",
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
