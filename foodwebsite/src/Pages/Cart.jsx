import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../Components/Cart/CartItem';
import OrderSummary from '../Components/Cart/OrderSummary';
import { FaRegFrown, FaArrowDown } from 'react-icons/fa';
import { RecommendedDishes } from '../Components/RecommendedDishes';
import TopDishes from '../Components/TopDishes';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCartContext();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => navigate('/checkout');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white shadow-md rounded-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart ({cartItems.length})</h2>
            <Link to="/" className="text-primary">Continue Shopping</Link>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                onIncrease={() => addToCart(product, 1)}
                onDecrease={() => updateQuantity(product.id, product.quantity - 1)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))
          ) : (
            <div className="p-10 flex flex-col items-center text-center">
             <img src="/images/Cart-image.png" alt="Cart-image" className="size-[136px]"/>
              <p className="text-lg font-semibold mb-4">Your cart is eager to be filled!</p>
              <Link
                to="/"
                className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white py-2 px-4 rounded-md transition"
              >
                Let’s start shopping! <FaArrowDown />
              </Link>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <OrderSummary
            subtotal={subtotal}
            buttonText="Proceed to Checkout"
            onProceed={handleCheckout} 
          />
        )}
      </div>

      {/* Recommended Section */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recommended For You</h3>
          {/* <Link to="/all-dishes" className="text-green-600 hover:underline"></Link> */}
        </div>
        <TopDishes showMoreButton = {false} />
        <RecommendedDishes />
      </div>
    </div>
  );
};

export default CartPage;
