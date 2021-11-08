import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers/index";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
