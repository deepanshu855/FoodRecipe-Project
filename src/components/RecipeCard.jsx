import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients.join(", ")
    : recipe.ingredients;

  return (
    <Link
      to={`/recipes/details/${recipe.id}`}
      className="group flex flex-col h-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300"
    >
      {/* Image container uses overflow-hidden naturally from parent, but we apply smooth scaling */}
      <div className="w-full h-52 overflow-hidden bg-slate-800">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 relative bg-slate-900">
        <div className="flex justify-between items-start gap-4 mb-3">
          {/* Title turns orange on card hover */}
          <h2 className="text-slate-100 text-lg font-bold line-clamp-1 group-hover:text-orange-400 transition-colors duration-300">
            {recipe.title}
          </h2>

          {/* Premium badge styling */}
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 whitespace-nowrap">
            {recipe.category}
          </span>
        </div>

        <p className="text-slate-400 text-sm mb-5 line-clamp-2 leading-relaxed flex-1">
          {recipe.description}
        </p>

        {/* Separator line and ingredients section pushed to the bottom */}
        <div className="mt-auto pt-4 border-t border-slate-800/60">
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1.5">
            {recipe.ingredients.length > 1 ? "Ingredients" : "Ingredient"}
          </h3>
          <p className="text-slate-300 text-sm line-clamp-1">{ingredients}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
