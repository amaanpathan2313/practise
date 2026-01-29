import React,{ useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
 const Child = React.memo(({fun}) => {
  console.log("I am rendering")
  return(
    <>
       <button onClick={fun}>Increment</button>
    </>
  )

 })
 


function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false)

  const incrementCount = useCallback(() => {
    setCount((p) => p+1)
  },[])
  return(
    <>
      <p>Count : {count}</p>

      <button onClick={() => setFlag((p) => !p)}>{flag ? "Make off" : "Make on"}</button>

       <Child fun={incrementCount} />

    </>
  )

};

export default App
