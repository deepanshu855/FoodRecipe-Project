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

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes.filter((recipe) => recipe.isUserCreated))); // Filter only user created recipes
    toast.success("Recipe created successfully!", {
      autoClose: 1000,
    });
    
    reset();
    setTimeout(() => {
      navigate("/recipes");
    }, 1000);
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(submitHandler)}>
      <input
        {...register("image")}
        type="url"
        placeholder="Enter image url"
        className="w-full p-2 rounded-md border border-gray-300 mb-4"
      />
      <input
        {...register("title")}
        type="text"
        placeholder="Enter title"
        className="w-full p-2 rounded-md border border-gray-300"
      />
      <textarea
        {...register("description")}
        type="text"
        placeholder="Enter description"
        className="w-full p-2 rounded-md border border-gray-300 mt-4"
      />
      <textarea
        {...register("ingredients")}
        type="text"
        placeholder="Enter ingredients separated by comma"
        className="w-full p-2 rounded-md border border-gray-300 mt-4"
      />
      <select
        className="w-1/4 p-2 rounded-md border border-gray-300 mt-4 block"
        {...register("category")}
      >
        <option value="breakfast" className="text-gray-700">
          Breakfast
        </option>
        <option value="lunch" className="text-gray-700">
          Lunch
        </option>
        <option value="supper" className="text-gray-700">
          Supper
        </option>
        <option value="dinner" className="text-gray-700">
          Dinner
        </option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer active:scale-90 transition"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
