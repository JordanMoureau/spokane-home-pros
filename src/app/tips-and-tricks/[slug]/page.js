"use client";
import { useParams } from "next/navigation";
import { posts } from "../posts"; // adjust if the path is different

export default function TipPage() {
  const { slug } = useParams();

  // Find the post by slug
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div className="p-6 text-center text-red-600">Post not found.</div>;
  }

  return (
    <section className="max-w-3xl blue mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm  mb-8">{post.date}</p>
      <div className="prose prose-lg">{post.content}</div>
    </section>
  );
}
