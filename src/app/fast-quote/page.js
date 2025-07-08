import ContactForm from "../components/ContactForm";
import ExitIntentWrapper from "../components/ExitIntentWrapper";
import { FaStar, FaPhone, FaEnvelope } from "react-icons/fa";
import Testimonials from "../components/Testimonial";

export const dynamic = "force-static";

export const metadata = {
  title: "Fast Remodeling Quote | Spokane Home Pros",
  description:
    "Need a remodeling quote fast? Submit your request and get a callback within 24 hours. Kitchen, bathroom, and whole-home upgrades in Spokane WA.",
};

export default function FastQuotePage() {
  return (
    <main className="min-h-screen bg-[#ffba42] blue">
      {/* 🔒 Hero + trust bar */}
      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl max-w-4xl font-bold mb-4">
          Tried of flaky contractors who overcharge you and leave half finished
          work? <br /> <br /> Yeah. We are too.
        </h1>
        <p className="text-lg max-w-3xl">
          Give us 30 seconds. We'll get you with a top-rated Spokane contractor
          who won't ghost, overcharge or pressure you. Just clear quotes and
          good work.
        </p>

        {/* ⭐ Trust badge bar */}
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/70 rounded-2xl py-4 px-6 mt-8 shadow">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="font-semibold ml-2">5 star Google rating</span>
          </div>
          <span className="hidden sm:block text-gray-400">|</span>
          <div className="font-semibold">100+ home renovations completed</div>
        </div>

        <p className="text-sm"></p>

        {/* 📄 Lead form */}
        <div className="mt-10 w-full max-w-2xl">
          <ContactForm />
        </div>

        <div className="bg-white/70 rounded-2xl mt-20">
          <Testimonials />
        </div>
        {/* ☎ / ✉ Quick-contact strip */}
        <div className="bg-[#FFDDA6] mt-14 p-10 w-full max-w-5xl rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <a
              href="tel:5098627934"
              className="flex items-center hover:opacity-90 transition"
            >
              <FaPhone className="blue mr-3" size={18} />
              <span className="text-lg">(509)&nbsp;862-7934</span>
            </a>
            <h2 className="text-lg mt-2">Speak to a Remodel Specialist</h2>
          </div>

          <div className="w-full md:w-auto text-[#FFB229] text-center">
            <h2 className="text-4xl font-bold">OR</h2>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="mailto:spokanehomepros@gmail.com"
              className="flex items-center hover:opacity-90 transition"
            >
              <FaEnvelope className="blue mr-3" size={18} />
              <span className="font-bold">spokanehomepros@gmail.com</span>
            </a>
            <h2 className="text-lg mt-2">Prefer Email? We’ve Got You</h2>
          </div>
        </div>
      </section>

      {/* 🪤 Exit-intent modal */}
      <ExitIntentWrapper />
    </main>
  );
}
