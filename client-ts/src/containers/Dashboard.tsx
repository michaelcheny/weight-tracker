import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import WeightChart from "../components/WeightChart";
import MacroChart from "../components/MacroChart";
import WeightUpdateForm from "../components/WeightUpdateForm";
import { defaults } from "react-chartjs-2";
import CompleteUserForm from "../components/CompleteUserForm";

defaults.global.maintainAspectRatio = false;

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [showWeightForm, setShowWeightForm] = useState<boolean>(false);

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

  const completeUserSignup = () => {
    if (
      !user.activity_level ||
      !user.age ||
      !user.bmr ||
      !user.current_calories ||
      !user.gender ||
      // !user.goal ||
      !user.height ||
      !user.tdee ||
      !user.weight
    ) {
      return <CompleteUserForm />;
    } else {
      return null;
    }
  };

  return (
    <>
      {console.log(user)}
      {completeUserSignup()}
      {showWeightForm && <WeightUpdateForm showForm={setShowWeightForm} />}
      <section className="container">
        <h1>Dashboard</h1>
        <div className="stat-container">
          <p>
            Current weight: {user.weight}
            <button onClick={() => setShowWeightForm(true)}>Weigh in</button>
          </p>
          <WeightChart weightLog={user.weight_histories} />
        </div>
        {/* SECOND HALF OF SCREEN */}
        <div className="grid-container">
          <div>
            {user.current_calories || 1200}
            <span className="head">Current calories</span>
          </div>
          <div>
            <span className="head">Something</span>sdfsdf
          </div>
          <div>
            {goalConverter(user.goal)}
            <span className="head">Current Goal</span>
          </div>
          <div className="macros">
            <span className="head">Macros</span>
            <MacroChart macros={user.macro} />
          </div>
          {/* <div>Total</div> */}
          <div>
            <span className="head">Daily Macronutrient Goal</span>
            <div className="macro-goals-container">
              <div className="macro-goal-content">
                <h4>Fats</h4>
                <p>120g</p>
              </div>
              <div className="macro-goal-content">
                <h4>Proteins</h4>
                <p>150g</p>
              </div>
              <div className="macro-goal-content">
                <h4>Carbs</h4>
                <p>260g</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
