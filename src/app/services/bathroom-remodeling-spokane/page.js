import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Bathroom Remodeling in Spokane, WA | Spokane Home Pros",
  description:
    "Spokane bathroom remodeling with custom tile showers, waterproofing, vanities, lighting, ventilation, and clean job sites. Design–build and local warranty.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Remodeling",
  serviceType: "Bathroom remodel",
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
      name: "Do I need permits for a bathroom remodel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We pull permits for electrical, plumbing, and any structural changes and coordinate inspections.",
      },
    },
    {
      "@type": "Question",
      name: "Can I live at home during the remodel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. We isolate dust, protect pathways, and keep one bathroom usable when possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom tile showers and waterproof properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use proven waterproofing systems, slope-to-drain pans, and flood testing before tile.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical bathroom remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects finish in 3–8 weeks depending on scope. You’ll get a written schedule and updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle design and selections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. From tile and vanities to fixtures, lighting, and ventilation—samples in hand before we order.",
      },
    },
  ],
};

export default function BathroomRemodeling() {
  // Checklist tuned for bathrooms
  const checklistItems = [
    "Design & Layout Planning",
    "Custom Tile Showers & Tubs",
    "Waterproofing (membranes, pans, flood test)",
    "Vanities, Tops & Storage",
    "Tile Floors & Heated Floors",
    "Plumbing Fixtures & Valves",
    "Lighting, GFCI & Ventilation",
    "Permits, Inspections & Daily Dust Control",
  ];

  // Yellow band cards — bathroom-focused
  const bathroomCards = [
    {
      title: "Design & Layout",
      image: "/bath-design-to-reality.jpg",
      alt: "Bathroom design planning from moodboard to finished space",
      description:
        "Smart footprints that make small baths feel big—better storage, safer clearances, and selections locked before demo.",
    },
    {
      title: "Showers & Waterproofing",
      image: "/bath-tile-shower.jpg",
      alt: "Custom tile shower with niche and glass",
      description:
        "Custom tile showers, niches, benches, linear drains, and proven waterproofing systems so the beauty you see stays leak-free.",
    },
    {
      title: "Vanities & Storage",
      image: "/bath-vanity-storage.jpg",
      alt: "Modern double vanity with storage",
      description:
        "Single or double vanities, quartz or stone tops, soft-close drawers, medicine cabinets, and built-ins that actually hold stuff.",
    },
    {
      title: "Lighting & Ventilation",
      image: "/bath-lighting-vent.jpg",
      alt: "Bathroom with layered lighting and quiet fan",
      description:
        "Task lights at mirrors, dimmable ambient scenes, code-compliant GFCI, and quiet fans that clear humidity fast.",
    },
    {
      title: "Small Bath Ideas",
      image: "/bath-small-ideas.jpg",
      alt: "Small bathroom optimized with glass and light tile",
      description:
        "Pocket doors, wall-hung vanities, glass showers, and light-reflective tile to make compact spaces live larger.",
    },
    {
      title: "Eco-Friendly Upgrades",
      image: "/bath-hero-modern.jpg",
      alt: "Bathroom with sustainable finishes",
      description:
        "Low-VOC paints, EPA WaterSense fixtures, efficient lighting, and heated floors on timers to trim utility costs.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="bathroom-jsonld" />

      {/* HERO with overlay text on image */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/bath-hero-modern.jpg"
            alt="Bright modern Spokane bathroom remodel with custom tile shower and vanity"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Bathroom Remodeling in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Waterproof, code-correct bathrooms that look elevated and work
                every day. Clean worksites, tight timelines, clear
                communication.
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
        <h2 className="text-5xl mb-10">
          Bathroom Remodeling That Fits Real Life
        </h2>
        <p>
          Start with a plan—layouts that pass code clearances, storage that
          actually holds your stuff, and materials that handle Spokane winters
          and daily humidity. We coordinate trades, keep a clean site, and give
          you clear updates from demo to final walkthrough.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band section */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {bathroomCards.map((c, i) => (
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
          A predictable remodel starts with alignment. You’ll get a written
          schedule, regular updates, dust containment, and a final walkthrough
          before we call it done.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) In-Home Consult</h4>
            <p>
              Goals, measurements, and budget guardrails. We review layout
              options and show material samples.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Design & Selections</h4>
            <p>
              Tile, vanities, fixtures, lighting, and ventilation. We order
              materials and lock the schedule.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Build & Walkthrough</h4>
            <p>
              Demo → rough-ins → waterproofing/tile → finishes. Punch list
              completed before we wrap.
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
          What Actually Drives the Cost of Your Spokane Bathroom Remodel (No
          Fluff)
        </h2>
        <p>
          Price depends most on scope and selections: moving plumbing or walls,
          custom tile showers vs. prefabricated pans, vanity/stone choices,
          fixture spec, electrical and ventilation complexity. Spokane-specific
          factors—labor, permits, and inspections—are baked into our plan so
          there are fewer surprises and a clearer path to finish.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Design Options That Work (Big or Small Baths)
        </h2>
        <p>
          We tailor the look and function to how you live: tile (large-format,
          mosaics, niches, benches), vanities (single/double, wall-hung, storage
          inserts), surfaces (quartz or stone), and lighting (task/ambient with
          dimmers). Tight footprint? Wall-hung vanities, glass showers, and
          light-reflective tile keep things open. Prefer greener choices?
          Low-VOC paints, WaterSense fixtures, and job-site waste sorting reduce
          impact and costs.
        </p>
      </div>

      {/* Big banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/bath-vanity-storage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Bathrooms Built for Daily Life
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
