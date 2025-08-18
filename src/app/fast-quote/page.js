"use client";

import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ExitIntentWrapper from "../components/ExitIntentWrapper";
import { FaStar } from "react-icons/fa";
import TestimonialsForQuote from "../components/TestimonialsForQuote";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

export const dynamic = "force-static";

// export const metadata = {
//   title: "Fast Remodeling Quote | Spokane Home Pros",
//   description:
//     "Need a remodeling quote fast? Submit your request and get a callback within 24 hours. Kitchen, bathroom, and whole-home upgrades in Spokane WA.",
// };

function SlideShow({ images, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);
  const lastInteraction = useRef(Date.now());

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (isHovering.current) return;
      if (Date.now() - lastInteraction.current < 6000) return;
      next();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interval, images.length, next]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      lastInteraction.current = Date.now();
      next();
    } else if (e.key === "ArrowLeft") {
      lastInteraction.current = Date.now();
      prev();
    }
  };

  const touchStartX = useRef(null);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(dx) > 40) {
      lastInteraction.current = Date.now();
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto select-none"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Remodeling project slideshow"
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-2xl shadow-xl bg-white/40">
        <div className="relative h-64 sm:h-80 md:h-[28rem]">
          {images.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              title={img.title ?? ""}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          lastInteraction.current = Date.now();
          prev();
        }}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 shadow focus:outline-none focus:ring focus:ring-blue-300"
      >
        ‹
      </button>
      <button
        onClick={() => {
          lastInteraction.current = Date.now();
          next();
        }}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 shadow focus:outline-none focus:ring focus:ring-blue-300"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/70 rounded-full px-3 py-1 shadow">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              lastInteraction.current = Date.now();
              setIndex(i);
            }}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-black/80 scale-110"
                : "bg-black/30 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function FastQuotePage() {
  const images = useMemo(
    () => [
      {
        src: "https://storage.googleapis.com/content-assistant-images-temp/0a508b07-5a749417-cd0c-4f02-81cb-3f7c6021742c.webp",
        alt: "Cozy remodeled kitchen in Spokane showcasing modern design and inviting decor",
        title: "Kitchen Remodel – Spokane Home Pros",
      },
      {
        src: "https://storage.googleapis.com/content-assistant-images-temp/home-6aa383af-c6eaf369-2bae-410f-87a2-a4a3579cbf6b.webp",
        alt: "Stylish remodeled bathroom in Spokane with modern fixtures and elegant design",
        title: "Bathroom Remodel – Spokane Home Pros",
      },
      {
        src: "https://storage.googleapis.com/content-assistant-images-temp/spokane-6280c3b7-465f89ec-eac6-48a0-b0e6-af0d76cf5083.webp",
        alt: "Home addition construction in Spokane showcasing framing and renovation progress",
        title: "Home Addition – Spokane Home Pros",
      },
      {
        src: "https://storage.googleapis.com/content-assistant-images-temp/45da6e18-8c6e-4a82-851d-5ca6fed72206.webp",
        alt: "Modern bathroom renovation showcasing stylish fixtures and elegant design",
        title: "Modern Bath – Spokane Home Pros",
      },
      {
        src: "https://storage.googleapis.com/content-assistant-images-temp/deb00b3a-3af6-4b95-888b-11b0c5800c43.webp",
        alt: "Homeowner consulting with a professional contractor for bathroom renovation",
        title: "Consultation – Get Quotes Fast",
      },
      { src: "/kitremodelart.jpg", alt: "Kitchen remodel concept art" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#ffba42] blue">
      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl max-w-4xl font-bold mb-4">
          Tired of flaky contractors? Yeah. We are to.
        </h1>
        <p className="text-lg max-w-3xl">
          Give us 30 seconds. We'll get you with a top-rated Spokane contractor
          who won't ghost, overcharge or pressure you. Just clear quotes and
          good work.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/70 rounded-2xl py-4 px-6 mt-8 shadow">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="font-semibold ml-2">5 star Google rating</span>
          </div>
          <span className="hidden sm:block text-gray-400">|</span>
          <div className="font-semibold">100+ home renovations completed</div>
        </div>

        <div className="bg-white/70 rounded-2xl mt-20 w-full max-w-5xl p-1">
          <TestimonialsForQuote />
        </div>

        <h2 className="text-lg max-w-3xl mt-20">
          Get your free, no obligation quote today! Take 30 seconds and get
          everything you need to know about your home renovation or home repair
          project.
        </h2>

        <div className="mt-10 w-full max-w-2xl">
          <ContactForm />
        </div>

        <div className="mt-14 w-full">
          <SlideShow images={images} />
        </div>

        <div className="bg-[#FFDDA6] mt-10 p-10 w-full max-w-5xl rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <a
              href="tel:5098627934"
              className="flex flex-row items-center hover:opacity-90 transition"
            >
              <FaPhone className="blue mr-5" size={20} />
              <h2 className="text-lg">(509) 862-7934</h2>
            </a>
            <h2 className="text-2xl">Call Us Directly</h2>
          </div>

          <div className="w-full md:w-auto text-[#FFB229] text-center">
            <h2 className="text-5xl font-bold">OR</h2>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="mailto:spokanehomepros@gmail.com"
              className="flex flex-row justify-center md:justify-start font-bold items-center hover:opacity-90 transition"
            >
              <FaEnvelope className="blue mr-5" size={20} />
              <p>spokanehomepros@gmail.com</p>
            </a>
            <h2 className="text-xl">
              Email Us to Get in Touch With a Remodeling Pro
            </h2>
          </div>
        </div>
      </section>

      <ExitIntentWrapper />
    </main>
  );
}
