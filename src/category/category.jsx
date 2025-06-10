import { useState } from 'react';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import productsData from '../data/product';

const CategoryPage = () => {
  // Ensure products is always an array
  const products = Array.isArray(productsData) ? productsData : [];
  
  const [activeCategory, setActiveCategory] = useState('Powdered Spices');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by name and category (if you add categories to products later)
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { name: 'Dairy', icon: '/img/products/product3.avif', active: true },
    { name: 'Dry Fruits', icon: '/img/products/product1.avif' },
    { name: 'Ghee & Vanaspati', icon: '/img/products/product2.avif' },
    { name: 'Powdered Spices', icon: '/img/products/product3.avif' },
    { name: 'Dates & Seeds', icon: '/img/products/product4.avif' },
    { name: 'Salt, Sugar & Jaggery', icon: '/img/products/product5.avif' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-2 md:px-4 my-4">
      {/* Mobile Search */}
      <div className="lg:hidden mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search milk products..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 xl:w-72">
          <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:pr-2">
            {/* Desktop Search */}
            <div className="hidden lg:block mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search milk products..."
                  className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-2">
              <h2 className="font-bold text-lg px-2 py-3 border-b border-gray-100">
                Dairy Categories
              </h2>
              <nav className="space-y-1 py-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex items-center w-full px-3 py-2.5 rounded-md transition-colors ${
                      activeCategory === category.name
                        ? 'bg-yellow-50 text-yellow-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <img
                      src={category.icon}
                      alt=""
                      className="w-6 h-6 mr-3 object-cover rounded"
                    />
                    <span>{category.name}</span>
                    {activeCategory === category.name && (
                      <FaChevronRight className="ml-auto text-yellow-500 text-xs" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {activeCategory}
            </h1>
            <p className="text-gray-500 mt-1">
              {filteredProducts.length} products available
            </p>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  showTime={true} // Assuming you want delivery time shown
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <img
                src="/img/empty-state.svg"
                alt="No products found"
                className="w-40 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-700">
                No milk products found
              </h3>
              <p className="text-gray-500 mt-1">
                Try adjusting your search or filter
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;