import type { Metadata } from "next";
import LocationsHubClient from "./LocationsHubClient";

export const metadata: Metadata = {
  title: "Global IT Services & Development Locations",
  description: "Itoby Infotech delivers web development, mobile app design, and custom software services across Noida, Delhi NCR, Bangalore, and Dubai.",
  alternates: {
    canonical: "https://www.itobyinfotech.com/locations",
  },
};

export default function LocationsHubPage() {
  return <LocationsHubClient />;
}
