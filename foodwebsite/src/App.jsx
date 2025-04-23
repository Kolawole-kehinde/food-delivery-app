import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/layout/NavBar'
import HomePage from './Pages/Home'
import MobileAppPage from './Pages/MobileApp'
import ContactPage from './Pages/Contact'
import MenuPage from './Pages/Menu'
import LoginPage from './Pages/auth/Login'
import RegisterPage from './Pages/auth/Register'
import Footer from './Components/layout/Footer'


const App = () => {
  return (
    <div className=''>
       <NavBar/>
      <Routes>
        <Route path='/' >
       
        <Route index element={<HomePage />} />
        <Route path='menu' element={<MenuPage/>}/>
        <Route path='mobileapp' element={<MobileAppPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>


        <Route path='auth'>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        </Route>
        </Route>
      </Routes>
      <Footer/>
  
    </div>
  )
}

export default App
