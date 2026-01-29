import React, { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Child = ({number}) => {

    function doubleValue(num){
console.log("Start")
for(let i = 0; i < 1e9; i++){};

let a = num * 2;
console.log("End")
return a;

    }; // doubleValue

    let result = useMemo(() => doubleValue(number), [number])

    return(
    <>
         <p>Double of {number} = {result}</p>
    </>
    );

}

function App() {
  const [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true)
 

  return (
    <>

    <input type="number" onChange={(e) => setCount(e.target.value)}/>
     
     <h1>useMemo</h1>
     <button onClick={() => setFlag((p) => !p)}>{flag ? "OFF" : "NO"}</button>

     <Child number={count}/>

      
         
    </>
  )
}

export default App
