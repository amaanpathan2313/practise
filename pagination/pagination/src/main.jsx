import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FetchData } from './context/FetchData.jsx'

createRoot(document.getElementById('root')).render(

    <FetchData>
    <App />
    </FetchData>

)
