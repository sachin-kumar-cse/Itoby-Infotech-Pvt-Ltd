import type { Metadata } from "next";
import BookAppointmentClient from "./BookAppointmentClient";

export const metadata: Metadata = {
  title: "Book an Appointment - Free Consultation | Itoby Infotech",
  description:
    "Schedule a free 30-minute consultation call with our digital experts to discuss your project requirements.",
  alternates: {
    canonical: "https://itobyinfotech.com/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}
