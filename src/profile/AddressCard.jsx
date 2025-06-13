import React from 'react';

const AddressCard = ({ address, onEdit, onDelete, onSetDefault, isDefault }) => {
  return (
    <div className={`border rounded-lg p-4 hover:border-black transition ${isDefault ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
      <div className="flex justify-between">
        <h3 className="font-bold text-black">{address.name}</h3>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(address)} className="text-gray-400 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button onClick={() => onDelete(address.id)} className="text-gray-400 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{address.street}</p>
      <p className="text-gray-700">{address.city}, {address.state} {address.zipCode}</p>
      <p className="mt-2 text-gray-700">Phone: {address.phone}</p>
      <div className="mt-4">
        {isDefault ? (
          <span className="bg-black text-white font-medium py-1 px-3 rounded-md text-sm">
            Default
          </span>
        ) : (
          <button 
            onClick={() => onSetDefault(address.id)}
            className="bg-white text-black border border-gray-300 font-medium py-1 px-3 rounded-md text-sm hover:bg-gray-50 transition"
          >
            Set as Default
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;