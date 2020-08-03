import React from "react";
// import { Doughnut } from "react-chartjs-2";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
    // const data = {
    //   labels: [`Fats: ${macros.fats}`, `Protein: ${macros.proteins}`, `Carbs: ${macros.carbs}`],
    //   datasets: [
    //     {
    //       data: [macros.fats, macros.proteins, macros.carbs],
    //       backgroundColor: ["#0A686B", "#59ADB5", "#698280"],
    //       borderColor: "rgba(0,0,0,0.1)",
    //       borderWidth: 1,
    //       hoverBackgroundColor: ["#81b29a", "#81b29a", "#81b29a"],
    //       // cutoutPercentage: 0,
    //     },
    //   ],
    // };
    return (
      <Example label="fats" description="hadslf">
        <CircularProgressbar value={macros.fats} text="" />
      </Example>
    ); // return <Doughnut data={data} />;
  } else {
    return null;
  }
};

export default MacroChart;

function Example(props: any) {
  return (
    <div style={{ background: "none" }}>
      {/* <hr style={{ border: "2px solid #ddd" }} /> */}
      <div style={{ display: "flex", background: "none" }}>
        <div style={{ width: "90%", background: "none", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "90%", background: "none" }}>
          <h3>{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
