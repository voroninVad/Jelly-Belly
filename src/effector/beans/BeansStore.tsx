import { createStore, createEffect  } from "effector/effector.mjs";
import {fetchData} from '../../api/'
import { Beans } from "../../types";


export const fetchBeans = createEffect(async (page: number) => {
  const response = await fetchData('beans',page); 
  return response;
});

export const beansStore = createStore<Beans>({ items: [], currentPage: 1, pageSize: 0, totalCount: 0, totalPages: 0 })
.on(fetchBeans.doneData, (state, response) => {
  return {
    ...state,
    items: [...state.items, ...response.items],
    currentPage: response.currentPage,
    totalCount: response.totalCount,    
    pageSize: response.pageSize,     
    totalPages: response.totalPages     
  };
})
.on(fetchBeans.fail, (state, error) => {
  console.error("Ошибка загрузки данных:", error);
  return state;
});