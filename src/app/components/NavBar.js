"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhone, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const SERVICE_LINKS = [
  { href: "/services/kitchen-remodeling-spokane", label: "Kitchens" },
  { href: "/services/bathroom-remodeling-spokane", label: "Bathrooms" },
  { href: "/services/room-additions-spokane", label: "Room Additions" },
  { href: "/services/basement-finishing-spokane", label: "Basement Finishing" },
];

function MobileNav({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMenuOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed z-20 top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6"
    >
      <ul className="space-y-6 text-xl flex items-center justify-center h-screen flex-col ">
        <li>
          <Link
            href="/"
            className="font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* MOBILE: Services accordion (minimal) */}
        <li className="w-full">
          <button
            className="flex items-center justify-center w-full text-[#1F509A]"
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
          >
            <span className="font-bold">
              <Link href="/services" className="mr-2">
                SERVICES
              </Link>
            </span>
            <FaChevronDown
              className={`transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {servicesOpen && (
            <ul className="mt-3 pl-3 space-y-3 flex-col justify-center text-center text-base">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} onClick={() => setIsMenuOpen(false)}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/why-choose-us"
            className="font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link
            href="/why-choose-us"
            className="font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Tips & Tricks
          </Link>
        </li>

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
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown only
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

          {/* Mobile toggle */}
          <div
            className="lg:hidden cursor-pointer z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex space-x-6 items-center relative">
            <li>
              <Link
                href="/"
                className={`font-${pathname === "/" ? "bold" : "light"}`}
              >
                Home
              </Link>
            </li>

            {/* DESKTOP: Services dropdown (minimal hover/click) */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-${
                  pathname.startsWith("/services") ? "bold" : "light"
                }`}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                <Link href="/services">SERVICES</Link>{" "}
                <FaChevronDown className="text-sm" />
              </button>

              {servicesOpen && (
                <ul className="absolute left-0 w-56 bg-white shadow-lg p-2 z-40">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className={`block px-3 py-2 rounded hover:font-bold ${
                          pathname === s.href
                            ? "font-bold text-[#1F509A]"
                            : "text-[#1F509A]"
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/why-choose-us"
                className={`font-${
                  pathname === "/why-choose-us" ? "bold" : "light"
                }`}
              >
                Why Choose Us
              </Link>
            </li>

            <li>
              <Link
                href="/tips-and-tricks"
                className={`font-${
                  pathname === "/tips-and-tricks" ? "bold" : "light"
                }`}
              >
                Tips & Tricks
              </Link>
            </li>

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

        {/* Mobile drawer */}
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </>
  );
}

export default NavBar;
