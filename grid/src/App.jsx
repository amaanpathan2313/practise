import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/grid/Grid'
import Flex from './components/horizontal_scrollbar/Flex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Grid/> */}
      <Flex/>
    </>
  )
}

export default App
