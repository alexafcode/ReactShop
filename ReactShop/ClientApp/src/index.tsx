import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store/index";
import thunk from "redux-thunk";
import loggerMiddleware from "./store/middleware/logger";
import throttle from "lodash/throttle";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { saveState } from "./api/localStorage";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

store.subscribe(
  throttle(() => {
    saveState(store.getState().user);
  }, 1000)
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
