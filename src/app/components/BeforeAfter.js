import Image from "next/image";
import CheckList from "../components/CheckList";

export default function BeforeAfter() {
  const checklistItems = [
    "Full-Service Home Renovation",
    "On-Time Project Completion",
    "Transparent Pricing - No Surprises",
    "Licensed & Insured Professionals",
    "Professional Kitchen & Bathroom Remodeling Services",
  ];

  return (
    <section
      className="relative py-40 text-[#1F509A] text-left"
      style={{
        backgroundImage: "url('/beforeandafter.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#ffff] opacity-60"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <h2 className="text-5xl font-bold mb-5">See the Difference</h2>
        <p className="text-lg mb-10">
          Looking for reliable home repair services or planneing your next
          renovation? We transform homes with precision and care. Here’s why
          Spokane homeowners trust us:
        </p>
        <CheckList items={checklistItems} />
      </div>
    </section>
  );
}
