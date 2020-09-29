import React from 'react';

interface MealProps {
  meal: {
    food: {
      category: String;
      categoryLabel: String;
      foodContentsLabel: String;
      foodId: String;
      label: String;
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
  return <div>{meal.food.label}</div>;
};

export default Meal;
