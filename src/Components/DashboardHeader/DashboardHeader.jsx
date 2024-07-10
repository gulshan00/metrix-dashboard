import React from 'react';

const Dashboardheader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md mb-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold ml-4">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 focus:outline-none hidden lg:block">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A9 9 0 1118.364 5.121M18 9v3h-3"></path>
          </svg>
        </button>
        <img src="Images/avtar.jpg" alt="Profile" className="w-10 h-10 rounded-full"/>
      </div>
    </div>
  );
}

export default Dashboardheader;
