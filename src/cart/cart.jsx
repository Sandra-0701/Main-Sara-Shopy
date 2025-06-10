import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Bananas",
      price: 2.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
      inStock: true,
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      price: 4.5,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
      inStock: true,
    },
    {
      id: 3,
      name: "Almond Milk",
      price: 3.25,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      inStock: true,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">Your cart is empty</p>
                  <button className="mt-4 bg-[#ffd400] text-black font-medium py-2 px-6 rounded-md hover:bg-[#ffdc33] transition">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-black">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                          </div>

                          <div className="mt-2 flex items-center">
                            <span
                              className={`text-sm ${
                                item.inStock ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {item.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>

                            <p className="text-lg font-semibold text-black">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">₹{deliveryFee.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-black">Total</span>
                    <span className="font-bold text-black">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full mt-6 bg-[#ffd400] text-black font-bold py-3 px-4 rounded-md hover:bg-[#ffdc33] transition shadow-md"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
