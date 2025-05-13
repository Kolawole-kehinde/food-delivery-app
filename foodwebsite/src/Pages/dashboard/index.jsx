import React, { useState, useEffect } from "react";
import { FaBell, FaShoppingCart, FaClock, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import Sidebar from "../../Components/features/dashboard/SideBar";
import { supabase } from "../../libs/supabase"; // Import Supabase client
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      setLoading(true);

      const { data, error } = await supabase
        .from("orders")
        .select("id, order_status")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching orders:", error);
      } else {
        setOrders(data);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [user]);

  const orderStats = {
    totalOrders: orders.length,
    pending: orders.filter(order => order.order_status === "pending").length,
    delivered: orders.filter(order => order.order_status === "delivered").length,
  };

  const stats = [
    { label: "Total Orders", value: orderStats.totalOrders, icon: <FaShoppingCart />, bg: "bg-blue-100", text: "text-blue-600" },
    { label: "Pending", value: orderStats.pending, icon: <FaClock />, bg: "bg-yellow-100", text: "text-yellow-600" },
    { label: "Delivered", value: orderStats.delivered, icon: <FaCheckCircle />, bg: "bg-green-100", text: "text-green-600" },
  ];

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="flex h-auto bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4 flex flex-col lg:justify-between lg:flex-row items-center gap-4 px-4 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Welcome back, {user.name || user} 👋
          </h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search meals..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-primary"
            />
            <FaBell className="text-xl text-gray-600 hover:text-primary cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <main className="p-6 space-y-8">
          {/* Order Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ label, value, icon, bg, text }, i) => (
              <div key={i} className={`p-6 rounded-xl shadow-md flex items-center gap-4 ${bg}`}>
                <div className={`text-3xl ${text}`}>{icon}</div>
                <div>
                  <h3 className="text-sm text-gray-600">{label}</h3>
                  <p className={`text-xl font-bold ${text}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Orders</h3>
            <ul className="divide-y">
              {orders.map(({ id, order_status, created_at }, i) => (
                <li key={i} className="py-3 flex justify-between items-center text-sm text-gray-700">
                  <span>{id}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${order_status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                    {order_status}
                  </span>
                  <span className="text-gray-500">{new Date(created_at).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Favorite Meals */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Favorites</h3>
            <div className="flex gap-4 overflow-x-auto">
              {favorites.length > 0 ? (
                favorites.map(({ id, name, image_url }, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(`/product-details/${id}`)}
                    className="flex flex-col items-center text-sm text-gray-600 cursor-pointer hover:text-primary"
                  >
                    <img
                      src={image_url}
                      alt={name}
                      className="w-16 h-16 rounded-full object-cover border"
                    />
                    <span className="mt-1 text-center">{name}</span>
                  </div>
                ))
              ) : (
                <p>No favorite items yet</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
