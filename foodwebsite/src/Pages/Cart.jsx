import React, { useContext } from 'react';
import CartItem from '../Components/Cart/CartItem';
import OrderSummary from '../Components/Cart/OrderSummary';
import { AppContext } from '../context/ContextApi';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { products, cartItems, addToCart, removeFromCart } = useContext(AppContext);

  // Get only the products in the cart
  const cartProducts = products.filter(product => cartItems[product.id]);

  const subtotal = cartProducts.reduce((acc, product) => {
    const quantity = cartItems[product.id];
    return acc + parseFloat(product.price) * quantity;
  }, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white shadow-md rounded-xl">
          <div className="flex justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart ({cartProducts.length})</h2>
            <Link to="/" className="text-primary">Continue Shopping</Link>
          </div>

          {cartProducts.length > 0 ? (
            cartProducts.map(product => (
              <CartItem
                key={product.id}
                {...product}
                quantity={cartItems[product.id]}
                onIncrease={() => addToCart(product.id)}
                onDecrease={() => removeFromCart(product.id)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))
          ) : (
            <p className="p-6 text-gray-600">Your cart is empty.</p>
          )}
        </div>

        <OrderSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default CartPage;
