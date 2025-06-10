import { useEffect, useState } from "react";

const LocationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Open modal when component mounts
  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(pincode)) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Pincode submitted:", pincode);
      closeModal();
      alert(`Location set for pincode: ${pincode}`);
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="animate-slideIn bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Set Your Location
              </h3>
              <p className="text-yellow-100 mt-1">
                Get personalized services for your area
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-yellow-100 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          <div className="flex items-start mb-6">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Why set your location?
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                We'll show you services, offers and availability specific to
                your area when you provide your pincode.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter 6-digit Pincode
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="e.g. 560001"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none pincode-input text-lg font-medium tracking-wider placeholder-gray-400 transition-all"
                  maxLength={6}
                  pattern="\d{6}"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                We don't store your exact address, just the service area
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Skip for now
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white rounded-lg font-medium hover:from-yellow-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center disabled:opacity-70"
              >
                {isLoading ? (
                  "Checking..."
                ) : (
                  <>
                    Confirm Location
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;