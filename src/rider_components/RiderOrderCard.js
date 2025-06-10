"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";

const RiderOrderCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
        <p className="text-2xl font-bold text-blue-600">25</p>
      </div>
      <ShoppingCart className="text-blue-600" size={40} />
    </div>
  );
};

export default RiderOrderCard;
