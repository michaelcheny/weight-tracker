import React from "react";
import { Line } from "react-chartjs-2";
import format from "date-fns/format";

const WeightChart: React.FC<any> = ({ weightHistory }) => {
  let labels: string[] | undefined = [];
  let data: number[] | undefined = [];

  // Push them into arrays
  weightHistory &&
    weightHistory.map((weight: { created_at: string; weight: number }) => {
      const date = format(new Date(weight.created_at), "MM/dd/yy");
      labels?.push(date);
      data?.push(weight.weight);
    });

  const dataa = {
    labels,
    datasets: [
      {
        label: "Weight",
        data,
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
  return <Line data={dataa} height={90} type="line" />;
};

export default WeightChart;
