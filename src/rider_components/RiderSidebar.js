import React from "react";
import { X } from "lucide-react";

const RiderSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg 
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`
          hidden md:block fixed left-0 top-0 bottom-0 w-64 bg-white 
          shadow-lg z-40 overflow-y-auto
        `}
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Rider Dashboard</h2>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded 
                           text-gray-700 hover:text-gray-900 
                           transition duration-200"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded 
                           text-gray-700 hover:text-gray-900 
                           transition duration-200"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded 
                           text-gray-700 hover:text-gray-900 
                           transition duration-200"
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default RiderSidebar;
