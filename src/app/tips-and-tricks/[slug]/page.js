// src/app/tips-and-tricks/[slug]/page.js
import { posts } from "@/app/tips-and-tricks/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
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
      canonical: `https://yourdomain.com/tips-and-tricks/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.preview,
      url: `https://yourdomain.com/tips-and-tricks/${post.slug}`,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.preview,
    },
  };
}

export default function PostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post)
    return <section className="p-6  text-center">Post not found.</section>;

  return (
    <section className="max-w-3xl my-30 blue mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-sm mb-8">{post.date}</p>
      <img className="my-10" src={post.image} />
      <div className="prose prose-lg">{post.content}</div>
    </section>
  );
}
