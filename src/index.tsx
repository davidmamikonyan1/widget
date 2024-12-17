import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Counter } from "./counter.tsx";
import HelloWorld from "./helloWorld.tsx";

const widgets = document.querySelectorAll(".container-widget");

widgets.forEach((widget) => {
  const root = ReactDOM.createRoot(widget);
  root.render(
    <>
      <App />
      <Counter />
      <HelloWorld />
    </>
  );
});
