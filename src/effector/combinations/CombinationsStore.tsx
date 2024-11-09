import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api/'
import {  Combinations } from "../../types";


export const fetchCombinations = createEffect(async (page: number) => {
  const response = await fetchData('combinations',page); 
  return response;
});

export const combinationsStore = createStore<Combinations>({ items: [], currentPage: 1, pageSize: 0, totalCount: 0, totalPages: 0 })
.on(fetchCombinations.doneData, (state, response) => {
  return {
    ...state,
    items: [...state.items, ...response.items],
    currentPage: response.currentPage,
    totalCount: response.totalCount,    
    pageSize: response.pageSize,     
    totalPages: response.totalPages     
  };
})
.on(fetchCombinations.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});