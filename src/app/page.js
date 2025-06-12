import Link from "next/link";
import Hero from "./components/Hero";
import GetAQuote from "./components/GetAQuote";
import Cards from "./components/Cards";
import ContactButtons from "./components/ContactButtons";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonial";
import PostPreview from "./components/PostPreview"; // adjust path if needed

export const dynamic = "force-static";

export const metadata = {
  title: "Spokane Home Pros | Renovation & Remodeling Experts",
  description:
    "Quality work is who we are. Spokane's best contractor and repair service.",
};

export default function Home() {
  return (
    <main className="min-h-screen blue bg-white text-gray-900">
      <section className="flex flex-col items-center text-center justify-center">
        <Hero />

        <h1 className="px-10 text-5xl mt-30 mb-3">
          Spokane Home Improvement Services
        </h1>
        <h2 className="px-10 text-3xl">
          Local Experts in Spokane Home Remodeling & Repairs
        </h2>
        <p className="max-w-2xl px-1 py-3">
          From kitchen remodels to bathroom renovations, we deliver high-quality
          home improvement services across Spokane, WA. As trusted local
          contractors, we treat every home like our own—getting it right the
          first time.
        </p>

        <Link
          href="/quote"
          className="mx-10 text-white uppercase text-lg mt-7 mb-30 px-4 py-2 font-bold bg-[#FFB229]"
        >
          Contact Us for a free quote
        </Link>
      </section>

      <Cards />

      <section className="flex flex-col items-center text-left justify-center px-5">
        <div className="max-w-2xl">
          <h2 className=" text-5xl mt-30 mb-3">Expert Remodelers in Spokane</h2>
          <p className=" text-lg">
            No job too big or small. Just home repairs and renovations done
            right. We show up, get it done and don't leave a mess.
            <br />
            <br />
            Spokane Home Pros: The trusted pick for homeowners. Your home
            deserves high quality repairs and renovations. With years of
            experience, we deliver on our promises in Spokane, WA. Bathroom
            remodels, kitchen upgrades, and full home renovations. We're known
            for showing up, finishing on time, and when we fix it, it stays
            fixed.
          </p>
          <ContactButtons />
        </div>
      </section>

      <BeforeAfter />
      <section className="flex flex-col items-center justify-center">
        <Testimonials />
      </section>

      <PostPreview />

      <GetAQuote />
    </main>
  );
}
