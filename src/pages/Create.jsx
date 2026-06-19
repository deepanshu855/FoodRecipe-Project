import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const { recipes, setRecipes } = useContext(recipeContext);
  const navigate = useNavigate();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isUserCreated = true; // To store only user created recipes in local storage, because we are fetching the recipes from an api and we cannot store them in local storage, so we need to differentiate between user created recipes and api fetched recipes.

    const updatedRecipes = [...recipes, data];
    setRecipes(updatedRecipes);

    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes.filter((recipe) => recipe.isUserCreated)),
    ); // Filter only user created recipes
    toast.success("Recipe created successfully!", {
      autoClose: 1000,
    });

    reset();
    setTimeout(() => {
      navigate("/recipes");
    }, 1000);
  };

  return (
    // Removed forced height and justify-center. Now it flows naturally into the available space.
    <div className="w-full flex flex-col items-center px-4 animate-in fade-in zoom-in-95 duration-500">
      {/* Compact Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Recipe
          </span>
        </h1>
        <p className="text-slate-400 text-sm hidden sm:block">
          Add a new culinary creation to your premium collection.
        </p>
      </div>

      {/* 2-Column Compact Form */}
      <form
        className="w-full max-w-4xl p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* Grid splits the form into left and right columns on laptop/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Shorter Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Image URL
              </label>
              <input
                {...register("image")}
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                placeholder="e.g. Grandma's Famous Pasta"
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Category
              </label>
              <select
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all cursor-pointer"
                {...register("category")}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>

          {/* Right Column: Textareas */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 flex flex-col">
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Description
              </label>
              <textarea
                {...register("description")}
                placeholder="A brief overview of your dish..."
                className="w-full flex-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none min-h-[80px]"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Ingredients
              </label>
              <textarea
                {...register("ingredients")}
                placeholder="Eggs, Flour, Sugar (comma separated)"
                className="w-full flex-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none min-h-[80px]"
              />
            </div>
          </div>
        </div>

        {/* Submit Button spans the bottom */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm tracking-wide"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
