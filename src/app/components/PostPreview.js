"use client";

import Link from "next/link";
import { useMemo } from "react";
import { posts } from "@/app/tips-and-tricks/posts";

export default function PostPreview() {
  const randomPosts = useMemo(() => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 pb-40">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Tips & Tricks From Spokane Home Pros
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {randomPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-[#1f509a] text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-3xl font-bold mb-2">{post.title}</h3>
            <p>{post.preview}</p>
            <Link
              href={`/tips-and-tricks/${post.slug}`}
              className="inline-block mt-4 text-white underline hover:text-[#f57c00]"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
