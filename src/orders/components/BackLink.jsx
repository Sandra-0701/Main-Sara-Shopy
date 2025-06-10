import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackLink({ href, text }) {
  return (
    <Link
      href={href}
      className="text-gray-900 hover:text-gray-500 font-medium inline-flex items-center mb-5"
    >
      <FaArrowLeft className="mr-2" />
      {text}
    </Link>
  );
}
