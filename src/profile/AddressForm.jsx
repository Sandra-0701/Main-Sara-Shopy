import React, { useState } from 'react';

const AddressForm = ({ initialData, onSave, onCancel, isEditing }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    isDefault: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-black mb-4">
        {isEditing ? 'Edit Address' : 'Add New Address'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Name (e.g., Home, Work)
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="PostalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="defaultAddress"
            name="isDefault"
            checked={formData.isDefault}
            onChange={handleChange}
            className="h-4 w-4 text-black focus:ring-black"
          />
          <label htmlFor="defaultAddress" className="ml-2 block text-sm text-gray-700">
            Set as default address
          </label>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-white text-black border border-black font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#ffd400] text-black font-medium py-2 px-4 rounded-md hover:bg-[#ffdc33] transition"
          >
            {isEditing ? 'Update Address' : 'Save Address'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;