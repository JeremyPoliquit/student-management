"use client"
import React from "react";
import StudentForm from "../../../components/StudentForm";

const page = () => {
  const handleSubmit = async (data) => {
    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit")
    } catch (error) {
        console.error('Error:', error.message);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default page;
