import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisonList } from "@/data/comparisonData";
import CompareClient from "./CompareClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisonList.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisonList.find((c) => c.slug === slug);

  if (!comparison) {
    return {
      title: "Technology Comparison | Itoby Infotech",
    };
  }

  return {
    title: `${comparison.title} | Itoby Infotech`,
    description: comparison.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/comparison/${slug}`,
    },
    openGraph: {
      title: `${comparison.title} | Itoby Infotech`,
      description: comparison.heroDescription,
      url: `https://itobyinfotech.com/comparison/${slug}`,
      type: "website",
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = comparisonList.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  return <CompareClient comparison={comparison} />;
}
