import React, { useState, useEffect } from "react";
const apiId = process.env.REACT_APP_FOOD_DB_ID;
const apiKey = process.env.REACT_APP_FOOD_DB_API_KEY;

const FoodSearchPage = () => {
  const [search, setSearch] = useState("");
  const [foodResult, setFoodResult] = useState([]);

  useEffect(() => {
    // update foodResult whenever the search input changes for that good good\
    fetchFoodInfo();
  }, [search]);

  const fetchFoodInfo = async (query = search) => {
    let url = `https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=${apiId}&app_key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setFoodResult(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <div>
      hi{apiKey}
      {/* {console.log(process.env)} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Food"
        />
      </form>
      <input type="submit" />
    </div>
  );
};

export default FoodSearchPage;