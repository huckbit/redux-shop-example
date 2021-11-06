/* Importing types for the actions */

import {
  SET_PRODUCTS,
  ADD_SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT
} from "../types/product.types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (product) => {
  return {
    type: ADD_SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product
  };
};
