import { ADD_TO_CART, REMOVE_TO_CART } from "./Constant";

export const cart = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    default:
      return [];
  }
};
