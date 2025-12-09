import ContactButtons from "../components/ContactButtons";
import CheckList from "../components/CheckList";
import GetAQuote from "../components/GetAQuote";

export const dynamic = "force-static";

export const metadata = {
  title: "Home Remodeling Tips & Inspiration | Spokane Home Pros Blog",
  description:
    "Browse remodeling tips, design ideas, and practical advice from Spokane Home Pros. Learn how to plan your next kitchen, bathroom, or whole-home project with confidence.",
};

export default function Blog() {
  const checklistItems = [
    "Practical advice from real projects",
    "Ideas that fit Spokane homes and seasons",
    "Budget-conscious planning tips",
    "Guidance on working with contractors",
    "Inspiration for kitchens, baths, and more",
  ];

  const posts = [
    {
      title: "Home Renovation with Spokane Home Pros",
      descr:
        " We started Spokane Home Pros because homeowners should be able to trust the people working in their houses. That means answering the phone, keeping a clean job site, sticking to schedules, and taking pride in the final product.",
      img: "/spokane-aerial.jpeg",
      alt: "Spokane bathroom remodel with new tile and walk-in shower",
      href: "/blog/home-renovation",
      readTime: "6 min read",
      date: "December 2025",
      tag: "home reno",
    },
    {
      title: "The Real Reasons To Choose Us",
      descr:
        "Not every project needs a full remodel. Sometimes you just need something repaired — and you need it done right the first time.",
      img: "/spokane-home.jpeg",
      alt: "Remodeled kitchen with island and new cabinets in Spokane WA",
      href: "/blog/reliable-home-repair",
      readTime: "7 min read",
      date: "December 2025",
      tag: "Reliable Repairs Spokane",
    },
    {
      title: "About Spokane Home Pros",
      descr:
        "Spokane Home Pros was started with a simple idea: homeowners deserve contractors who treat their homes with respect.",
      img: "/coupleremodeling.jpeg",
      alt: "New hardwood flooring installed in a Spokane living room",
      href: "/blog/about-us-category",
      readTime: "5 min read",
      date: "December 2024",
      tag: "about Spokane home pros",
    },
  ];

  return (
    <>
      <section className="flex blue flex-col items-center justify-center">
        {/* Hero */}
        <div className="pt-30 px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl mb-4">Spokane Home Pros Blog</h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            Home Remodeling Tips, Ideas, and Advice
          </h2>
          <p className="text-lg md:text-xl mt-2">
            Thinking about a new bathroom, kitchen, or whole-home project?
            Browse guides, checklists, and ideas from a local Spokane remodeling
            team that does this every day.
          </p>
        </div>

        <ContactButtons />

        {/* Blog cards */}
        <div className="gap-10 mt-10 flex flex-col md:flex-wrap md:flex-row mb-10 px-4 md:px-0 max-w-6xl">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white shadow-lg flex flex-col overflow-hidden mb-6 md:mb-0 md:w-[48%]"
            >
              <div className="w-full h-56 overflow-hidden">
                <a href={post.href}>
                  <img
                    loading="lazy"
                    src={post.img}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{post.tag}</span>
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <a href={post.href}>
                  <h2 className="text-2xl mb-2 font-bold text-[#1F509A] hover:underline">
                    {post.title}
                  </h2>
                </a>
                <p className="mb-4 text-gray-700">{post.descr}</p>
                <a
                  href={post.href}
                  className="inline-block text-[#1F509A] font-semibold hover:underline"
                >
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* What this blog is for + CTA */}
        <div className="py-10 px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Plan Your Next Project With Confidence
          </h2>
          <p className="mb-6">
            Every article is written to help Spokane homeowners feel more
            prepared—whether you&apos;re just starting to dream or ready to
            schedule estimates. Use these guides to ask better questions, avoid
            common mistakes, and get the most from your remodel.
          </p>
          <CheckList items={checklistItems} />
          <div className="mt-6">
            <ContactButtons />
          </div>
        </div>
      </section>

      <GetAQuote />
    </>
  );
}
