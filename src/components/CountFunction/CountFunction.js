import { useState } from "react";

const CountFunction = (props) => {
  //   const state = useState(0);
  //   count = props.cantidad;
  //   const setCount = state[1];

  const [count, setCount] = useState(props.cantidad);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    if (count < props.cantidad) setCount(count + 1);
  };
  return (
    <div style={{ display: "flex" }}>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CountFunction;
