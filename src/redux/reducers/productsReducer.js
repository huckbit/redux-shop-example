/* Reducer to set products in the store */

import {
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  REMOVE_SELECTED_PRODUCT
} from "../types/product.types";

/* State for all the products */
export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SINGLE_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

/* State for the single product */
export const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
