import React from "react";

export default function DashboardCard({label}) {
  return (
    <div className="flex justify-center items-center w-64 h-32 bg-success rounded-lg shadow-md text-white font-semibold">
      {label}
    </div>
  );
}
