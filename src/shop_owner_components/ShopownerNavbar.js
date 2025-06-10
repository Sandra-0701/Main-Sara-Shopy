"use client";

import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import ShopOwnerSidebar from "./ShopownerSidebar";

const ShopOwnerNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <ShopOwnerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-6 lg:ml-64">
        <button onClick={toggleSidebar} className="lg:hidden p-2">
          <FaBars className="text-dark-gray" />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <FaBell className="text-dark-gray cursor-pointer" />
          <FaEnvelope className="text-dark-gray cursor-pointer" />
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">
              SSO
            </div>
            <div>
              <p className="font-semibold">Sara Shop Owner</p>
              <p className="text-sm text-dark-gray">Store Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopOwnerNavbar;
