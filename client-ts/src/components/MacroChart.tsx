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
        <Example label="Fats" description={`Goal: ${fatGoal}g`}>
          <CircularProgressbar
            value={macros.fats}
            maxValue={fatGoal}
            text={`${macros.fats}g`}
            styles={buildStyles({
              textSize: "20px",
              textColor: "#e07a5f",
              pathColor: "#81b29a",
              // trailColor: "pink",
            })}
          />
        </Example>
        <Example label="Proteins" description={`Goal: ${proteinGoal}g`}>
          <CircularProgressbar
            value={macros.proteins}
            maxValue={proteinGoal}
            text={`${macros.proteins}g`}
            styles={buildStyles({
              textSize: "20px",
              textColor: "#e07a5f",
              pathColor: "#81b29a",
            })}
          />
        </Example>
        <Example label="Carbs" description={`Goal: ${carbGoal}g`}>
          <CircularProgressbar
            value={macros.carbs}
            maxValue={carbGoal}
            text={`${macros.carbs}g`}
            styles={buildStyles({
              textSize: "20px",
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
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "none",
        // border: "1px gray solid",
        display: "flex",
        flexDirection: "column",
        marginBottom: "1em",
      }}
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
      <div className="macro-headers">
        <h4>{label}</h4>
      </div>
      <div className="macro-chart">{children}</div>
      {/* <p style={{ fontSize: 14 }}>{description}</p> */}
      {/* </div> */}
    </div>
  );
}
