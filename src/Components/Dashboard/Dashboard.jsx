// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-medium">Sales</h3>
          <p className="text-2xl font-bold">₦4,000,000.00</p>
          <p className="text-sm text-green-500">+20.00%</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-medium">Volume</h3>
          <p className="text-2xl font-bold">450</p>
          <p className="text-sm text-green-500">+20.00%</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-medium">Customers</h3>
          <p className="text-2xl font-bold">1,250</p>
          <p className="text-sm text-green-500">+15.00%</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-medium">Marketing</h3>
          <div className="flex items-center">
            <div className="w-1/2">
              <p className="text-sm">Acquisition</p>
              <p className="text-sm">Purchase</p>
              <p className="text-sm">Retention</p>
            </div>
            <div className="w-1/2">
              <p className="text-sm">20%</p>
              <p className="text-sm">30%</p>
              <p className="text-sm">50%</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-medium">Recent Orders</h3>
          <ul>
            <li className="flex justify-between mb-4">
              <div>iPhone 13 x 1</div>
              <div>₦730,000.00</div>
              <div className="text-green-500">Completed</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
