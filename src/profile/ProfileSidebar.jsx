import React from "react";

const ProfileSidebar = ({ userInfo, activeTab, setActiveTab }) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
            {userInfo.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-black">{userInfo.name}</h2>
            <p className="text-sm text-gray-600">{userInfo.email}</p>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("account")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "account"
                ? "bg-[#ffd400] text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Account Details
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "orders"
                ? "bg-[#ffd400] text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            My Orders
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "wishlist"
                ? "bg-[#ffd400] text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Wishlist
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "addresses"
                ? "bg-[#ffd400] text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Addresses
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProfileSidebar;