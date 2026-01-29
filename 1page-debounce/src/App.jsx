import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const [flag, setFlag] = useState(false)

  useEffect(() => {

    let timer = setTimeout(() => {
      setDebounceValue(search)
    },1500);

    return(() => clearTimeout(timer))

  },[search]);

  useEffect(() => {
    if(debounceValue){
      setFlag((p) => !p)
    }
  },[debounceValue]);

  function handelClick(){
    console.log(debounceValue)
    setFlag((p) => !p);

    setSearch("")
  }

  return (
    <>
    <input type="text" placeholder='Enter value' value={search} onChange={(e) => setSearch(e.target.value)} /> 
     

    {flag &&  <button onClick={handelClick} >Show Text</button>  }
    </>
  )
}

export default App
