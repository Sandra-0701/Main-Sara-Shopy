"use client";
import StatCard from "@/app/components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-1 ml-0 lg:ml-64 transition-all">
        <div className="p-5">

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              icon={<i className="fas fa-shopping-cart"></i>}
              title="Total Orders"
              value="1,247"
              trendValue="12.5% from last month"
              trendDirection="up"
            />

            <StatCard
              icon={<i className="fas fa-dollar-sign"></i>}
              title="Revenue"
              value="$52,389"
              trendValue="8.2% from last month"
              trendDirection="up"
            />

            <StatCard
              icon={<i className="fas fa-users"></i>}
              title="New Customers"
              value="324"
              trendValue="5.7% from last month"
              trendDirection="up"
            />

            <StatCard
              icon={<i className="fas fa-box"></i>}
              title="Low Stock Items"
              value="18"
              trendValue="3 more than last week"
              trendDirection="down"
            />
          </div>

          {/* Charts Row */}
          <div className="mt-5">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">Sales Analytics</h2>
                <select className="border border-gray-300 rounded p-1 text-sm w-36">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Year</option>
                </select>
              </div>

              <div className="h-72 flex items-center justify-center bg-gray-100 rounded-lg">
                <i className="fas fa-chart-line text-5xl text-gray-400"></i>
              </div>

              <div className="flex justify-center gap-5 mt-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded bg-yellow-400 mr-2"></div>
                  <span className="text-sm">Total Sales</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded bg-gray-500 mr-2"></div>
                  <span className="text-sm">Online Orders</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded bg-yellow-500 mr-2"></div>
                  <span className="text-sm">In-Store Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
