import React, { createContext, useContext, useState } from 'react';

const IngredientContext = createContext();

export const useIngredientContext = () => {
  return useContext(IngredientContext);
};

export const IngredientProvider = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const updateIngredients = (ingredients) => {
    setSelectedIngredients(ingredients);
  };

  return (
    <IngredientContext.Provider value={{ selectedIngredients, updateIngredients }}>
      {children}
    </IngredientContext.Provider>
  );
};
