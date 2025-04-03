import React, { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Load recipes here (static or from API)

  const fetchRecipes = async () => {
    // Optionally load recipes from API here
    setRecipes([
      { id: 1, name: 'Grilled Fish', ingredients: ['Fish', 'Butter'], effect: 'Restores 10 health', image: 'fish.jpg' },
      { id: 2, name: 'Apple Pie', ingredients: ['Apple', 'Butter'], effect: 'Restores 8 health', image: 'apple_pie.jpg' },
      // Add more recipes
    ]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, fetchRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
