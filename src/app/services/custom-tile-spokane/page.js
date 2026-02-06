import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Custom Tile Installation in Spokane, WA | Spokane Home Pros",
  description:
    "Custom tile installation in Spokane, WA for showers, floors, backsplashes, and fireplaces. Precise layout, flat substrates, waterproofing, and clean grout lines.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Tile Installation",
  serviceType: "Tile installation",
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
      name: "What types of tile work do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install tile for showers and tub surrounds, bathroom and kitchen floors, backsplashes, fireplace surrounds, and entryways. We work with porcelain, ceramic, and natural stone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle waterproofing for shower tile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When tile is installed in wet areas, we use proven waterproofing systems, proper slope-to-drain methods, and best-practice prep so the assembly performs long-term.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install large-format tile and level uneven surfaces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We prep substrates for flatness, use appropriate mortars, and apply leveling systems when needed to keep lippage low and lines clean—especially with large-format tile.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a tile project usually take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on scope, tile size, prep needs, and curing time. Many backsplashes finish quickly, while showers and floors can take several days. You’ll get a clear schedule up front.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install heated tile floors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can install heated floor systems under tile when the project scope supports it and coordinate electrical requirements as needed.",
      },
    },
  ],
};

export default function CustomTile() {
  // Checklist tuned for tile work
  const checklistItems = [
    "Layout Planning & Tile Selection Support",
    "Surface Prep (flatness, backer, underlayment)",
    "Waterproofing for Wet Areas (showers, tub surrounds)",
    "Precision Cuts, Clean Edges & Trim Profiles",
    "Floors, Walls, Backsplashes & Fireplace Surrounds",
    "Grout, Caulk & Movement Joints Done Right",
    "Heated Tile Floors (when applicable)",
    "Clean Worksites, Protection & Final Walkthrough",
  ];

  // Yellow band cards — tile-focused
  const tileCards = [
    {
      title: "Showers & Wet Areas",
      image: "/tiling-shower.jpg",
      alt: "Custom tile shower installation with clean grout lines and niche",
      description:
        "Tile that looks sharp and holds up—proper prep, waterproofing, slope-to-drain details, and clean finishes in the places that matter most.",
    },
    {
      title: "Floors & Entryways",
      image: "/custom-tile.jpg",
      alt: "Tile floor installation with straight lines and tight joints",
      description:
        "Durable tile floors installed on flat, stable substrates to reduce lippage, prevent cracks, and keep the finish looking crisp for years.",
    },
    {
      title: "Kitchen Backsplashes",
      image: "/tiling-hero.jpg",
      alt: "Kitchen tile backsplash installation with precise cuts and alignment",
      description:
        "Straight lines, tight cuts around outlets, and trim that looks intentional. A backsplash should read clean from across the room.",
    },
    {
      title: "Fireplace Surrounds",
      image: "/bathroom-modern.jpg",
      alt: "Tile fireplace surround with balanced layout and modern finish",
      description:
        "A focal point that feels custom—balanced layout, thoughtful material transitions, and finish details that elevate the whole room.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="custom-tile-jsonld" />

      {/* HERO with overlay text on image */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/tiling-hero.jpg"
            alt="Custom tile installation in Spokane, WA with precision layout and clean lines"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Custom Tile Installation in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Precise layouts, flat prep, clean grout lines, and tile work
                built to last. Floors, showers, backsplashes, and more—done
                right the first time.
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
        <h2 className="text-5xl mb-10">Tile Work That Looks Clean Up Close</h2>
        <p>
          Great tile isn’t just the tile—it’s the prep, the layout, and the
          finish details. We focus on flat substrates, consistent spacing,
          straight lines, and transitions that look intentional. From kitchens
          to bathrooms to entryways, we keep worksites clean and communicate
          clearly so you always know what’s happening next.
        </p>
        <CheckList items={checklistItems} />
      </div>

      {/* Yellow band section */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {tileCards.map((c, i) => (
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
                className="w-full h-96 object-cover mb-6"
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
          Tile projects go smoothly when the prep and the plan are solid. You’ll
          get clear expectations, protection for surrounding surfaces, and a
          final walkthrough so the finish looks right—and performs right.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Measure & Layout Plan</h4>
            <p>
              We review the space, tile type, and pattern. Then we plan cuts,
              transitions, trim, and symmetry so it reads clean.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Prep & Install</h4>
            <p>
              Flatness and substrate stability come first. Wet areas get proper
              waterproofing before tile goes on.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">
              3) Grout, Detail & Finish
            </h4>
            <p>
              Grout, caulk, movement joints, and clean edges. Then a final
              walkthrough to confirm the details are tight.
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
          What Drives the Cost of Custom Tile Installation (No Fluff)
        </h2>
        <p>
          Cost depends most on prep and complexity: surface flatness, demo,
          waterproofing requirements, tile size (large-format takes more prep),
          patterns (herringbone, mosaics, borders), trim details, and how many
          corners/cuts the layout requires. Material choices also
          matter—porcelain vs. natural stone, specialty grout, and premium edge
          profiles.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Tile Options That Work in Real Homes
        </h2>
        <p>
          We install tile that fits how you live: durable porcelain for floors
          and entryways, easy-clean backsplash materials in kitchens, and
          well-detailed wet-area assemblies in showers. Want a cleaner look?
          Larger tile and minimal grout lines help. Want character? Mosaics and
          patterns can add it—without sacrificing function.
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
            Tile That Looks Custom—Because It Is
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
