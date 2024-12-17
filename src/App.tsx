import React from "react";
import "./App.css";
import { Counter } from "./Counter.tsx";
import { Hello } from "./Hello.tsx";

export function App({ id }) {
  const handleShowComponent = () => {
    switch (id) {
      case "AAA":
        return <Counter />;
      case "BBB":
        return <Hello />;
      default:
        return null;
    }
  };

  return <div>{handleShowComponent()}</div>;
}
