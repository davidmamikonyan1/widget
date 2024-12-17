import React from "react";
import ReactDOM from "react-dom/client";

export const Hello = () => {
  return <div>Hello World</div>;
};

const el = document.querySelector("#container-widget-counter");

if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(<Hello />);
}
