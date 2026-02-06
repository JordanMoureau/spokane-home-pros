import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Exterior Home Remodeling in Spokane, WA | Spokane Home Pros",
  description:
    "Exterior home remodeling in Spokane, WA including siding, windows, decks, doors, and exterior repairs. Durable materials, clean sites, and work built for Inland Northwest weather.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Home Remodeling",
  serviceType: "Exterior remodeling",
  areaServed: [
    "Spokane WA",
    "Spokane Valley WA",
    "Liberty Lake WA",
    "Mead WA",
    "Airway Heights WA",
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
      name: "What exterior remodeling services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle siding replacement, window and door installs, deck construction, exterior repairs, and upgrades designed to improve durability, efficiency, and curb appeal.",
      },
    },
    {
      "@type": "Question",
      name: "What exterior materials work best in Spokane’s climate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durability matters in freeze–thaw cycles. We recommend materials and installation methods proven to handle moisture, temperature swings, and seasonal weather common to the Inland Northwest.",
      },
    },
    {
      "@type": "Question",
      name: "Do exterior projects require permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some exterior work does require permits, especially decks, structural changes, and window or door modifications. We help determine requirements and coordinate permits when needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can exterior work be done year-round?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many exterior projects are seasonal, but some work can be completed year-round depending on scope, materials, and weather conditions.",
      },
    },
    {
      "@type": "Question",
      name: "How long do exterior remodeling projects take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by project type and scope. We provide a clear schedule and communicate changes so you know what to expect before work begins.",
      },
    },
  ],
};

export default function ExteriorsSpokane() {
  const checklistItems = [
    "Siding Repair & Replacement",
    "Window & Door Installation",
    "Deck Construction & Repairs",
    "Exterior Trim & Detail Work",
    "Weather-Resistant Materials",
    "Moisture & Flashing Control",
    "Permit Coordination When Required",
    "Clean, Organized Job Sites",
  ];

  const exteriorCards = [
    {
      title: "Siding & Exterior Repairs",
      image: "/exterior-siding.jpeg",
      alt: "Exterior siding replacement on Spokane home",
      description:
        "Siding repairs and replacements that protect your home from moisture while improving curb appeal and long-term durability.",
    },
    {
      title: "Windows & Doors",
      image: "/exterior-windows.jpeg",
      alt: "New exterior windows installed on a home",
      description:
        "Window and door installs focused on proper flashing, insulation, and alignment for energy efficiency and weather protection.",
    },
    {
      title: "Deck Construction",
      image: "/exterior-deck.jpg",
      alt: "Custom deck built on Spokane home exterior",
      description:
        "Decks built for real use—solid framing, code-compliant railings, and materials that hold up to Inland Northwest seasons.",
    },

    {
      title: "Curb Appeal Upgrades",
      image: "/exteriors-pergola.jpg",
      alt: "Home exterior upgrades improving curb appeal",
      description:
        "Targeted exterior improvements that boost value and first impressions without unnecessary scope or cost.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="exterior-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/exterior-hero.jpeg"
            alt="Exterior home remodeling project in Spokane, WA"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Exterior Home Remodeling in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Durable exterior upgrades built for Spokane weather—siding,
                windows, doors, decks, and repairs done cleanly and correctly.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/quote" className="btn btn-primary">
                  Get a Free Estimate
                </a>
              </div>
              <div className="mt-4 text-sm opacity-90">
                ★ 4.8 Google reviews • Licensed & insured • Local warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + checklist */}
      <div className="px-6 my-30 max-w-3xl text-center">
        <h2 className="text-5xl mb-10">
          Exterior Work That Protects Your Home
        </h2>
        <p>
          Exterior projects aren’t just about looks—they’re about protecting the
          structure underneath. We focus on proper installation, moisture
          control, and materials that perform through Spokane’s seasonal
          weather.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {exteriorCards.map((c, i) => (
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
        <h2 className="text-4xl font-semibold mb-6">Our Exterior Process</h2>
        <p className="max-w-3xl mx-auto">
          Exterior work benefits from planning and precision. We evaluate
          existing conditions, select appropriate materials, and execute with
          clean sites and clear communication.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Evaluate & Plan</h4>
            <p>
              Assess structure, exposure, and goals. We identify problem areas
              and define scope before work begins.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Build & Install</h4>
            <p>
              Install siding, windows, decks, or repairs with attention to
              flashing, sealing, and structural integrity.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Final Review</h4>
            <p>
              Walkthrough, detail check, and cleanup so the finished exterior
              looks right and performs as intended.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ContactButtons />
        </div>
      </div>

      {/* Cost drivers */}
      <div className="pb-20 px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold my-4">
          What Drives Exterior Remodeling Costs
        </h2>
        <p>
          Costs vary based on scope, materials, access, existing damage,
          permitting, and seasonal timing. Investing in proper installation and
          moisture control up front helps avoid larger repairs later.
        </p>
      </div>

      {/* Banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/exterior-windows.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Built for Spokane Weather
          </h2>
          <h2 className="text-white drop-shadow-md flex items-baseline mt-10 text-3xl">
            Proudly Serving Spokane and Nearby Communities
          </h2>
          <p className="text-white">
            Spokane • Spokane Valley • Liberty Lake • Mead • Airway Heights •
            Millwood • Coeur d’Alene, ID • Post Falls, ID.
          </p>
        </div>
      </div>

      {/* Contact */}
      <section className="bg-[#FFB229] lg:p-40 p-10 w-full">
        <GetAQuote />
      </section>
    </section>
  );
}
