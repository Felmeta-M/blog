import { Post } from "@/lib/types";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPosts(limit = 5): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts?_limit=${limit}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export async function getAllPostIds(): Promise<string[]> {
  const posts = await getAllPosts(100);
  return posts.map((post) => post.id.toString());
}
