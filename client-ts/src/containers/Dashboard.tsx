import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import WeightChart from "../components/WeightChart";
import MacroChart from "../components/MacroChart";
import { defaults } from "react-chartjs-2";

defaults.global.maintainAspectRatio = false;

const Dashboard = () => {
  const { user, authenticated } = useContext(AuthContext);

  const goalConverter = (goal: number) => {
    switch (goal) {
      case -2:
        return "Lose 2 pound a week";
      case -1:
        return "Lost 1 pound a week";
      case 0:
        return "Maintain weight";
      case 1:
        return "Gain 1 pound a week";
      case 2:
        return "Gain 2 pounds a week";
    }
  };

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="stat-container">
        <p>Current weight: {user.weight}</p>
        <WeightChart weightHistory={user.weight_histories} />
      </div>
      {/* SECOND HALF OF SCREEN */}
      <div className="grid-container">
        <div>
          {user.current_calories || 1200}
          <span className="head">Current calories</span>
        </div>
        <div>
          {goalConverter(user.goal)}
          <span className="head">Caloric Goal</span>
        </div>
        <div className="macros">
          <span className="head">Macros</span>
          <MacroChart macros={user.macros} />
        </div>
        {/* <div>Total</div> */}
        <div>sdfsdf</div>
        <div>dfg</div>
      </div>
    </section>
  );
};

export default Dashboard;
