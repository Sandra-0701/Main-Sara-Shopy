export default function DeliveryAddress() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-5">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Delivery Address</h2>
      </div>

      <div className="p-5">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="font-semibold mb-2">Home</div>
          <div className="mb-1">John Doe</div>
          <div className="mb-1">123 Maple Street, Apt 4B</div>
          <div className="mb-1">Brooklyn, NY 11201</div>
          <div>Phone: (555) 123-4567</div>
        </div>
      </div>
    </div>
  );
}
