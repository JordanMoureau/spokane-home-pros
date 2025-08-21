"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Updated for pathname tracking
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function MobileNav({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMenuOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed z-20 top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6"
    >
      <ul className="space-y-6 text-xl flex items-center justify-center h-screen flex-col">
        {[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/why-choose-us", label: "Why Choose Us" },
          // { href: "/tips-and-tricks", label: "Tips & Tricks" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-${pathname === link.href ? "bold" : "light"} ${
                pathname === link.href ? "text-[#1F509A]" : "text-[#1F509A]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/quote"
            className="text-white px-6 py-3 mt-6 font-bold bg-[#FFB229] rounded-lg hover:bg-[#FF9300] transition-all duration-300 block w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Free Estimate
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div id="shp-callnow">
        <a href="tel:+15098627934">
          <span className="shp-phone">
            <FaPhone />
          </span>
          <span className="shp-text">Talk to A Home Pro | Call Now</span>
          <span className="shp-number">(509) 862-7934</span>
        </a>
      </div>

      <nav className="primary-color text-[#1F509A] p-4 uppercase">
        <div className=" mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Spokane Home Pros Logo" width={180} />
          <div
            className="lg:hidden cursor-pointer z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <ul className="hidden lg:flex space-x-6 items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/why-choose-us", label: "Why Choose Us" },
              { href: "/tips-and-tricks", label: "Tips & Tricks" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-${
                    pathname === link.href || pathname === "/quote"
                      ? "bold"
                      : "light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/quote"
                className="text-white px-4 py-2 font-bold bg-[#FFB229]"
              >
                Get a Free Estimate
              </Link>
            </li>
          </ul>
        </div>
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </>
  );
}

export default NavBar;
