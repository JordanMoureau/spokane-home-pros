import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Drywall Repair in Spokane, WA | Spokane Home Pros",
  description:
    "Drywall repair in Spokane, WA for holes, cracks, water damage, ceiling patches, texture matching, and paint-ready finishes. Clean work, clear pricing, fast scheduling.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Repair",
  serviceType: "Drywall repair",
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
      name: "Can you match texture and blend the repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We match common textures and feather repairs so they blend naturally. We can leave a paint-ready finish or handle painting if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair drywall after water damage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After the moisture source is resolved and materials are dry, we replace damaged drywall, treat affected areas as needed, and restore a clean, finished surface.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drywall repair cost in Spokane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the size of the repair, ceiling vs. wall, access, texture matching, and whether painting is included. We provide a clear estimate after a quick assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix ceiling cracks or nail pops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair ceiling cracks, seam issues, and nail pops, reinforce where needed, and finish with a smooth or texture-matched surface.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle drywall as part of remodel work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Drywall repair and replacement is a common part of bathroom remodels, kitchen updates, and flooring projects. We coordinate work so finishes line up cleanly.",
      },
    },
  ],
};

export default function DrywallSpokane() {
  const checklistItems = [
    "Hole & Crack Repairs (small to large)",
    "Ceiling Patches & Crack Repair",
    "Water Damage Drywall Replacement",
    "Tape/Seam Repairs & Nail Pops",
    "Texture Matching (common Spokane textures)",
    "Corner Bead & Edge Repairs",
    "Skim Coats for Smooth Walls",
    "Paint-Ready Finishing & Clean Worksite",
  ];

  const drywallCards = [
    {
      title: "Holes, Dents & Cracks",
      image: "/drywall-hole-repair.jpg",
      alt: "Drywall hole repair with smooth finish",
      description:
        "From door-handle holes to long cracks—repairs that feather out cleanly so the wall looks continuous, not patched.",
    },
    {
      title: "Water Damage Restoration",
      image: "/drywall-water-damage.jpg",
      alt: "Drywall replaced after water damage and drying",
      description:
        "Once the source is fixed and materials are dry, we replace damaged drywall and restore clean, paint-ready finishes.",
    },
    {
      title: "Texture Matching",
      image: "/drywall-texture-match.jpg",
      alt: "Drywall texture matching and blending",
      description:
        "We match common textures and blend edges so repairs don’t stand out. The goal is “where was it?”",
    },
    {
      title: "Smooth Walls & Skim Coats",
      image: "/drywall-skim-coat.jpg",
      alt: "Skim coating drywall for a smooth finish",
      description:
        "Want a cleaner look? We skim coat and level walls so paint and lighting look sharp instead of highlighting flaws.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="drywall-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/drywall-hero.jpg"
            alt="Drywall repair in Spokane with smooth paint-ready finish"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Drywall Repair in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Holes, cracks, ceilings, water damage, and texture matching—done
                cleanly and finished paint-ready. Clear estimates, tidy work,
                and scheduling that respects your time.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/quote" className="btn btn-primary">
                  Get a Free In-Home Estimate
                </a>
                <a
                  href="/services/bathroom-remodeling"
                  className="btn btn-secondary"
                >
                  Remodeling? Start Here
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
          Drywall Repairs That Actually Disappear
        </h2>
        <p>
          Drywall is one of those things you only notice when it’s wrong—cracks
          that catch the light, patches that telegraph through paint, and
          ceiling repairs that never blend. We focus on proper backing, strong
          joints, clean feathering, and texture matching so your repair looks
          like it was never there.
        </p>
        <CheckList items={checklistItems} />
        <p className="mt-6">
          If drywall work is part of a larger update, we often coordinate it
          with{" "}
          <a className="underline" href="/services/bathroom-remodeling">
            bathroom remodeling
          </a>{" "}
          or other interior work so finishes line up cleanly.
        </p>
      </div>

      {/* Yellow band section */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {drywallCards.map((c, i) => (
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
          Clean drywall work is mostly prep and patience. We assess the cause,
          reinforce where needed, protect your space, and finish the repair so
          it blends under real lighting.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Assess + Protect</h4>
            <p>
              We identify what caused the damage, set expectations, and protect
              floors, furniture, and pathways before work begins.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Repair + Reinforce</h4>
            <p>
              Proper backing, taping, and compound work. We address seams,
              corners, and movement so the repair holds.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Finish + Blend</h4>
            <p>
              Texture matching and a paint-ready finish. We clean up thoroughly
              and review the result before we wrap.
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
          What Actually Drives the Cost of Drywall Repair (No Fluff)
        </h2>
        <p>
          Cost depends on repair size, wall vs. ceiling, access (stairs,
          height), moisture damage, texture matching complexity, and whether
          painting is included. Repairs that require reinforcing movement
          (seams, nail pops) can take more steps than a simple patch, but that’s
          what keeps it from cracking again.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Common Spokane Drywall Issues
        </h2>
        <p>
          Older homes often show settling cracks and seam movement. Seasonal
          humidity shifts can exaggerate small flaws, and ceiling repairs become
          more noticeable under angled winter lighting. We aim for repairs that
          look good in real life—not just the day the mud dries.
        </p>
      </div>

      {/* Big banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/drywall-ceiling-repair.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Drywall Finished Clean and Paint-Ready
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
