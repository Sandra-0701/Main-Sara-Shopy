import React from "react";
import OrderCard from "./OrderCard";

const OrdersList = ({ orders }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-6">My Orders</h2>
        
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">You haven't placed any orders yet</p>
            <button className="bg-[#ffd400] text-black font-medium py-2 px-6 rounded-md hover:bg-[#ffdc33] transition">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;