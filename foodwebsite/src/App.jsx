import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/layout/NavBar'
import HomePage from './Component/Pages/Home'
import MobileAppPage from './Component/Pages/MobileApp'
import ContactPage from './Component/Pages/Contact'
import MenuPage from './Component/Pages/Menu'
import LoginPage from './Component/Pages/auth/Login'
import RegisterPage from './Component/Pages/auth/Register'


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


        <Route path='auth'/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
      </Routes>
  
    </div>
  )
}

export default App
