import ContactButtons from "../../components/ContactButtons";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Home Renovation in Spokane & North Idaho | Spokane Home Pros",
  description:
    "Planning a home renovation in Spokane or North Idaho? Spokane Home Pros handles kitchen, bathroom, basement, and whole-home remodeling with clean job sites and clear communication.",
  alternates: {
    canonical: "https://www.spokanehomepros.com/home-renovation",
  },
  openGraph: {
    title: "Home Renovation Services in Spokane & North Idaho",
    description:
      "From kitchens and bathrooms to basements and whole-home updates, Spokane Home Pros helps homeowners renovate with confidence.",
    url: "https://www.spokanehomepros.com/home-renovation",
    images: [
      {
        url: "/spokane-valley-build.jpeg",
        width: 1200,
        height: 630,
        alt: "Home renovation project in progress in Spokane Valley",
      },
    ],
  },
};

// Service-style JSON-LD focused on renovation/remodeling
const homeRenovationLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Renovation & Remodeling Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Spokane Home Pros",
    url: "https://www.spokanehomepros.com",
    telephone: "(509) 862-7934",
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
  description:
    "Home renovation and remodeling services including kitchen, bathroom, basement, and whole-home updates for homeowners in Spokane and North Idaho.",
};

export default function HomeRenovationPage() {
  return (
    <section className="flex blue flex-col items-center justify-center w-full bg-slate-50">
      <JsonLd json={[homeRenovationLd]} id="home-renovation-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <Image
            src="/spokane-valley-build.jpeg"
            alt="Home renovation project in progress in Spokane Valley"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Home Renovation in Spokane & North Idaho
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Kitchens, bathrooms, basements, and whole-home remodels —
                designed and built by a local crew that actually shows up and
                cleans up.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/fast-quote" className="btn btn-primary">
                  Get a Home Renovation Estimate
                </a>
                <a href="tel:+15098627934" className="btn btn-secondary">
                  Call (509) 862-7934
                </a>
              </div>
              <div className="mt-4 text-sm opacity-90">
                Serving Spokane, Spokane Valley, Liberty Lake, Mead, Airway
                Heights, Millwood, Coeur d&apos;Alene &amp; Post Falls
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 w-full bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Renovations That Make Your Home Work Better Every Day
          </h2>
          <p className="mb-4">
            Most home renovations aren&apos;t about making your house look good
            for a weekend. They&apos;re about making daily life easier—more
            storage in the kitchen, a bathroom that actually functions for your
            family, a basement that&apos;s usable instead of collecting dust, or
            a main floor that feels open instead of chopped up.
          </p>
          <p className="mb-4">
            Spokane Home Pros offers{" "}
            <strong>
              home renovation and remodeling services in Spokane and North Idaho
            </strong>{" "}
            for homeowners who want straightforward communication, realistic
            timelines, and results that feel intentional—not rushed or
            cookie-cutter. We help you update the home you already love so it
            finally matches the way you live.
          </p>
        </div>
      </section>

      {/* COMMON RENOVATIONS */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Common Home Renovation Projects We Take On
            </h2>
            <p className="mb-4">
              As a local <strong>home remodeling contractor in Spokane</strong>,
              we spend most of our time on the spaces you use the most:
              kitchens, bathrooms, basements, and main living areas. Our goal is
              to help you get more function and comfort out of the square
              footage you already have.
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• Full kitchen remodels and layout updates</li>
              <li>• Bathroom remodels and tub-to-shower conversions</li>
              <li>• Basement finishing and bonus-room build-outs</li>
              <li>
                • Main-floor reconfigurations and wall removals (where safe)
              </li>
              <li>• Flooring replacement throughout living areas</li>
              <li>• Interior trim, doors, and finish carpentry upgrades</li>
              <li>• Coordinated lighting, fixtures, and finish updates</li>
            </ul>
            <p className="mt-4 text-sm">
              If you&apos;re not sure whether your project counts as a “small
              remodel” or a “full renovation,” that&apos;s okay. We can walk the
              space, talk through options, and help you decide what makes sense
              for your budget and timeline.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow">
            <Image
              src="/liberty-lake-build.jpeg"
              alt="Finished renovation work on a Spokane area home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PLANNING / DESIGN VS DIY */}
      <section className="w-full bg-slate-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Planning a Renovation: Where to Start
            </h2>
            <p className="mb-4">
              Big changes don&apos;t have to be overwhelming. We start by
              getting clear on how you actually use your home—who cooks, who
              showers when, how many people need to move through the space at
              once, and what&apos;s driving you the most crazy right now.
            </p>
            <p className="mb-4">
              From there, we talk layout, finishes, and budget. Some projects
              are best done all at once; others can be phased over time. Our job
              is to explain the tradeoffs so you can make informed decisions,
              not push you into a bigger project than you need.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              When You Need a Pro (Not Just a Paint Roller)
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• Moving or removing walls or changing the layout</li>
              <li>• Updating plumbing or electrical in kitchens and baths</li>
              <li>• Fixing moisture damage before installing new finishes</li>
              <li>• Installing new tile, flooring, or custom cabinetry</li>
              <li>• Coordinating multiple trades on a tight schedule</li>
            </ul>
            <p className="mt-4 text-sm">
              Paint and decor can go a long way, but when you&apos;re touching
              structure, plumbing, or electrical—or investing in new cabinets,
              tile, or flooring—it&apos;s usually worth bringing in a licensed,
              insured remodeling contractor.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA / LOCAL SEO BAND */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Home Renovation Services Across Spokane & North Idaho
          </h2>
          <p className="mb-4">
            Spokane Home Pros serves homeowners in Spokane, Spokane Valley,
            Liberty Lake, Mead, Airway Heights, Millwood, Coeur d&apos;Alene,
            Post Falls, and nearby communities. We&apos;re locally owned and
            operated, so we understand how Inland Northwest weather, older
            construction styles, and past DIY projects show up in real houses.
          </p>
          <p className="mb-4">
            Whether you&apos;re updating a Spokane bungalow, modernizing a 90s
            two-story, or finishing out a North Idaho basement, our crew focuses
            on clean job sites, clear communication, and a finished space that
            feels like it&apos;s always belonged in your home.
          </p>
          <p className="text-sm text-slate-700">
            If you&apos;re looking for a{" "}
            <strong>
              home renovation contractor in Spokane or North Idaho
            </strong>
            , we&apos;re happy to walk the space, talk through options, and give
            you a straightforward estimate.
          </p>
        </div>
      </section>

      {/* MINI CTA / CONTACT BUTTONS */}
      <section className="w-full py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Thinking About a Home Renovation?
          </h2>
          <p className="max-w-3xl mx-auto mb-8">
            Whether you&apos;re still in the idea stage or ready to start,
            we&apos;ll meet you where you&apos;re at, walk the space, and help
            you understand what&apos;s possible.
          </p>
          <div className="flex justify-center">
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* FORM CTA */}
      <section className="bg-[#FFB229] lg:p-24 p-10 w-full">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get a Home Renovation Estimate
          </h2>
          <p className="mb-4">
            Tell us what you&apos;d like to change about your home and
            we&apos;ll follow up with next steps — no pressure, no hard sell.
          </p>
        </div>
        <GetAQuote />
      </section>
    </section>
  );
}
