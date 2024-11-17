import { FILTER_BRAND, FILTER_CATEGORY, FILTER_SIZE, FILTER_SORT } from "./actionTypes";

const initState = {
  brand: [],
  category: [],
  size: [],
  sort: "1",
};

export const filterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FILTER_BRAND: {
      return {
        ...state,
        brand: payload,
      };
    }
    case FILTER_CATEGORY: {
      return {
        ...state,
        category: payload,
      };
    }
    case FILTER_SIZE: {
      return {
        ...state,
        size: payload,
      };
    }
    case FILTER_SORT: {
      return {
        ...state,
        sort: payload,
      };
    }
    default:
      return state;
  }
};
