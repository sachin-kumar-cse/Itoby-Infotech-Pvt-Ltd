import type { Metadata } from "next";
import Microsoft365Client from "./Microsoft365Client";

export const metadata: Metadata = {
  title: "Microsoft Office 365 Services - Setup, Cloud Migration & Support",
  description:
    "Seamless Microsoft 365 setup, Exchange business email, SharePoint architecture, Microsoft Teams integration, and cloud migration by Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/microsoft-365",
  },
};

export default function Microsoft365Page() {
  return <Microsoft365Client />;
}
