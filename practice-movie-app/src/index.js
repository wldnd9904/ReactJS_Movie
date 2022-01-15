import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Todolist from "./Todolist";
import Cointracker from "./Cointracker";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <hr />
    {/* <Todolist /> */}
    <hr />
    <Cointracker />
  </React.StrictMode>,
  document.getElementById("root")
);
