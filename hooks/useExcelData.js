import React, { useState } from "react";
import ExcelJS from "exceljs";

export const useExcelData = () => {
  const [tableData, setTableData] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const workbook = new ExcelJS.Workbook();
      const reader = new FileReader();

      reader.onload = async (e) => {
        const buffer = e.target?.result;

        // Load the Excel file into ExcelJS
        await workbook.xlsx.load(buffer);

        // Get the first worksheet
        const worksheet = workbook.worksheets[0];

        // Extract the data into an array
        const rows = [];
        worksheet.eachRow((row) => {
          rows.push(row.values.slice(1)); // Remove ExcelJS internal row index
        });

        setTableData(rows);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return { tableData, handleFileUpload };
};
