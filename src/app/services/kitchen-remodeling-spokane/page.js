import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Kitchen Remodeling in Spokane, WA | Spokane Home Pros",
  description:
    "Spokane kitchen remodeling with smart layouts, custom cabinets, durable countertops, lighting, flooring, and clean job sites. Design–build and local warranty.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Remodeling",
  serviceType: "Kitchen remodel",
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
      name: "Do I need permits for a kitchen remodel?",
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
        text: "Often, yes. We isolate dust, set up protection, and can help with a temporary kitchen so daily life continues.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer cabinet refacing as well as full replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We’ll price both options and help you choose based on layout, condition, and goals.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical kitchen remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects finish in 4–12 weeks depending on scope. You’ll get a written schedule and updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle design and selections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. From layout to cabinets, counters, fixtures, lighting, and finishes—samples in hand before we order.",
      },
    },
  ],
};

export default function KitchenRemodeling() {
  // Checklist mirrors Services style, but kitchen-optimized (from your SEO article)
  const checklistItems = [
    "Design & Layout Planning",
    "Custom or Refaced Cabinets",
    "Quartz & Stone Countertops",
    "Backsplash & Tilework",
    "Lighting & Electrical Upgrades",
    "Plumbing & Fixtures",
    "Flooring (LVP, Tile, Engineered Wood)",
    "Permits, Inspections & Daily Dust Control",
  ];

  // “Yellow band” cards — same design as Services, content optimized
  const kitchenCards = [
    {
      title: "Design & Layout",
      image: "/design-to-reality.jpg", // planning split/overlay image
      alt: "Kitchen renovations from sketch to finished space in Spokane Washington",
      description:
        "We plan flow, storage, and work zones that fit real life—galley, island, or single-wall—then finalize selections before we build.",
    },
    {
      title: "Cabinets & Storage",
      image: "/island-white-classic.jpg",
      alt: "Spokane kitchen remodel with shaker cabinets and large island",
      description:
        "Shaker or flat-panel, two-tone looks, white oak or maple, soft-close hardware, plus inserts for spices, trash, and pantry pull-outs.",
    },
    {
      title: "Counters, Backsplash & Tile",
      image: "/hero-bright-scandi.jpg",
      alt: "Light kitchen renovation with wood accents and tile backsplash",
      description:
        "Durable quartz, bold veined stone accents, and clean tilework that stands up to Spokane winters and busy kitchens.",
    },
    {
      title: "Lighting & Electrical",
      image: "/before-after-split.jpg",
      alt: "Before and after of a kitchen remodel with new lighting",
      description:
        "Task lighting, dimmable scenes, under-cabinet LEDs, dedicated appliance circuits, and code-compliant ventilation in Spokane Washington and surounding area.",
    },
    {
      title: "Small Kitchen Ideas",
      image: "/island-white-classic.jpg",
      alt: "Efficient small kitchen remodel with island seating in Spokane",
      description:
        "Make tight spaces live big—pull-out pantries, fold-down prep, glass uppers, and light-reflective finishes for an open feel in your kitchen renovation.",
    },
    {
      title: "Eco-Friendly Upgrades",
      image: "/design-to-reality.jpg",
      alt: "Modern kitchen featuring sustainable finishes",
      description:
        "Low-VOC paints, ENERGY STAR appliances, recycled-content surfaces, and smart lighting that lowers utility costs for long winters in Spokane and the eastern PNW region.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="kitchen-jsonld" />

      {/* HERO with overlay text on image */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/hero-bright-scandi.jpg"
            alt="Bright Spokane kitchen remodel with wood counters and open shelving"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Kitchen Remodeling in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Build kitchens that cook better, look better, and last
                longer—without chaos. Clean worksites, tight timelines, clear
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

      {/* What we do + checklist — exact component & spacing */}
      <div className="px-6 my-30 max-w-3xl text-center">
        <h2 className="text-5xl mb-10">
          Kitchen Remodeling in Spokane That Fits Real Life
        </h2>
        <p>
          Every project starts with a plan—layouts that fit how you cook,
          storage that actually holds your stuff, and finishes that handle
          Spokane winters. We coordinate trades, keep a clean site, and give you
          clear updates from demo to final walkthrough.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band section — identical structure, square corners (no rounded) */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {kitchenCards.map((c, i) => (
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

      {/* Process — mirrors your content rhythm, still consistent */}
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
              options and show material samples for your remodel project.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Design & Selections</h4>
            <p>
              Finalize cabinets, counters, fixtures, tile, and lighting. We
              order materials and lock the schedule.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Build & Walkthrough</h4>
            <p>
              Demo → rough-ins → cabinets/counters → finishes. Punch list
              completed before we wrap.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ContactButtons />
        </div>
      </div>

      {/* Service area — same section as Services */}
      <div className="pb-20 px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold my-4">
          What Actually Drives The Cost of Your Kitchen Remodel (No Fluff)
        </h2>

        <p>
          Your price depends most on scope and selections: layout changes
          (moving walls, plumbing, or electrical), cabinet grade (custom vs.
          refacing), countertop material (quartz, veined stone, butcher block
          accents), appliance spec, and electrical/plumbing complexity.
          Spokane-specific factors—labor, permits, and inspections—are baked
          into our plan so there are fewer surprises and a clearer path to
          finish.
          <br /> <br />
          In Spokane, we keep prices low and materials quality for your next big
          remodeling or renovation project.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Design Options That Work (Big or Small Kitchens)
        </h2>

        <p>
          We tailor the look and function to how you cook: cabinets (shaker or
          flat-panel, two-tone, white oak or maple, soft-close, smart inserts),
          surfaces (durable quartz with statement stone where it counts), and
          lighting (task/under-cabinet with dimmable scenes). Tight footprint?
          We make small kitchens live big with galley/single-wall layouts,
          pull-out pantries, glass uppers, and light-reflective finishes. Prefer
          greener choices? We can recommend low-VOC paints, ENERGY STAR
          appliances, and recycled-content surfaces.
        </p>
      </div>

      {/* Big banner — same structure; square corners */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/island-white-classic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Kitchens Built for Daily Life
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

      {/* Contact form — added at the bottom, still consistent */}
      <section className="bg-[#FFB229] lg:p-40 p-10 w-full">
        <GetAQuote />
      </section>
    </section>
  );
}
