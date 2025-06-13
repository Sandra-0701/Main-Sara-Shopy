import React, { useState } from "react";
import {Link} from "react-router-dom";

const CheckoutPage = () => {
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

  const [activeStep, setActiveStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      // Place order
      setOrderPlaced(true);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-black">
              Order Confirmed!
            </h2>
            <p className="mt-2 text-gray-600">
              Thank you for your purchase. Your order has been placed
              successfully.
            </p>
            <div className="mt-6 bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-black">Order Summary</h3>
              <div className="mt-2 space-y-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium text-black">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
            <button className="mt-6 bg-[#ffd400] text-black font-medium py-2 px-6 rounded-md hover:bg-[#ffdc33] transition cursor-pointer">
              Continue Shopping
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Checkout</h1>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center">
            <div
              className={`flex items-center ${
                activeStep >= 1 ? "text-black" : "text-gray-400"
              }`}
            >
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center ${
                  activeStep >= 1 ? "bg-[#ffd400]" : "bg-gray-200"
                }`}
              >
                1
              </div>
              <span className="ml-2">Shipping</span>
            </div>

            <div className="flex-auto border-t-2 mx-4 border-gray-300"></div>

            <div
              className={`flex items-center ${
                activeStep >= 2 ? "text-black" : "text-gray-400"
              }`}
            >
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center ${
                  activeStep >= 2 ? "bg-[#ffd400]" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <span className="ml-2">Payment</span>
            </div>

            <div className="flex-auto border-t-2 mx-4 border-gray-300"></div>

            <div
              className={`flex items-center ${
                activeStep >= 3 ? "text-black" : "text-gray-400"
              }`}
            >
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center ${
                  activeStep >= 3 ? "bg-[#ffd400]" : "bg-gray-200"
                }`}
              >
                3
              </div>
              <span className="ml-2">Review</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            {activeStep === 1 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-black mb-6">
                  Shipping Information
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-black mb-6">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === "credit"
                        ? "border-black bg-gray-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("credit")}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="credit"
                        name="paymentMethod"
                        checked={paymentMethod === "credit"}
                        onChange={() => setPaymentMethod("credit")}
                        className="h-4 w-4 text-black focus:ring-black"
                      />
                      <label
                        htmlFor="credit"
                        className="ml-3 block text-sm font-medium text-black"
                      >
                        Credit/Debit Card
                      </label>
                    </div>
                    {paymentMethod === "credit" && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="expiry"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="expiry"
                              placeholder="MM/YY"
                              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cvv"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CVV
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              placeholder="123"
                              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="cardName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name on Card
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === "paypal"
                        ? "border-black bg-gray-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="h-4 w-4 text-black focus:ring-black"
                      />
                      <label
                        htmlFor="paypal"
                        className="ml-3 block text-sm font-medium text-black"
                      >
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === "cod"
                        ? "border-black bg-gray-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="h-4 w-4 text-black focus:ring-black"
                      />
                      <label
                        htmlFor="cod"
                        className="ml-3 block text-sm font-medium text-black"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-black mb-6">
                  Review Your Order
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-black mb-2">
                    Shipping Information
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-800">
                      {shippingInfo.firstName} {shippingInfo.lastName}
                    </p>
                    <p className="text-gray-800">{shippingInfo.address}</p>
                    <p className="text-gray-800">
                      {shippingInfo.city}, {shippingInfo.state}{" "}
                      {shippingInfo.zipCode}
                    </p>
                    <p className="text-gray-800">{shippingInfo.phone}</p>
                    <p className="text-gray-800">{shippingInfo.email}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-black mb-2">
                    Payment Method
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-800">
                      {paymentMethod === "credit" && "Credit/Debit Card"}
                      {paymentMethod === "paypal" && "PayPal"}
                      {paymentMethod === "cod" && "Cash on Delivery"}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-2">
                    Order Summary
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-3">
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-black">{item.name}</p>
                                <p className="text-sm text-gray-600">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <p className="text-black">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 pt-4 mt-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Delivery</span>
                        <span>₹{deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-black mt-3">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

              <div className="mt-6 space-y-4">
                {activeStep > 1 && (
                  <button
                    onClick={handlePrevStep}
                    className="w-full bg-white text-black border border-black font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleNextStep}
                  className="w-full bg-[#ffd400] text-black font-bold py-3 px-4 rounded-md hover:bg-[#ffdc33] transition shadow-md"
                  disabled={cartItems.length === 0}
                >
                  {activeStep === 3 ? "Place Order" : "Continue"}
                </button>
              </div>

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

export default CheckoutPage;