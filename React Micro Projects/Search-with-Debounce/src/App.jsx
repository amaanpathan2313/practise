import { useState } from 'react'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Dashboard</h1>

      <Dashboard/>
    </>
  )
}

export default App
