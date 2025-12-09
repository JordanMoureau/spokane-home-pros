import ContactButtons from "../../components/ContactButtons";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Home Repairs in Spokane & North Idaho | Spokane Home Pros",
  description:
    "Need home repairs in Spokane or North Idaho? Spokane Home Pros handles drywall, rot repair, flooring fixes, carpentry, and small projects that keep your home safe and looking good.",
  alternates: {
    canonical: "https://www.spokanehomepros.com/home-repairs",
  },
  openGraph: {
    title: "Home Repair Services in Spokane & North Idaho",
    description:
      "From drywall and rot repair to flooring fixes and punch lists, Spokane Home Pros helps homeowners with reliable, local home repair services.",
    url: "https://www.spokanehomepros.com/home-repairs",
    images: [
      {
        url: "/spokane-aerial.jpeg",
        width: 1200,
        height: 630,
        alt: "Spokane neighborhood homes needing interior and exterior repairs",
      },
    ],
  },
};

// You can keep LocalBusiness sitewide elsewhere;
// here we'll add a simple Service/Article-style JSON-LD.
const homeRepairsLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Repair Services",
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
    "Home repair services including drywall repair, rot repair, minor framing, flooring fixes, and small projects for homeowners in Spokane and North Idaho.",
};

export default function HomeRepairsPage() {
  return (
    <section className="flex blue flex-col items-center justify-center w-full bg-slate-50">
      <JsonLd json={[homeRepairsLd]} id="home-repairs-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <Image
            src="/spokane-valley-build.jpeg"
            alt="Home repair project in progress in Spokane Valley"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Home Repairs in Spokane & North Idaho
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Drywall, rot repair, small carpentry, flooring fixes, and punch
                lists handled by a local remodeling crew you can actually count
                on.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/fast-quote" className="btn btn-primary">
                  Get a Home Repair Estimate
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
            Small Repairs Now, Fewer Big Headaches Later
          </h2>
          <p className="mb-4">
            Not every project needs to be a full remodel. Most Spokane homes
            just need steady, practical repairs to stay safe, dry, and
            comfortable. A bit of rot around a door, a soft spot in the floor, a
            crack in the drywall, or a loose handrail might seem minor—but left
            alone, those issues can turn into bigger, more expensive problems.
          </p>
          <p className="mb-4">
            Spokane Home Pros offers{" "}
            <strong>home repair services in Spokane and North Idaho</strong> for
            homeowners who want things fixed the right way the first time. We
            handle the &quot;not big enough for a full remodel, too important to
            ignore&quot; jobs that most people don&apos;t have time, tools, or
            expertise to do themselves.
          </p>
        </div>
      </section>

      {/* COMMON REPAIRS */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Common Home Repairs We Handle
            </h2>
            <p className="mb-4">
              As a local <strong>home remodeling contractor in Spokane</strong>,
              we see the same types of repair requests over and over again.
              That&apos;s good news—it means we know what to look for and how to
              solve the root problem, not just cover it up.
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• Drywall repair, patching, and texture blending</li>
              <li>• Rot repair around doors, windows, decks, and steps</li>
              <li>• Minor framing and subfloor fixes</li>
              <li>• Flooring repairs and small replacement areas</li>
              <li>• Tile repair and small tile replacement projects</li>
              <li>• Interior trim, doors, and finish carpentry touch-ups</li>
              <li>• Fixture swaps and cosmetic updates</li>
              <li>• Punch lists when you&apos;re getting ready to sell</li>
            </ul>
            <p className="mt-4 text-sm ">
              If you&apos;re not sure whether your project is “too small,” ask
              anyway. We regularly help homeowners with one or two repair items
              alongside larger projects.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow">
            <Image
              src="/liberty-lake-build.jpeg"
              alt="Finished repair work on a Spokane area home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIY VS HIRING PRO */}
      <section className="w-full bg-slate-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              When to DIY and When to Call a Pro
            </h2>
            <p className="mb-4">
              There&apos;s nothing wrong with tackling small projects yourself.
              But some repairs are better handled by a licensed, insured
              contractor—especially when water, structure, or safety are
              involved.
            </p>
            <p className="mb-4">
              If you&apos;re dealing with soft spots in floors, moisture damage,
              recurring cracks, doors or windows that won&apos;t close right, or
              anything that affects electrical or plumbing, it&apos;s usually
              worth bringing in a pro. We can assess the issue, explain options,
              and tell you honestly whether it&apos;s a quick fix or something
              that needs more attention.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Signs You Shouldn&apos;t Ignore
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• Spongy or sagging flooring near sinks or tubs</li>
              <li>• Peeling paint or staining that keeps coming back</li>
              <li>• Cracks that keep reopening after you patch them</li>
              <li>• Doors and windows suddenly sticking or racking</li>
              <li>• Visible rot or softness in exterior trim or decking</li>
            </ul>
            <p className="mt-4 text-sm ">
              Catching these issues early can save you money and protect the
              long-term health of your home.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA / LOCAL SEO BAND */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Home Repair Services Across Spokane & North Idaho
          </h2>
          <p className="mb-4">
            Spokane Home Pros serves homeowners in Spokane, Spokane Valley,
            Liberty Lake, Mead, Airway Heights, Millwood, Coeur d&apos;Alene,
            Post Falls, and nearby communities. We&apos;re locally owned and
            operated, so we understand how Inland Northwest weather, older
            construction styles, and past DIY fixes show up in real houses.
          </p>
          <p className="mb-4">
            Whether you&apos;re dealing with small repairs in a Spokane bungalow
            or a punch list in a newer North Idaho home, our crew focuses on
            clean job sites, clear communication, and repairs that blend in with
            the existing space.
          </p>
          <p className="text-sm text-slate-700">
            If you need a{" "}
            <strong>home repair contractor in Spokane or North Idaho</strong>,
            we&apos;re happy to walk the space, talk through options, and give
            you a straightforward estimate.
          </p>
        </div>
      </section>

      {/* MINI CTA / CONTACT BUTTONS */}
      <section className="w-full py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Need Something Fixed Around the House?
          </h2>
          <p className="max-w-3xl mx-auto mb-8">
            From small repairs to prep-for-sale punch lists, we help Spokane
            homeowners take care of the projects that never quite make it off
            the to-do list.
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
            Get a Home Repair Estimate
          </h2>
          <p className="mb-4">
            Tell us what&apos;s going on with your home and we&apos;ll follow up
            with next steps — no pressure, no hard sell.
          </p>
        </div>
        <GetAQuote />
      </section>
    </section>
  );
}
