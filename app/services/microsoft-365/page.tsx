import type { Metadata } from "next";
import Microsoft365Client from "./Microsoft365Client";

export const metadata: Metadata = {
  title: "Microsoft 365 Migration & Support",
  description:
    "Seamless Microsoft 365 deployment, Exchange email, SharePoint architecture, Teams integration, and enterprise cloud migration by Itoby Infotech.",
  alternates: {
    canonical: "https://itobyinfotech.com/services/microsoft-365",
  },
};

export default function Microsoft365Page() {
  return <Microsoft365Client />;
}
