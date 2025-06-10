import React, { useState } from "react";
import { Menu, Bell } from "lucide-react";
import RiderSidebar from "./RiderSidebar";

const RiderHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto grid grid-cols-3 items-center px-4 py-4">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-800"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Page Title - Centered on Mobile, Left on Desktop */}
          <h1 className="text-xl font-bold text-gray-800 text-center md:text-left">
            Rider Dashboard
          </h1>

          {/* Notifications */}
          <div className="flex justify-end">
            <button className="text-gray-600 hover:text-gray-800">
              <Bell size={24} />
            </button>
          </div>
        </div>
      </header>

      <RiderSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default RiderHeader;
