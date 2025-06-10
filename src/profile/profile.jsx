import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaHistory, 
  FaHeart, 
  FaLock,
  FaEdit,
  FaSignOutAlt
} from 'react-icons/fa';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Fetch user data on component mount
  useEffect(() => {
    // Replace with actual API call
    const fetchUserData = async () => {
      try {
        // Simulated API response
        const userData = {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+91 9876543210',
          address: '123 Main St, Bangalore, Karnataka 560001',
          joinDate: 'January 2023'
        };
        setUser(userData);
        setFormData(userData);
        
        // Simulated orders
        setOrders([
          { id: 1, date: '2023-05-15', total: 1250, status: 'Delivered', items: 3 },
          { id: 2, date: '2023-06-22', total: 850, status: 'Shipped', items: 2 },
          { id: 3, date: '2023-07-10', total: 2100, status: 'Processing', items: 5 }
        ]);
        
        // Simulated wishlist
        setWishlist([
          { id: 1, name: 'Organic Milk', price: 25, image: '/img/products/milk.jpg' },
          { id: 2, name: 'Fresh Eggs', price: 60, image: '/img/products/eggs.jpg' },
          { id: 3, name: 'Whole Wheat Bread', price: 35, image: '/img/products/bread.jpg' }
        ]);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    // Add your profile update logic here
    setUser(formData);
    setIsEditing(false);
    // Typically you would make an API call to update the profile
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // Typically you would clear auth tokens and redirect
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                <FaUser className="text-3xl text-gray-500" />
              </div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500 text-sm">Member since {user.joinDate}</p>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'profile' ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-gray-100'}`}
              >
                <FaUser className="mr-3" />
                My Profile
              </button>
              
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'orders' ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-gray-100'}`}
              >
                <FaHistory className="mr-3" />
                My Orders
              </button>
              
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'wishlist' ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-gray-100'}`}
              >
                <FaHeart className="mr-3" />
                Wishlist
              </button>
              
              <button
                onClick={() => setActiveTab('password')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'password' ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-gray-100'}`}
              >
                <FaLock className="mr-3" />
                Change Password
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-3 rounded-lg text-red-500 hover:bg-red-50 mt-4"
              >
                <FaSignOutAlt className="mr-3" />
                Logout
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">My Profile</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center text-yellow-600 hover:text-yellow-700"
                  >
                    <FaEdit className="mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="space-x-3">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaUser className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-500 text-sm">Full Name</h3>
                      <p className="font-medium">{user.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-500 text-sm">Email</h3>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-500 text-sm">Phone</h3>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gray-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-500 text-sm">Address</h3>
                      <p className="font-medium">{user.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">My Orders</h2>
              
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">You haven't placed any orders yet</p>
                  <Link
                    to="/"
                    className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg inline-block"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map(order => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{order.items}</td>
                          <td className="px-6 py-4 whitespace-nowrap">₹{order.total}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/orders/${order.id}`}
                              className="text-yellow-600 hover:text-yellow-700 hover:underline"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
          
          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
              
              {wishlist.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                  <Link
                    to="/"
                    className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg inline-block"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {wishlist.map(item => (
                    <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-50 hover:text-red-500">
                          <FaHeart className="text-red-500" />
                        </button>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                        <p className="font-bold">₹{item.price}</p>
                        <button className="w-full mt-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Change Password Tab */}
          {activeTab === 'password' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Change Password</h2>
              
              <div className="max-w-md space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>
                
                <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;