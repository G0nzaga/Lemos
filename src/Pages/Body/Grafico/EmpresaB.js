import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 1],
  ["Eat", 52],
  ["Commute", 22],
  ["Watch TV", 12],
  ["Sleep", 74],
];

export const options = {
  title: "Empresa B",
};

export default function EmpresaB() {
  return (
    <Chart
    className="empresab"
      chartType="PieChart"
      data={data}
      options={options}
     
    />
  );
}
