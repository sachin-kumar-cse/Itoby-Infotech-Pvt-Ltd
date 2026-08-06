import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pricingGuidesList } from "@/data/pricingData";
import PricingClient from "./PricingClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pricingGuidesList.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = pricingGuidesList.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Pricing Guides | Itoby Infotech",
    };
  }

  return {
    title: `${guide.title} | Itoby Infotech`,
    description: guide.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/pricing/${slug}`,
    },
    openGraph: {
      title: `${guide.title} | Itoby Infotech`,
      description: guide.heroDescription,
      url: `https://itobyinfotech.com/pricing/${slug}`,
      type: "website",
    },
  };
}

export default async function PricingGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = pricingGuidesList.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return <PricingClient guide={guide} />;
}
