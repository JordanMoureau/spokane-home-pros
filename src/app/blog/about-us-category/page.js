import ContactButtons from "../../components/ContactButtons";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "About Spokane Home Pros | Local Home Remodeling & Repairs",
  description:
    "Spokane Home Pros is a local remodeling and home repair company serving Spokane and North Idaho. Learn who we are, how we work, and why homeowners trust us with kitchens, bathrooms, additions, and repairs.",
  alternates: {
    canonical: "https://www.spokanehomepros.com/about",
  },
  openGraph: {
    title: "About Spokane Home Pros | Local Remodeling Pros You Can Trust",
    description:
      "We’re Spokane-based remodelers focused on clear communication, clean job sites, and projects that finish on time. Meet the team behind Spokane Home Pros.",
    url: "https://www.spokanehomepros.com/about",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Spokane Home Pros crew on a home renovation job site",
      },
    ],
  },
};

// Structured data
const aboutLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spokane Home Pros",
  url: "https://www.spokanehomepros.com",
  telephone: "(509) 862-7934",
  email: "SpokaneHomePros@gmail.com",
  image: "https://www.spokanehomepros.com/shp-crew.jpg",
  description:
    "Local home renovation and repair professionals serving Spokane and North Idaho with kitchen, bathroom, flooring, and full home remodeling services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2624 N Division St. #1123",
    addressLocality: "Spokane",
    addressRegion: "WA",
    postalCode: "99207",
    addressCountry: "US",
  },
  areaServed: [
    "Spokane WA",
    "Spokane Valley WA",
    "Liberty Lake WA",
    "Mead WA",
    "Airway Heights WA",
    "Millwood WA",
    "Coeur d’Alene ID",
    "Post Falls ID",
  ],
  sameAs: ["https://www.google.com/maps/place/Spokane+Home+Pros"],
};

export default function AboutSpokaneHomePros() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-slate-50 blue">
      <JsonLd json={[aboutLd]} id="about-shp-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <Image
            src="/coupleremodeling.jpeg"
            alt="Spokane Home Pros team at a Spokane home renovation project"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                About Spokane Home Pros
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Local remodelers who answer the phone, show up when we say we
                will, and leave your home better than we found it.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/fast-quote" className="btn btn-primary">
                  Get a Fast, Free Estimate
                </a>
                <a href="tel:+15098627934" className="btn btn-secondary">
                  Call (509) 862-7934
                </a>
              </div>
              <div className="mt-4 text-sm opacity-90">
                Kitchens • Bathrooms • Flooring • Additions • Repairs across
                Spokane & North Idaho
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN / STORY */}
      <div className="px-6 py-20 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          A Remodeling Company Built for Real Life, Not TV
        </h2>
        <p className="mb-4">
          Spokane Home Pros was started with a simple idea: homeowners deserve
          contractors who treat their homes with respect. That means showing up
          on time, communicating clearly, protecting floors and furniture, and
          finishing projects when we say we will—not leaving you living in a
          construction zone for months.
        </p>
        <p className="mb-4">
          We’re not a franchise, and we’re not chasing the latest renovation TV
          trend. We’re local pros who live and work in Spokane. We know how
          older homes are built here, how Spokane winters affect materials, and
          what it takes to get permits, inspections, and projects done the right
          way.
        </p>
        <p className="mb-4">
          From small repairs to full kitchen and bathroom remodels, our goal is
          always the same: leave you with a home that functions better, looks
          better, and feels like it finally matches the way you live.
        </p>
      </div>

      {/* WHAT WE DO BEST */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              What Spokane Home Pros Is Known For
            </h2>
            <p className="mb-4">
              We focus on the projects that make the biggest difference in daily
              life: kitchens, bathrooms, flooring, repairs, and smart
              reconfigurations that give you more usable space without moving
              out of a home you love.
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• Full kitchen remodels and updates</li>
              <li>• Bathroom renovations and tub-to-shower conversions</li>
              <li>• Flooring installation and repair</li>
              <li>• Home repairs, punch lists, and small projects</li>
              <li>
                • Layout tweaks, walls opened/removed, and light carpentry
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              No job is “too small” if it makes your home work better. And if a
              project isn’t a good fit, we’ll tell you honestly and point you in
              the right direction.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/before-after-split.jpg"
              alt="Before and after kitchen remodel by Spokane Home Pros"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW WE WORK / PROCESS */}
      <section className="w-full bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            What It’s Like to Work With Us
          </h2>
          <p className="max-w-3xl mx-auto mb-8">
            A smooth remodel isn’t an accident. It’s the result of a clear
            process, realistic expectations, and a crew that respects your home.
            Here’s how we keep projects predictable and low-stress.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white shadow-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                1) Walkthrough & Quote
              </h3>
              <p className="text-sm">
                We listen first. You’ll get a written scope and pricing so you
                know exactly what’s included and what’s not—no vague promises.
              </p>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                2) Plan, Schedule & Prep
              </h3>
              <p className="text-sm">
                We help with selections, permits, and scheduling trades. You’ll
                know when we’ll be there and who’s in your home on any given
                day.
              </p>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                3) Build & Follow-Through
              </h3>
              <p className="text-sm">
                We protect surfaces, manage dust as best we can, keep you posted
                on progress, and handle a final punch list before we call it
                done.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* LOCAL + TRUST SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/exterior.jpeg"
              alt="Spokane neighborhood street with remodeled homes"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Local Pros, Not a National Franchise
            </h2>
            <p className="mb-4">
              Spokane Home Pros is locally owned and operated. We work in
              Spokane, Spokane Valley, Liberty Lake, Mead, Airway Heights,
              Millwood, Coeur d’Alene, Post Falls, and nearby communities. When
              you call us, you’re talking to people who actually live here.
            </p>
            <p className="mb-4">
              That local focus means we’re careful about our reputation. We rely
              on word of mouth and reviews, so we treat every project like it’s
              the one our next client will see first.
            </p>
            <p className="text-sm text-slate-600">
              We’re licensed, insured, and committed to doing things the right
              way—even when no one’s watching.
            </p>
          </div>
        </div>
      </section>

      {/* MINI “WHY CHOOSE US” BAND */}
      <section className="w-full bg-slate py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Why Spokane Homeowners Choose Us
          </h2>
          <p className="max-w-3xl mx-auto mb-8">
            At the end of the day, tools and trucks don’t matter. What matters
            is whether you trust the people working in your home. Here’s what
            our clients tell us they appreciate most.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">We Show Up</h3>
              <p className="text-sm">
                Clear start dates, realistic timelines, and communication when
                something changes. No disappearing acts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">We Respect Your Home</h3>
              <p className="text-sm">
                Floor protection, daily cleanup, and crews who treat your
                spaces, kids, and pets with respect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">We Stand Behind the Work</h3>
              <p className="text-sm">
                If something isn’t right, we come back and make it right. It’s
                that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT FORM */}
      <section className="bg-[#FFB229] lg:p-24 p-10 w-full">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Talk About Your Home Project?
          </h2>
          <p className="mb-4">
            Whether you’re just collecting ideas or ready to start, we’re happy
            to walk the space, talk through options, and give you a clear
            estimate.
          </p>
          <p className="text-sm">
            Tell us a little about your project and we’ll follow up with next
            steps—no pressure, no hard sell.
          </p>
        </div>
        <GetAQuote />
      </section>
    </section>
  );
}
