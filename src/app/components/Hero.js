"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full  object-cover"
        src="/homepros.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for Contrast */}
      <div className="absolute inset-0" />

      {/* Logo with Fade & Blur Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <Image
          src="/logomain.png"
          alt="Spokane Home Pros, home renovation and repair in Spokane Washington"
          width={600}
          height={600}
          className="w-1/2 md:w-1/3"
          priority
        />
      </motion.div>
    </div>
  );
}
