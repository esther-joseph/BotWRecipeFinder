import React, { useState } from 'react';

const ingredientsList = [
  'Apple', 'Mushroom', 'Hyrule Herb', 'Fish', 'Spicy Pepper', 'Meat', 'Butter',
  // Add more ingredients here
];

function IngredientSelector({ onSelectIngredient }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prevState => {
      if (prevState.includes(ingredient)) {
        return prevState.filter(item => item !== ingredient);
      } else {
        return [...prevState, ingredient];
      }
    });
    onSelectIngredient(selectedIngredients);
  };

  return (
    <div>
      <h3>Select Your Ingredients</h3>
      <div>
        {ingredientsList.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => toggleIngredient(ingredient)}
            className={selectedIngredients.includes(ingredient) ? 'selected' : ''}
          >
            {ingredient}
          </button>
        ))}
      </div>
    </div>
  );
}

export default IngredientSelector;
