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
      };
      servingSizes: Object[];
    };
  };
}

const Meal: React.FC<MealProps> = ({ meal }) => {
  console.log(meal);
  return (
    <div>
      {meal.food.label}
      <img src={meal.food.image} alt={meal.food.label} />
      content: {meal.food.foodContentsLabel}
      nutriants: calories: {meal.food.nutrients.ENERC_KCAL}
    </div>
  );
};

export default Meal;
