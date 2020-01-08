import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/masterReducer.js";

const rootReducer = reducers.rootReducer;
const initialState = reducers.initialState;

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
