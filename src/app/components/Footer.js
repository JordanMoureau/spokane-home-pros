"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F509A] text-white py-10">
      <div className="container max-w-screen-lg mx-auto px-10">
        {/* Top Section - Logo & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-8 w-full">
          {/* Left Section - Logo & Branding */}
          <div className="text-center md:text-left w-full md:w-auto">
            <img
              src="/logomain.png"
              alt="Spokane Home Pros Logo"
              width={180}
              className="mx-auto my-5 md:mx-0"
            />
            <div className="mt-9 text-white font-bold text-lg">
              Professionals You Can Trust
            </div>
            <div className="text-white md:mb-10 font-bold text-lg">
              Spokane's Home Pros
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="text-center md:text-left  font-bold w-full md:w-auto">
            <nav className="space-y-2">
              <Link href="/" className="block">
                Home
              </Link>
              <Link href="/services" className="block">
                Services
              </Link>
              <Link href="/about-us" className="block">
                About Us
              </Link>
              <Link href="/contact" className="block">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section - Contact Info */}
        <div className="flex flex-wrap items-center justify-between gap-6 mt-10 w-full">
          <div className="flex items-center">
            <FaMapMarkerAlt />{" "}
            <span className="ml-2">
              2624 N Division St. #1123<br></br>
              Spokane, WA 99207
            </span>
          </div>
          <div className="flex items-center">
            <FaEnvelope />{" "}
            <span className="ml-2">spokanehomepros@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone /> <span className="ml-2">(509) 862-7934</span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
          © Copyright {new Date().getFullYear()} Spokane Home Pros. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
