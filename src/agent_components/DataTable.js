function DataRow({ orderId, customer, status }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {orderId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {customer}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {status}
      </td>
    </tr>
  );
}

export default function DataTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rider ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <DataRow orderId="ORD001" customer="John Doe" status="Completed" />
          <DataRow orderId="ORD002" customer="Jane Smith" status="Pending" />
          <DataRow orderId="ORD003" customer="Michael Brown" status="Shipped" />
        </tbody>
      </table>
    </div>
  );
}
