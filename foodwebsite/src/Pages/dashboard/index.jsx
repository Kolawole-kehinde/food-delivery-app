import React, { useState, useEffect } from "react";
import { FaBell, FaShoppingCart, FaClock, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import Sidebar from "../../Components/features/dashboard/SideBar";
import { supabase } from "../../libs/supabase";
import { useNavigate } from "react-router-dom";
import RecentOrders from "../../Components/features/dashboard/RecentOrders";
import Favorites from "../../Components/features/dashboard/Favorites";
import StatsCard from "../../Components/features/dashboard/StatsCard";

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
        .select("id, order_status, created_at")
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
    <div className="flex bg-gray-100">
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
              src={user.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <main className="p-6 space-y-8">
          {/* Order Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ label, value, icon, bg, text }, i) => (
              <StatsCard
                key={i}
                label={label}
                value={value}
                icon={icon}
                bg={bg}
                text={text}
              />
            ))}
          </div>

          {/* Recent Orders */}
          <RecentOrders orders={orders} />

          {/* Favorite Meals */}
          <Favorites favorites={favorites} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
