
import React from "react";

const StatsCard = ({ label, value, icon, bg, text }) => (
  <div className={`p-6 rounded-xl shadow-md flex items-center gap-4 ${bg}`}>
    <div className={`text-3xl ${text}`}>{icon}</div>
    <div>
      <h3 className="text-sm text-gray-600">{label}</h3>
      <p className={`text-xl font-bold ${text}`}>{value}</p>
    </div>
  </div>
);

export default StatsCard;
