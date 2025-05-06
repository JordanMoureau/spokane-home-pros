import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export const dynamic = "force-static";

export const metadata = {
  title: "Request a Quote | Spokane Kitchen & Bathroom Remodeling Experts",
  description:
    "Get a free quote from Spokane Home Pros. We specialize in kitchen remodeling, bathroom renovations, and home upgrades across Spokane WA.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen mb-7 bg-[#ffba42] blue">
      <section className="flex flex-col items-center text-center justify-center py-20 px-6">
        <h1 className="text-5xl max-w-4xl font-bold mb-4">
          Get Your Free Quote Today — Fast, Easy, No Obligation
        </h1>
        <p className="text-lg max-w-2xl text-center">
          Tell us what you need, and we'll get back to you with a customized
          quote that fits your budget and timeline. From kitchen renovations to
          bathroom remodels and home improvements, we offer honest pricing and
          top-tier service.
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <ContactForm />
        </div>

        <div className="bg-[#FFDDA6] mt-10 p-10 w-full max-w-5xl rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <a
              href="tel:5098627934"
              className="flex flex-row items-center hover:opacity-90 transition"
            >
              <FaPhone className="blue mr-5" size={20} />
              <h1 className="text-lg">(509) 862-7934</h1>
            </a>
            <h1 className="text-2xl">Call Us Directly</h1>
          </div>

          <div className="w-full md:w-auto text-[#FFB229] text-center">
            <h1 className="text-5xl font-bold">OR</h1>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="mailto:spokanehomepros@gmail.com"
              className="flex flex-row justify-center md:justify-start font-bold items-center hover:opacity-90 transition"
            >
              <FaEnvelope className="blue mr-5" size={20} />
              <p>spokanehomepros@gmail.com</p>
            </a>
            <h1 className="text-xl">
              Email Us to Get in Touch With a Remodeling Pro
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mt-20 text-center">
          <h2 className="text-5xl  font-semibold mb-4">What Happens Next</h2>
          <p className="mb-2 max-w-2xl">
            After you request a quote, our team will reach out to you for more
            details about your project so we can deliver you a free, no pressure
            quote. Our team is friendly, reliable and here to help. You can ask
            all your questions about home remodeling, renovations and repairs.
            We're proud to be one of Spokane's premier contractor services.
            <br />
            <br />
            Once we've delivered the quote, you have time to decide if it works
            for you. At that point, our home professionals will get you on the
            schedule to start work and explain the timeline for your home
            renovation or repair project.
          </p>
        </div>
      </section>
    </main>
  );
}
