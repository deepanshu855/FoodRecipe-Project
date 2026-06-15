import React, { createContext, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  return (
    <recipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
