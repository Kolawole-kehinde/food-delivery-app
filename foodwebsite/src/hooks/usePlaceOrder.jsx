import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";


const placeOrderRequest = async (user, subtotal, cartItems) => {
  if (!user) throw new Error('User not logged in');

  // Create an order record
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([
      {
        user_id: user.id,
        total_price: subtotal,
        order_status: 'pending',
        payment_method: 'card',
        shipping_info: JSON.stringify({
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip_code: '10001',
        }),
      },
    ])
    .select()
    .single();

  if (orderError) throw new Error(`Failed to create order: ${orderError.message}`);

  // Insert order items
  const orderItems = cartItems.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price: item.price,
  }));

  const { error: itemsError } = await supabase.from('order_items').insert(orderItems);
  if (itemsError) throw new Error(`Failed to add order items: ${itemsError.message}`);

  return order.id;
};

export const usePlaceOrder = ({ user, subtotal, cartItems, clearCart }) => {
  const mutation = useMutation({
    mutationFn: () => placeOrderRequest(user, subtotal, cartItems),
    onSuccess: (orderId) => {
    //   toast.success('Order placed successfully!');
      clearCart();
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
