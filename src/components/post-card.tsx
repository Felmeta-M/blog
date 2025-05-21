import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-col space-y-2 p-6">
        <CardTitle className="line-clamp-2 text-2xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-0">
        <p className="line-clamp-3 text-muted-foreground">{post.body}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
