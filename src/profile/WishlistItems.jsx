import React from "react";
import WishlistItem from "./WishlistItem";

const WishlistItems = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-6">Wishlist</h2>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your wishlist is empty</p>
            <button className="bg-[#ffd400] text-black font-medium py-2 px-6 rounded-md hover:bg-[#ffdc33] transition">
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <WishlistItem 
                key={item.id} 
                item={item} 
                removeFromWishlist={removeFromWishlist} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistItems;