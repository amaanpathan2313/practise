import { useEffect, useState } from 'react'
 

function App() {

  let [search, setSearch] = useState("");
  let [target, setTarget] = useState("")

  useEffect(() => {

    let timer = setTimeout(() => {

      setTarget(search)

    }, 1500);

    return () => clearTimeout(timer)

  }, [search]);

  useEffect(() => {
     if(target){
    console.log(target)
  }
  }, [target])
  
  
  return (
    <>

 

    <input type="text" placeholder='Enter Text' onChange={(e) => setSearch(e.target.value)} />
      
    </>
  )
}

export default App
