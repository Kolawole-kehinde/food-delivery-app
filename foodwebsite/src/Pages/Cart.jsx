import React, { useState } from 'react';

const cartItems = [
  { id: 1, name: 'Burger', price: 8.99, quantity: 2 },
  { id: 2, name: 'Pizza', price: 12.99, quantity: 1 },
  { id: 3, name: 'Sushi', price: 14.99, quantity: 3 },
];

const CartPage = () => {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id, quantity) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#FF3D00] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          {items.length === 0 ? (
            <p className="text-center text-xl">Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {items.map(item => (
                  <li key={item.id} className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={`https://via.placeholder.com/100x100?text=${item.name}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500">Price: ${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 rounded-full text-lg"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          className="mx-2 w-12 text-center border rounded-md"
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded-full text-lg"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-between items-center">
                <div>
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-[#FF3D00]">${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="bg-[#FF3D00] text-white py-2 px-8 rounded-md">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CartPage;
