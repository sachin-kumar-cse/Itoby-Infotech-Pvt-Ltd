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

  return {
    title: `${service.title} | Itoby Infotech`,
    description: service.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Itoby Infotech`,
      description: service.heroDescription,
      url: `https://itobyinfotech.com/services/${slug}`,
      siteName: "Itoby Infotech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Itoby Infotech`,
      description: service.heroDescription,
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
