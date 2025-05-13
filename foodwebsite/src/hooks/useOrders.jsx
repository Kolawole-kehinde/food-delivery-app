import { useEffect, useState } from 'react';
import { supabase } from '../libs/supabase';


export const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      setLoading(true);
      console.log('Fetching orders for user ID:', userId);

      const { data, error } = await supabase
        .from('order')
        .select(`
          id,
          status,
          total,
          created_at,
          order_item (
            product_name,
            price,
            quantity
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders:', error.message);
      } else {
        console.log('Fetched orders:', data);
        setOrders(data);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [userId]);

  return { orders, loading };
};
