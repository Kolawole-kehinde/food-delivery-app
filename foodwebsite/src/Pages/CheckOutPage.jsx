import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../Shchema/checkoutSchema';
import { useCartContext } from '../context/CartContext';
import { usePlaceOrder } from '../hooks/usePlaceOrder';
import OrderSummary from '../Components/Cart/OrderSummary';
import SuccessModal from '../Components/Cart/SuccessModal';
import { useAuth } from '../hooks/useAuth';
import CheckoutForm from '../Components/Checkout/CheckoutForm';

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

  return (
    <main className="wrapper bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Order Summary */}
        <OrderSummary subtotal={subtotal} items={items} showButton={false} className="lg:col-span-1" />

        {/* Checkout Form */}
        <CheckoutForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setValue={setValue}
          isLoading={isLoading}
          isValid={isValid}
        />
      </div>

      <SuccessModal isOpen={isSuccess} onClose={() => {}} orderId={orderId} />
    </main>
  );
};

export default CheckOutPage;
