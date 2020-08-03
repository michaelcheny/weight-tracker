import React from "react";
// import { Doughnut } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
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
            text={`${macros.fats}g/${fatGoal}g`}
            styles={buildStyles({
              textSize: "13px",
              textColor: "#e07a5f",
              pathColor: "#81b29a",
              // trailColor: "pink",
            })}
          />
        </Example>
        <Example label="Proteins">
          <CircularProgressbar
            value={macros.proteins}
            maxValue={proteinGoal}
            text={`${macros.proteins}g/${proteinGoal}g`}
            styles={buildStyles({
              textSize: "13px",
              textColor: "#e07a5f",
              pathColor: "#81b29a",
            })}
          />
        </Example>
        <Example label="carbs">
          <CircularProgressbar
            value={macros.carbs}
            maxValue={carbGoal}
            text={`${macros.carbs}g/${carbGoal}g`}
            styles={buildStyles({
              textSize: "13px",
              textColor: "#e07a5f",
              pathColor: "#81b29a",
            })}
          />
        </Example>
      </div>
    ); // return <Doughnut data={data} />;
  } else {
    return null;
  }
};

export default MacroChart;

function Example({
  label,
  description,
  children,
}: {
  label?: string;
  description?: string;
  children?: any;
}) {
  return (
    <div
      style={{ background: "none", border: "1px gray solid", display: "flex", flexDirection: "column" }}
    >
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "none",
          border: "2px green solid",
        }}
      > */}
      <div style={{ background: "none", height: 0 }}>
        <h4>{label}</h4>
        <p>{description}</p>
      </div>
      <div style={{ width: "135px", background: "none", border: "1px red solid" }}>{children}</div>
      {/* </div> */}
    </div>
  );
}
