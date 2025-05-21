import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-64px)] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold">Post Not Found</h1>
      <p className="text-muted-foreground">
        Sorry, the blog post you are looking for does not exist or has been
        removed.
      </p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  );
}
