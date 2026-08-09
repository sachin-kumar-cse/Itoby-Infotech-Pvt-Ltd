import type { Metadata } from "next";
import BookAppointmentClient from "./BookAppointmentClient";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free 30-minute 1-on-1 strategy call with our software engineering & digital transformation architects at Itoby Infotech.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}
