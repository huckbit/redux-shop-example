import { SET_PRODUCTS } from "../types/product.types";

const initialState = {
  products: []
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
