import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getPostById, getAllPostIds } from "@/lib/api";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const postIds = await getAllPostIds();
  return postIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const awaitedParams = await Promise.resolve(params);
  try {
    const post = await getPostById(awaitedParams.id);
    return {
      title: `${post.title} | Debug Diary Blog`,
      description: post.body.substring(0, 160),
    };
  } catch (error) {
    console.error("Error fetching post for metadata:", error);
    return {
      title: "Post Not Found | Debug Diary Blog",
      description: "The requested post could not be found.",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const awaitedParams = await Promise.resolve(params);
  try {
    const post = await getPostById(awaitedParams.id);

    return (
      <article className="max-w-5xl py-12 md:py-24 lg:py-32 px-4">
        <div className="space-y-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-6 hover:bg-transparent"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <time dateTime="2023-01-01">May 21, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <div className="prose dark:prose-invert max-w-none pt-8">
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              {post.body}
            </p>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }
}
