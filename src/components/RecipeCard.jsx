import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const ingredients = Array.isArray(recipe.ingredients)
  ? recipe.ingredients.join(", ")
  : recipe.ingredients;

  return (
    <Link
      to={`/recipes/details/${recipe.id}`}
      className="bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-white text-xl font-semibold">{recipe.title}</h2>

          <span className="px-2 py-1 text-xs rounded-full bg-gray-600 text-gray-200">
            {recipe.category}
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {recipe.description}
        </p>

        <div className="mt-3">
          <h3 className="text-white font-medium mb-1">Ingredients</h3>
          <p className="text-gray-300 text-sm">
            {ingredients}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
