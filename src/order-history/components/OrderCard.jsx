
import {Link} from "react-router-dom";

export default function OrderCard({ order }) {
  const statusClasses = {
    delivered: "bg-green-100 text-green-700",
    processing: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex flex-wrap justify-between items-center px-5 py-4 border-b border-gray-200">
        <div>
          <div className="font-bold">Order #{order.id}</div>
          <div className="text-sm text-gray-500">{order.date}</div>
        </div>
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${
            statusClasses[order.status]
          }`}
        >
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      <div className="p-5">
        {order.products.map((product, index) => (
          <div
            key={index}
            className="flex items-center pb-4 mb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4 flex-shrink-0">
              <img
                src="/api/placeholder/60/60"
                alt={product.name}
                width={60}
                height={60}
                className="object-cover"
              />
            </div>

            <div className="flex-grow">
              <div className="font-medium mb-1">{product.name}</div>
              <div className="text-sm text-gray-500">{product.quantity}</div>
            </div>

            <div className="ml-4 font-semibold text-gray-900">
              {product.price}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-5 py-4 border-t border-gray-200">
        <div className="font-bold">Total: {order.total}</div>
        <Link
          href={`/orders/${order.id}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-5 rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
