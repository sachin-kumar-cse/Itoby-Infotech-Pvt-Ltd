import type { Metadata } from "next";
import { redirect } from "next/navigation";
import JobDetailsClient from "./JobDetailsClient";
import { supabase } from "@/integrations/supabase/client";
import { getJobSlug, getJobInternalId } from "@/data/jobHelpers";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (id === "944ab032-029a-4258-b9fb-47d4114fcdbd") {
    return {
      title: "UI/UX Designer Careers | Itoby Infotech",
      alternates: {
        canonical: "https://www.itobyinfotech.com/careers/ui-ux-designer",
      },
    };
  }

  const internalId = getJobInternalId(id);

  const { data: job } = await supabase
    .from("jobs")
    .select("title, department, location, description")
    .or(`id.eq.${internalId},id.eq.${id}`)
    .maybeSingle();

  const slug = getJobSlug({ id: job ? internalId : id, title: job?.title });
  const title = job?.title || (id === "ui-ux-designer" ? "UI/UX Designer" : "Career Opportunity");
  const description = job?.description || "Apply for this open position at Itoby Infotech Pvt. Ltd.";

  return {
    title: `${title} Careers | Itoby Infotech`,
    description,
    alternates: {
      canonical: `https://www.itobyinfotech.com/careers/${slug}`,
    },
  };
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;

  if (id === "944ab032-029a-4258-b9fb-47d4114fcdbd") {
    redirect("/careers/ui-ux-designer");
  }

  const internalId = getJobInternalId(id);

  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .or(`id.eq.${internalId},id.eq.${id}`)
    .maybeSingle();

  const title = job?.title || (id === "ui-ux-designer" ? "UI/UX Designer" : "Career Opportunity");
  const description = job?.description || "Apply for UI/UX Designer position at Itoby Infotech Pvt. Ltd.";
  const slug = getJobSlug({ id: internalId, title });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Itoby Infotech Pvt. Ltd.",
      "value": internalId
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Itoby Infotech Pvt. Ltd.",
      "sameAs": "https://www.itobyinfotech.com",
      "logo": "https://www.itobyinfotech.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job?.location || "Remote",
        "addressCountry": "IN"
      }
    },
    "employmentType": job?.type?.toUpperCase().replace("-", "_") || "FULL_TIME",
    "validThrough": "2026-12-31",
    "directApply": true,
    "url": `https://www.itobyinfotech.com/careers/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobDetailsClient id={id} />
    </>
  );
}
