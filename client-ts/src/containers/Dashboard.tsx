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
} from "recharts";

import format from "date-fns/format";

// import { useMedia } from "react-media";

// type WeightHist {
//   weight: number,
//   date: string
// }
const Dashboard = () => {
  const { user, authenticated, token } = useContext(AuthContext);
  // const isSmallScreen = useMedia({ query: "(max-width: 768px)" });

  const ar: object[] | undefined = [];
  // clones the object to new one with acceptable name for charting
  user.weight_histories &&
    user.weight_histories.map((hist: { weight: any; created_at: any }) => {
      const s = { weight: hist.weight, date: format(new Date(hist.created_at), "MM/dd/yy") };
      ar.push(s);
    });

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
    </section>
  );
};

export default Dashboard;
