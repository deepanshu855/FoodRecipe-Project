import React from "react";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

const Recipe = () => {
  const { recipes } = useContext(recipeContext);

  if(recipes.length === 0) {
    return <div className="text-white">No recipes found</div>
  }

  return <div className="text-white">
    {recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          {console.log(recipe)}
          <h1>{recipe.title}</h1>
        </div>
      );
    })}
  </div>
};

export default Recipe;
