import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Flooring Installation in Spokane, WA | Spokane Home Pros",
  description:
    "Flooring installation in Spokane, WA including LVP, laminate, hardwood, and tile flooring. Subfloor prep, clean transitions, and durable finishes built for busy homes.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Installation",
  serviceType: "Flooring installation",
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
      name: "What types of flooring do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install common flooring types including luxury vinyl plank (LVP), laminate, hardwood, and tile flooring. We can help you choose the best option for traffic, moisture, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle subfloor prep and leveling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A quality install depends on the surface underneath. We address squeaks, damage, flatness, and transitions so the finished floor looks right and performs well.",
      },
    },
    {
      "@type": "Question",
      name: "Is LVP a good choice for Spokane homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. LVP is durable, moisture-resistant, and well-suited for busy households. We’ll recommend the right product and underlayment based on your space.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install flooring during a remodel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We frequently coordinate flooring with bathroom remodeling, tile work, trim, and paint so everything finishes cleanly and in the right order.",
      },
    },
    {
      "@type": "Question",
      name: "How long does flooring installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on square footage, prep needs, and material type. We provide a clear schedule and communicate any changes before they affect the timeline.",
      },
    },
  ],
};

export default function FlooringInstallationSpokane() {
  const checklistItems = [
    "Flooring Selection & Layout Planning",
    "Old Flooring Removal (if needed)",
    "Subfloor Repair & Leveling",
    "Underlayment & Moisture Barriers",
    "LVP, Laminate & Hardwood Installation",
    "Tile Flooring Installation (when applicable)",
    "Clean Transitions, Trim & Thresholds",
    "Final Walkthrough & Clean Jobsite",
  ];

  const flooringCards = [
    {
      title: "Luxury Vinyl Plank (LVP)",
      image: "/flooring.jpeg",
      alt: "Luxury vinyl plank flooring installed in a Spokane home",
      description:
        "A durable, moisture-resistant option for busy homes. We install LVP with correct underlayment and clean transitions.",
    },
    {
      title: "Laminate Flooring",
      image: "/flooring-laminate.jpg",
      alt: "Laminate flooring installation with clean trim",
      description:
        "Great looks on a budget when installed correctly—flat prep, proper expansion gaps, and tidy trim work.",
    },
    {
      title: "Hardwood Installation",
      image: "/flooring-hardwood.jpg",
      alt: "Hardwood flooring installed in a living room",
      description:
        "Classic hardwood installed with attention to acclimation, fasteners, and finish details so the floor performs over time.",
    },
    {
      title: "Subfloor Prep & Leveling",
      image: "/flooring-subfloor-prep.jpg",
      alt: "Subfloor preparation and leveling before flooring installation",
      description:
        "The biggest driver of a great floor is what’s underneath. We repair damage, reduce squeaks, and level where needed.",
    },
    {
      title: "Stairs & Transitions",
      image: "/flooring-stairs-transition.jpg",
      alt: "Clean flooring transitions and stair finishing detail",
      description:
        "Stair noses, thresholds, and transitions finished cleanly so your floor looks intentional and safe to use daily.",
    },
    {
      title: "Remodel Coordination",
      image: "/flooring-remodel.jpg",
      alt: "Flooring installation during a home remodel project",
      description:
        "We coordinate flooring with tile, trim, and paint so the sequence is right and the finished space looks cohesive.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="flooring-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/flooring.jpg"
            alt="Flooring installation in Spokane, WA with modern durable finish"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Flooring Installation in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                LVP, laminate, hardwood, and tile flooring installed with solid
                prep, clean transitions, and finishes that hold up to real life.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/quote" className="btn btn-primary">
                  Get a Free In-Home Estimate
                </a>
                <a
                  href="/services/custom-tile-spokane"
                  className="btn btn-secondary"
                >
                  Need Tile Flooring?
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
        <h2 className="text-5xl mb-10">Floors Installed the Right Way</h2>
        <p>
          A great-looking floor is mostly prep and details—flat subfloors,
          correct underlayment, clean cuts, and transitions that don’t look like
          an afterthought. We help you choose a durable product, install it
          correctly, and leave your home clean and ready to use.
        </p>
        <CheckList items={checklistItems} />
        <p className="mt-6">
          If you’re updating a bathroom or kitchen, flooring often pairs with{" "}
          <a className="underline" href="/services/bathroom-remodeling">
            bathroom remodeling
          </a>{" "}
          and{" "}
          <a className="underline" href="/services/custom-tile-spokane">
            custom tile
          </a>{" "}
          for a cohesive finish.
        </p>
      </div>

      {/* Yellow band */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {flooringCards.map((c, i) => (
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
        <h2 className="text-4xl font-semibold mb-6">Our Flooring Process</h2>
        <p className="max-w-3xl mx-auto">
          Flooring goes fastest when the prep is right. We measure, plan layout,
          handle subfloor issues, and install with clean lines so the space
          feels finished—not “almost done.”
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Measure + Plan</h4>
            <p>
              We confirm square footage, transitions, and layout. You’ll get
              clear expectations on prep, materials, and timing.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">2) Prep the Subfloor</h4>
            <p>
              Leveling, repairs, squeak reduction, moisture barriers, and
              underlayment so the install performs properly.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Install + Finish</h4>
            <p>
              Install flooring, complete trim and transitions, and do a final
              walkthrough. We leave the site clean and ready to use.
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
          What Actually Drives Flooring Installation Costs (No Fluff)
        </h2>
        <p>
          Cost is driven by prep (leveling, repairs, removal), material type,
          stairs and transitions, room complexity, and moisture management. The
          quickest way to a floor that lasts is doing prep right—especially in
          high-traffic areas and spaces with seasonal movement.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Choosing the Right Floor for Your Home
        </h2>
        <p>
          We help you balance durability, maintenance, and budget. LVP is often
          a great fit for busy households. Laminate can be a solid value choice.
          Hardwood offers a classic look when installed and cared for properly.
          Tile works well in wet areas and entries when the substrate is built
          for it.
        </p>
      </div>

      {/* Banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/flooring-hardwood.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            Durable Floors for Real Life
          </h2>
          <h2 className="text-white drop-shadow-md flex items-baseline mt-10 text-3xl">
            Proudly Serving Spokane and Beyond
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
