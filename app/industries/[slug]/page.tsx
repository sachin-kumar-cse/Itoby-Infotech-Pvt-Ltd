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

  return {
    title: `${industry.title} | Itoby Infotech`,
    description: industry.heroDescription,
    alternates: {
      canonical: `https://www.itobyinfotech.com/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.title} | Itoby Infotech`,
      description: industry.heroDescription,
      url: `https://www.itobyinfotech.com/industries/${slug}`,
      type: "website",
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
