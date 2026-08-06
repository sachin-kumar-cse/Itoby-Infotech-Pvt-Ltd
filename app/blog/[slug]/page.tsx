import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt, image, category")
    .eq("slug", slug)
    .maybeSingle();

  const title = post?.title || `${slug.replace(/-/g, " ")} - Blog`;
  const description = post?.excerpt || "Read this article on Itoby Infotech's official tech blog.";

  return {
    title: `${title} - Blog`,
    description,
    openGraph: {
      title,
      description,
      images: post?.image ? [{ url: post.image }] : undefined,
    },
    alternates: {
      canonical: `https://itobyinfotech.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
