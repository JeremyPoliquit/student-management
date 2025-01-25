"use client";
import React from "react";
import { useExcelData } from "../hooks/useExcelData";

const page = () => {
  const { tableData, handleFileUpload } = useExcelData();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Student Management</h1>
      <input
        type="file"
        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
      {tableData.length > 0 && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              {tableData[0].map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-400 px-4 py-2 bg-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-400 px-4 py-2"
                  >
                    {cell || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default page;
