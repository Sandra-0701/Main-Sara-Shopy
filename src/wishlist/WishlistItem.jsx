export default function WishlistItem({ item, onRemove }) {
  const stockStatusClasses = {
    "in-stock": "bg-[#d1f7dd] text-[#0a8a3a]",
    "low-stock": "bg-[#fff7e6] text-[#d48806]",
    "out-of-stock": "bg-[#fff1f0] text-[#cf1322]",
  };

  const stockStatusText = {
    "in-stock": "In Stock",
    "low-stock": "Low Stock",
    "out-of-stock": "Out of Stock",
  };

  const addToCart = () => {
    // Implement add to cart logic
    console.log(`Adding ${item.name} to cart`);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center p-5 border-b border-[#e5e5e5] last:border-b-0">
      <div className="w-[100px] h-[100px] bg-[#e5e5e5] rounded-md mr-5 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow md:w-auto w-[calc(100%-120px)]">
        <div className="font-semibold text-lg mb-1">{item.name}</div>
        <div className="font-bold text-lg text-[#020202] mb-1">
          {item.price}
        </div>
        <span
          className={`inline-block text-sm px-2 py-[3px] rounded-full font-medium mb-2 ${
            stockStatusClasses[item.stockStatus]
          }`}
        >
          {stockStatusText[item.stockStatus]}
        </span>

        {item.priceDrop && (
          <div className="flex items-center p-[10px] bg-[#f8f8f8] rounded-md mt-4">
            <i className="fas fa-bell text-[#ffd400] mr-2"></i>
            <span className="text-sm">
              Price dropped by ${item.priceDrop.toFixed(2)} since you added this
              item!
            </span>
          </div>
        )}

        <div className="flex gap-2 mt-4 w-full">
          <button
            className={`bg-[#ffd400] text-[#020202] font-semibold border-none px-4 py-2 rounded-md text-sm transition-all hover:bg-[#e6bf00] ${
              item.stockStatus === "out-of-stock"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={addToCart}
            disabled={item.stockStatus === "out-of-stock"}
          >
            <i className="fas fa-shopping-cart mr-2"></i>Add to Cart
          </button>
          <button
            className="bg-white text-[#888888] font-medium border border-[#e5e5e5] px-4 py-2 rounded-md text-sm transition-all hover:bg-[#f8f8f8] hover:text-[#dc3545]"
            onClick={() => onRemove(item.id)}
          >
            <i className="far fa-trash-alt mr-2"></i>Remove
          </button>
        </div>
      </div>

      <div className="text-[#888888] text-sm mt-3 md:mt-0 md:ml-5 md:text-right w-full md:w-auto">
        Added: {item.dateAdded}
      </div>
    </div>
  );
}
