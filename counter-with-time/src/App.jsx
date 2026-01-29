import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);

  useEffect(() => {

        if (time <= 0) return; // stop if timer is 0

    let interval = setInterval(() => {
      setTime((privious) => privious - 1);
    }, 1000);


    return () => clearInterval(interval); // cleanup interval


  }, [time]);

  return (
    <>
      <div className="box">
        <h2>Timer : {time}</h2>

        <p>{count}</p>

  
          <div>
            <button onClick={() => setCount((privious) => privious + 1)} disabled={time==0}>
              {" "}
              Incremant{" "}
            </button>
            <button onClick={() => setCount((privious) => privious - 1)} disabled={time ==0}>
              {" "}
              Decrement{" "}
            </button>
          </div>
   
      </div>
    </>
  );
}

export default App;
