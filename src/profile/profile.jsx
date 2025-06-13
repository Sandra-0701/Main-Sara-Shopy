import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import AccountDetails from "./AccountDetails";
import OrdersList from "./OrdersList";
import WishlistItems from "./WishlistItems";
import AddressBook from "./AddressBook";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [editMode, setEditMode] = useState(false);
  
  // Sample data
  const userInfo = {
    name: "Sandra Suresh",
    email: "san@example.com",
    phone: "+91 98765 43210",
    address: "kaloor, Kochi, Kerala",
    joinDate: "January 2025"
  };

  const [formData, setFormData] = useState(userInfo);

  const orders = [
    {
      id: "ORD-78945",
      date: "2025-05-15",
      status: "Delivered",
      items: [
        { name: "Organic Bananas", quantity: 3, price: 2.99 },
        { name: "Fresh Strawberries", quantity: 2, price: 4.50 }
      ],
      total: 17.97,
      deliveryFee: 2.99
    },
    {
      id: "ORD-78123",
      date: "2025-04-02",
      status: "Delivered",
      items: [
        { name: "Almond Milk", quantity: 1, price: 3.25 },
        { name: "Whole Grain Bread", quantity: 2, price: 2.75 }
      ],
      total: 11.50,
      deliveryFee: 2.99
    }
  ];

  const wishlist = [
    {
      id: 4,
      name: "Organic Avocados",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
      inStock: true
    },
    {
      id: 5,
      name: "Greek Yogurt",
      price: 4.25,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      inStock: true
    },
    {
      id: 6,
      name: "Free Range Eggs",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1587486913049-53fc88980bea",
      inStock: false
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
   
    setEditMode(false);
  };

  const removeFromWishlist = (id) => {
    console.log("Removed item", id);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "account":
        return (
          <AccountDetails
            userInfo={userInfo}
            editMode={editMode}
            formData={formData}
            handleInputChange={handleInputChange}
            setEditMode={setEditMode}
            handleSave={handleSave}
          />
        );
      case "orders":
        return <OrdersList orders={orders} />;
      case "wishlist":
        return <WishlistItems wishlist={wishlist} removeFromWishlist={removeFromWishlist} />;
      case "addresses":
        return <AddressBook />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <ProfileSidebar 
            userInfo={userInfo} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />

          <div className="lg:w-3/4">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;