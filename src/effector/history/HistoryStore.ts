import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api'
import { History } from "../../types";


export const fetchHistory = createEffect(async (page: number) => {
  const response = await fetchData('mileStones',page);
  return response;
});

export const historyStore = createStore<History>({ items:[], currentPage: 1, pageSize: 0, totalCount: 0, totalPages: 0,})
.on(fetchHistory.doneData, (state, response) => {
  return {
    ...state,
    items: [...state.items, ...response.items],
    currentPage: response.currentPage,
    totalCount: response.totalCount,    
    pageSize: response.pageSize,     
    totalPages: response.totalPages     
  };
})
.on(fetchHistory.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});