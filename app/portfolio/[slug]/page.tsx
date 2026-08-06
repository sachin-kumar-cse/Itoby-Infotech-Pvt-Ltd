import type { Metadata } from "next";
import PortfolioSlugClient from "./PortfolioSlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} - Case Study`,
    description: `Explore the ${formattedTitle} case study and see how Itoby Infotech delivered digital transformation and measurable business results.`,
    alternates: {
      canonical: `https://itobyinfotech.com/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioSlugPage({ params }: Props) {
  const { slug } = await params;
  return <PortfolioSlugClient slug={slug} />;
}
