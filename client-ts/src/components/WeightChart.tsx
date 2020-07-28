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
        // fill: false,
        // responsive: true,
        // maintainAspectRaio: t
        backgroundColor: ["rgba(129, 178, 154, 0.6)"],
        borderWidth: 2,
        lineTension: 0,
        borderDashOffset: 0.0,
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };
  return <Line data={data} />;
};

export default WeightChart;
