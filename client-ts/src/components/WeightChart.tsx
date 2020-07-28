import React from "react";
import { Line } from "react-chartjs-2";
import format from "date-fns/format";

interface WeightGraphProps {
  weightHistory: object[] | any;
}

const WeightChart: React.FC<WeightGraphProps> = ({ weightHistory }) => {
  let labels: string[] | undefined = [];
  let weights: number[] | undefined = [];

  console.log(weightHistory);
  // Push them into arrays
  weightHistory &&
    weightHistory.map((weight: { created_at: string; weight: number }) => {
      const date = format(new Date(weight.created_at), "MM/dd/yy");
      labels?.push(date);
      weights?.push(weight.weight);
    });

  const data = {
    labels,
    datasets: [
      {
        label: "Weight",
        data: weights,
        backgroundColor: ["rgba(129, 178, 154, 0.6)"],
        borderWidth: 3,
        lineTension: 0,
        borderDashOffset: 0.0,
        pointBorderColor: "rgba(129, 178, 154, 0.7",
        pointBackgroundColor: "#81b29a",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#e07a5f",
        pointHoverBorderColor: "#e07a5f",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
      },
    ],
  };
  return <Line data={data} />;
};

export default WeightChart;
