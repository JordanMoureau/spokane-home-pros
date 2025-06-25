"use client";

import { useEffect, useRef, useState } from "react";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const hasShownPopup = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShownPopup.current) {
        hasShownPopup.current = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);
    return () => window.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!phone) return;

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      const token = await window.grecaptcha.execute(
        "6LfpeW0rAAAAAIIDBT3O-594U-EvZxT9fcw_sdMY",
        { action: "submit" }
      );

      const payload = {
        phone,
        source: "exit-intent",
        "g-recaptcha-response": token,
      };

      const response = await fetch("https://formspree.io/f/xblypaog", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.gtag &&
        window.gtag("event", "conversion", {
          send_to: "AW-17056245661/h86QCLqoyMYaEJ3PhsU_", // insert yours
          value: 1.0,
          currency: "USD",
        });

      setIsOpen(false);
      setPhone("");
    } catch (err) {
      console.error("Exit intent form error:", err);
    }
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
