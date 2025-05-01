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

import ForgotPasswordPage from './Pages/auth/ForgotPassword'
import ResetPasswordPage from './Pages/auth/ResetPassword'
import PasswordSuccessPage from './Pages/auth/PasswordSuccess'
import Dashboard from './Pages/dashboard'
import AccountSettings from './Pages/AccountSettings'
import AllDishes from './Pages/AllDishes'


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
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='settings' element={<AccountSettings/>}/>
        <Route path='all-dishes' element={<AllDishes/>}/>


        <Route path='auth'>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='forget-password' element={<ForgotPasswordPage/>}/>
        <Route path='reset-password' element={<ResetPasswordPage/>}/>
        <Route path='password-success' element={<PasswordSuccessPage/>}/>
        </Route>
        </Route>
      </Routes>
      <Footer/>
  
    </div>
  )
}

export default App
