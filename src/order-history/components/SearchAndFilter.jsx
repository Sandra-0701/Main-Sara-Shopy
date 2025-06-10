"use client";

import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function SearchAndFilter() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
      <div className="relative flex-grow max-w-md">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 cursor-pointer">
          <FaFilter className="text-gray-600" />
          <span className="font-medium">Filter Orders</span>
        </div>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
          <div
            className={`px-4 py-2 cursor-pointer ${
              filter === "all" ? "bg-yellow-400" : "hover:bg-gray-50"
            }`}
            onClick={() => setFilter("all")}
          >
            All Orders
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              filter === "delivered" ? "bg-yellow-400" : "hover:bg-gray-50"
            }`}
            onClick={() => setFilter("delivered")}
          >
            Delivered
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              filter === "processing" ? "bg-yellow-400" : "hover:bg-gray-50"
            }`}
            onClick={() => setFilter("processing")}
          >
            Processing
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              filter === "cancelled" ? "bg-yellow-400" : "hover:bg-gray-50"
            }`}
            onClick={() => setFilter("cancelled")}
          >
            Cancelled
          </div>
        </div>
      </div>
    </div>
  );
}
