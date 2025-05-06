import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../Components/Cart/CartItem';
import OrderSummary from '../Components/Cart/OrderSummary';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCartContext();
  const navigate = useNavigate();

  // Calculate subtotal based on cart items
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Navigate to Checkout Page when "Proceed to Checkout" is clicked
  const handleCheckout = () => navigate('/checkout');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white shadow-md rounded-xl">
          <div className="flex justify-between p-4 border-b">
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
            <p className="p-6 text-gray-600">Your cart is empty.</p>
          )}
        </div>

        <OrderSummary
          subtotal={subtotal}
          buttonText="Proceed to Checkout"
          onProceed={handleCheckout} // Handle checkout button click
        />
      </div>
    </div>
  );
};

export default CartPage;
