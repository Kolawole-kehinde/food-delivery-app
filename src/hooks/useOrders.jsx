import { useQuery } from "@tanstack/react-query";
import { supabase } from "../libs/supabase";

// Fetch all orders for a user
const fetchOrders = async (userId) => {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      id,
      created_at,
      order_status
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Error fetching orders");
  }

  return data;
};

export const useOrders = (userId) => {
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => fetchOrders(userId),
    enabled: Boolean(userId), // ✅ this prevents calling fetchOrders if userId is undefined
  });

  return {
    orders,
    loading: isLoading,
    error: isError ? error.message : null,
  };
};
