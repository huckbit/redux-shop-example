/* Combining the reducers in this file */
import { combineReducers } from "redux";

/* importing reducers to be combined */
import { productsReducer, productReducer } from "./productsReducer";

/* combining reducers */
export const reducers = combineReducers({
  products: productsReducer,
  product: productReducer
});
