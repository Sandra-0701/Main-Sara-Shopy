import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaCheck } from 'react-icons/fa';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Sample cart data - replace with your actual cart state
  const [cartItems] = useState([
    { id: 1, name: 'Organic Milk', price: 25, quantity: 2, image: '/img/products/milk.jpg' },
    { id: 2, name: 'Fresh Eggs', price: 60, quantity: 1, image: '/img/products/eggs.jpg' },
    { id: 3, name: 'Whole Wheat Bread', price: 35, quantity: 3, image: '/img/products/bread.jpg' }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === 'express' ? 50 : 20;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    // Add your order submission logic here
    setActiveStep(4); // Move to confirmation step
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Progress Stepper */}
      <div className="flex justify-between mb-12 relative">
        <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-yellow-500' : 'text-gray-400'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${activeStep >= 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>
            {activeStep > 1 ? <FaCheck /> : <FaShoppingCart />}
          </div>
          <span>Cart</span>
        </div>
        
        <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-yellow-500' : 'text-gray-400'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${activeStep >= 2 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>
            {activeStep > 2 ? <FaCheck /> : <FaMapMarkerAlt />}
          </div>
          <span>Delivery</span>
        </div>
        
        <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-yellow-500' : 'text-gray-400'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${activeStep >= 3 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>
            {activeStep > 3 ? <FaCheck /> : <FaCreditCard />}
          </div>
          <span>Payment</span>
        </div>
        
        <div className={`flex flex-col items-center ${activeStep >= 4 ? 'text-yellow-500' : 'text-gray-400'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${activeStep >= 4 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>
            <FaCheck />
          </div>
          <span>Confirmation</span>
        </div>
        
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div 
            className="h-full bg-yellow-500 transition-all duration-300" 
            style={{ width: `${(activeStep - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Cart Review */}
      {activeStep === 1 && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="bg-white rounded-lg shadow p-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery:</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
              <button
                onClick={() => setActiveStep(2)}
                className="w-full mt-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
              >
                Proceed to Delivery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Delivery Information */}
      {activeStep === 2 && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Delivery Address</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  rows="4"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Delivery Option</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === 'standard'}
                      onChange={() => setDeliveryOption('standard')}
                      className="mr-2"
                    />
                    <span>Standard Delivery (3-5 days) - ₹20</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === 'express'}
                      onChange={() => setDeliveryOption('express')}
                      className="mr-2"
                    />
                    <span>Express Delivery (1-2 days) - ₹50</span>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setActiveStep(1)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Payment Information */}
      {activeStep === 3 && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg hover:border-yellow-500">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                      className="mr-3"
                    />
                    <div>
                      <h3 className="font-medium">Credit/Debit Card</h3>
                      <p className="text-sm text-gray-600">Pay with Visa, Mastercard, etc.</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg hover:border-yellow-500">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="mr-3"
                    />
                    <div>
                      <h3 className="font-medium">UPI Payment</h3>
                      <p className="text-sm text-gray-600">Pay using any UPI app</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg hover:border-yellow-500">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mr-3"
                    />
                    <div>
                      <h3 className="font-medium">Cash on Delivery</h3>
                      <p className="text-sm text-gray-600">Pay when you receive your order</p>
                    </div>
                  </label>
                </div>
              </div>
              
              {paymentMethod === 'credit' && (
                <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Card Holder Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Name on card"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'upi' && (
                <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <label className="block text-gray-700 mb-2">UPI ID</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="yourname@upi"
                  />
                </div>
              )}
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 mr-2"
                  />
                  <span>I agree to the <Link to="/terms" className="text-yellow-600 hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-yellow-600 hover:underline">Privacy Policy</Link></span>
                </label>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveStep(2)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  disabled={!agreeToTerms}
                  className={`px-6 py-2 rounded-lg ${agreeToTerms ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-300 cursor-not-allowed'}`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Order Confirmation */}
      {activeStep === 4 && (
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-green-500 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-8">Thank you for your order. Your order number is <span className="font-semibold">#ORD-{Math.floor(Math.random() * 10000)}</span></p>
          <p className="mb-8">We've sent a confirmation email with your order details.</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/orders"
              className="px-6 py-2 border rounded-lg hover:bg-gray-100"
            >
              View Orders
            </Link>
            <Link
              to="/"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;