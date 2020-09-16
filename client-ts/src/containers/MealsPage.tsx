import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const MealsPage = () => {
  const [yesEat, setYesEat] = useState(true);
  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="container">
        testing
        <h1>sdkjfhskdjf</h1>
        <div className="stat-container">
          <button
            onClick={() => {
              setYesEat((prev) => !prev);
            }}
          >
            Should I Eat This?
          </button>
        </div>
      </section>
    </>
  );
};

export default MealsPage;
