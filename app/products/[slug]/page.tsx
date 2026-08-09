import type { Metadata } from "next";
import { productsList } from "@/data/productsData";
import ProductSlugClient from "./ProductSlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsList.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "SaaS Product | Itoby Infotech",
    };
  }

  return {
    title: `${product.name} - ${product.tagline} | Itoby Infotech`,
    description: product.heroDescription,
    alternates: {
      canonical: `https://www.itobyinfotech.com/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} - ${product.tagline} | Itoby Infotech`,
      description: product.heroDescription,
      url: `https://www.itobyinfotech.com/products/${slug}`,
      siteName: "Itoby Infotech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - ${product.tagline} | Itoby Infotech`,
      description: product.heroDescription,
    },
  };
}

export async function generateStaticParams() {
  return productsList.map((p) => ({ slug: p.slug }));
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  return <ProductSlugClient slug={slug} />;
}
