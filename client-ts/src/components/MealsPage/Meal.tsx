import React from 'react';

interface MealProps {
  meal: {
    food: {
      category: string;
      categoryLabel: string;
      foodContentsLabel: string;
      foodId: string;
      image: string;
      label: string;
      nutrients: {
        CHOCDF: Number;
        ENERC_KCAL: Number;
        FAT: Number;
        PROCNT: Number;
        FIBTG: Number;
      };
      servingSizes: Object[];
    };
  };
}

const Meal: React.FC<MealProps> = ({ meal }) => {
  console.log(meal);
  return (
    // TODOS: CSS THIS THANG UP
    <div>
      {meal.food.label}
      <img src={meal.food.image} alt={meal.food.label} />
      content: {meal.food.foodContentsLabel}
      nutrients: calories: {meal.food.nutrients.ENERC_KCAL}
      fats: {meal.food.nutrients.FAT}
      proteins: {meal.food.nutrients.PROCNT}
      carbs: {meal.food.nutrients.CHOCDF}
      fiber: {meal.food.nutrients.FIBTG}
    </div>
  );
};

export default Meal;
