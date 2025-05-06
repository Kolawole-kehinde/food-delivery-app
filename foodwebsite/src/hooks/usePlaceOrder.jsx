import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
import toast from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';


const placeOrderRequest = async ({ user, subtotal, cartItems }) => {
  if (!user) throw new Error('User not logged in');

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{ user_id: user.id, total_price: subtotal, order_status: 'pending' }])
    .select()
    .single();

  if (orderError) throw orderError;

  const orderItems = cartItems.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price: item.price,
  }));

  const { error: itemsError } = await supabase.from('order_items').insert(orderItems);
  if (itemsError) throw itemsError;

  return order.id;
};

export const usePlaceOrder = ({ user, subtotal, cartItems, clearCart }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => placeOrderRequest({ user, subtotal, cartItems }),
    onSuccess: () => {
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/orders'); // or navigate('/') for home
    },
    onError: (error) => {
      console.error(error.message);
      toast.error('Failed to place order.');
    },
  });

  return {
    placeOrder: mutation.mutate,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
