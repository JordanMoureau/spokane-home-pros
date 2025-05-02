import { posts } from "./posts";
import ContactButtons from "../components/ContactButtons";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-static";

export const metadata = {
  title: "Tips & Tricks for Home Improvement | Spokane Home Pros",
  description:
    "Explore practical remodeling and repair tips from Spokane's trusted home improvement experts.",
};

export default function TipsPage() {
  return (
    <section className="flex blue flex-col items-center justify-center">
      <div className="py-40 px-6 max-w-4xl text-center">
        <h1 className="text-5xl mb-8">Home Improvement Tips & Tricks</h1>
        <p>
          Practical advice from Spokane’s top remodeling and renovation pros.
          Updated weekly with new insights, ideas, and tips to help you upgrade
          your home with confidence.
        </p>
      </div>

      <div className="max-w-3xl w-full px-6 mb-20">
        {posts.map((post) => (
          <div key={post.title} className="mb-12">
            <h2 className="text-3xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mb-20">
        <ContactButtons />
      </div>
    </section>
  );
}
