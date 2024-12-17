import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { Hello } from "./Hello.tsx";

const widgets = document.querySelectorAll(".container-widget");

widgets.forEach((widget) => {
  const root = ReactDOM.createRoot(widget);

  root.render(
    <React.StrictMode>
      <App id={widget.CDATA_SECTION_NODE.symbol} />
      <Hello id={widget.CDATA_SECTION_NODE.symbol} />
    </React.StrictMode>
  );
});
