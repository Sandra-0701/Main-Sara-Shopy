"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AgentDrawer from "@/app/agent_components/AgentDrawer";
import MetricCard from "@/app/agent_components/MetricCard";
import DataTable from "@/app/agent_components/DataTable";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AgentDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">



      {/* Drawer controlled by state */}
      <AgentDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard title="Total Orders" value="120" icon="shopping-cart" />
          <MetricCard title="Earnings" value="$5,000" icon="attach-money" />
          <MetricCard
            title="Pending Deliveries"
            value="15"
            icon="local-shipping"
          />
        </div>

        <div className="mt-6">
          <DataTable/>
        </div>
      </div>
    </div>
  );
}
