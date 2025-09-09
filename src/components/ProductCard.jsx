import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  if (!product) return null;

  return (
    <div className="border border-gray-200 rounded-lg p-3 relative bg-white hover:shadow-md transition-shadow w-full">
      {product.off && (
        <div className="bg-[#FF8800] text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
          {product.off}
        </div>
      )}
      <img
        alt={product.name || "Product image"}
        className="w-full h-32 object-contain mb-3"
        src={product.image || "/placeholder-product.jpg"}
        loading="lazy"
      />
      <div className="text-gray-500 text-xs mb-1">
        <FontAwesomeIcon icon={faClock} className="mr-1" />
        {product.time || "Delivery time not specified"}
      </div>
      <h2 className="text-sm font-semibold mb-1 line-clamp-2 h-10">
        {product.name || "Unnamed Product"}
      </h2>
      <p className="text-gray-500 text-xs mb-2">
        {product.size || "Size not specified"}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold">₹{product.price || "0"}</span>
        <div className="h-8 flex items-center">
          {quantity === 0 ? (
            
            <button
              className="bg-white border border-[#ffd400] text-sm text-black px-3 py-1 rounded-md hover:bg-amber-50 transition-colors w-full"
              onClick={() => setQuantity(1)}
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center bg-amber-300 border border-[#ffd400] text-black rounded-md">
              <button
                className="px-2 py-1 rounded-l hover:bg-amber-400 transition-colors"
                onClick={() => setQuantity((q) => Math.max(0, q - 1))}
              >
                -
              </button>
              <span className="px-2 text-sm">{quantity}</span>
              <button
                className="px-2 py-1 rounded-r hover:bg-amber-400 transition-colors"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;