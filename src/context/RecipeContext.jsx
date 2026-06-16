import React, { createContext, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState([
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
    title: "Classic Pancakes",
    description: "Fluffy homemade pancakes perfect for breakfast.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
    category: "breakfast",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "Chicken Caesar Salad",
    description: "Fresh salad with grilled chicken and Caesar dressing.",
    ingredients: [
      "Chicken Breast",
      "Lettuce",
      "Parmesan Cheese",
      "Croutons",
      "Caesar Dressing",
    ],
    category: "lunch",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Margherita Pizza",
    description: "Traditional Italian pizza with mozzarella and basil.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Basil",
      "Olive Oil",
    ],
    category: "dinner",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    title: "Vegetable Soup",
    description: "Healthy and comforting mixed vegetable soup.",
    ingredients: [
      "Carrot",
      "Potato",
      "Beans",
      "Onion",
      "Vegetable Stock",
    ],
    category: "supper",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    title: "Chocolate Brownies",
    description: "Rich and fudgy chocolate brownies for dessert.",
    ingredients: [
      "Chocolate",
      "Butter",
      "Flour",
      "Sugar",
      "Eggs",
    ],
    category: "dinner",
  },
]);

  return (
    <recipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
