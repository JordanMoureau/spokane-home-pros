"use client";

import { motion } from "framer-motion";

export default function Cards() {
  const cards = [
    {
      title: "Bathrooms",
      image: "/bathrooms.jpeg",
      subheader:
        "Whether you’re looking for a sleek, modern upgrade or a cozy, spa-like retreat, our expert team delivers high-quality craftsmanship tailored to your style and needs.",
    },
    {
      title: "Kitchens",
      image: "/kitchens.jpeg",
      subheader:
        "From contemporary open-concept designs to timeless classics, we transform kitchens into beautiful, functional spaces that fit your lifestyle.",
    },
    {
      title: "Flooring",
      image: "/flooring.jpeg",
      subheader:
        "Our durable, stylish flooring options are designed to enhance your home’s beauty while standing up to daily wear and tear.",
    },
  ];

  return (
    <div className="mx-5 md:mx-10 flex flex-col md:flex-row gap-5 md:gap-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-full md:w-1/3 h-[400px] md:h-[600px] bg-cover bg-center shadow-md flex flex-col justify-center pl-10 overflow-hidden group"
          style={{ backgroundImage: `url(${card.image})` }}
          whileHover={{ scale: 1.03 }} // Slight hover scale for better UX
        >
          {/* Background Overlay for Opaque Effect */}
          <div className="absolute inset-0 bg-[#FFB229] opacity-40"></div>

          {/* Header (Always Visible) */}
          <motion.div className="absolute inset-0 flex items-center p-4 text-white bg-[#FFB229] opacity-0 group-hover:opacity-90 transition-all duration-300">
            <div className="w-full text-left">
              <h2 className="relative z-10 text-5xl text-white font-bold">
                {card.title}
              </h2>
              <div className="text-md font-bold text-white">
                {card.subheader}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
