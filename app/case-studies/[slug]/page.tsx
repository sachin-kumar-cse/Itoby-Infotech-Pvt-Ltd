import type { Metadata } from "next";
import { caseStudiesList } from "@/data/caseStudiesData";
import CaseStudySlugClient from "./CaseStudySlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudiesList.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study | Itoby Infotech",
    };
  }

  return {
    title: `${caseStudy.title} | Itoby Infotech`,
    description: caseStudy.heroDescription,
    alternates: {
      canonical: `https://www.itobyinfotech.com/case-studies/${slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} | Itoby Infotech`,
      description: caseStudy.heroDescription,
      url: `https://www.itobyinfotech.com/case-studies/${slug}`,
      siteName: "Itoby Infotech",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Itoby Infotech`,
      description: caseStudy.heroDescription,
    },
  };
}

export async function generateStaticParams() {
  return caseStudiesList.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudySlugPage({ params }: Props) {
  const { slug } = await params;
  return <CaseStudySlugClient slug={slug} />;
}
