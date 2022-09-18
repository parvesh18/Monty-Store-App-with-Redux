import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./Constant";

export const cart = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_TO_CART:
      return data.filter((item) => item.id !== action.data);

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return [];
  }
};
