import React from 'react';

const DateFilterDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
      <div className="relative p-4">
        <button className="absolute top-0 right-0 mt-2 mr-2" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-lg font-medium mb-4">By Date</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <input type="checkbox" id="this-week" />
            <label htmlFor="this-week" className="ml-2">This Week</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="last-week" />
            <label htmlFor="last-week" className="ml-2">Last Week</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="this-month" />
            <label htmlFor="this-month" className="ml-2">This Month</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="last-month" />
            <label htmlFor="last-month" className="ml-2">Last Month</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="this-year" />
            <label htmlFor="this-year" className="ml-2">This Year</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="last-year" />
            <label htmlFor="last-year" className="ml-2">Last Year</label>
          </div>
          <div className="flex items-center col-span-2">
            <input type="checkbox" id="date-range" />
            <label htmlFor="date-range" className="ml-2">Date Range</label>
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md w-full mt-4">Filter</button>
      </div>
    </div>
  );
};

export default DateFilterDropdown;
