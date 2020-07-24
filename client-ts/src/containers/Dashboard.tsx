import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

import WeightChart from "../components/WeightChart";
import MacroChart from "../components/MacroChart";

const Dashboard = () => {
  const { user, authenticated, token } = useContext(AuthContext);

  // const ar: object[] | undefined = [];
  // const labels: string[] | undefined = [];
  // const data: number[] | undefined = [];
  // clones the object to new one with acceptable name for charting
  // user.weight_histories &&
  //   user.weight_histories.map((hist: { weight: any; created_at: any }) => {
  //     const s = { weight: hist.weight, date: format(new Date(hist.created_at), "MM/dd/yy") };
  //     ar.push(s);

  //     // labels.push(hist.created_at);
  //   });

  const calories = [
    {
      name: "Macronutrients",
      current: 2300,
      remainder: 1200,
      goals: 2500,
    },
  ];

  // const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p style={{ marginBottom: "1em" }}>Weight Log {user.first_name}</p>

        <WeightChart weightHistory={user.weight_histories} />
      </div>
      <div className="grid-container">
        <div>Current Calories</div>
        <div>Goal</div>
        <div>Total</div>
        <div>
          {/* <ResponsiveContainer */}
          {/* // width="97%" height="90%" > */}
          <BarChart
            width={200}
            height={400}
            barSize={40}
            data={calories}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="current"
              fill={calories[0].current > calories[0].goals ? "#f00" : "#81b29a"}
              stackId="a"
            />
            <Bar
              dataKey="remainder"
              fill={calories[0].current > calories[0].goals ? "#f00" : "#3e3"}
              stackId="b"
            />
            <Bar
              dataKey="goals"
              fill={calories[0].current > calories[0].goals ? "#f00" : "#224"}
              stackId="c"
            />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div>dfg</div>
        <div>
          {/* <PieChart width={730} height={250}>
            <Pie
              data={macros}
              dataKey="value"
              nameKey="name"
              // cx={200}
              // cy={200}
              labelLine={false}
              label
              outerRadius={60}
              fill="#81b29a"
            />
            <Tooltip />
            <Legend />
          </PieChart> */}
          <MacroChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
