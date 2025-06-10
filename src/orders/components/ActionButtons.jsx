import { FaRedo, FaQuestionCircle } from "react-icons/fa";

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-5 mb-5">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
        <FaRedo className="mr-2" />
        Reorder
      </button>
      <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium border border-gray-200 py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
        <FaQuestionCircle className="mr-2" />
        Need Help?
      </button>
    </div>
  );
}
