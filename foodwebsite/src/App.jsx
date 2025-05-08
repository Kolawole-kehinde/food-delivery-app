import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/layout/NavBar'
import HomePage from './Pages/Home'
import LoginPage from './Pages/auth/Login'
import RegisterPage from './Pages/auth/Register'
import Footer from './Components/layout/Footer'
import NotificationPage from './Pages/Notification'
import ProfilePage from './Pages/Profile'
import ForgotPasswordPage from './Pages/auth/ForgotPassword'
import ResetPasswordPage from './Pages/auth/ResetPassword'
import PasswordSuccessPage from './Pages/auth/PasswordSuccess'
import Dashboard from './Pages/dashboard'
import AllDishes from './Pages/AllDishes'
import ProductDetails from './Pages/ProductDetails'
import Banner from './Components/Banner'
import RelatedProducts from './Components/RelatedProducts'
import CartPage from './Pages/Cart'
import OrderDetails from './Pages/OrderDetails'
import CheckOutPage from './Pages/CheckOutPage'
import FAQPage from './Pages/Help'
import AccountSettings from './Pages/AccountSettings'
import ChangePassword from './Pages/ChangePassword'




const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' >
          <Route index element={<HomePage />} />
          {/* <Route path='messages' element={<MessagesPage />} /> */}
          <Route path='checkout' element={<CheckOutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='notifications' element={<NotificationPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<AccountSettings />} />
          <Route path='all-dishes' element={<AllDishes />} />
          <Route path='help' element={<FAQPage />} />
          <Route path='related-product' element={<RelatedProducts />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />


        

          <Route path='auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='forget-password' element={<ForgotPasswordPage />} />
            <Route path='reset-password' element={<ResetPasswordPage />} />
            <Route path='password-success' element={<PasswordSuccessPage />} />
            <Route path='change-password' element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
      <Banner />
      <Footer />
    </div>
  )
}

export default App
