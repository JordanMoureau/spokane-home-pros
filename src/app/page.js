import Link from "next/link";
import Hero from "./components/Hero";
import GetAQuote from "./components/GetAQuote";
import Cards from "./components/Cards";
import ContactButtons from "./components/ContactButtons";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonial";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen blue bg-white text-gray-900">
      <section className="flex flex-col items-center text-center justify-center">
        <Hero />

        <h1 className=" px-10 text-5xl mt-30 mb-3">
          We Are Spokane's Home Pros
        </h1>
        <p className=" px-10 text-3xl">
          Born and built in Spokane. We treat your home like it's ours.
        </p>
        <p className="max-w-2xl px-1 py-3">
          From kitchen makeovers to bathroom upgrades. We do it all and we do it
          right. The first time.
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
          <h1 className=" text-5xl mt-30 mb-3">No Job Too Big or Small</h1>
          <p className=" text-lg">
            No job too big or small. Just repairs done right. We show up, get it
            done and don't leave a mess.
            <br />
            <br />
            Spokane Home Pros: The trusted pick for homeowners. Your home
            deserves quality. With years of experience, we deliver on our
            promises in Spokane. Bathroom remodels, kitchen upgrades, and full
            home renovations. We're known for showing up, finishing on time, and
            when we fix it, it stays fixed.
          </p>
          <ContactButtons />
        </div>
      </section>

      <BeforeAfter />
      <section className="flex flex-col items-center justify-center">
        <Testimonials />
      </section>

      <GetAQuote />
    </main>
  );
}
