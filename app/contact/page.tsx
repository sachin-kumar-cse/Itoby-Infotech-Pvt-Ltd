import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Digital Agency",
  description:
    "Get in touch with Itoby Infotech. Request a proposal, book a consultation call, or contact our engineering teams in USA, UAE, and India.",
  alternates: {
    canonical: "https://itobyinfotech.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
