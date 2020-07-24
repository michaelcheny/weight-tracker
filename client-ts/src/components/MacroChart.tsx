import React from "react";
import { Doughnut } from "react-chartjs-2";

const MacroChart: React.FC<any> = ({ macros }) => {
  console.log(macros);
  if (macros) {
    const data = {
      labels: ["Fats", "Protein", "Carbs"],
      datasets: [
        {
          data: [macros[0].fats, macros[0].proteins, macros[0].carbs],
          // data: [122, 444, 33],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    return <Doughnut data={data} />;
  } else {
    return null;
  }
};

export default MacroChart;
