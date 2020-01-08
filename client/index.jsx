import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { masterReducer } from "./reducers/masterReducer.js";

const store = createStore(
  masterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
