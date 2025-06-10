import LineChartMini from "./LineChartMini";

export default function MetricCard({ title, value, icon }) {
  const getIconPath = () => {
    switch (icon) {
      case "shopping-cart":
        return "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z";
      case "attach-money":
        return "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 0v1m0-1v1m0 0v1m0-1v1m0 0v1m0-1v1M12 21c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2-1.343-2-3-2m0 8c1.11 0 2.08-.402 2.599-1M12 21v-1m0 1v-1m0 0v-1m0 1v-1m0 0v-1m0 1v-1";
      case "local-shipping":
        return "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM12 17h.01M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <LineChartMini />
      </div>
      <div className="relative z-10 text-center">
        <div className="text-blue-500">
          <svg
            className="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={getIconPath()}
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-2xl font-bold text-gray-700">{value}</p>
      </div>
    </div>
  );
}
