"use client";
import React from "react";
import Link from "next/link";

import SidebarDashboard from "@components/SidebarDashboard";
import SidebarContent from "@components/SidebarContent";

const page = () => {
  return (
    <div className="flex justify-between min-h-screen gap-4">
      {/* Column 1 */}
      <div className="flex justify-center w-1/2 max-h-screen overflow-y-auto">
        <SidebarDashboard />
      </div>
      {/* Column 1 */}

      {/* Column 2 */}
      <div className="w-full max-h-screen overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        <SidebarContent />
      </div>
      {/* Column 2 */}
    </div>
  );
};

export default page;
