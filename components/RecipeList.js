import React from 'react';
import RecipeCard from './RecipeCard';
import { useRecipeContext } from '../context/RecipeContext';

function RecipeList() {
  const { recipes, selectedIngredients } = useRecipeContext();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient))
  );

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found with your ingredients.</p>
      )}
    </div>
  );
}

export default RecipeList;
