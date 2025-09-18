import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home";
import AllDishes from "./Pages/AllDishes";
import RelatedProducts from "./Components/RelatedProducts";
import LoginPage from "./Pages/auth/Login";
import RegisterPage from "./Pages/auth/Register";
import ForgotPasswordPage from "./Pages/auth/ForgotPassword";
import ResetPasswordPage from "./Pages/auth/ResetPassword";
import PasswordSuccessPage from "./Pages/auth/PasswordSuccess";
import ProfilePage from "./Pages/Profile";
import CartPage from "./Pages/Cart";
import CheckOutPage from "./Pages/CheckOutPage";
import Dashboard from "./Pages/dashboard";
import AccountSettings from "./Pages/AccountSettings";
import OrderDetails from "./Pages/OrderDetails";
import ChangePassword from "./Pages/ChangePassword";
import EditProfile from "./Pages/EditProfile";
import FAQPage from "./Pages/Help";
import Layout from "./Components/layout/Layout";
import ProductDetails from "./Pages/ProductDetails";
import OrdersPage from "./Pages/OrdersPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<HomePage />} />
        <Route path="all-dishes" element={<AllDishes />} />
        <Route path="help" element={<FAQPage />} />
        <Route path="related-product" element={<RelatedProducts />} />
        <Route path="product-details/:id" element={<ProductDetails />} />

        {/* Public Auth Routes */}
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forget-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="password-success" element={<PasswordSuccessPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="order/:orderId" element={<OrderDetails />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
