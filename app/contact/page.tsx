import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Itoby Infotech Pvt. Ltd. | Free Consultation",
  description:
    "Get in touch with Itoby Infotech Pvt. Ltd. Request a free quote, book a strategy call, or visit our software engineering offices in Noida & global hubs.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/contact",
  },
  openGraph: {
    title: "Contact Itoby Infotech Pvt. Ltd. | Free Consultation",
    description:
      "Get in touch with Itoby Infotech Pvt. Ltd. Request a free quote, book a strategy call, or visit our software engineering offices in Noida & global hubs.",
    url: "https://www.itobyinfotech.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
