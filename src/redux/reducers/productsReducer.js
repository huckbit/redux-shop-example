/* Reducer to set products in the store */

import { SET_PRODUCTS, ADD_SELECTED_PRODUCT } from "../types/product.types";

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

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
