import type { Metadata } from "next";
import { detailedServicesList } from "@/data/servicesData";
import ServicesSlugClient from "./ServicesSlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServicesList.find((s) => s.slug === slug);

  if (!service) {
    const formattedTitle = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      title: `${formattedTitle} | Itoby Infotech`,
      description: `Custom ${formattedTitle} services delivered by Itoby Infotech Pvt. Ltd.`,
    };
  }

  const title = service.seoTitle || `${service.title} | Itoby Infotech`;
  const description = service.metaDescription || service.heroDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.itobyinfotech.com/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.itobyinfotech.com/services/${slug}`,
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

export async function generateStaticParams() {
  return detailedServicesList.map((s) => ({ slug: s.slug }));
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  return <ServicesSlugClient slug={slug} />;
}
