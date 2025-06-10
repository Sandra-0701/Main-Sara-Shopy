import { useState } from 'react';
import WishlistItem from './WishlistItem';
import EmptyWishlist from './EmptyWishlist';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Organic Avocados",
      price: "$6.99 / pack of 4",
      image: "/api/placeholder/100/100",
      stockStatus: "in-stock",
      dateAdded: "Feb 27, 2025",
      priceDrop: null
    },
    {
      id: 2,
      name: "Artisan Sourdough Bread",
      price: "$4.99 / loaf",
      image: "/api/placeholder/100/100",
      stockStatus: "low-stock",
      dateAdded: "Feb 25, 2025",
      priceDrop: null
    },
    {
      id: 3,
      name: "Italian Extra Virgin Olive Oil",
      price: "$15.99 / 500ml",
      image: "/api/placeholder/100/100",
      stockStatus: "in-stock",
      dateAdded: "Feb 22, 2025",
      priceDrop: 3.00
    },
    {
      id: 4,
      name: "Organic Raw Honey",
      price: "$8.99 / jar",
      image: "/api/placeholder/100/100",
      stockStatus: "out-of-stock",
      dateAdded: "Feb 18, 2025",
      priceDrop: null
    },
    {
      id: 5,
      name: "Premium Mixed Nuts Gift Box",
      price: "$24.99 / box",
      image: "/api/placeholder/100/100",
      stockStatus: "in-stock",
      dateAdded: "Feb 10, 2025",
      priceDrop: null
    }
  ]);

  const [sortOption, setSortOption] = useState("date-newest");

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveAllToCart = () => {
    // Implement move all to cart logic
    console.log("Moving all items to cart");
  };

  const sortItems = (option) => {
    let sortedItems = [...wishlistItems];
    switch (option) {
      case "date-newest":
        sortedItems.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "date-oldest":
        sortedItems.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case "price-low":
        sortedItems.sort((a, b) => parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1)));
        break;
      case "price-high":
        sortedItems.sort((a, b) => parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1)));
        break;
      case "name-asc":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setWishlistItems(sortedItems);
  };

  return (
    <div className="min-h-[calc(100vh-130px)] py-[30px]">
      <div className="container">
        <h1 className="text-[#020202] font-bold text-2xl mb-5">My Wishlist ({wishlistItems.length})</h1>

        {wishlistItems.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
              <select 
                className="px-4 py-2 border border-[#e5e5e5] rounded-md bg-white"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  sortItems(e.target.value);
                }}
              >
                <option value="date-newest">Sort by: Date Added (Newest First)</option>
                <option value="date-oldest">Sort by: Date Added (Oldest First)</option>
                <option value="price-low">Sort by: Price (Low to High)</option>
                <option value="price-high">Sort by: Price (High to Low)</option>
                <option value="name-asc">Sort by: Name (A to Z)</option>
              </select>
              <button 
                className="bg-[#ffd400] text-[#020202] font-semibold border-none px-5 py-2 rounded-md text-sm transition-all hover:bg-[#e6bf00] w-full md:w-auto"
                onClick={moveAllToCart}
              >
                <i className="fas fa-shopping-cart mr-2"></i>Move All to Cart
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-5">
              {wishlistItems.map(item => (
                <WishlistItem 
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyWishlist />
        )}
      </div>
    </div>
  );
}