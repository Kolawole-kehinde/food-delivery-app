import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import AppContextProvider from './context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <AppContextProvider>
     <Toaster/>
    <App />
    </AppContextProvider>
  </BrowserRouter>
  </StrictMode>
 
)
