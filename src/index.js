import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import AllRoutes from "./AllRoutes";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
