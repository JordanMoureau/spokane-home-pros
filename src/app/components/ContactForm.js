"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formSuccess, setFormSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
        "g-recaptcha-response": token,
      };

      const response = await fetch("https://formspree.io/f/xyzedzpl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // ✅ Only continue if the response is OK
      if (response.ok) {
        // Fire conversion tracking ONLY after confirmed success
        window.gtag &&
          window.gtag("event", "conversion", {
            send_to: "AW-17056245661/h86QCLqoyMYaEJ3PhsU_",
            value: 1.0,
            currency: "USD",
          });

        // Then show success message and reset form
        setFormSuccess(true);
        reset();
      } else {
        throw new Error(
          `Formspree rejected submission with status ${response.status}`
        );
      }
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-2.5">
            <div className="w-1/2">
              <input
                placeholder="First and Last Name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-white rounded-full py-4 px-7"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="w-1/2">
              <input
                placeholder="Phone Number"
                {...register("phone", { required: "Phone is required" })}
                className="w-full bg-white rounded-full py-4 px-7"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              placeholder="Type of Remodeling Work"
              {...register("remodelingWork", {
                required: "Type of work is required",
              })}
              className="w-full bg-white rounded-full py-4 px-7"
            />
            {errors.remodelingWork && (
              <p className="text-red-500 text-sm">
                {errors.remodelingWork.message}
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-white rounded-full py-4 px-7"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full bg-white rounded-4xl py-4 px-7"
              placeholder="Your Message"
              rows={6}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#1f509a] uppercase text-3xl text-white px-10 py-2 rounded-full font-bold hover:bg-[#1f509a]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
