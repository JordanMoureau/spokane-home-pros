import ContactButtons from "../components/ContactButtons";
import CheckList from "../components/CheckList";
import GetAQuote from "../components/GetAQuote";

export default function WhyChooseUs() {
  const checklistItems = [
    "Fast & Efficient",
    "Reliable & Trustworthy",
    "Friendly & Professional",
    "Quality Craftsmanship at Every Stage",
    "Locally Owned & Operated",
  ];

  const cards = [
    {
      title: "Bathrooms",
      descr:
        "Whether you're looking for a sleek, modern upgrade or a cozy spa-like retreat, our expert team delivers high-quality craftsmanship for any budget.",
      img: "/bathrooms.jpeg",
      alt: "Bathroom remodeling services in Spokane WA - Modern and cozy designs",
    },
    {
      title: "Kitchens",
      descr:
        "Our kitchen remodels fit your house and your budget. No job is too small or too big for us. If it's a full kitchen remodel or just new countertops. We're here for it.",
      img: "/kitchens.jpeg",
      alt: "Kitchen renovation in Spokane WA - Affordable and custom kitchen upgrades",
    },
    {
      title: "Flooring",
      descr:
        "Real or composite? Whatever you prefer we can help you pick it and install it for you. Hassel free.",
      img: "/flooring.jpeg",
      alt: "Flooring installation in Spokane WA - Hardwood, composite, and tile flooring solutions",
    },
    {
      title: "Exteriors",
      descr:
        "Don't judge a book by it's cover, but dust up the outside of your home with new paint, new siding and new windows periodically to keep your home safe and well insulated.",
      img: "/exterior.jpeg",
      alt: "Exterior home improvement in Spokane WA - Siding, paint, and window upgrades",
    },
  ];

  return (
    <>
      <section className="flex blue flex-col items-center justify-center">
        <div className="pt-30 px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl mb-4">
            We are Spokane's Home Pros
          </h1>
          <p className="text-xl md:text-3xl mb-4">
            Your Trusted Home Professionals
          </p>
        </div>
        <ContactButtons />

        <div className="gap-10 mt-10 flex flex-col md:flex-wrap md:flex-row mb-10 px-4 md:px-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1F509A] flex flex-col md:flex-row w-full items-center shadow-lg mb-6 md:mb-0"
            >
              <div className="text-white p-6 md:w-1/3 w-full">
                <h1 className="text-2xl md:text-4xl mb-2 font-bold">
                  {card.title}
                </h1>
                <p>{card.descr}</p>
              </div>
              <div className="w-full md:w-2/3">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 px-4 md:px-6 max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl mb-10">Why Spokane Home Pros?</h1>
          <p className="mb-6">
            We don't just build and repair--we provide a stress-free, reliable
            experience from start to finish. Here's what makes us different.
          </p>
          <CheckList items={checklistItems} />
          <ContactButtons />
        </div>
      </section>
      <GetAQuote />
    </>
  );
}
