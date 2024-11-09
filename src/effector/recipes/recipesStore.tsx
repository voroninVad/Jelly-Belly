import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api/'
import { RecipesT } from "../../types";


export const fetchRecipes = createEffect(async (page: number) => {
  const response = await fetchData('recipes',page); 
  return response;
});

export const RecipesStore = createStore<RecipesT>({ items: [], currentPage: 1, pageSize: 0, totalCount: 0, totalPages: 0 })
.on(fetchRecipes.doneData, (state, response) => {
  return {
    ...state,
    items: [...state.items, ...response.items],
    currentPage: response.currentPage,
    totalCount: response.totalCount,    
    pageSize: response.pageSize,     
    totalPages: response.totalPages     
  };
})
.on(fetchRecipes.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});