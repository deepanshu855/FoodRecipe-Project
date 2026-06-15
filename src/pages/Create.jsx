import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const { recipes, setRecipes } = useContext(recipeContext);

  const submitHandler = (data) => {
    data.id = nanoid();
    setRecipes([...recipes, data]);
    reset();
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(submitHandler)}>
      <small className="text-red-500">This is how the error look</small>
      <input
        {...register("image-url")}
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
        <option value="cat-1" className="text-gray-700">
          Category 1
        </option>
        <option value="cat-2" className="text-gray-700">
          Category 2
        </option>
        <option value="cat-3" className="text-gray-700">
          Category 3
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
