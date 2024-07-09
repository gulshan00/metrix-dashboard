// src/components/RecentOrders.js
import React from 'react';

const RecentOrders = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
      <ul>
        <li className="flex justify-between mb-4">
          <div>iPhone 13 x 1</div>
          <div>₦730,000.00</div>
          <div className="text-green-500">Completed</div>
        </li>
        {/* Add more orders similarly */}
      </ul>
    </div>
  );
}

export default RecentOrders;
