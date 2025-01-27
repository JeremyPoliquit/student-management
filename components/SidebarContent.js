import React from "react";
import DashboardCard from "./DashboardCard";

export default function SidebarContent() {
  return (
    <div>
      {/* Container */}
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex-1 ">
          <div className="flex justify-center items-center w-64 h-32 bg-success rounded-lg shadow-md text-white font-semibold">
            <DashboardCard label="Enrolled" />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-center items-center w-64 h-32 bg-success rounded-lg shadow-md text-white font-semibold">
            <DashboardCard label="Sections" />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-center items-center w-64 h-32 bg-success rounded-lg shadow-md text-white font-semibold">
            <DashboardCard label="Your Schedule" />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-center items-center w-64 h-32 bg-success rounded-lg shadow-md text-white font-semibold">
            <DashboardCard label="Options" />
          </div>
        </div>
      </div>
    </div>
  );
}
