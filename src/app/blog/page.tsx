import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog | Debug Diary Blog",
  description: "Read the latest articles and insights on our blog.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className=" py-12 md:py-24 lg:py-32 px-4">
      <div className=" flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Latest Articles
        </h1>
        <p className="mb-8 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Discover our latest thoughts, ideas, and insights about the world of
          technology and design.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
