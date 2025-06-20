import Link from "next/link"; // 👈 Add this line
import { posts } from "./posts";
import ContactButtons from "../components/ContactButtons";

export const dynamic = "force-static";

export const metadata = {
  title: "Tips & Tricks for Home Improvement | Spokane Home Pros",
  description:
    "Explore practical remodeling and repair tips from Spokane's trusted home-improvement experts.",
  alternates: {
    canonical: "https://yourdomain.com/tips-and-tricks",
  },
  openGraph: {
    type: "website",
    title: "Tips & Tricks for Home Improvement | Spokane Home Pros",
    description:
      "Discover practical remodeling and repair tips from Spokane’s trusted pros.",
    url: "https://spokanehomepros.com/tips-and-tricks",
    images: [
      {
        url: "/images/tips-cover.jpg", // 1200×630 preferred
        width: 1200,
        height: 630,
        alt: "Remodeled Spokane kitchen with white cabinets and warm lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home-Improvement Tips & Tricks",
    description:
      "Weekly remodeling insights from Spokane Home Pros—level-up your space with confidence.",
    images: ["/images/tips-cover.jpg"],
  },
};

export default function TipsPage() {
  return (
    <section className="flex blue flex-col items-center justify-center">
      <div className="relative w-full mb-30">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/tipsandtricks.jpg')] bg-cover bg-center bg-no-repeat opacity-40 z-0" />

        {/* Content Container */}
        <div className="relative z-10 flex justify-center items-center py-40 px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl mb-8">Home Improvement Tips & Tricks</h1>
            <p>
              Practical advice from Spokane’s top remodeling and renovation
              pros. Updated weekly with new insights, ideas, and tips to help
              you upgrade your home with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 py-20 mx-auto">
        {posts.map((post) => (
          <article
            key={post.title}
            className="mb-16 border-b blue border-gray-200 pb-12"
          >
            <header className="mb-6">
              {/* 👇 THIS IS WHERE THE MAGIC HAPPENS */}
              <Link href={`/tips-and-tricks/${post.slug}`}>
                <h2 className="text-4xl font-bold mb-2 hover:underline cursor-pointer">
                  {post.title}
                </h2>
              </Link>
            </header>

            <div className="leading-relaxed space-y-6 text-base max-w-3xl">
              {/* Optional: shorten content here if it’s too long */}
              {post.content}
            </div>

            <p className="text-sm">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
