import React, { createContext, useEffect, useState } from "react";
import { getRandomRecipe } from "../api/recipeApi";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes= async()=>{
    const data= await getRandomRecipe();
    setRecipes(data);
  }

  useEffect(()=>{
    getRecipes();
  },[])

  return (
    <recipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

