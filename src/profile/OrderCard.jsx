import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="font-medium text-black">Order #{order.id}</h3>
          <p className="text-sm text-gray-600">Placed on {order.date}</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className={`px-3 py-1 rounded-full text-sm ${
            order.status === "Delivered" 
              ? "bg-green-100 text-green-800" 
              : "bg-yellow-100 text-yellow-800"
          }`}>
            {order.status}
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between py-2">
            <div>
              <span>{item.quantity} × </span>
              <span className="font-medium">{item.name}</span>
            </div>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Delivery Fee</span>
            <span>₹{order.deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-black mt-2">
            <span>Total</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="bg-white text-black border border-black font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition">
          View Details
        </button>
        <button className="ml-2 bg-[#ffd400] text-black font-medium py-2 px-4 rounded-md hover:bg-[#ffdc33] transition">
          Reorder
        </button>
      </div>
    </div>
  );
};

export default OrderCard;