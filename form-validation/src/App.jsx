
import { useEffect, useRef, useState } from 'react'
import Box from './components/Box'
import Form from './components/Form'
import Them from './components/Them'
import useAdd from './useAdd'
import useDebounce from './useDebounce'
import useDebounce2 from './useDebounce2'

function App() {

  const [search, setSearch] = useState("");
  const debounceValue = useDebounce2(search, 1000);

  useEffect(() => {

    if(debounceValue){
      console.log(debounceValue)
    }

  },[debounceValue])

  return (
    <>
    <input type="text" placeholder='Enter Name' value={search} onChange={(e) => setSearch(e.target.value)} />
    </>
  )
 
 
}; // App

export default App
