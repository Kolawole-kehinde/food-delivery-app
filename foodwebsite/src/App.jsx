import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/layout/NavBar'
import HomePage from './Pages/Home'
import LoginPage from './Pages/auth/Login'
import RegisterPage from './Pages/auth/Register'
import Footer from './Components/layout/Footer'
import MyMessage from './Pages/MyMessage'
import OrderPage from './Pages/Order'
import CartPage from './Pages/Cart'
import NotificationPage from './Pages/Notification'
import ProfilePage from './Pages/Profile'


const App = () => {
  return (
    <div className=''>
       <NavBar/>
      <Routes>
        <Route path='/' >
       
        <Route index element={<HomePage />} />
        <Route path='messages' element={<MyMessage/>}/>
        <Route path='orders' element={<OrderPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='notifications' element={<NotificationPage/>}/>
        <Route path='profile' element={<ProfilePage/>}/>


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
