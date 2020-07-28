import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import WeightChart from "../components/WeightChart";
import MacroChart from "../components/MacroChart";
import { defaults } from "react-chartjs-2";

defaults.global.maintainAspectRatio = false;

const Dashboard = () => {
  const { user, authenticated } = useContext(AuthContext);

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p>Current weight: {user.weight}</p>
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
