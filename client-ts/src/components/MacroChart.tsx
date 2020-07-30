import React from "react";
import { Doughnut } from "react-chartjs-2";

type MacroChartProps = {
  macros: {
    fats: number;
    proteins: number;
    carbs: number;
  };
};

const MacroChart = ({ macros }: MacroChartProps) => {
  console.log(macros);
  if (macros) {
    const data = {
      labels: [`Fats: ${macros.fats}`, `Protein: ${macros.proteins}`, `Carbs: ${macros.carbs}`],
      datasets: [
        {
          data: [macros.fats, macros.proteins, macros.carbs],
          backgroundColor: ["#0A686B", "#59ADB5", "#698280"],
          borderColor: "rgba(0,0,0,0.1)",
          borderWidth: 1,
          hoverBackgroundColor: ["#81b29a", "#81b29a", "#81b29a"],
          // cutoutPercentage: 0,
        },
      ],
    };
    return <Doughnut data={data} />;
  } else {
    return null;
  }
};

export default MacroChart;
