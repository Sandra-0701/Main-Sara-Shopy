import OrderCard from "./components/OrderCard";
import SearchAndFilter from "./components/SearchAndFilter";

export default function OrderHistory() {
  const orders = [
    {
      id: "SG39845",
      date: "February 28, 2025",
      status: "delivered",
      products: [
        { name: "Fresh Organic Tomatoes", quantity: "1 kg", price: "₹48.00" },
        {
          name: "Milma Pride Toned Fresh Milk",
          quantity: "520 ml x 2",
          price: "₹56.00",
        },
        { name: "Wheat Flour Premium", quantity: "1 kg", price: "₹65.00" },
      ],
      total: "₹169.00",
    },
    {
      id: "SG39756",
      date: "February 25, 2025",
      status: "processing",
      products: [
        {
          name: "Golden Harvest Basmati Rice",
          quantity: "5 kg",
          price: "₹450.00",
        },
        { name: "Cold Pressed Coconut Oil", quantity: "1 L", price: "₹210.00" },
      ],
      total: "₹660.00",
    },
    {
      id: "SG39689",
      date: "February 20, 2025",
      status: "cancelled",
      products: [
        {
          name: "Assorted Fresh Vegetables Pack",
          quantity: "1 pack",
          price: "₹199.00",
        },
      ],
      total: "₹199.00",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-130px)] py-[30px] bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">Order History</h1>

        <SearchAndFilter />

        <div className="space-y-5 mb-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

      </div>
    </main>
  );
}
