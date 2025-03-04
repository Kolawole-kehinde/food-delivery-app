import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Component/Pages/Cart/Cart'
import PlaceOrder from './Component/Pages/PlaceOrder/PlaceOrder'
import NavBar from './Component/layout/NavBar'
import HomePage from './Component/Pages/Home'

const App = () => {
  return (
    <div className='app'>
       <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' elememt={<PlaceOrder/>} />


      </Routes>
  
    </div>
  )
}

export default App
