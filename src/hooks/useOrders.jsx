// hooks/useOrders.js
import { useEffect, useState } from 'react';
import { supabase } from '../libs/supabase';
import toast from 'react-hot-toast';

export const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          created_at,
          order_status,
          order_items (
            id,
            quantity,
            product_id,
            product:fk_order_items_product (
              name,
              price,
              image_url
            )
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        setError('Error fetching orders');
        console.error(error);
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [userId]);

  const cancelOrder = async (orderId) => {
    const { error } = await supabase
      .from('orders')
      .update({ order_status: 'cancelled' })
      .eq('id', orderId);

    if (error) {
      toast.error('❌ Failed to cancel order');
      console.error(error);
      return false;
    } else {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, order_status: 'cancelled' } : order
        )
      );
      toast.success('Order cancelled.');
      return true;
    }
  };

  return { 
    orders,
    loading,
    error,
    setOrders,
    cancelOrder };
};
