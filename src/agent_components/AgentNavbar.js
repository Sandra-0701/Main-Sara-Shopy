"use client";

import { useState, useEffect } from "react";

export default function AgentNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo or Title */}
            <span className="text-xl font-bold text-gray-800">
              Agent Dashboard
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Orders</li>
            <li className="hover:text-blue-500 cursor-pointer">Analytics</li>
          </ul>

          {/* Mobile/Tablet Drawer Toggle Button */}
          <button
            onClick={toggleDrawer}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer for Mobile/Tablet */}
      {isMounted &&
        isDrawerOpen && ( // Ensure the drawer is only rendered after mounting
          <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75"
              onClick={toggleDrawer}
            ></div>

            {/* Drawer Panel */}
            <div className="absolute left-0 top-0 w-64 bg-white shadow-lg h-full">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={toggleDrawer}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="p-4">
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  Dashboard
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  Orders
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  Analytics
                </li>
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
}
