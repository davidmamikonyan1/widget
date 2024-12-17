import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

const widgets = document.querySelectorAll(".container-widget");

widgets.forEach((widget) => {
  const widgetElement = widget as HTMLElement;
  const root = ReactDOM.createRoot(widgetElement);
  root.render(
    <React.StrictMode>
      <App id={widgetElement.dataset.symbol} />
    </React.StrictMode>
  );
});
