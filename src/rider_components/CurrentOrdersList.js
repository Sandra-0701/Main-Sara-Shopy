"use client";

import React from "react";
import { Phone } from "lucide-react";

const CurrentOrdersList = () => {
  const currentOrders = [
    {
      restaurant: "Pizza Hub",
      orderId: "ORD12345",
      address: "123 Street, City",
      phone: "+11234567890",
    },
    {
      restaurant: "Burger King",
      orderId: "ORD67890",
      address: "456 Avenue, City",
      phone: "+19876543210",
    },
   
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Current Orders</h2>
      <div className="space-y-4">
        {currentOrders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{order.restaurant}</h3>
              <p className="text-sm text-gray-600">Order ID: {order.orderId}</p>
              <p className="text-sm text-gray-600">Address: {order.address}</p>
            </div>
            <button className="text-green-600 hover:text-green-800">
              <Phone size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentOrdersList;
