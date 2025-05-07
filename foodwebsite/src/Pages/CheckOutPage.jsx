import React from 'react';
import { useCartContext } from '../context/CartContext';
import OrderSummary from '../Components/Cart/OrderSummary';



const CheckOutPage = () => {
  const { cartItems, buyNowItem, clearCart } = useCartContext();


  const itemsToCheckout = buyNowItem ? [buyNowItem] : cartItems;
  const subtotal = itemsToCheckout.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrderSuccess = (newOrderId) => {
    setOrderId(newOrderId);
    setIsModalOpen(true);
    clearCart();
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Shipping + Payment */}
        <section className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded-lg w-full" />
              </div>
              <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" />
              <input type="text" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />
              <input type="text" placeholder="Street Address" className="border p-3 rounded-lg w-full" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="border p-3 rounded-lg w-full" />
                <input type="text" placeholder="State" className="border p-3 rounded-lg w-full" />
                <input type="text" placeholder="Zip Code" className="border p-3 rounded-lg w-full" />
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" value="card" defaultChecked />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" value="paypal" />
                <span>PayPal</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" value="cod" />
                <span>Cash on Delivery</span>
              </label>
            </form>
          </div>
        </section>

        {/* Right: Order Summary */}
        <section className="lg:col-span-1">
          <OrderSummary
            subtotal={subtotal}
            items={itemsToCheckout}
            buttonText="Checkout Now"
            onSuccess={handleOrderSuccess}
          />
        </section>
      </div>

   
    </main>
  );
};

export default CheckOutPage;
