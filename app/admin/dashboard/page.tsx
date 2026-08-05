import type { Metadata } from "next";
import AdminDashboardClient from "./AdminDashboardClient";

export const metadata: Metadata = {
  title: "Executive Dashboard - Itoby Infotech Admin",
  description: "Management dashboard for leads, analytics, content, and system configuration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}
