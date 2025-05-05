import React from "react";

export const metadata = {
  title:
    "Frequently Asked Questions | Answers to Your Home Remodeling and Repair Questions",
  description:
    "Spokane home owners need to know about Spokane Home Pros and how we operate. Our FAQ page is here to help.",
};

const faqs = [
  {
    question: "What types of home remodeling services do you offer?",
    answer:
      "We do it all. Bathroom remodels, kitchen renovations, flooring installations, drywall and exterior upgrades. Our team handles everything. Flooring, drywall, exterior work for winter.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed, bonded, and insured. Our professionals are certified in home remodeling. We want you to have peace of mind. So your home remodel go off without a hitch. We're here to make sure it does.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Absolutely. We offer free, no-obligation estimates tailored to your needs and budget. Contact us to schedule a consultation.",
  },
  {
    question: "Can you handle both small updates and full kitchen remodels?",
    answer:
      "Yes, whether you're looking to update your countertops or a complete kitchen renovation, our team is equipped to deliver. Kitchen remodeling can be hard on a family and we're here to make sure it's as easy as it can be. We're known in Spokane for kitchen remodels and our top-tier reliablity.",
  },
  {
    question: "What bathroom remodeling services do you provide?",
    answer:
      "Our services range from installing new vanities and fixtures to complete bathroom overhauls. We focus on creating spaces to suit. We lay tile, install glass paneling and rewnew plumbing as well as performing model and water damage remediation.",
  },
  {
    question: "What types of flooring do you install?",
    answer:
      "We install all flooring options, including hardwood, laminate, tile, and vinyl. Our team helps you choose the best material to suit your home and your family's needs.",
  },
  {
    question: "Do you offer exterior home improvement services?",
    answer:
      "Yes, our services include siding replacement, window and door installations, and exterior painting. We aim to enhance your home's curb appeal and energy efficiency. Spokane winters are hard and we're here to make sure your home is ready for it.",
  },
  {
    question: "How do I schedule a project with Spokane Home Pros?",
    answer:
      "You can contact us via phone at (509) 862-7934 or email at spokanehomepros@gmail.com. We'll discuss your project, provide an estimate, and schedule a start time.",
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
