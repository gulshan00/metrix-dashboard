
import React, { useState } from "react";
import { FaChartPie } from 'react-icons/fa';
const orders = [
  {
    id: 1,
    product: "iPhone 13",
    price: "₦730,000.00",
    status: "Pending",
    date: "12 Sept 2022",
    imageUrl: "Images/phone.png",
  },
  {
    id: 2,
    product: "iPhone 13",
    price: "₦730,000.00",
    status: "Completed",
    date: "12 Sept 2022",
   imageUrl: "Images/phone.png",
  },
  {
    id: 3,
    product: "iPhone 13",
    price: "₦730,000.00",
    status: "Pending",
    date: "12 Sept 2022",
   imageUrl: "Images/phone.png",
  },
  {
    id: 4,
    product: "iPhone 13",
    price: "₦730,000.00",
    status: "Completed",
    date: "12 Sept 2022",
    imageUrl: "Images/phone.png",
  },

  
 
];

const MarketingChart = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg lg:flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Marketing</h2>
          <select
              className="rounded-md p-2 text-gray-500"style={{background:"none"}}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
        </div>
        <div className="relative w-40 h-40 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500" />
          <div className="absolute inset-0 rounded-full border-4 border-blue-300 m-2" />
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 m-4" />
          <div className="absolute inset-0 bg-white rounded-full m-6" />
        </div>
        <div className="flex justify-around text-gray-700">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>
            Acquisition
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-300 rounded-full inline-block mr-2"></span>
            Purchase
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block mr-2"></span>
            Retention
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:w-1/2">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-white">All Products</h2>
           
          </div>
          <p className="text-white text-2xl font-bold">45</p>
          <p className="text-white">
            Active: 32 <span className="text-green-300">+24%</span>
          </p>
        </div>

        <div className=" p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-black">Abandoned Cart</h2>
            <select
              className="rounded-md p-2 text-gray-500"style={{background:"none"}}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <p className="text-black text-2xl font-bold">12</p>
          <p className="text-black">
            Pending: 8 <span className="text-red-300">-10%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
const ProgressBar = ({ progress, max, date }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2 h-48 bg-gray-200 relative">
        <div
          className="bg-blue-500 rounded-lg absolute bottom-0 w-full"
          style={{ height: `${(progress / max) * 100}%` }}
        ></div>
      </div>
      <div className="mt-2 text-sm text-center">{date}</div>
    </div>
  );
};

const Summary = () => {
  const [timePeriod, setTimePeriod] = useState("Last 7 days");

  const data = {
    "This Week": [
      { date: 'Sept 10', progress: 100000, max: 100000 },
      { date: 'Sept 11', progress: 60000, max: 100000 },
      { date: 'Sept 12', progress: 80000, max: 100000 },
      { date: 'Sept 13', progress: 20000, max: 100000 },
      { date: 'Sept 14', progress: 90000, max: 100000 },
      { date: 'Sept 15', progress: 50000, max: 100000 },
      { date: 'Sept 16', progress: 100000, max: 100000 },
    ],
    "Last 7 days": [
      { date: 'Sept 3', progress: 90000, max: 100000 },
      { date: 'Sept 4', progress: 70000, max: 100000 },
      { date: 'Sept 5', progress: 50000, max: 100000 },
      { date: 'Sept 6', progress: 30000, max: 100000 },
      { date: 'Sept 7', progress: 60000, max: 100000 },
      { date: 'Sept 8', progress: 80000, max: 100000 },
      { date: 'Sept 9', progress: 40000, max: 100000 },
    ],
    "First Week": [
      { date: 'Aug 27', progress: 30000, max: 100000 },
      { date: 'Aug 28', progress: 50000, max: 100000 },
      { date: 'Aug 29', progress: 70000, max: 100000 },
      { date: 'Aug 30', progress: 90000, max: 100000 },
      { date: 'Aug 31', progress: 20000, max: 100000 },
      { date: 'Sept 1', progress: 40000, max: 100000 },
      { date: 'Sept 2', progress: 60000, max: 100000 },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Summary</h2>
        <select
          className=" text-gray-500 rounded-md p-2"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option>This Week</option>
          <option> Last 7 days </option>
          <option>First Week</option>
        </select>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-between h-48 pr-2">
          {[100, 80, 60, 40, 20].map((value, index) => (
            <div key={index} className="text-sm text-gray-500">{value}k</div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-7 gap-2">
          {data[timePeriod].map((item, index) => (
            <ProgressBar key={index} progress={item.progress} max={item.max} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentOrders = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <div className="space-y-4 overflow-y-auto h-96">
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={order.imageUrl}
                alt={order.product}
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">{order.product}</h3>
                <p className="text-gray-500">{order.price} × 1</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm ${
                  order.status === "Pending" ? "text-red-500" : "text-green-500"
                }`}
              >
                {order.status}
              </p>
              <p className="text-gray-400 text-xs">{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <FaChartPie className="text-blue-500" />
            </div>
            <select
              className="rounded-md p-2 text-gray-500"style={{background:"none"}}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">Sales</h3>
              <p className="text-lg font-medium">₦4,000,000.00</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Volume</h3>
              <p className="text-lg font-medium">
                450 <span className="text-green-500 text-sm">+20%</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <img src="Images/2 User.png" className="" />
            </div>
            <select
              className="rounded-md p-2 text-gray-500"style={{background:"none"}}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">Customers</h3>
              <p className="text-lg font-medium">1,250</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Active</h3>
              <p className="text-lg font-medium">
                1,180 <span className="text-green-500 text-sm">85%</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="p-2 ">
              <img src="Images/icon(1).png" className="" />
            </div>
            <select
              className="rounded-md p-2 text-gray-500"style={{background:"none"}}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>First Week</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-gray-500">All Orders</h3>
              <p className="text-lg font-medium">1,250</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Pending</h3>
              <p className="text-lg font-medium">5</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500">Completed</h3>
              <p className="text-lg font-medium">445</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MarketingChart />
          <Summary />
        </div>
        <div className="lg:col-span-1">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




