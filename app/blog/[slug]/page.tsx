import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { fallbackBlogs } from "@/data/blogsData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fallbackBlogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const post = fallbackBlogs.find((b) => b.slug === slug);

  const title = post?.title || `${slug.replace(/-/g, " ")} - Blog`;
  const description = post?.excerpt || "Read this article on Itoby Infotech's official tech blog.";

  return {
    title: `${title} | Itoby Infotech`,
    description,
    openGraph: {
      title,
      description,
      images: post?.image ? [{ url: post.image }] : undefined,
    },
    alternates: {
      canonical: `https://www.itobyinfotech.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
