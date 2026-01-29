import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Child({number}){

  function double(num){
    console.log("start")

    for(let i = 0; i < 1e9; i++){};
       console.log("end")
    return num * 2
  };

  let result = useMemo(() => double(number), [number])

  return(
    <>
       <p>Result : {result}</p>
    </>
  )


}

function App() {

  const [number, setNumber] = useState(0);
  const [flag, setFlag] = useState(false);
 

  return (
    <>

    <div style={{backgroundColor : flag ? "pink" : 'lightgreen', padding : '20px', borderRadius : '10px'}}>

                <h2>useMemo hook : To memorize the function input and prevent the function to run again and again </h2>

                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />

                <button onClick={() => setFlag((p => !p))}>Change Color </button>

                <Child number={number}/>

    </div>
    
    </>
  )
}

export default App
