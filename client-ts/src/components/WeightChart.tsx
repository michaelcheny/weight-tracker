import React, { useRef, useEffect, useState } from "react";
// import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import format from "date-fns/format";

// type Props = {
//   weightHistory: number[];
// };

const WeightChart: React.FC<any> = ({ weightHistory }) => {
  let labels: string[] | undefined = [];
  const [chartData, setChartData] = useState<object>({
    // labels: labels,
    // datasets: [
    //   {
    //     label: "chicken butt",
    //     data: [32, 22, 23, 45, 57],
    //     backgroundColor: ["rgba(75,192,192,0.6)"],
    //     borderWidth: 4,
    //   },
    // ],
  });
  // const chartRef = useRef<HTMLCanvasElement>(null);

  let data: number[] | undefined = [];
  weightHistory &&
    weightHistory.map((weight: { created_at: string; weight: number }) => {
      const thing = { ...weight };
      const date = format(new Date(weight.created_at), "MM/dd/yy");
      labels?.push(date);
      data?.push(weight.weight);
    });

  const dataa = {
    labels: labels,
    datasets: [
      {
        label: "chicken butt",
        data: data,
        backgroundColor: ["rgba(0, 196, 159,0.6)"],
        borderWidth: 4,
      },
    ],
  };
  // weightHistory.map((weight) => data.push(weight.weight));

  const addData = () => {
    // if (weightHistory) {
    // for (let i = 0; i < weightHistory.length; i++) {
    //   labels.push(weightHistory[i].created_at);
    //   data.push(weightHistory[i].weight);
    // }
    // for (const i of weightHistory) {
    //   console.log(i);
    // }
    // for (let i in weightHistory) {
    //   labels.push(weightHistory[i].created_at);
    //   data.push(weightHistory[i].weight);
    // }
    // }
  };
  const chart = () => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "chicken butt",
          data: data,
          backgroundColor: ["rgba(0, 196, 159,0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  // let myChart;
  // useEffect(() => {
  //   addData();
  //   chart();
  // myChart = new Chart(chartRef, {
  //   type: "line",
  // });
  // }, []);

  return (
    <>
      {console.log(labels)}
      <Line data={dataa} height={80} />
    </>
  );
};

export default WeightChart;
