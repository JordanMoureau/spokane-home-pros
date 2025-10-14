import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Room Additions in Spokane, WA | Spokane Home Pros",
  description:
    "Expand your living space with Spokane room additions. Bedrooms, home offices, sunrooms, and in-law suites designed, permitted, and built with precision.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Room Additions",
  serviceType: "Home additions",
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
      name: "Do I need permits for a room addition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Structural changes, electrical, plumbing, and HVAC all require permits and inspections in Spokane Washington. We handle the process for you.",
      },
    },
    {
      "@type": "Question",
      name: "What types of room additions do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design and build bedrooms, in-law suites, home offices, sunrooms, bonus rooms, and second-story additions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical addition take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects finish in 8–16 weeks depending on size and complexity. You’ll get a written schedule and daily updates.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match my home’s existing finishes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We source siding, roofing, and trim to match your home’s style so the addition blends seamlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can provide design services and help with layout and selections before construction begins.",
      },
    },
  ],
};

export default function RoomAdditions() {
  const checklistItems = [
    "Design & Plans",
    "Permits & Inspections",
    "Foundations & Framing",
    "Electrical, Plumbing & HVAC",
    "Roofing & Siding Integration",
    "Windows, Doors & Insulation",
    "Drywall, Trim & Paint",
    "Final Walkthrough & Warranty",
  ];

  const additionCards = [
    {
      title: "Bedroom & Suite Additions",
      image: "/addition-bedroom-suite.jpg",
      alt: "Spokane bedroom addition with large windows",
      description:
        "Extra bedrooms, primary suites, or in-law suites with private baths—complete with closets, lighting, and code-compliant egress.",
    },
    {
      title: "Home Offices & Flex Rooms",
      image: "/addition-home-office.jpg",
      alt: "Modern home office with built-in shelving",
      description:
        "Dedicated work-from-home spaces with custom built-ins, soundproofing, and smart lighting for productivity.",
    },
    {
      title: "Sunrooms & Four-Seasons Rooms",
      image: "/addition-sunroom.jpg",
      alt: "Bright sunroom with skylights and garden views",
      description:
        "Enjoy natural light year-round with insulated sunrooms—energy-efficient glass, skylights, and durable finishes.",
    },
    {
      title: "Second-Story Additions",
      image: "/addition-second-story.jpg",
      alt: "Two-story home with new addition",
      description:
        "Expand up, not out—structural reinforcement, new staircases, and integrated design to add living space without losing yard area.",
    },
    {
      title: "Kitchen & Living Room Expansions",
      image: "/addition-living-kitchen.jpg",
      alt: "Open concept living room addition",
      description:
        "Knock down walls, extend kitchens, or enlarge living areas to create open-concept layouts and better flow.",
    },
    {
      title: "Eco-Friendly Additions",
      image: "/addition-eco-friendly.jpg",
      alt: "Energy-efficient addition with solar panels",
      description:
        "Sustainable framing, high-efficiency windows, added insulation, and solar-ready roofs for lower long-term costs.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="addition-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/addition-hero.jpg"
            alt="Spokane home addition exterior with matching siding"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Room Additions in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Add space, value, and comfort to your home—designed, permitted,
                and built by Spokane’s trusted remodel team.
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
        <h2 className="text-5xl mb-10">Room Additions That Fit Your Life</h2>
        <p>
          From design to permits and build, we create additions that feel like
          they’ve always belonged. Bedrooms, sunrooms, in-law suites, and
          offices—tailored to Spokane homes and lifestyles.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band cards */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {additionCards.map((c, i) => (
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
          Predictable additions with clear plans and communication. You’ll get
          architectural drawings, daily updates, and a final walkthrough before
          we wrap.
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
            <h4 className="text-xl font-bold mb-2">2) Design & Permits</h4>
            <p>
              Architectural drawings, 3D renderings, permits, and approvals
              before construction begins.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Build & Walkthrough</h4>
            <p>
              Foundation → framing → finishes. Punch list completed before we
              call it done.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ContactButtons />
        </div>
      </div>

      {/* Cost drivers */}
      <div className="pb-20 px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold my-4">What Drives Your Cost</h2>
        <p>
          Scope and selections matter most: foundation type, structural tie-ins,
          roofing/siding match, utility runs (plumbing, HVAC, electrical), and
          finish levels. Spokane labor, permits, and inspections are included so
          you know what to expect.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Design Options That Work
        </h2>
        <p>
          Tailored to your home: second-story expansions, sunrooms with
          skylights, in-law suites with private entries, and energy-efficient
          upgrades. We blend new with existing for seamless results.
        </p>
      </div>

      {/* Banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/addition-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Additions Built to Last
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
