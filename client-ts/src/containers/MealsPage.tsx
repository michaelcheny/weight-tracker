import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const axios = require('axios');

// axios.defaults.baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple`;

let URLMAIN = `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple`;
const URLAUTH = `&app_id=${process.env.REACT_APP_FOOD_DB_ID}&app_key=${process.env.REACT_APP_FOOD_DB_API_KEY}`;

const MealsPage = () => {
  const [yesEat, setYesEat] = useState(true);
  const { user } = useContext(AuthContext);

  const getFoodInfo = async (params) => {
    try {
      const response = axios.get(`${URLMAIN}${URLAUTH}`);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="container">
        testing
        <h1>sdkjfhskdjf</h1>
        <div className="stat-container">
          <form onSubmit={getFoodInfo}>
            <input type="text" placeholder="What u cravin?" />
          </form>
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
