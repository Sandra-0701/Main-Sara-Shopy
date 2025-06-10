import { FaCcVisa } from "react-icons/fa";

export default function PaymentInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-5">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Payment Information</h2>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-4">
          <FaCcVisa className="text-2xl mr-3" />
          <div className="flex-grow">
            <div className="font-medium">Visa ending in 4321</div>
          </div>
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            Paid
          </span>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <div>Subtotal</div>
            <div>$17.97</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Delivery Fee</div>
            <div>$2.99</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Tax</div>
            <div>$1.64</div>
          </div>
          <div className="flex justify-between pt-2 border-t border-dashed border-gray-300 font-bold">
            <div>Total</div>
            <div>$22.60</div>
          </div>
        </div>
      </div>
    </div>
  );
}
