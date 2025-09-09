import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FiUser } from 'react-icons/fi';
import {
  FaSearch,
  FaShoppingCart,
  FaRegUserCircle,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdShoppingBag } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiShapesFill } from "react-icons/ri";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";




const MainNavbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const activeLink = "text-yellow-500";
  const inactiveLink = "text-gray-400";

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:hidden md:hidden lg:flex px-3 items-center justify-between z-3 sticky top-0 h-[70px] bg-[#ffd400] border-b border-[#ffd400] z-20">
        <div className="logo w-[150px] h-[120px] md:w-[200px] md:h-[100px] overflow-hidden flex items-center justify-center">
          <Link to="/">
            <img
              src="/img/navbar/SaraShoppy-logo1.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>


        <div className="location hidden md:flex items-center gap-2">
          <HiLocationMarker className="text-xl mt-2" />
          <div>
            <h5 className="font-bold mt-3 text-sm md:text-base">
              Kaloor, Eranakulam
            </h5>
          </div>
        </div>
        <div className="search-bar bg-[#f8f8f8] rounded-lg border-l border-[#eeeeee] p-2.5 w-full md:w-[40vw] flex items-center my-2 md:my-0">
          <FaSearch className="text-gray-500" />
          <input
            placeholder="'search Egg'"
            className="border-none w-[95%] bg-transparent focus:outline-none ml-2"
          />
        </div>
        <button
          className="btn text-lg hidden md:block"
          onClick={openLoginModal}
        >
          Login
        </button>
        <Link to="/cart">
          <button
            className="btn bg-black text-white px-4 py-2 rounded-lg w-full md:w-auto my-2 md:my-0 flex items-center gap-2 cursor-pointer"
            id="sara-cart-button"
          >
            <FaShoppingCart /> My Cart
          </button>
        </Link>


      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onRegisterOpen={openRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />

      {/* Mobile Navbar */}
      <nav className="lg:hidden p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-lg font-bold">Kaloor, Eranakula</h1>
          </div>
          <div>
            <button
              className="flex items-center gap-2 text-lg"
              onClick={openLoginModal}
              aria-label="Open login modal"
            >
              <FaRegUserCircle className="w-10 h-10" />
            </button>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full p-2 pl-10 rounded-full border border-gray-300"
            placeholder='Search "paneer"'
          />
        </div>
      </nav>

      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 lg:hidden z-50 shadow-lg">
      <div className="flex justify-around py-3 px-2">
        {/* Home Link */}
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            `flex flex-col items-center space-y-1 w-full active:scale-95 transition-transform ${
              isActive ? activeLink : inactiveLink
            }`
          }
        >
          {({ isActive }) => (
            <>
              <IoMdHome className="text-2xl" />
              <span className={`text-xs font-medium ${isActive ? 'text-yellow-500' : 'text-gray-500'}`}>
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* Orders Link */}
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            `flex flex-col items-center space-y-1 w-full active:scale-95 transition-transform ${
              isActive ? activeLink : inactiveLink
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MdShoppingBag className="text-2xl" />
              <span className={`text-xs font-medium ${isActive ? 'text-yellow-500' : 'text-gray-500'}`}>
                Cart
              </span>
            </>
          )}
        </NavLink>

        {/* Categories Link */}
        <NavLink 
          to="/categories" 
          className={({ isActive }) => 
            `flex flex-col items-center space-y-1 w-full active:scale-95 transition-transform ${
              isActive ? activeLink : inactiveLink
            }`
          }
        >
          {({ isActive }) => (
            <>
              <RiShapesFill className="text-2xl" />
              <span className={`text-xs font-medium ${isActive ? 'text-yellow-500' : 'text-gray-500'}`}>
                Categories
              </span>
            </>
          )}
        </NavLink>

        {/* Account Link */}
        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `flex flex-col items-center space-y-1 w-full active:scale-95 transition-transform ${
              isActive ? activeLink : inactiveLink
            }`
          }
        >
          {({ isActive }) => (
            <>
              <FiUser className="text-2xl" />
              <span className={`text-xs font-medium ${isActive ? 'text-yellow-500' : 'text-gray-500'}`}>
                Profile
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>

    </>
  );
};

export default MainNavbar;