"use client";

import CurrentOrdersList from "@/app/rider_components/CurrentOrdersList";
import RiderHeader from "@/app/rider_components/RiderHeader";
import RiderOrderCard from "@/app/rider_components/RiderOrderCard";
import RidesCompletedCard from "@/app/rider_components/RidesCompletedCard";
import React, { useState, useEffect } from "react";

const RiderDashboard = () => {
  const [rideCount, setRideCount] = useState(0);
  const MAX_RIDES = 20;

  useEffect(() => {
    const timer = setInterval(() => {
      if (rideCount < MAX_RIDES) {
        setRideCount((prev) => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [rideCount]);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="flex">
        {/* Desktop Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <RiderOrderCard />
            <RidesCompletedCard rideCount={rideCount} />
          </div>

          <div className="max-w-6xl mx-auto mt-8">
            <CurrentOrdersList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RiderDashboard;
