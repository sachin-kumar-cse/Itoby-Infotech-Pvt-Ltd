import type { Metadata } from "next";
import ResourcesHubClient from "./ResourcesHubClient";

export const metadata: Metadata = {
  title: "Engineering Resources & Developer Checklists",
  description: "Free technical SEO audit checklists, web development glossaries, and software architecture whitepapers from Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/resources",
  },
};

export default function ResourcesHubPage() {
  return <ResourcesHubClient />;
}
