"use client";
import { useState } from "react";

export default function AgentAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);


  const data = [
    {
      userId: "U12345",
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "+1 123-456-7890",
      address: "123 Main St, New York, NY, 10001",
      totalOrders: 15,
      orderStatus: "Delivered",
      purchaseDetails: [
        { orderId: "O1001", item: "Laptop", price: "$1200" },
        { orderId: "O1002", item: "Mouse", price: "$25" },
      ],
    },
    {
      userId: "U12346",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "+1 234-567-8901",
      address: "456 Elm St, Los Angeles, CA, 90001",
      totalOrders: 8,
      orderStatus: "Pending",
      purchaseDetails: [
        { orderId: "O1003", item: "Phone", price: "$800" },
        { orderId: "O1004", item: "Headphones", price: "$50" },
      ],
    },
    {
      userId: "U12347",
      name: "Robert Johnson",
      email: "robertjohnson@example.com",
      phoneNumber: "+1 345-678-9012",
      address: "789 Pine St, Chicago, IL, 60601",
      totalOrders: 20,
      orderStatus: "Delivered",
      purchaseDetails: [
        { orderId: "O1003", item: "Phone", price: "$800" },
        { orderId: "O1004", item: "Headphones", price: "$50" },
      ],
    },
    {
      userId: "U12348",
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phoneNumber: "+1 456-789-0123",
      address: "101 Maple Ave, Houston, TX, 77001",
      totalOrders: 12,
      orderStatus: "Canceled",
      purchaseDetails: [
        { orderId: "O1003", item: "Phone", price: "$800" },
        { orderId: "O1004", item: "Headphones", price: "$50" },
      ],
    },
    {
      userId: "U12349",
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      phoneNumber: "+1 567-890-1234",
      address: "202 Oak St, Phoenix, AZ, 85001",
      totalOrders: 5,
      orderStatus: "Processing",
      purchaseDetails: [
        { orderId: "O1003", item: "Phone", price: "$800" },
        { orderId: "O1004", item: "Headphones", price: "$50" },
      ],
    },
  ];
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const openAddAgentModal = () => {
    setIsAddAgentModalOpen(true);
  };

  const closeAddAgentModal = () => {
    setIsAddAgentModalOpen(false);
  };

  return (
    <div className="lg:ml-64 p-5">
      {/* Add Button */}
      <div className="flex justify-end mb-6">
        <button
          type="button"
          onClick={openAddAgentModal}
          className="focus:outline-none text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-6 py-2.5 shadow-md transition-all"
        >
          Add Shop Owner
        </button>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Total Orders
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.userId}
                className={`${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-700"
                } border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  {item.userId}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phoneNumber}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.totalOrders}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.orderStatus === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : item.orderStatus === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : item.orderStatus === "Canceled"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.orderStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Purchase Details Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Purchase Details
            </h2>
            <ul className="space-y-2">
              {selectedUser.purchaseDetails.map((detail) => (
                <li
                  key={detail.orderId}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  <strong>Order ID:</strong> {detail.orderId},{" "}
                  <strong>Item:</strong> {detail.item}, <strong>Price:</strong>{" "}
                  {detail.price}
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Agent Modal */}
      {isAddAgentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Add New Shop Owner
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeAddAgentModal}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-5
                  00 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
