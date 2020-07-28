import React from "react";
import { Doughnut } from "react-chartjs-2";

const MacroChart: React.FC<any> = ({ macros }) => {
  console.log(macros);
  if (macros) {
    const data = {
      labels: [`Fats: ${macros[0].fats}`, `Protein: ${macros[0].proteins}`, `Carbs: ${macros[0].carbs}`],
      datasets: [
        {
          data: [macros[0].fats, macros[0].proteins, macros[0].carbs],
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
