import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../libs/supabase";
import toast from "react-hot-toast";

// Fetch a single order
const fetchOrder = async ({ userId, orderId }) => {
  if (!userId || !orderId) return null;

  const { data, error } = await supabase
    .from("orders")
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
    .eq("user_id", userId)
    .eq("id", orderId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error fetching order");
  }

  return data;
};

// Cancel order mutation
const cancelOrderRequest = async (orderId) => {
  const { error } = await supabase
    .from("orders")
    .update({ order_status: "cancelled" })
    .eq("id", orderId);

  if (error) {
    console.error(error);
    throw new Error("Failed to cancel order");
  }

  return orderId;
};

export const useOrderDetails = (userId, orderId) => {
  const queryClient = useQueryClient();

  // Query: fetch single order
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["order", userId, orderId],
    queryFn: () => fetchOrder({ userId, orderId }),
    enabled: !!userId && !!orderId, // only run if both are available
  });

  // Mutation: cancel order
  const cancelOrderMutation = useMutation({
    mutationFn: () => cancelOrderRequest(orderId),
    onSuccess: () => {
      // Update cached order to cancelled
      queryClient.setQueryData(["order", userId, orderId], (old) => ({
        ...old,
        order_status: "cancelled",
      }));
      toast.success("Order cancelled.");
    },
    onError: () => {
      toast.error("Failed to cancel order");
    },
  });

  return {
    order,
    loading: isLoading,
    error: isError ? error.message : null,
    cancelOrder: cancelOrderMutation.mutate,
    cancelling: cancelOrderMutation.isLoading,
  };
};
