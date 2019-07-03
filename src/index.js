import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import RouteConfig from "./RouteConfig";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <RouteConfig />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
