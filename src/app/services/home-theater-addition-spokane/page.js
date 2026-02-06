import ContactButtons from "../../components/ContactButtons";
import CheckList from "../../components/CheckList";
import GetAQuote from "../../components/GetAQuote";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";

export const dynamic = "force-static";

export const metadata = {
  title: "Home Theater Installation in Spokane, WA | Spokane Home Pros",
  description:
    "Home theater installation in Spokane, WA including media rooms, TV mounting, in-wall wiring, speaker installs, built-ins, lighting, and sound control. Clean finishes, safe wiring, and pro-grade results.",
};

// Structured data objects
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Theater Installation",
  serviceType: "Home theater installation",
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
      name: "What does a home theater installation include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home theater work can include a dedicated media room buildout, TV mounting, in-wall wiring, speaker placement, soundbar and surround installs, built-ins, lighting, and finish carpentry. Scope depends on your room and goals.",
      },
    },
    {
      "@type": "Question",
      name: "Can you hide wires in the wall and keep things clean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We plan cable paths, use in-wall rated wiring where appropriate, and focus on clean, finished results with minimal visible cords and tidy component placement.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add soundproofing or reduce echo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Depending on the room, we can improve sound control using insulation, sealing, drywall strategies, and other methods to reduce noise transfer and improve acoustics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with electricians for power and lighting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For projects that require electrical work, we coordinate with qualified trades and plan outlets, lighting, and controls for a safe, code-correct setup.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a media room or home theater project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on the scope. A basic install can be fast, while a full media room buildout with wiring, lighting, drywall, and finishes takes longer. We provide a clear schedule before work begins.",
      },
    },
  ],
};

export default function HomeTheaterAdditionSpokane() {
  const checklistItems = [
    "Room Planning & Layout (screen, seating, sightlines)",
    "TV Mounting & Equipment Placement",
    "In-Wall Wiring & Cable Management",
    "Speaker Installation (soundbar, surround, in-ceiling)",
    "Media Wall Built-Ins & Finish Carpentry",
    "Lighting Plans (dimmers, sconces, scenes)",
    "Sound Control (echo reduction, noise transfer)",
    "Clean Finishes, Patch/Texture & Paint-Ready Work",
  ];

  const theaterCards = [
    {
      title: "Speakers & Surround Sound",
      image: "/home-theater-speakers.jpg",
      alt: "In-wall or in-ceiling speakers installed for surround sound",
      description:
        "Speaker placement that makes sense for the room—soundbars, surrounds, in-ceiling speakers, and clean cut-ins.",
    },
    {
      title: "Media Wall Built-Ins",
      image: "/home-theater-builtins.jpg",
      alt: "Custom built-in media wall with shelving and storage",
      description:
        "Built-ins and media walls that hide gear, organize storage, and elevate the whole space with clean lines.",
    },
    {
      title: "Lighting & Control",
      image: "/home-theater-lighting.jpg",
      alt: "Home theater lighting with dimmers and warm ambiance",
      description:
        "Lighting that feels cinematic—dimmers, zones, and a plan for glare control so you can actually enjoy the screen.",
    },
    {
      title: "Sound Control & Drywall",
      image: "/sound-control.jpg",
      alt: "Sound control improvements using insulation and drywall strategies",
      description:
        "Options to reduce echo and noise transfer. We can coordinate drywall work so the space looks clean and performs better.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center w-full">
      <JsonLd json={[serviceLd, faqLd]} id="home-theater-jsonld" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/home-theater.jpg"
            alt="Home theater installation in Spokane, WA with large screen and clean built-ins"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Home Theater Installation in Spokane, WA
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Media rooms and home theaters built for clean finishes—TV
                mounting, in-wall wiring, speakers, built-ins, lighting, and
                sound control.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/quote" className="btn btn-primary">
                  Get a Free In-Home Estimate
                </a>
                <a
                  href="/services/drywall-spokane"
                  className="btn btn-secondary"
                >
                  Need Drywall Work Too?
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
        <h2 className="text-5xl mb-10">A Clean, Built-In Home Theater Feel</h2>
        <p>
          The goal isn’t just “TV on the wall.” It’s a room that looks
          intentional: clean lines, hidden wires, sensible speaker placement,
          and lighting that doesn’t fight the screen. We plan the layout,
          coordinate trades when needed, and finish the space so it feels like
          it was designed that way.
        </p>
        <CheckList items={checklistItems} />
        <p className="mt-6">
          Many theater projects include wall work for wiring and finishes. If
          you need patches, texture matching, or drywall upgrades, see{" "}
          <a className="underline" href="/services/drywall-spokane">
            drywall repair
          </a>{" "}
          for how we keep everything paint-ready.
        </p>
      </div>

      {/* Yellow band */}
      <section className="bg-[#ffba42] lg:p-40 p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 mx-auto">
          {theaterCards.map((c, i) => (
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
          A home theater works best when layout and infrastructure are planned
          up front. We focus on sightlines, cable paths, and finish details so
          the final result looks clean and works reliably.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">1) Plan the Room</h4>
            <p>
              Screen size, seating, and equipment location. We discuss goals and
              map wiring and speaker needs based on your space.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">
              2) Build the Infrastructure
            </h4>
            <p>
              In-wall wiring, speaker cut-ins, mounting prep, and coordination
              for power and lighting if needed—done safely and cleanly.
            </p>
          </div>
          <div className="bg-white shadow-sm p-8">
            <h4 className="text-xl font-bold mb-2">3) Finish + Walkthrough</h4>
            <p>
              Install, patch/texture where needed, align components, and do a
              final walkthrough so the room looks finished and functions
              properly.
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
          What Actually Drives Home Theater Installation Cost (No Fluff)
        </h2>
        <p>
          Cost depends on scope: number of speakers, in-wall wiring complexity,
          whether drywall/patching is required, built-ins or a media wall,
          lighting upgrades, and sound control goals. Clean results usually come
          from doing infrastructure first—wiring paths, placement, and finish
          work—so you don’t end up with visible cords and awkward layouts.
        </p>

        <h2 className="text-4xl font-semibold my-4">
          Design Choices That Make a Theater Feel “Built-In”
        </h2>
        <p>
          The biggest upgrades are often the least flashy: proper TV height and
          sightlines, glare-controlled lighting, hidden cable runs, and speaker
          placement that fits the room. Built-ins and media walls can add
          storage and hide gear so the room stays clean and functional day to
          day.
        </p>
      </div>

      {/* Banner */}
      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/home-theater-lighting.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm text-5xl">
            A Media Room You’ll Actually Use
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
