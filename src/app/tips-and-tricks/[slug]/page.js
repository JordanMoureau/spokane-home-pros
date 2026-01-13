import { posts } from "@/app/tips-and-tricks/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found | Spokane Home Pros",
      description: "The article you’re looking for doesn’t exist.",
    };
  }

  return {
    title: `${post.title} | Spokane Home Pros`,
    description: post.preview,
    alternates: {
      canonical: `https://spokanehomepros.com/tips-and-tricks/${post.slug}`,
    },
  };
}

// ✅ Make it async and await params
export default async function PostPage({ params }) {
  const { slug } = await params; // <-- this is the key change

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <section className="max-w-3xl my-30 blue mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm mb-8">{post.date}</p>
      <div className="prose prose-lg">{post.content}</div>
    </section>
  );
}
