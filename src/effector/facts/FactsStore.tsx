import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api'
import { Facts } from "../../types";


export const fetchFacts = createEffect(async (page: number) => {
  const response = await fetchData('facts',page);
  return response;
});

export const factsStore = createStore<Facts>({ items: [], currentPage: 1, pageSize: 0, totalCount: 0, totalPages: 0 })
.on(fetchFacts.doneData, (state, response) => {
  return {
    ...state,
    items: [...state.items, ...response.items],
    currentPage: response.currentPage,
    totalCount: response.totalCount,    
    pageSize: response.pageSize,     
    totalPages: response.totalPages     
  };
})
.on(fetchFacts.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});