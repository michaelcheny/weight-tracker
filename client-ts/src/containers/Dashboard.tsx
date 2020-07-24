import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import { BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

import WeightChart from "../components/WeightChart";
import MacroChart from "../components/MacroChart";

const Dashboard = () => {
  const { user, authenticated, token } = useContext(AuthContext);

  const calories = [
    {
      name: "Macronutrients",
      current: 2300,
      remainder: 1200,
      goals: 2500,
    },
  ];

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p style={{ marginBottom: "1em" }}>Weight Log {user.first_name}</p>

        <WeightChart weightHistory={user.weight_histories} />
      </div>
      {/* SECOND HALF OF SCREEN */}
      <div className="grid-container">
        <div>Current Calories</div>
        <div>Goal</div>
        <div>Total</div>
        <div>sdfsdf</div>
        <div>dfg</div>
        <div>
          <MacroChart macros={user.macros} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
