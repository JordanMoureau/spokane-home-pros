import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Basement Finishing in Spokane, WA | Spokane Home Pros",
  description:
    "Turn your unfinished basement into a livable space: family rooms, guest suites, home gyms, offices, egress bedrooms, and baths. Code-correct, dry, and energy-efficient.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Basement Finishing",
  serviceType: "Basement remodel",
  areaServed: [
    "Spokane WA",
    "Spokane Valley WA",
    "Liberty Lake WA",
    "Coeur d’Alene ID",
    "Post Falls ID",
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Spokane Home Pros",
    url: "https://spokanehomepros.com",
    telephone: "(509) 862-7934",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Spokane",
      addressRegion: "WA",
      addressCountry: "US",
    },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need permits for basement finishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We obtain permits for framing, insulation, electrical, plumbing, HVAC, and egress modifications, then coordinate inspections.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle moisture and water issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We diagnose moisture, add drainage or sump solutions if needed, use closed-cell foams or proper vapor barriers, and specify mold-resistant materials.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add legal egress bedrooms and a bathroom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We cut/expand egress windows to code and rough-in plumbing for new baths so bedrooms and suites are fully compliant.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical basement finish take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects in Spokane complete in 6–14 weeks depending on size and scope. You'll receive a written schedule and regular updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We create layouts for family rooms, gyms, offices, media rooms, bars, bedrooms, and storage with finish selections finalized before build.",
      },
    },
  ],
};

export default function BasementFinishing() {
  const checklistItems = [
    "Moisture & Insulation Assessment",
    "Layout & Code Planning (egress)",
    "Framing & Soundproofing",
    "Electrical, Lighting & Low-Voltage",
    "Plumbing Rough-Ins (baths/bars)",
    "HVAC & Ventilation",
    "Drywall, Trim & Paint",
    "Flooring & Finishes",
  ];

  const basementCards = [
    {
      title: "Family & Media Rooms",
      image: "/basement-family-media.jpg",
      alt: "Finished basement family room with sectional and media wall",
      description:
        "Cozy living spaces in Spokane with media walls, built-ins, and layered lighting for movie nights and everyday hangouts.",
    },
    {
      title: "Guest Suites & Egress Bedrooms",
      image: "/basement-egress-bedroom.jpg",
      alt: "Basement egress bedroom with large window well",
      description:
        "Code-correct egress windows, closets, quiet HVAC, and nearby baths to create comfortable, legal sleeping spaces.",
    },
    {
      title: "Home Gyms & Offices",
      image: "/basement-gym-office.jpg",
      alt: "Basement home gym with rubber flooring and office nook",
      description:
        "Rubber or LVP floors, mirror walls, sound control, and dedicated circuits so your gym or office actually works.",
    },
    {
      title: "Bars, Baths & Laundry",
      image: "/basement-bar-bath.jpg",
      alt: "Basement wet bar with tile backsplash and adjacent bath",
      description:
        "Wet bars with GFCI, vented baths with tile showers, and smart laundry layouts to keep chores efficient.",
    },
    {
      title: "Dry, Warm & Quiet",
      image: "/basement-banner.jpg",
      alt: "Framed and insulated basement walls with vapor barrier",
      description:
        "Moisture control, proper insulation, and soundproofing so your basement feels like real living space—not an afterthought.",
    },
    {
      title: "Eco & Energy Upgrades",
      image: "/basement-eco-upgrades.jpg",
      alt: "Basement with efficient LED lighting and insulated walls",
      description:
        "LED lighting, smart controls, low-VOC finishes, and insulation upgrades that lower bills year-round. Even in Spokane winters.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="basement-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/basement-hero.jpg"
            alt="Modern finished basement in Spokane with media area and built-ins"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Basement Finishing in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Dry, comfortable, code-correct basements—planned properly and
                built to feel like the rest of your home.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/quote" className="btn btn-primary">
                  Get a Free In-Home Estimate
                </a>
              </div>
              <div className="mt-4 text-sm opacity-90">
                ★ 4.8 Google reviews • Licensed & insured • Local warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do + checklist */}
      <div className="px-6 my-30 max-w-3xl text-center">
        <h2 className="text-5xl mb-10">Finish Your Basement the Right Way</h2>
        <p>
          We start with moisture, layout, and egress—so your basement is safe,
          dry, and livable. Then we dial in lighting, storage, sound, and
          finishes that match your upstairs style.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band cards */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {basementCards.map((c, i) => (
            <div
              key={i}
              className="bg-white shadow-sm p-8 flex flex-col hover:shadow-2xl transition overflow-hidden"
            >
              <Image
                width={600}
                height={300}
                priority={i === 0}
                src={c.image}
                alt={c.alt}
                className="w-full h-48 object-cover mb-6"
              />
              <h3 className="text-3xl font-bold mb-4">{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <div className="pt-40 px-6 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Process</h2>
        <p className="max-w-3xl mx-auto">
          A predictable finish starts with alignment. You’ll get a written
          schedule, regular updates, dust containment, and a final walkthrough
          before we call it done or your basement remodel in Spokane or Northern
          Idaho.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Inspect & Plan</h4>
            <p>
              Moisture and insulation assessment, egress planning, and
              room-by-room layout with budget guardrails.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Design & Rough-Ins</h4>
            <p>
              Electrical, plumbing, and HVAC rough-ins, plus sound control and
              low-voltage for media/office needs.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Build & Walkthrough</h4>
            <p>
              Framing → drywall → finishes → punch list. We don’t wrap until
              details are right.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ContactButtons />
        </div>
      </div>

      {/* Cost drivers & design */}
      <div className="pb-20 px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold my-4">
          What Drives the Cost of Your Spoakne Basement Remodel
        </h2>
        <p>
          Scope and site conditions: moisture remediation, egress cuts, plumbing
          runs for baths/bars, insulation type, and finish level. Spokane labor,
          permits, and inspections are included so you know what to expect.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Design Options That Work
        </h2>
        <p>
          Family rooms, media walls, gyms, offices, guest suites, and
          storage—all tailored to your home. We blend new finishes with existing
          so the basement feels original, not tacked on.
        </p>
      </div>

      {/* Banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/basement-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Basements Built for Daily Life
          </h2>
          <h2 className="text-white drop-shadow-md flex items-baseline mt-10 text-3xl">
            Proudly Serving Spokane and Beyond
          </h2>
          <p className="text-white">
            Spokane • Spokane Valley • Liberty Lake • Mead • Airway Heights •
            Millwood • Coeur d’Alene, ID • Post Falls, ID. If you’re nearby,
            we’ll let you know if we can serve it well or refer a trusted pro.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <section className="bg-[#FFB229] lg:p-40 p-10 w-full">
        <GetAQuote />
      </section>
    </section>
  );
}
