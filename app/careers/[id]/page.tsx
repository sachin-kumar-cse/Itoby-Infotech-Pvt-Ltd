import type { Metadata } from "next";
import { redirect } from "next/navigation";
import JobDetailsClient from "./JobDetailsClient";
import { supabase } from "@/integrations/supabase/client";
import { getJobSlug, getJobInternalId, isValidUuid, JOB_SLUG_MAP } from "@/data/jobHelpers";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (JOB_SLUG_MAP[id]) {
    const slug = JOB_SLUG_MAP[id];
    return redirect(`/careers/${slug}`);
  }

  const internalId = getJobInternalId(id);
  const targetId = isValidUuid(internalId) ? internalId : (isValidUuid(id) ? id : null);

  let job = null;
  if (targetId) {
    const { data } = await supabase
      .from("jobs")
      .select("title, department, location, description")
      .eq("id", targetId)
      .maybeSingle();
    job = data;
  }

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

  if (JOB_SLUG_MAP[id]) {
    redirect(`/careers/${JOB_SLUG_MAP[id]}`);
  }

  const internalId = getJobInternalId(id);
  const targetId = isValidUuid(internalId) ? internalId : (isValidUuid(id) ? id : null);

  let job = null;
  if (targetId) {
    const { data } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", targetId)
      .maybeSingle();
    job = data;
  }

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
