/* Importing types for the actions */
import axios from "axios";

import {
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT
} from "../types/product.types";

/* Fetch all the products frome the api using redux-thunk */
export const fetchProducts = () => async (dispatch) => {
  const resp = await axios.get("https://fakestoreapi.com/products");
  dispatch({ type: FETCH_PRODUCTS, payload: resp.data });
};

/* Fetch single product by id */
export const fetchSingleProduct = (id) => async (dispatch) => {
  const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
  console.log("from Actions: ", resp);
  dispatch({ type: FETCH_SINGLE_PRODUCT, payload: resp.data });
};

/* Removing product */
export const removeSelectedProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT
    /* no payload here, resetting state initialState */
  };
};
