import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import Login from './login';
import App from "./App";

ReactDOM.render(
  // <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>,
  // </Provider>,
  document.getElementById("root")
);
