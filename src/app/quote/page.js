import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export default function QuotePage() {
  return (
    <main className="min-h-screen mb-7 bg-[#ffba42] blue">
      <section className="flex flex-col items-center text-center justify-center py-20 px-6">
        <h1 className="text-5xl max-w-4xl font-bold mb-4">
          Get Your Free Quote Today — Fast, Easy, No Obligation
        </h1>
        <p className="text-lg max-w-2xl text-center">
          Tell us what you need, and we'll get back to you with a customized
          quote that fits your budget and timeline. No hassle, just honest
          pricing.
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <ContactForm />
        </div>

        <div className="bg-[#FFDDA6] mt-10 p-10 w-full max-w-4xl rounded-4xl flex flex-col md:flex-row items-center">
          <div className="w-full lg:w-1/4 flex flex-col items-center">
            <a
              href="tel:5098627934"
              className="flex flex-row items-center hover:opacity-90 transition"
            >
              <FaPhone className="blue mr-5" size={20} />
              <h1 className="text-lg">(509) 862-7934</h1>
            </a>
            <h1 className="text-2xl">Call Us Directly</h1>
          </div>

          <div className="w-full lg:w-1/5 text-[#FFB229] p-3 text-center">
            <h1 className="text-5xl font-bold">OR</h1>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col">
            <a
              href="mailto:spokanehomepros@gmail.com"
              className="flex flex-row justify-center lg:justify-start font-bold items-center hover:opacity-90 transition"
            >
              <FaEnvelope className="blue mr-5" size={20} />
              <p>spokanehomepros@gmail.com</p>
            </a>
            <h1 className="text-xl text-center lg:text-left">
              Email Us to Get In Touch With a Home Pro
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
