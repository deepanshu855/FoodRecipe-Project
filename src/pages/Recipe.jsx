import React from "react";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { recipes } = useContext(recipeContext);

  if(recipes.length === 0) {
    return <div className="text-white">No recipes found</div>
  }

  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {recipes.map((recipe) => {
      return (
        <RecipeCard key={recipe.id} recipe={recipe} />
      );
    })}
  </div>
};

export default Recipe;
