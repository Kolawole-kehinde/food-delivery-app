import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import AppContextProvider from './context/ContextApi.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <QueryClientProvider client={queryClient}>
     <AppContextProvider>
      <CartProvider>
     <Toaster/>
    <App />
    </CartProvider>
    </AppContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
  </StrictMode>
 
)
