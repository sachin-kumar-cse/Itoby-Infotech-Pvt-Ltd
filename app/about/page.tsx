import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Global Digital & Software Engineering Agency",
  description:
    "Learn about Itoby Infotech — a leading global digital agency delivering custom web design, mobile app development, and software solutions for clients in USA, Canada, Australia, UK, UAE & India.",
  alternates: {
    canonical: "https://itobyinfotech.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
