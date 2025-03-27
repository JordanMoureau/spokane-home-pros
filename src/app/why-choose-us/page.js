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
      img: "flooring.jpeg",
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
        <div className="pt-50 px-6 max-w-4xl text-center">
          <h1 className="text-5xl">We are Spokane's Home Pros</h1>
          <p className=" px-10 text-3xl">Your Trusted Home Professionals</p>
        </div>
        <ContactButtons />

        <div className="gap-10 mt-20 flex flex-wrap mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1F509A] flex flex-row w-full items-center shadow-lg"
            >
              <div className="text-white w-1/3 p-8">
                <h1 className="text-4xl mb-2 font-bold">{card.title}</h1>
                <p>{card.descr}</p>
              </div>
              <div className="w-2/3">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-30 px-6 max-w-3xl text-center">
          <h1 className="text-5xl mb-10">Why Spokane Home Pros?</h1>
          <p>
            We don't just build and repair--we provide and stress-free, reliable
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
