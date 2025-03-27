import ContactButtons from "../components/ContactButtons";
import Testimonials from "../components/Testimonial";
import CheckList from "../components/CheckList";

export default function Services() {
  const checklistItems = [
    "Home Repairs",
    "Kitchen & Bathroom Remodeling",
    "Flooring & Tile Installation",
    "Exterior Improvements",
    "Custom Projects",
  ];

  return (
    <section className="flex blue flex-col items-center justify-center">
      <div className="py-40 px-6 max-w-4xl text-center">
        <h1 className="text-5xl">We are Spokane's Home Pros</h1>
        <h1 className="text-5xl mb-8">Your Trusted Home Professionals</h1>
        <p>
          At Spokane Home Pros, we believe in quality craftsmanship, honest
          pricing, and a job done right the first time. Our team brings years of
          experience in home repairs, renovations, and upgrades, making sure
          every project meets the highest standards. We take pride in our
          transparent communication, reliable service, and attention to
          detail--because your home deserves the best.
        </p>
      </div>

      <div className="lg:w-2/3 w-full mb-10">
        <video controls autoPlay muted loop className="shadow-lg">
          <source src="/remodel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Testimonials />

      <div className="py-30 px-6 max-w-3xl text-center">
        <h1 className="text-5xl mb-10">Quality Home Repairs & Renovations</h1>
        <p>
          We handle everything form small repairs to full home remodels. Whether
          you need a quick fix or a major upgrade, we bring the same level of
          care, expertise, and craftsmanship to every project.
        </p>
        <CheckList items={checklistItems} />
        <ContactButtons />
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
