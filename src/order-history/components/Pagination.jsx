import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex justify-center">
      <nav className="inline-flex rounded-md shadow">
        <Link
          href="#"
          className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        >
          1
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border border-gray-300 bg-yellow-400 text-gray-900 font-medium"
        >
          2
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        >
          3
        </Link>
        <Link
          href="#"
          className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
        >
          Next
        </Link>
      </nav>
    </div>
  );
}
