import instance from "../utils/axios";

// We need to transform the data to match our desired structure
  const transformMeal = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(ingredient);
      }
    }

    return {
      id: meal.idMeal,
      image: meal.strMealThumb,
      title: meal.strMeal,
      description: meal.strInstructions,
      ingredients,
      category: meal.strCategory.toLowerCase(),
    };
  };

export const getRandomRecipe = async () => {
  const { data } = await instance.get("search.php?s=");

  // Since we got the array of meals, we need to transform each meal to our desired structure
  const recipes = data.meals.map(transformMeal);
  return recipes;
};
