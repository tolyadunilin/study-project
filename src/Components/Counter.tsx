import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const chnageCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={classes.button} onClick={chnageCount}>click me!</button>
    </>
  );
};

export default Counter;
