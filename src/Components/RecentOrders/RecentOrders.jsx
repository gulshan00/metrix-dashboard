
import React, { useState } from 'react';
import { FaChartPie, FaFilter, FaShareAlt, FaEllipsisH } from 'react-icons/fa';

const OrderSummary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timePeriod, setTimePeriod] = useState("This Week");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const summaryData = [
    { label: "All Orders", value: 450 },
    { label: "Pending", value: 5 },
    { label: "Completed", value: 320 },
    { label: "Canceled", value: 30, change: "-20%" },
    { label: "Returned", value: 20 },
    { label: "Damaged", value: 5 },
    { label: "Abandoned Cart", value: "20%", change: "+0.00%" },
    { label: "Customers", value: 30 },
  ];

  const orders = [
    { customer: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { customer: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    { customer: 'Francis Doe', date: '12 Aug 2022 - 12:25 am', type: 'Pick Up', trackingId: '9348fj73', total: '₦25,000.00', action: 'Pending', status: 'Pending' },
    { customer: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { customer: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    { customer: 'Francis Doe', date: '12 Aug 2022 - 12:25 am', type: 'Pick Up', trackingId: '9348fj73', total: '₦25,000.00', action: 'Pending', status: 'Pending' },
    { customer: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { customer: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    { customer: 'Francis Doe', date: '12 Aug 2022 - 12:25 am', type: 'Pick Up', trackingId: '9348fj73', total: '₦25,000.00', action: 'Pending', status: 'Pending' },
    { customer: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { customer: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    { customer: 'Francis Doe', date: '12 Aug 2022 - 12:25 am', type: 'Pick Up', trackingId: '9348fj73', total: '₦25,000.00', action: 'Pending', status: 'Pending' },
    { customer: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { customer: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fj73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    { customer: 'Francis Doe', date: '12 Aug 2022 - 12:25 am', type: 'Pick Up', trackingId: '9348fj73', total: '₦25,000.00', action: 'Pending', status: 'Pending' },
    // Add more orders as needed
  ];

  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Orders Summary</h2>
        <button className="bg-blue-500 text-white p-2 rounded-md">Create a New Order</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaChartPie className="text-blue-500" />
            </div>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">Sales</h3>
              <p className="text-2xl font-medium">₦4,000,000.00</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Volume</h3>
              <p className="text-2xl font-medium">
                450 <span className="text-green-500 text-sm">+20%</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaChartPie className="text-blue-500" />
            </div>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">Customers</h3>
              <p className="text-2xl font-medium">1,250</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Active</h3>
              <p className="text-2xl font-medium">
                1,180 <span className="text-green-500 text-sm">85%</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaChartPie className="text-blue-500" />
            </div>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">All Orders</h3>
              <p className="text-2xl font-medium">1,250</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500">Pending</h3>
              <p className="text-2xl font-medium">5</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500">Completed</h3>
              <p className="text-2xl font-medium">445</p>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Orders Table */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Customer Orders</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">Filter</button>
            <button className="bg-blue-500 text-white p-2 rounded-md">Share</button>
            <button className="bg-blue-500 text-white p-2 rounded-md">Bulk Action</button>
          </div>
        </div>
      
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2 border">Customer Name</th>
                <th className="px-4 py-2 border">Order Date</th>
                <th className="px-4 py-2 border">Order Type</th>
                <th className="px-4 py-2 border">Tracking ID</th>
                <th className="px-4 py-2 border">Order Total</th>
                <th className="px-4 py-2 border">Action</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border">{order.customer}</td>
                  <td className="px-4 py-2 border">{order.date}</td>
                  <td className="px-4 py-2 border">{order.type}</td>
                  <td className="px-4 py-2 border">{order.trackingId}</td>
                  <td className="px-4 py-2 border">{order.total}</td>
                  <td className="px-4 py-2 border">{order.action}</td>
                  <td className="px-4 py-2 border">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span>Page {currentPage} of {totalPages}</span>
          <div>
            <button
              onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
              className={`mr-2 px-4 py-2 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'} rounded-md`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'} rounded-md`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
