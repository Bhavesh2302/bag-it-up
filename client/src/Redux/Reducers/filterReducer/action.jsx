import { FILTER_BRAND, FILTER_CATEGORY, FILTER_SIZE, FILTER_SORT } from "./actionTypes";

export const filterCategory = (payload) => (dispatch) => {
  dispatch({ type: FILTER_CATEGORY,payload });
};

export const filterBrand = (payload) => (dispatch) => {
  dispatch({ type: FILTER_BRAND,payload });
};

export const filterSize= (payload) => (dispatch) => {
  dispatch({ type: FILTER_SIZE ,payload});
};

export const filterSort = (payload) => (dispatch) => {
  dispatch({ type: FILTER_SORT,payload });
};
