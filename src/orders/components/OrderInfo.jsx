export default function OrderInfo({ orderId }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-5">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Order Information</h2>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap justify-between gap-y-4 mb-4">
          <div className="w-full md:w-[48%]">
            <div className="text-sm text-gray-500 mb-1">Order ID</div>
            <div className="font-medium">#{orderId}</div>
          </div>

          <div className="w-full md:w-[48%]">
            <div className="text-sm text-gray-500 mb-1">Order Date</div>
            <div className="font-medium">February 28, 2025 - 10:45 AM</div>
          </div>

          <div className="w-full md:w-[48%]">
            <div className="text-sm text-gray-500 mb-1">Order Status</div>
            <div className="font-medium">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                Delivered
              </span>
            </div>
          </div>

          <div className="w-full md:w-[48%]">
            <div className="text-sm text-gray-500 mb-1">Delivery Date</div>
            <div className="font-medium">February 28, 2025 - 01:30 PM</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-yellow-400 z-10"></div>
            <div className="absolute left-[7px] top-4 w-0.5 h-full bg-gray-200"></div>

            <div className="pb-6">
              <div className="font-semibold">Order Delivered</div>
              <div className="text-sm text-gray-500">
                February 28, 2025 - 01:30 PM
              </div>
            </div>

            <div className="pb-6">
              <div className="font-semibold">Out for Delivery</div>
              <div className="text-sm text-gray-500">
                February 28, 2025 - 12:15 PM
              </div>
            </div>

            <div className="pb-6">
              <div className="font-semibold">Order Processed</div>
              <div className="text-sm text-gray-500">
                February 28, 2025 - 11:20 AM
              </div>
            </div>

            <div className="pb-2">
              <div className="font-semibold">Order Placed</div>
              <div className="text-sm text-gray-500">
                February 28, 2025 - 10:45 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
