import React, { createContext, useEffect, useState } from "react";
import { getRandomRecipe } from "../api/recipeApi";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState(localStorage.getItem("recipes") ? JSON.parse(localStorage.getItem("recipes")) : []); 

  const getRecipes= async()=>{
    const data= await getRandomRecipe();
    setRecipes([...data, ...recipes]);
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

