import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ConfirmModal from "../Components/ui/OrderConfirmModal";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useOrderDetails } from "../hooks/useOrdersDetails";
import { FaArrowLeft } from "react-icons/fa"; // react-icons

const OrderDetails = () => {
  const { user } = useAuth();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const { order, loading, error, cancelOrder, cancelling } = useOrderDetails(
    user?.id,
    orderId
  );

  const [cancelModal, setCancelModal] = useState({
    visible: false,
    orderId: null,
  });

  if (loading) return <div className="text-center py-10">Loading order...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!order) return <div className="text-center py-10">Order not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Toaster position="top-center" />

      {/* Back button */}
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Orders
      </button>

      <h1 className="text-3xl font-bold mb-6">Order Details</h1>

      <div className="bg-white shadow rounded-xl p-6 border">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Order ID: <span className="text-gray-900">{order.id}</span>
          </h2>
          {["pending", "processing"].includes(order.order_status) && (
            <button
              onClick={() =>
                setCancelModal({ visible: true, orderId: order.id })
              }
              disabled={cancelling}
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
            >
              {cancelling ? "Cancelling..." : "Cancel Order"}
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500">Status: {order.order_status}</p>
        <p className="text-sm text-gray-500">
          Placed on: {new Date(order.created_at).toLocaleDateString()}
        </p>

        <div className="mt-6 space-y-4">
          {order.order_items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t pt-4"
            >
              <img
                src={item.product.image_url}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-md border"
              />
              <div>
                <h3 className="text-md font-medium text-gray-800">
                  {item.product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  Price: ${item.product.price.toFixed(2)}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  Total: ${(item.quantity * item.product.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConfirmModal
        isOpen={cancelModal.visible}
        title="Cancel Order"
        message="Are you sure you want to cancel this order?"
        onConfirm={() => cancelOrder(cancelModal.orderId)}
        onCancel={() => setCancelModal({ visible: false, orderId: null })}
      />
    </div>
  );
};

export default OrderDetails;
