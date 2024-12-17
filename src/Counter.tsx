import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";


export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter Widget</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const el =  document.querySelector('#container-widget-counter')

  if(el) {
   const root =  ReactDOM.createRoot(el)
   root.render(<Counter />)
  }
