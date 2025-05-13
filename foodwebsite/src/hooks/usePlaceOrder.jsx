import { useMutation } from '@tanstack/react-query';
import { supabase } from '../libs/supabase';
import toast from 'react-hot-toast';

const placeOrderRequest = async ({ user, subtotal, cartItems, shippingInfo, paymentMethod }) => {
  if (!user) throw new Error('User not logged in');

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([
      {
        user_id: user.id,
        total_price: subtotal,
        order_status: 'pending',
        payment_method: paymentMethod,
        shipping_info: JSON.stringify(shippingInfo),
      },
    ])
    .select()
    .single();

  if (orderError) throw new Error(`Failed to create order: ${orderError.message}`);

  const orderItems = cartItems.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price: item.price,
    total_price: item.price * item.quantity,
  }));

  const { error: itemsError } = await supabase.from('order_items').insert(orderItems);
  if (itemsError) throw new Error(`Failed to add order items: ${itemsError.message}`);

  return order.id;
};

export const usePlaceOrder = ({ user, subtotal, cartItems, clearCart }) => {
  const mutation = useMutation({
    mutationFn: ({ shippingInfo, paymentMethod }) =>
      placeOrderRequest({ user, subtotal, cartItems, shippingInfo, paymentMethod }),

    onSuccess: (orderId) => {
      clearCart();
      // toast.success('Order placed successfully!');
    },

    onError: (error) => {
      console.error(error);
      toast.error(`Failed to place order: ${error.message}`);
    },
  });

  return {
    placeOrder: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    orderId: mutation.data,
  };
};
