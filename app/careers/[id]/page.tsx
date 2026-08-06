import type { Metadata } from "next";
import JobDetailsClient from "./JobDetailsClient";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { data: job } = await supabase
    .from("jobs")
    .select("title, department, location, description")
    .eq("id", id)
    .maybeSingle();

  const title = job?.title || "Career Opportunity";
  const description = job?.description || "Apply for this open position at Itoby Infotech.";

  return {
    title: `${title} - Careers`,
    description,
    alternates: {
      canonical: `https://itobyinfotech.com/careers/${id}`,
    },
  };
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  return <JobDetailsClient id={id} />;
}
