import React from "react";

const WishlistItem = ({ item, removeFromWishlist }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="relative">
        <div className="h-48 bg-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => removeFromWishlist(item.id)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {!item.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-black mb-1">{item.name}</h3>
        <p className="text-lg font-bold text-black mb-3">₹{item.price.toFixed(2)}</p>
        <div className="flex space-x-2">
          <button 
            className="flex-1 bg-[#ffd400] text-black font-medium py-2 px-4 rounded-md hover:bg-[#ffdc33] transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!item.inStock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;