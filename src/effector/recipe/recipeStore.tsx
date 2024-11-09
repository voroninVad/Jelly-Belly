import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api/recipe/recipe'
import { Recipe } from "../../types";


export const fetchRecipe = createEffect(async (id: string) => {
  const response = await fetchData(id); 
  return response;
});

export const RecipeStore = createStore<Recipe>({
    additions1: [],
    additions2: [],
    additions3: [],
    cookTime: "",
    description: "",
    directions: [],
    imageUrl: "",
    ingredients: [],
    makingAmount: "",
    name: "",
    prepTime: "",
    recipeId: 0,
    tips: [],
    totalTime: ""
})
.on(fetchRecipe.doneData, (_, response) => {
    return { ...response }; 
})
.on(fetchRecipe.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});