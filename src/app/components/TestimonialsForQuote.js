"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fallbackTestimonials = [
  {
    quote:
      "We hired Brandon to add a half-bath to our nearly 100 year old brick home and we are very pleased with his work. He was able to take our ideas and make them a reality...",
    name: "Sue R.",
  },
  {
    quote:
      "Precise, punctual, personable. The best way I could summarize my experience working with Brandon. I highly recommend Brandon for any remodeling you need. What great guy!!",
    name: "Michael A.",
  },
  {
    quote:
      "I've utilized Brandon's services several times over the years. He is honest, dependable, hard-working, and I have yet to find anything he was not capable of doing (and doing well). I would highly recommend him to anyone in need of handyman or remodeling services.",
    name: "Tracy P.",
  },
  {
    quote:
      "Brandon was extremely professional and timely in his remodel of our home. We had new siding, new beautiful front stairs and an amazing redwood and cedar deck done.",
    name: "Sharon B.",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const MAX_LENGTH = 150;

  const smartTruncate = (str, maxLength = 250) => {
    if (str.length <= maxLength) return str;
    const shortened = str.slice(0, maxLength);
    const lastSpaceIndex = shortened.lastIndexOf(" ");
    return shortened.slice(0, lastSpaceIndex) + "...";
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        if (data.length > 0) {
          const formatted = data.map((r) => ({
            quote: r.text,
            name: r.author_name,
          }));
          setTestimonials(formatted);
        } else {
          console.warn("No Google reviews returned. Using fallback.");
        }
      } catch (error) {
        console.error("Failed to fetch Google reviews. Using fallback.");
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="p-0 md:6 ">
      <div className="max-w-5xl min-h-32 p-0 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          {testimonials.map(
            (testimonial, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-row items-center justify-center text-center w-full max-w-5xl"
                >
                  <span className="w-1/8">
                    <img
                      src="/quoter.png"
                      className="w-full max-w-[100px]"
                      alt="home repair and renovation testimonials"
                    />
                  </span>
                  <div className="flex flex-col px-4 md:px-10 items-end text-[#1F509A] w-4/6">
                    <blockquote className="italic text-left text-xl md:text-2xl font-bold">
                      {smartTruncate(testimonial.quote, MAX_LENGTH)}
                    </blockquote>
                    <span className="mt-2 text-xl md:text-2xl italic font-bold">{`- ${testimonial.name}`}</span>
                  </div>
                  <span className="w-1/8">
                    <img
                      src="/quotel.png"
                      className="w-full max-w-[100px]"
                      alt="home repair and renovation testimonials"
                    />
                  </span>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
