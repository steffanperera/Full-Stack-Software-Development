import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./components/Counter";
import Greet from "./components/Greet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Greet />
    <Counter />
  </React.StrictMode>
);
