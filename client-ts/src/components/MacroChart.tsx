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

    const fatGoal = 120;
    const proteinGoal = 150;
    const carbGoal = 260;

    return (
      <div className="macro-container">
        <Example label="Fats">
          <CircularProgressbar
            value={macros.fats}
            maxValue={fatGoal}
            text={`${macros.fats}g`}
            className="chart"
          />
        </Example>
        <Example label="Proteins">
          <CircularProgressbar
            value={macros.proteins}
            maxValue={proteinGoal}
            text={`${macros.proteins}g`}
          />
        </Example>
        <Example label="carbs">
          <CircularProgressbar value={macros.carbs} maxValue={carbGoal} text={`${macros.carbs}g`} />
        </Example>
      </div>
    ); // return <Doughnut data={data} />;
  } else {
    return null;
  }
};

export default MacroChart;

function Example(props: any) {
  return (
    <div style={{ background: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "none",
          border: "2px green solid",
        }}
      >
        <div style={{ width: "40%", background: "none" }}>
          <h3>{props.label}</h3>
          <p>{props.description}</p>
        </div>
        <div style={{ width: "50%", background: "none", border: "1px red solid" }}>{props.children}</div>
      </div>
    </div>
  );
}
