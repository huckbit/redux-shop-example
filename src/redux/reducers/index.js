/* Combining the reducers in this file */
import { combineReducers } from "redux";

/* importing reducers to be combined */
import { productReducer, productsReducer } from "./productsReducer";

/* combining reducers */
export const reducers = combineReducers({
  allProducts: productsReducer,
  product: productReducer
});
