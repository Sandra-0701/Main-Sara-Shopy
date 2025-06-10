import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import saraLogo from "/img/navbar/sara logo-02.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await authService.login({ email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        window.location.href = "/admin/dashboard";
      } else {
        setError(response.msg || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-white">
      <div className="w-full max-w-sm p-6">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <img
            src={saraLogo}
            alt="Logo Sara shop"
            width={250}
            height={100}
            className="mx-auto mb-4"
          />
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {/* Error Message */}
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
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
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;