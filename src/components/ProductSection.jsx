import { useRef } from "react";
import ProductCard from "./ProductCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const ProductSection = ({ title, products }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <a className="text-green-600" href="#">
          see all
        </a>
      </div>
      {/* Scrollable Container with Buttons */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
          aria-label="Scroll left"
        >
          <MdKeyboardArrowLeft size={24} />
        </button>
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <div className="inline-flex gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
          aria-label="Scroll right"
        >
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;