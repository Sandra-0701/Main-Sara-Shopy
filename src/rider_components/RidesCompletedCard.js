"use client";

import React from "react";
import { Bike } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const RidesCompletedCard = ({ rideCount }) => {
  const generateChartData = () => {
    return Array.from({ length: rideCount }, (_, i) => ({
      value: (i % 10) + 1,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {/* Chart as a background overlay */}
      <div className="absolute inset-0 opacity-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={generateChartData()}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Content on top of the chart */}
      <div className="relative p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Rides Completed
          </h3>
          <p className="text-2xl font-bold text-green-600">{rideCount}</p>
        </div>
        <Bike className="text-green-600" size={40} />
      </div>
    </div>
  );
};

export default RidesCompletedCard;
