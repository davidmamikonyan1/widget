import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

const widgets = document.querySelectorAll(".container-widget");

widgets.forEach((widget) => {
  const root = ReactDOM.createRoot(widget);
  root.render(
    <React.StrictMode>
      <App id={widget.dataset.symbol}/>
    </React.StrictMode>
  );
});
