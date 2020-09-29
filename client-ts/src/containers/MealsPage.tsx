import React, { useState, useContext } from 'react';
import Meal from '../components/MealsPage/Meal';
import { AuthContext } from '../context/AuthContext';
const axios = require('axios');

// axios.defaults.baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple`;

let URLMAIN = `https://api.edamam.com/api/food-database/v2/parser?ingr=`;
const URLAUTH = `&app_id=${process.env.REACT_APP_FOOD_DB_ID}&app_key=${process.env.REACT_APP_FOOD_DB_API_KEY}`;

const MealsPage = () => {
  // console.log(process.env.REACT_APP_FOOD_DB_ID);
  const [input, setInput] = useState('apple');
  const [yesEat, setYesEat] = useState(true);
  const [results, setResults] = useState([]);
  const { user } = useContext(AuthContext);

  const getFoodInfo = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${URLMAIN}${input}${URLAUTH}`);
      console.log(response);
      setResults(response.data.hints);
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
            <label>What u craving?</label>
            <input
              type="text"
              placeholder={input}
              onChange={(e) => setInput(e.target.value)}
              className=""
            />
          </form>
          <button onClick={getFoodInfo}>Should I Eat This?</button>
        </div>
        <div>
          {results.map((res, i) => {
            // console.log(res)
            return <Meal meal={res} key={i} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MealsPage;
