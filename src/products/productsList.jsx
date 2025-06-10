import ProductCard from "../components/ProductCard";
import products from "../data/product";

export default function ProductsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-2">
      {/* Navigation Bar - Fixed at the top */}
      <div className="bg-white py-2 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container-fluid">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-4 whitespace-nowrap">
              <a
                href="#vegetables"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Vegetables & Fruits
              </a>
              <a
                href="#dairy"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Dairy & Breakfast
              </a>
              <a
                href="#munchies"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Munchies
              </a>
              <a
                href="#drinks"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Cold Drinks & Juices
              </a>
              <a
                href="#frozen"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Instant & Frozen Food
              </a>
              <a
                href="#tea"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Tea, Coffee & Health Drinks
              </a>
              <a
                href="#bakery"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                Bakery & Biscuits
              </a>
              <a
                href="#more"
                className="px-3 py-1 text-gray-800 no-underline text-sm font-medium hover:text-blue-600"
              >
                More <i className="fas fa-chevron-down ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
