import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesList } from "@/data/industriesData";
import IndustryClient from "./IndustryClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesList.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesList.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: "Industry Solutions | Itoby Infotech",
    };
  }

  const title = industry.seoTitle || `${industry.title} | Itoby Infotech`;
  const description = industry.metaDescription || industry.heroDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.itobyinfotech.com/industries/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.itobyinfotech.com/industries/${slug}`,
      siteName: "Itoby Infotech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesList.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryClient industry={industry} />;
}
