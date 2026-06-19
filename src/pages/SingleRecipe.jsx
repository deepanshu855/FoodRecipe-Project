import React, { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
      <div className="min-h-screen bg-gray-800 text-white p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Recipe Preview */}

          <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-lg  relative">
            {isFav ? (
              <i
                onClick={unFavHandler}
                className="ri-heart-fill absolute top-4 right-4 text-2xl cursor-pointer text-red-500 bg-black rounded-full p-2"
              ></i>
            ) : (
              <i
                onClick={favHandler}
                className="ri-heart-line absolute top-4 right-4 text-2xl cursor-pointer text-red-500 bg-black rounded-full p-2"
              ></i>
            )}
            <img
              src={recipe?.image}
              alt={recipe?.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">{recipe?.title}</h2>

                <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                  {recipe?.category}
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {recipe?.description}
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-2">Ingredients</h3>

                <p className="text-gray-300">
                  {Array.isArray(recipe?.ingredients)
                    ? recipe.ingredients.join(", ")
                    : recipe?.ingredients}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Edit Form */}
          <div className="bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Edit Recipe</h2>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Image URL
                </label>

                <input
                  {...register("image")}
                  type="url"
                  placeholder="Enter image url"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Title
                </label>

                <input
                  {...register("title")}
                  type="text"
                  placeholder="Recipe title"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Description
                </label>

                <textarea
                  {...register("description")}
                  rows="4"
                  placeholder="Recipe description"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Ingredients
                </label>

                <textarea
                  {...register("ingredients")}
                  rows="3"
                  placeholder="Milk, Eggs, Flour..."
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Category
                </label>

                <select
                  {...register("category")}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="supper">Supper</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 active:scale-95 transition cursor-pointer"
              >
                Save Changes
              </button>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 active:scale-95 transition cursor-pointer"
                onClick={() => {
                  deleteRecipe(recipe.id);
                }}
              >
                Delete Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
