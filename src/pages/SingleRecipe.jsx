import React, { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Heart, Trash2, Edit } from "lucide-react";

const SingleRecipe = () => {
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );
  const navigae = useNavigate();

  const { recipes, setRecipes } = useContext(recipeContext);

  const params = useParams();
  const recipe = recipes.find(
    (recipe) => Number(recipe.id) === Number(params.id),
  );

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      description: recipe?.description,
      ingredients: Array.isArray(recipe?.ingredients)
        ? recipe.ingredients.join(", ")
        : recipe?.ingredients,
      category: recipe?.category,
    },
  });

  const submitHandler = (data) => {
    const index = recipes.findIndex((r) => r.id === recipe.id); // we cannot use id directly because it is a string from params, so we need to find the index of the recipe in the array.
    const copydata = [...recipes];
    copydata[index] = { ...copydata[index], ...data };
    setRecipes(copydata);
    toast.success("Recipe updated successfully!");
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    toast.success("Recipe deleted successfully!");

    // We also need to deleted the recipe from the favourite list if it is there.
    const updatedFav = favourite.filter((fav) => fav.id !== id);
    setFavourite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));

    setTimeout(() => {
      navigae("/recipes");
    }, 1500);
  };

  if (recipe === undefined || recipe.length === 0) {
    return (
      <div className="min-h-screen bg-gray-800 text-white p-6">Loading...</div>
    );
  }

  const isFav = favourite.find((f) => f.id === recipe?.id);

  const favHandler = () => {
    const copyFav = [...favourite, recipe];
    setFavourite(copyFav);
    console.log("recipe", recipe);
    console.log("copyFav", copyFav);
    localStorage.setItem("fav", JSON.stringify(copyFav));
  };

  const unFavHandler = () => {
    const filteredFav = favourite.filter((f) => f.id !== recipe.id);
    setFavourite(filteredFav);
    console.log("recipe", recipe);
    console.log("filteredFav", filteredFav);
    localStorage.setItem("fav", JSON.stringify(filteredFav));
  };

  return (
    <>
      {/* Natural flow wrapper - no forced heights that cause scroll bugs */}
      <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-center animate-in fade-in zoom-in-95 duration-500">
        {/* 2-Column Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* Left Side - Recipe Preview Card */}
          <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Favorite Toggle Button */}
            {isFav ? (
              <button
                onClick={unFavHandler}
                className="absolute top-4 right-4 z-10 p-2.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-800 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/50"
              >
                <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
              </button>
            ) : (
              <button
                onClick={favHandler}
                className="absolute top-4 right-4 z-10 p-2.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-800 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/50 hover:border-orange-500/50 group/btn"
              >
                <Heart className="w-5 h-5 text-slate-400 group-hover/btn:text-orange-500 transition-colors" />
              </button>
            )}

            {/* Compact Image Header */}
            <div className="w-full h-40 sm:h-48 overflow-hidden bg-slate-950 border-b border-slate-800">
              <img
                src={recipe?.image}
                alt={recipe?.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Details Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h2 className="text-2xl font-bold text-white tracking-tight line-clamp-1">
                  {recipe?.title}
                </h2>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 whitespace-nowrap">
                  {recipe?.category}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {recipe?.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-800/60">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Ingredients
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
                  {Array.isArray(recipe?.ingredients)
                    ? recipe.ingredients.join(", ")
                    : recipe?.ingredients}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Compact Edit Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <Edit className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Edit Recipe
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-3.5 flex-1"
            >
              {/* Input Row 1: Image & Title */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Image URL
                  </label>
                  <input
                    {...register("image")}
                    type="url"
                    placeholder="Image URL"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Title
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    placeholder="Recipe title"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Category
                </label>
                <select
                  {...register("category")}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all cursor-pointer"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="supper">Supper</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>

              {/* Description Textarea */}
              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Recipe description"
                  className="w-full flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none min-h-[60px]"
                />
              </div>

              {/* Ingredients Textarea */}
              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Ingredients
                </label>
                <textarea
                  {...register("ingredients")}
                  placeholder="Milk, Eggs, Flour..."
                  className="w-full flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none min-h-[60px]"
                />
              </div>

              {/* Action Buttons Side-by-Side */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm"
                >
                  Save Changes
                </button>

                {/* Preserved your exact type="submit" and onClick logic */}
                <button
                  type="submit"
                  onClick={() => {
                    deleteRecipe(recipe.id);
                  }}
                  className="flex items-center justify-center gap-2 flex-1 bg-slate-950 border border-red-500/20 text-red-500 font-bold py-2.5 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 active:scale-[0.98] transition-all duration-300 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
