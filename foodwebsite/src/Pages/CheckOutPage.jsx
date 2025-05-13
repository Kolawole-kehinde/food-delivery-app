import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../Shchema/checkoutSchema';
import { useCartContext } from '../context/CartContext';
import { usePlaceOrder } from '../hooks/usePlaceOrder';
import FormInput from '../Components/FormInput';
import OrderSummary from '../Components/Cart/OrderSummary';
import SuccessModal from '../Components/Cart/SuccessModal';
import { useAuth } from '../hooks/useAuth';

const CheckOutPage = () => {
  const { user } = useAuth();
  const { cartItems, buyNowItem, clearCart } = useCartContext();
  const items = buyNowItem ? [buyNowItem] : cartItems;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [paymentMethod, setPaymentMethod] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      payment: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
  });

  const { placeOrder, isLoading, isSuccess, orderId } = usePlaceOrder({
    user,
    subtotal,
    cartItems: items,
    clearCart,
  });

  const onSubmit = () => {
    const data = getValues();
    console.log('Form submitted with data:', data);

    const shippingInfo = {
      address: data.address,
      city: data.city,
      state: data.state,
      zip_code: data.zip,
    };

    placeOrder({ shippingInfo, paymentMethod: data.payment });
  };

  // Optional: log all watched values for debugging
  useEffect(() => {
    const subscription = watch((value) => console.log('Form Watch:', value));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <main className="wrapper bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          items={items}
          showButton={false}
          className="lg:col-span-1"
        />

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-2xl shadow-md lg:col-span-2"
        >
          <h2 className="text-xl font-semibold">Shipping Info</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput placeholder="First Name" {...register('firstName')} error={errors.firstName} />
            <FormInput placeholder="Last Name" {...register('lastName')} error={errors.lastName} />
          </div>
          <FormInput placeholder="Email Address" {...register('email')} error={errors.email} />
          <FormInput placeholder="Phone Number" {...register('phone')} error={errors.phone} />
          <FormInput placeholder="Street Address" {...register('address')} error={errors.address} />
          <div className="grid md:grid-cols-3 gap-4">
            <FormInput placeholder="City" {...register('city')} error={errors.city} />
            <FormInput placeholder="State" {...register('state')} error={errors.state} />
            <FormInput placeholder="Zip Code" {...register('zip')} error={errors.zip} />
          </div>

          <h2 className="text-xl font-semibold">Payment</h2>
          <div className="space-y-2">
            {['card', 'paypal', 'cod'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={method}
                  {...register('payment')}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    setValue('payment', e.target.value, { shouldValidate: true });
                  }}
                />
                <span className="capitalize">{method === 'cod' ? 'Cash on Delivery' : method}</span>
              </label>
            ))}
            {errors.payment && <p className="text-sm text-red-500">{errors.payment.message}</p>}
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <FormInput placeholder="Card Number" {...register('cardNumber')} error={errors.cardNumber} />
              <div className="grid grid-cols-2 gap-4">
                <FormInput placeholder="Expiry (MM/YY)" {...register('expiry')} error={errors.expiry} />
                <FormInput placeholder="CVV" {...register('cvv')} error={errors.cvv} />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 ${!isValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Placing Order...' : 'Submit Order'}
          </button>
        </form>
      </div>

      <SuccessModal isOpen={isSuccess} onClose={() => {}} orderId={orderId} />
    </main>
  );
};

export default CheckOutPage;
