import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/layout/NavBar'
import HomePage from './Component/Pages/Home'
import MenuPage from './Component/Pages/MenuPage'
import MobileAppPage from './Component/Pages/MobileApp'
import ContactPage from './Component/Pages/Contact'


const App = () => {
  return (
    <div className='app'>
       <NavBar/>
      <Routes>
        <Route path='/'/>
        <Route index element={<HomePage />} />
        <Route path='menu' element={<MenuPage/>}/>
        <Route path='mobileapp' element={<MobileAppPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
      </Routes>
  
    </div>
  )
}

export default App
