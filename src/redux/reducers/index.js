/* Combining the reducers in this file */
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

export const reducers = combineReducers({ allProducts: productsReducer });
