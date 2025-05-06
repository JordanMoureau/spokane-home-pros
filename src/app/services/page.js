import ContactButtons from "../components/ContactButtons";
import Testimonials from "../components/Testimonial";
import CheckList from "../components/CheckList";

export const dynamic = "force-static";

export const metadata = {
  title: "Our Services | Renovation Experts",
  description:
    "Trusted home remodeling services in Spokane WA. Specializing in kitchen renovations, bathroom upgrades, and flooring installation.",
};

export default function Services() {
  const checklistItems = [
    "Home Repairs",
    "Kitchen & Bathroom Remodeling",
    "Flooring & Tile Installation",
    "Exterior Improvements",
    "Custom Projects",
  ];

  const servicesCards = [
    {
      title: "Home Repairs",
      description:
        "We take care of the everyday issues that pile up—door repairs, drywall fixes, trim touch-ups, and more. If it’s broken, our Spokane home pros will fix it right the first time, with clear communication and no corner-cutting.",
    },
    {
      title: "Kitchen Remodeling",
      description:
        "Our Spokane kitchen remodeling team designs and builds kitchens that work for real life—better storage, smarter layouts, and finishes that look good and last. We handle everything from cabinets and counters to plumbing and electrical.",
    },
    {
      title: "Bathroom Renovation",
      description:
        "Ready to upgrade your bathroom? We specialize in Spokane bathroom renovations that blend style and function—think custom tile, modern fixtures, and layouts designed around your needs. We make the process smooth from demo to final clean-up.",
    },
    {
      title: "Flooring & Tile",
      description:
        "We install hardwood, tile, LVP, and laminate flooring across Spokane homes with precision and care. Whether you're updating a single room or the whole house, our flooring experts deliver clean lines and durable results.",
    },
    {
      title: "Exterior Improvements",
      description:
        "From siding repairs and new paint to deck builds and porch makeovers, our Spokane exterior remodeling crew helps boost curb appeal and weatherproof your home. We’ll make sure your house looks as good on the outside as it feels inside.",
    },
    {
      title: "Custom Builds",
      description:
        "Have a unique project? Let’s build it. Our team tackles custom home remodeling jobs across Spokane—from built-in shelves and custom closets to full wall removals and open-concept transformations.",
    },
  ];

  return (
    <section className="flex blue flex-col items-center justify-center">
      <div className="py-40 px-6 max-w-4xl text-center">
        <h1 className="text-5xl">We Are Spokane's Home Pros</h1>
        <h1 className="text-5xl mb-8">Your Renovation Experts</h1>
        <p>
          At Spokane Home Pros, we believe in quality craftsmanship, honest
          pricing, and a job done right the first time. Our team brings years of
          experience in home repairs, renovations, and upgrades, making sure
          every project meets the highest standards. We take pride in our
          transparent communication, reliable service, and attention to detail,
          because your home deserves the best. We’re known in Spokane for our
          work on bathroom renovations, kitchen upgrades, and custom flooring.
        </p>
      </div>

      <div className="lg:w-2/3 w-full mb-10">
        <video
          controls
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          loop
          className="shadow-lg"
        >
          <source src="/remodel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Testimonials />

      <div className=" px-6 max-w-3xl text-center">
        <h1 className="text-5xl mb-10">Quality Home Repairs & Renovations</h1>
        <p>
          We handle everything from small repairs to start to finish home
          remodels. Whether you need a quick fix or a major upgrade, we bring
          the same level of care, expertise, and craftsmanship to every project.
          Our services include kitchen remodeling, bathroom upgrades, drywall
          work, exteriors and expert flooring installation.
        </p>
        <CheckList items={checklistItems} />
        <ContactButtons />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl px-6 ">
        {servicesCards.map((service, index) => (
          <div
            key={index}
            className="bg-[#ffba42] shadow-sm p-8  flex flex-col  hover:shadow-2xl transition"
          >
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="py-20 px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Proudly Serving Spokane and Beyond
        </h2>
        <p>
          Spokane Home Pros is proud to offer home remodeling and renovation
          services throughout Eastern Washington and North Idaho. We frequently
          work in Spokane Valley, Liberty Lake, Coeur d'Alene, Post Falls, and
          surrounding areas. No matter where you're located, our team brings the
          same dedication to quality, clear communication, and lasting results.
        </p>
      </div>

      <div
        className="relative mb-5 w-full flex flex-row items-center justify-center  pb-20 px-6 pt-50"
        style={{
          backgroundImage: "url('/coupleremodeling.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col text-center items-center justify-center w-full">
          <h2 className="text-white drop-shadow-sm  text-5xl">
            100s of Completed Projects
          </h2>
          <h1 className="text-[#1F509A] drop-shadow-md flex items-baseline  text-4xl">
            Trusted by Families Across Eastern Washington and North Idaho
          </h1>
        </div>
      </div>
    </section>
  );
}
