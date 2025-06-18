import React, { useState } from 'react';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      street: 'Kaloor',
      city: 'Kochi',
      state: 'Kerala',
      postalCode: '682106',
      phone: '+91 12345 67890',
      isDefault: true
    },
    {
      id: 2,
      name: 'Work',
      street: 'Kaloor',
      city: 'Kochi',
      state: 'Kerala',
      postalCode: '682017',
      phone: '+91 98765 43210',
      isDefault: false
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleAddNew = () => {
    setEditingAddress(null);
    setShowForm(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    // Don't allow deletion if it's the last address
    if (addresses.length <= 1) {
      alert('You must have at least one address');
      return;
    }

    // If deleting the default address, set another one as default
    const addressToDelete = addresses.find(a => a.id === id);
    if (addressToDelete.isDefault) {
      const otherAddress = addresses.find(a => a.id !== id);
      if (otherAddress) {
        otherAddress.isDefault = true;
      }
    }

    setAddresses(addresses.filter(a => a.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
  };

  const handleSaveAddress = (addressData) => {
    if (addressData.isDefault) {
      // If setting this as default, ensure no others are default
      setAddresses(addresses.map(a => ({
        ...a,
        isDefault: false
      })));
    }

    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(a => 
        a.id === editingAddress.id ? { ...addressData, id: editingAddress.id } : a
      ));
    } else {
      // Add new address
      const newId = Math.max(...addresses.map(a => a.id), 0) + 1;
      setAddresses([...addresses, { ...addressData, id: newId }]);
    }

    setShowForm(false);
    setEditingAddress(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingAddress(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Saved Addresses</h2>
        {!showForm && (
          <button 
            onClick={handleAddNew}
            className="bg-[#ffd400] text-black font-medium py-2 px-4 rounded-md hover:bg-[#ffdc33] transition"
          >
            Add New Address
          </button>
        )}
      </div>

      {showForm ? (
        <AddressForm
          initialData={editingAddress}
          onSave={handleSaveAddress}
          onCancel={handleCancel}
          isEditing={!!editingAddress}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map(address => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSetDefault={handleSetDefault}
              isDefault={address.isDefault}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressBook;