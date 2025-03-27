import { FaCheckCircle } from "react-icons/fa";

export default function CheckList({ items }) {
  return (
    <ul className="space-y-3 my-10">
      {items.map((item, index) => (
        <li key={index} className="flex items-center  space-x-2">
          <FaCheckCircle className="text-[#FFB229] mt-1" size={40} />
          <span className="text-2xl ml-10 font-bold text-[#1F509A]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// import CheckList from "@/components/CheckList";

// export default function Services() {
//     const services = [
//         "Full Kitchen Remodeling",
//         "Bathroom Renovations",
//         "Flooring Installation",
//         "Custom Cabinetry",
//         "Outdoor Deck Construction"
//     ];

//     return (
//         <section>
//             <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//             <CheckList items={services} />
//         </section>
//     );
// }
