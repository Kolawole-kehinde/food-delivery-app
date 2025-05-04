import React from 'react';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const products = [
  {
    id: 1,
    name: 'Apples Australian Fuji Size',
    image: '/images/apple.jpg',
    seller: 'Sanchoco',
    price: '131,040',
    quantity: 5600,
  },
  {
    id: 2,
    name: 'Malainino Pepper',
    image: '/images/pepper.jpg',
    seller: 'Sanchoco',
    price: '131,040',
    quantity: 5600,
  },
  {
    id: 3,
    name: 'Apples Australian Fuji Size',
    image: '/images/beans.jpg',
    seller: 'Sanchoco',
    price: '131,040',
    quantity: 5600,
  }
];

const CartPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded shadow-md">
          <div className="flex justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart ({products.length})</h2>
            <a href="#" className="text-green-600 hover:underline">Continue Shopping</a>
          </div>
          {products.map(product => (
            <CartItem key={product.id} {...product} onRemove={() => {}} />
          ))}
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
