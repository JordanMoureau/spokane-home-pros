import { FaCheckCircle } from "react-icons/fa";

export default function CheckList({ items }) {
  return (
    <div className="my-10 w-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-4">
            <FaCheckCircle className="text-[#FFB229]" size={30} />
            <span className="text-xl md:text-2xl font-bold text-[#1F509A]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
