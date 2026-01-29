
import { useRef, useState } from "react";

const PreviousCounter = () => {
  const [count, setCount] = useState(0);
  let [flag, setFlag] = useState(false);
  let previousCount = useRef(0);

  function countIncrement() {
    previousCount.current = count;
    setCount((previous) => previous + 1);
  }

  return (
    <>
      <button onClick={countIncrement}> Count Increment </button>
      <button onClick={() => setFlag((p) => !p)}> Show previous count </button>

      <p>Current Count : {count} </p>

      {flag ? <p>HI</p> : <p>Previous Count : {previousCount.current}</p>}
    </>
  );
}; // component

export default PreviousCounter;
