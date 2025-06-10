import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
// import saraLogo from "../img/navbar/sara-logo-02.svg";

const RegisterModal = ({ isOpen, onClose, onLoginOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selected, setSelected] = useState("user");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col md:flex-row border border-gray-200 dark:border-gray-700">
        {/* Logo Section */}
        <div className="md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0 md:pr-8">
          <div className="mb-6 transform rotate-0">
            {/* <img
              src={saraLogo}
              alt="Logo Sara shop"
              width={250}
              height={100}
              className="mx-auto"
            /> */}
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Welcome to Sara Shop
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
            Join our community and start shopping with amazing deals
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <MdOutlineClose />
            </button>
          </div>
          
          {/* Welcome Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Create Account
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up to get started
            </p>
          </div>

          {/* Register Form */}
          <form className="space-y-5">
            {/* Full Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <FaUserAlt />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <MdEmail />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <IoMdLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-3 pl-10 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <IoMdLock />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full py-3 pl-10 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Account Type Selection */}
            <div className="pt-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Account Type
              </p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={selected === "user"}
                    onChange={() => setSelected("user")}
                    className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    User
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="agent"
                    checked={selected === "agent"}
                    onChange={() => setSelected("agent")}
                    className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Agent
                  </span>
                </label>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <button
                onClick={onLoginOpen}
                className="text-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-500 font-medium hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;