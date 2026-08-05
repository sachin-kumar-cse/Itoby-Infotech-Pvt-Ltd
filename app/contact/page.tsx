import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Itoby Infotech Digital Agency",
  description:
    "Get in touch with Itoby Infotech. Request a quote, book a call, or visit our office locations in Noida, Delhi NCR & Patna.",
  alternates: {
    canonical: "https://itobyinfotech.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
