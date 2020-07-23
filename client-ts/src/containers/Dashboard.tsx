import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis, Label, LabelList } from "recharts";

import format from "date-fns/format";
<<<<<<< Updated upstream
=======

import useMedia from "react-media";

const isSmallScreen = useMedia({ query: "(max-width: 599px)" });
>>>>>>> Stashed changes
// type WeightHist {
//   weight: number,
//   date: string
// }
const Dashboard = () => {
  const { user, authenticated, token } = useContext(AuthContext);

  const ar: object[] | undefined = [];
  user.weight_histories &&
    user.weight_histories.map((hist: { weight: any; created_at: any }) => {
      const s = { weight: hist.weight, date: format(new Date(hist.created_at), "MM/dd/yy") };
      ar.push(s);
    });
  console.log(ar);

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p style={{ marginBottom: "1em" }}>{user.first_name}</p>
        <BarChart width={750} height={300} barSize={27} data={ar}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date">
            {/* <Label value="weight" offset={0} position="insideBottom" /> */}
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="weight" fill="#8884d8" /> */}
          <Bar dataKey="weight" fill="#82ca9d">
            <LabelList dataKey="weight" position="top" offset={5} />
          </Bar>
        </BarChart>
      </div>
    </section>
  );
};

export default Dashboard;
