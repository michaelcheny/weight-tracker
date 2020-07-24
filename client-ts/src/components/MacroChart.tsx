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
          backgroundColor: ["#F1E0C5", "#C9B79C", "#71816D"],
          hoverBackgroundColor: ["#81b29a", "#81b29a", "#81b29a"],
          // font={2}
        },
      ],
    };
    return <Doughnut data={data} width={200} />;
  } else {
    return null;
  }
};

export default MacroChart;
