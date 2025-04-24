import ContactButtons from "../components/ContactButtons";
import CheckList from "../components/CheckList";
import GetAQuote from "../components/GetAQuote";

export const dynamic = "force-static";

export const metadata = {
  title: "Why Choose Us | Spokane Remodeling Contractors You Can Trust",
  description:
    "Discover why homeowners across Spokane WA trust Spokane Home Pros for expert kitchen remodeling, bathroom renovations, and home improvement services.",
};

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
        "Whether you're looking for a sleek, modern Spokane bathroom remodel or a cozy spa-like retreat, our expert team delivers high-quality craftsmanship for any budget.",
      img: "/bathrooms.jpeg",
      alt: "Bathroom remodeling services in Spokane WA - Modern and cozy designs",
    },
    {
      title: "Kitchens",
      descr:
        "Our kitchen remodeling services fit your house and your budget. No job is too small or too big for us. Whether it's a full kitchen remodel or just new countertops—we're here for it.",
      img: "/kitchens.jpeg",
      alt: "Kitchen renovation in Spokane WA - Affordable and custom kitchen upgrades",
    },
    {
      title: "Flooring",
      descr:
        "Whether you prefer real hardwood or composite, our flooring installation team can help you choose and install the perfect solution—hassle free.",
      img: "/flooring.jpeg",
      alt: "Flooring installation in Spokane WA - Hardwood, composite, and tile flooring solutions",
    },
    {
      title: "Exteriors",
      descr:
        "Exterior home improvement in Spokane means more than just curb appeal—new paint, siding, and windows protect your home and improve energy efficiency.",
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
          <h2 className="text-3xl md:text-5xl mb-4">
            Your Trusted Home Professionals
          </h2>
          <p className="text-lg md:text-xl mt-2">
            Your trusted experts in bathroom remodels, kitchen renovations, and
            home improvement services. From flooring installation to complete
            home remodeling in Spokane WA, we bring quality craftsmanship to
            every project.
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
            Spokane homeowners choose us for everything from bathroom renovation
            and kitchen remodeling to flooring installation and full home
            renovations. Here’s why our clients keep coming back:
          </p>
          <CheckList items={checklistItems} />
          <ContactButtons />
        </div>
      </section>
      <GetAQuote />
    </>
  );
}
