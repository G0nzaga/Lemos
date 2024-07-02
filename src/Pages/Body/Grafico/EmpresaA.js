import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 20],
  ["Eat", 50],
  ["Commute", 21],
  ["Watch TV", 52],
  ["Sleep", 7],
];

export const options = {
  title: "Empresa A",
};

export default function EmpresaA() {
  return (
    <Chart
    className="empresab"
      chartType="PieChart"
      data={data}
      options={options}
     
    />
  );
}
