import React from 'react'
import Nav from './Component/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import Cart from './Component/Pages/Cart/Cart'
import PlaceOrder from './Component/Pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' elememt={<PlaceOrder/>} />


      </Routes>
  
    </div>
  )
}

export default App
