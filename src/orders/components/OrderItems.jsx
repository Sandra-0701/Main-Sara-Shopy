

export default function OrderItems() {
  const items = [
    {
      id: 1,
      name: "Organic Tomatoes",
      image: "/api/placeholder/80/80",
      quantity: "1 kg",
      pricePerUnit: "$3.99/kg",
      total: "$3.99",
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      image: "/api/placeholder/80/80",
      quantity: "1 loaf",
      pricePerUnit: "$2.49/loaf",
      total: "$2.49",
    },
    {
      id: 3,
      name: "Organic Milk",
      image: "/api/placeholder/80/80",
      quantity: "2 cartons",
      pricePerUnit: "$3.25/carton",
      total: "$6.50",
    },
    {
      id: 4,
      name: "Fresh Eggs",
      image: "/api/placeholder/80/80",
      quantity: "1 dozen",
      pricePerUnit: "$4.99/dozen",
      total: "$4.99",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-5">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Order Items</h2>
      </div>

      <div className="p-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center pb-4 mb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden mr-4 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <div className="flex-grow">
              <div className="font-medium mb-1">{item.name}</div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{item.quantity}</span>
                <span>{item.pricePerUnit}</span>
              </div>
            </div>

            <div className="ml-4 font-semibold text-gray-900">{item.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
