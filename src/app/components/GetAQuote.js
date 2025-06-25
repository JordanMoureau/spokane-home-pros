"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function GetAQuote() {
  const [formSuccess, setFormSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      const token = await window.grecaptcha.execute(
        "6LfpeW0rAAAAAIIDBT3O-594U-EvZxT9fcw_sdMY",
        { action: "submit" }
      );

      const payload = {
        ...data,
        "g-recaptcha-response": token, // what Formspree needs
      };

      const response = await fetch("https://formspree.io/f/xyzedzpl", {
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

      setFormSuccess(true);
      reset();
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  return (
    <section className="bg-[#FFB229] p-5 md:p-20 flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-6xl flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-center">
        <div className="flex flex-col gap-10 lg:gap-20 w-2/ lg:w-1/3">
          <a
            href="tel:5098627934"
            className="bg-[#FFe9ca] py-10 text-[#1f509a] flex flex-col items-center justify-center p-5 text-2xl text-center rounded-4xl hover:opacity-90 transition"
          >
            <FaPhone className="text-[#FFB229] mb-5" size={60} />
            <h2 className="text-3xl">Call Us</h2>
            <h2>(509) 862-7934</h2>
          </a>
          <a
            href="mailto:SpokaneHomePros@gmail.com"
            className="bg-[#FFe9ca] text-[#1f509a] py-10 flex flex-col items-center justify-center p-5 text-2xl text-center rounded-4xl hover:opacity-90 transition"
          >
            <FaEnvelope className="text-[#FFB229] mb-5" size={60} />
            <h2 className="text-3xl">Email Us</h2>
            <h2 className="text-sm">SpokaneHomePros@gmail.com</h2>
          </a>
        </div>

        <div className="bg-white md:p-10 p-5 rounded-4xl flex flex-col items-center w-full lg:w-1/2">
          {formSuccess ? (
            <div className="bg-white rounded-4xl px-10 py-12 text-center space-y-6">
              <h2 className="text-4xl font-bold text-[#1f509a]">
                Thanks for reaching out!
              </h2>
              <p className="text-lg text-[#1f509a] max-w-xl mx-auto">
                We’ve received your request and will follow up shortly with next
                steps or a custom quote.
              </p>
              <p className="text-lg text-[#1f509a] max-w-xl mx-auto">
                In the meantime, feel free to call or email with any questions.
              </p>

              <div className="flex justify-center pt-4">
                {Array(5)
                  .fill(null)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-[#1f509a] mx-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.374-2.452a1 1 0 00-1.176 0l-3.374 2.452c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.055 9.382c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.955z" />
                    </svg>
                  ))}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-4 pt-10 text-[#1f509a]">
                Get a Quote on a Project
              </h2>
              <p className="text-center text-lg max-w-md text-[#1f509a]">
                Tell us what you need, and we'll get back to you with a
                customized quote that fits your budget and timeline. No hassle,
                just honest pricing.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 pt-10 flex flex-wrap gap-2.5 w-full"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="w-full md:w-[calc(50%-5px)] p-3 text-black rounded-full bg-[#FFB229]"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  {...register("phone", { required: true })}
                  className="w-full md:w-[calc(50%-5px)] p-3 text-black rounded-full bg-[#FFB229]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="w-full p-3 text-black rounded-full bg-[#FFB229]"
                />
                <textarea
                  placeholder="Project Details"
                  rows="4"
                  {...register("details", { required: true })}
                  className="w-full p-3 text-black rounded-3xl bg-[#FFB229]"
                />

                <button
                  type="submit"
                  className="bg-[#1f509a] uppercase text-3xl text-white px-10 py-2 rounded-full font-bold hover:bg-[#1f509a]"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
