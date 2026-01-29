import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const Child =  React.memo(({label}) => {
  console.log("I am Render")
  return<>
      <p>{label}</p>
  </>
}

)
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React.memo : Is used to memorize the functional component.</h1>

      <p>Count : {count}</p>

      <button onClick={() => setCount((p) => p + 1)}>Increment</button>

      <Child label="I am the props"/>
    </>
  );
}

export default App;
