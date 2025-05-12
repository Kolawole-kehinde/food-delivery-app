// pages/CheckOutPage.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartContext } from '../context/CartContext';
import OrderSummary from '../Components/Cart/OrderSummary';
import { checkoutSchema } from '../Shchema/checkoutSchema';
import FormInput from '../Components/FormInput';

const CheckOutPage = () => {
  const { cartItems, buyNowItem, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    setOrderId('new-order-id');
    setIsModalOpen(true);
    clearCart();
  };

  const items = buyNowItem ? [buyNowItem] : cartItems;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <section className="lg:col-span-2 space-y-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput placeholder="First Name" register={register('firstName')} error={errors.firstName} />
              <FormInput placeholder="Last Name" register={register('lastName')} error={errors.lastName} />
            </div>
            <FormInput placeholder="Email Address" register={register('email')} error={errors.email} />
            <FormInput placeholder="Phone Number" register={register('phone')} error={errors.phone} />
            <FormInput placeholder="Street Address" register={register('address')} error={errors.address} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput placeholder="City" register={register('city')} error={errors.city} />
              <FormInput placeholder="State" register={register('state')} error={errors.state} />
              <FormInput placeholder="Zip Code" register={register('zip')} error={errors.zip} />
            </div>

            <h2 className="text-xl font-bold mt-8">Payment Method</h2>
            <div className="space-y-3">
              {['card', 'paypal', 'cod'].map((method) => (
                <label key={method} className="flex items-center gap-3">
                  <input type="radio" value={method} {...register('payment')} />
                  <span className="capitalize">{method === 'cod' ? 'Cash on Delivery' : method}</span>
                </label>
              ))}
              {errors.payment && <p className="text-red-500 text-sm">{errors.payment.message}</p>}
            </div>
          </form>
        </section>

        {/* Order Summary */}
        <section className="lg:col-span-1">
          <OrderSummary
            subtotal={subtotal}
            items={items}
            buttonText="Checkout Now"
            onSuccess={(id) => {
              setOrderId(id);
              setIsModalOpen(true);
              clearCart();
            }}
          />
        </section>
      </div>
    </main>
  );
};

export default CheckOutPage;
