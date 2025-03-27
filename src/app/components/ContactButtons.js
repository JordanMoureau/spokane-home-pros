import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="flex gap-4 mb-30 mt-8 uppercase font-bold">
      <a
        href="tel:+15098627934"
        className="bg-[#FFB229] text-white px-4 py-2 flex items-center gap-2"
      >
        <FaPhone /> Call Us
      </a>

      <a
        href="mailto:spokanehomepros@gmail.com"
        className="bg-[#1F509A] text-white px-4 py-2 flex items-center gap-2"
      >
        <FaEnvelope /> Email Us
      </a>
    </div>
  );
}
