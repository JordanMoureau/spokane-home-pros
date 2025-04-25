import React from "react";

const faqs = [
  {
    question: "What types of home remodeling services do you offer?",
    answer:
      "We specialize in a wide range of home improvement projects, including bathroom remodels, kitchen renovations, flooring installations, and exterior upgrades. Our team handles everything from minor repairs to full-scale remodels, ensuring quality craftsmanship at every stage.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed, bonded, and insured. Our professionals are certified in various aspects of home remodeling, providing peace of mind and reliable service for every project.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Absolutely. We offer free, no-obligation estimates tailored to your specific needs and budget. Contact us to schedule a consultation.",
  },
  {
    question: "Can you handle both small updates and full kitchen remodels?",
    answer:
      "Yes, whether you're looking to update your countertops or undertake a complete kitchen renovation, our team is equipped to deliver results that align with your vision and budget.",
  },
  {
    question: "What bathroom remodeling services do you provide?",
    answer:
      "Our services range from installing new vanities and fixtures to complete bathroom overhauls. We focus on creating spaces that combine comfort, style, and functionality.",
  },
  {
    question: "What types of flooring do you install?",
    answer:
      "We install various flooring options, including hardwood, laminate, tile, and vinyl. Our team helps you choose the best material to suit your home's style and your family's needs.",
  },
  {
    question: "Do you offer exterior home improvement services?",
    answer:
      "Yes, our services include siding replacement, window and door installations, and exterior painting. We aim to enhance your home's curb appeal and energy efficiency.",
  },
  {
    question: "How do I schedule a project with Spokane Home Pros?",
    answer:
      "You can contact us via phone at (509) 862-7934 or email at spokanehomepros@gmail.com. We'll discuss your project, provide an estimate, and schedule a convenient time to start.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes, we stand by our workmanship with a satisfaction guarantee and warranty on our services. Specific warranty details will be provided during the consultation.",
  },
  {
    question: "What if I have concerns after the project is completed?",
    answer:
      "Your satisfaction is our priority. If any issues arise post-completion, contact us promptly, and we'll address them to ensure you're happy with the results.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="max-w-4xl blue mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className=" pb-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center blue bg-[#FFB229] py-30">
        <h2 className="text-2xl font-bold mb-2">
          Contact Spokane Home Pros Today
        </h2>
        <p className="max-w-2xl mx-auto">
          Ready to start your home improvement project? Reach out to us at{" "}
          <a href="tel:5098627934" className="font-bold  underline">
            (509) 862-7934
          </a>{" "}
          or{" "}
          <a
            href="mailto:spokanehomepros@gmail.com"
            className="font-bold  underline"
          >
            spokanehomepros@gmail.com
          </a>{" "}
          for a free consultation and estimate. Let's bring your vision to life
          with quality craftsmanship and reliable service.
        </p>
      </div>
    </>
  );
}
