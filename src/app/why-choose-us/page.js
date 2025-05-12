import ContactButtons from "../components/ContactButtons";
import CheckList from "../components/CheckList";
import GetAQuote from "../components/GetAQuote";

export const dynamic = "force-static";

export const metadata = {
  title: "Why Choose Us | Spokane Remodeling Contractors You Can Trust",
  description:
    "Find out why homeowners in Spokane trust Spokane Home Pros for kitchen remodeling, bathroom renovations, and home improvement services. We do it once and do it right.",
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
        "Need a walk-in shower? Has water damage taken over? Or need a contractor that understands historical homes? Spokane has a lot of them. We're the right choice.",
      img: "/bathrooms.jpeg",
      alt: "Bathroom remodeling services in Spokane WA",
    },
    {
      title: "Kitchens",
      descr:
        "Our kitchen remodeling services fit your house and your budget. No job is too small or too big for us. Whether it's a full kitchen remodel or just new countertops, we get it done.",
      img: "/kitchens.jpeg",
      alt: "Kitchen renovation in Spokane WA - Affordable and custom kitchen upgrades",
    },
    {
      title: "Flooring",
      descr:
        "Whether you want real hardwood or composite, our flooring installation team can help you choose and install the perfect solution. Always hassle free.",
      img: "/flooring.jpeg",
      alt: "Flooring installation in Spokane WA - Hardwood, composite, and tile flooring solutions",
    },
    {
      title: "Exteriors",
      descr:
        "Exterior home improvement in Spokane is more than curb appeal. New paint, siding, and windows protect your home and help keep it warm in the winter. We know Spokane Winters and keeping your exterior in good shape can have a huge effect on the electric bill.",
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
            We've built bathrooms in Northtown, kitchen renovations on the South
            Hill, and replaced windows in the Valley. From flooring installation
            to complete home remodeling in Spokane WA, we bring real
            craftsmanship to every project. If it's your home. We fix it right.
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
                  loading="lazy"
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
            and kitchen remodeling to flooring installation and home
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
