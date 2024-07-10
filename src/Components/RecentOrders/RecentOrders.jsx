import React, { useState , useEffect ,useRef } from 'react';
import { FaChartPie,} from 'react-icons/fa';
import Modal from './Modal';
import DateFilterDropdown from './DateFilterDropdown';
const OrderSummary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timePeriod, setTimePeriod] = useState("This Week");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const filterRef = useRef(null);
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
 
  const dateFilterRef = useRef(null);

 const [isFilterOpen, setIsFilterOpen] = useState(false);

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
  ];

  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (dateFilterRef.current && !dateFilterRef.current.contains(event.target)) {
        setIsDateFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-gray-100  ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Orders Summary</h2>
        <button className="bg-blue-500 text-white p-2 rounded-md">Create a New Order</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="p-2 rounded-full">
            <img src='Images/icon.png'/>
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

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
            <div className="p-2 rounded-full">
              <img src='Images/icon.png'/>
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
              <h3 className="text-gray-500">Cancelled</h3>
              <p className="text-lg font-medium">1,250</p>
            </div>
            <div className="">
              <h3 className="text-gray-500">Return</h3>
              <p className="text-lg font-medium">5</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500">Damage</h3>
              <p className="text-lg font-medium">445</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
            <div className="p-2 rounded-full">
            <img src='Images/icon(1).png'/>
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
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-10">
        {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h3 className="text-xl font-bold mb-4 sm:mb-0">Customer Orders</h3>
        <div className="flex space-x-2 relative" ref={filterRef}>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="text-gray-400 border p-2 rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter
          </button>
          <div ref={dateFilterRef}>
            <button 
              className="text-gray-400 border p-2 rounded-md"
              onClick={() => setIsDateFilterOpen(!isDateFilterOpen)}
            >
              Date Filter
            </button>
            <DateFilterDropdown isOpen={isDateFilterOpen} onClose={() => setIsDateFilterOpen(false)} />
          </div>
          <button className="text-gray-400 border p-2 rounded-md">Share</button>
          <button className="text-gray-400 border p-2 rounded-md">Bulk Action</button>
          <Modal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
            <h3 className="text-lg  font-medium mb-4">Filter</h3>
            <div className="mb-4">
              <label className="block mb-2">Order Type</label>
              <div className="flex space-x-4">
                <div>
                  <input type="checkbox" id="home-delivery" />
                  <label htmlFor="home-delivery" className="ml-2">Home Delivery</label>
                </div>
                <div>
                  <input type="checkbox" id="pick-up" />
                  <label htmlFor="pick-up" className="ml-2">Pick Up</label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Status</label>
              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option>All</option>
                <option>Completed</option>
                <option>In-Progress</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Customer</label>
              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option>All</option>
                <option>Customer 1</option>
                <option>Customer 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Amount</label>
              <div className="flex space-x-2">
                <input type="number" placeholder="From" className="border border-gray-300 rounded-md p-2 w-full" />
                <input type="number" placeholder="To" className="border border-gray-300 rounded-md p-2 w-full" />
              </div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">Filter</button>
          </Modal>
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
  <h3 className="text-lg font-medium mb-4 sm:mb-0">Customer Orders</h3>
  <div className="flex flex-wrap space-x-2 sm:space-x-2 space-y-2 sm:space-y-0 relative" ref={filterRef}>
    <input
      type="text"
      placeholder="Search"
      className="border border-gray-300 rounded-md p-2 w-full sm:w-auto"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button
      className="text-gray-400 border p-2 rounded-md w-full sm:w-auto"
      onClick={() => setIsFilterOpen(!isFilterOpen)}
    >
      Filter
    </button>
    <div ref={dateFilterRef}>
      <button
        className="text-gray-400 border p-2 rounded-md w-full sm:w-auto"
        onClick={() => setIsDateFilterOpen(!isDateFilterOpen)}
      >
        Date Filter
      </button>
      <DateFilterDropdown isOpen={isDateFilterOpen} onClose={() => setIsDateFilterOpen(false)} />
    </div>
    <button className="text-gray-400 border p-2 rounded-md w-full sm:w-auto">Share</button>
    <button className="text-gray-400 border p-2 rounded-md w-full sm:w-auto">Bulk Action</button>
    <Modal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-4 rounded-md  w-full sm:w-96">
          <h3 className="text-lg font-medium mb-4">Filter</h3>
          <div className="mb-4">
            <label className="block mb-2">Order Type</label>
            <div className="flex space-x-4">
              <div>
                <input type="checkbox" id="home-delivery" />
                <label htmlFor="home-delivery" className="ml-2">Home Delivery</label>
              </div>
              <div>
                <input type="checkbox" id="pick-up" />
                <label htmlFor="pick-up" className="ml-2">Pick Up</label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option>All</option>
              <option>Completed</option>
              <option>In-Progress</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Customer</label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option>All</option>
              <option>Customer 1</option>
              <option>Customer 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Amount</label>
            <div className="flex space-x-2">
              <input type="number" placeholder="From" className="border border-gray-300 rounded-md p-2 w-full" />
              <input type="number" placeholder="To" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md w-full">Filter</button>
        </div>
      </div>
    </Modal>
  </div>
</div>

      <div className="overflow-x-auto w-[20rem] md:w-full justify-between items-center">
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


