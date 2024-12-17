import React from "react";
import { useCallback, useState } from "react";

export function Counter() {
  const [value, setValue] = useState(0);

  const increment = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setValue((prev) => prev - 1);
  }, []);

  return (
    <div className="preact_app">
      <div className="counter_container">
        <h1>Counter: {value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
