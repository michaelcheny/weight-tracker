import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import {
  BarChart,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import format from "date-fns/format";

const macros: any = [
  { name: "fats", value: 120 },
  { name: "proteins", value: 120 },
  { name: "carbs", value: 230 },
];

const Dashboard = () => {
  const { user, authenticated, token } = useContext(AuthContext);

  const ar: object[] | undefined = [];
  // clones the object to new one with acceptable name for charting
  user.weight_histories &&
    user.weight_histories.map((hist: { weight: any; created_at: any }) => {
      const s = { weight: hist.weight, date: format(new Date(hist.created_at), "MM/dd/yy") };
      ar.push(s);
    });

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p style={{ marginBottom: "1em" }}>Weight Log {user.first_name}</p>
        <ResponsiveContainer width="97%" height="90%">
          <BarChart barSize={27} data={ar}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date"></XAxis>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="weight" fill="#81b29a" animationEasing="linear" unit=" lbs" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid-container">
        <div>Current Calories</div>
        <div>Goal</div>
        <div>Total</div>
        <div>dfg</div>
        <div>dfg</div>
        <div>
          <PieChart width={730} height={250}>
            <Pie
              data={macros}
              dataKey="value"
              nameKey="name"
              // cx={200}
              // cy={200}
              labelLine={false}
              label
              outerRadius={80}
              fill="#81b29a"
            />
            {macros.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Legend />
          </PieChart>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
