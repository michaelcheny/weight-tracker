import React, { useState, useEffect } from "react";
// const appId = ENV["FOOD_DB_ID"];
const apiId = process.env.REACT_APP_FOOD_DB_ID;
// const apiKey = ENV["FOOD_DB_API_KEY"];
const apiKey = process.env.REACT_APP_FOOD_DB_API_KEY;

const FoodSearchPage = () => {
  const [search, setSearch] = useState("");
  const [foodResult, setFoodResult] = useState([]);

  useEffect(() => {
    // update foodResult whenever the search input changes for that good good
  }, [search]);

  const fetchFoodInfo = async (query = "aunt jemima") => {
    let url = `https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=${apiId}&app_key=${apiKey}`;
  };

  return (
    <div>
      hi{apiKey}
      {console.log(process.env)}
    </div>
  );
};

export default FoodSearchPage;
