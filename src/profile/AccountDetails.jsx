import React from "react";

const AccountDetails = ({ userInfo, editMode, formData, handleInputChange, setEditMode, handleSave }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Account Details</h2>
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-[#ffd400] text-black font-medium py-2 px-4 rounded-md hover:bg-[#ffdc33] transition"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-2">
            <button
              onClick={() => setEditMode(false)}
              className="bg-white text-black border border-black font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-black text-white font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {!editMode ? (
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Full Name</span>
            <span className="text-black">{userInfo.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Email</span>
            <span className="text-black">{userInfo.email}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Phone</span>
            <span className="text-black">{userInfo.phone}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Address</span>
            <span className="text-black">{userInfo.address}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Member Since</span>
            <span className="text-black">{userInfo.joinDate}</span>
          </div>
        </div>
      ) : (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default AccountDetails;