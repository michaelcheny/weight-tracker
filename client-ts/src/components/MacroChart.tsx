import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type MacroChartProps = {
  macros: {
    fats: number;
    proteins: number;
    carbs: number;
  };
  macroGoal: {
    fats: number;
    proteins: number;
    carbs: number;
  };
};

const MacroChart = ({ macros, macroGoal }: MacroChartProps) => {
  console.log(macros);
  console.log(macroGoal);
  if (macros && macroGoal) {
    return (
      <div className="macro-container">
        <Example label="Fats" description={`Goal: ${macroGoal.fats}g`}>
          <CircularProgressbar
            value={macros.fats}
            maxValue={macroGoal.fats}
            text={`${macros.fats}/${macroGoal.fats}`}
            styles={buildStyles({
              textSize: '16px',
              textColor: '#e07a5f',
              pathColor: '#81b29a',
              // trailColor: "pink",
            })}
          />
        </Example>
        <Example label="Proteins" description={`Goal: ${macroGoal.proteins}g`}>
          <CircularProgressbar
            value={macros.proteins}
            maxValue={macroGoal.proteins}
            text={`${macros.proteins}/${macroGoal.proteins}`}
            styles={buildStyles({
              textSize: '16px',
              textColor: '#e07a5f',
              pathColor: '#81b29a',
            })}
          />
        </Example>
        <Example label="Carbs" description={`Goal: ${macroGoal.carbs}g`}>
          <CircularProgressbar
            value={macros.carbs}
            maxValue={macroGoal.carbs}
            text={`${macros.carbs}/${macroGoal.carbs}`}
            styles={buildStyles({
              textSize: '16px',
              textColor: '#e07a5f',
              pathColor: '#81b29a',
            })}
          />
        </Example>
      </div>
    );
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
        background: 'none',
        // border: "1px gray solid",
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1em',
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
