"use client";

import { useEffect, useState } from "react";

export default function ExitIntentModal({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true"); // ← session-only
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);
    return () => window.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = () => {
    if (!phone) return;
    onSubmit(phone);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">
          We’ll call you within 24 hrs 📞
        </h3>
        <p className="mb-6">
          Drop your number and a remodel specialist will reach out.
        </p>

        <input
          type="tel"
          placeholder="(509) 555-1234"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1f509a]"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#f57c00] text-white font-semibold py-3 rounded-lg hover:bg-[#f57b00be] transition"
        >
          Call Me!
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
