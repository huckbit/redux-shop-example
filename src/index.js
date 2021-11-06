import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; /* to use redux store */

import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
