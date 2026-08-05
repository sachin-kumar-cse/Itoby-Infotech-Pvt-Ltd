import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Open Positions - Join Itoby Infotech",
  description:
    "Explore career opportunities at Itoby Infotech. We are hiring software engineers, UI/UX designers, mobile developers, and digital marketers.",
  alternates: {
    canonical: "https://itobyinfotech.com/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
