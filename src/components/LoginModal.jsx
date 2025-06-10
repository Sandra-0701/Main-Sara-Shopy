import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom"; // Changed from next/link
import { MdOutlineClose } from "react-icons/md";


const LoginModal = ({ isOpen, onClose, onRegisterOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-5 z-50 backdrop-blur-sm">
      <div className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <MdOutlineClose />
          </button>
        </div>

        {/* Logo and Title */}
        <div className="text-center mb-8">
          {/* <img
            src={saraLogo}
            alt="Logo Sara shop"
            width={250}
            height={100}
            className="mx-auto mb-4"
          /> */}
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {/* Login Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <span
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <Link to="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mb-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <button
            onClick={onRegisterOpen}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;