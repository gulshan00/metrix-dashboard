
// import React, { useState } from 'react';
// import {
//   HomeIcon,
//   ShoppingCartIcon,
//   UserGroupIcon,
//   ArchiveIcon,
//   ChatIcon,
//   CogIcon,
//   SupportIcon,
//   GiftIcon,
//   LogoutIcon,
// } from '@heroicons/react/outline'; // Use heroicons for icons

// const Sidebars = ({ setActiveTab }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//     <div className='flex items-center'>

//     <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="absolute text-gray-500 focus:outline-none top-5  left-1 lg:hidden "
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//       </button>
//     </div>
      

//       <div className={`w-64 bg-white shadow-md fixed h-full z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
//         <div className="p-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img
//                 src="Images/path.png" // Placeholder logo image
//                 alt="Logo"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span className="ml-3 text-2xl font-bold">Metrix</span>
//             </div>
//             {/* <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button> */}
//           </div>
//         </div>
//         <nav className="mt-4">
//           <button onClick={() => setActiveTab('dashboard')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <HomeIcon className="w-5 h-5 mr-2" />
//             Dashboard
//           </button>
//           <button onClick={() => setActiveTab('orders')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <ShoppingCartIcon className="w-5 h-5 mr-2" />
//             Orders
//             <span className="ml-auto bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs">3</span>
//           </button>
//           <button onClick={() => setActiveTab('customers')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <UserGroupIcon className="w-5 h-5 mr-2" />
//             Customers
//           </button>
//           <button onClick={() => setActiveTab('inventory')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <ArchiveIcon className="w-5 h-5 mr-2" />
//             Inventory
//           </button>
//           <button onClick={() => setActiveTab('conversations')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <ChatIcon className="w-5 h-5 mr-2" />
//             Conversations
//             <span className="ml-auto bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs">16</span>
//           </button>
//           <button onClick={() => setActiveTab('settings')} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <CogIcon className="w-5 h-5 mr-2" />
//             Settings
//           </button>
//         </nav>
//         <div className="mt-4 px-4">
//           <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
//             <SupportIcon className="w-5 h-5 mr-2" />
//             Contact Support
//           </button>
//           <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center mt-2">
//             <GiftIcon className="w-5 h-5 mr-2" />
//             Free Gift Awaits You!
//           </button>
//           <button className="block w-full text-left py-2 px-4 text-red-700 hover:bg-gray-200 flex items-center mt-2">
//             <LogoutIcon className="w-5 h-5 mr-2" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Overlay to close the sidebar on mobile */}
//       {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"></div>}
//     </div>
//   );
// }

// export default Sidebars;
import React, { useState } from 'react';
import {
  HomeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ArchiveIcon,
  ChatIcon,
  CogIcon,
  SupportIcon,
  GiftIcon,
  LogoutIcon,
} from '@heroicons/react/outline'; // Use heroicons for icons

const Sidebars = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTabState] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveTabState(tab);
    setIsOpen(false); // Close the sidebar on mobile when a tab is clicked
  };

  const getButtonClasses = (tab) => (
    `block w-full text-left py-2 px-4 flex items-center rounded-lg transition-colors duration-200 ${activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
  );

  return (
    <div className="relative">
      <div className='flex items-center'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute text-gray-500 focus:outline-none top-5 left-1 lg:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`w-64 bg-white shadow-md fixed h-full z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="Images/path.png" // Placeholder logo image
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-3 text-2xl font-bold">Metrix</span>
            </div>
          </div>
        </div>
        <nav className="mt-4">
          <button onClick={() => handleTabClick('dashboard')} className={getButtonClasses('dashboard')}>
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button onClick={() => handleTabClick('orders')} className={getButtonClasses('orders')}>
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Orders
            <span className="ml-auto bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs">3</span>
          </button>
          <button onClick={() => handleTabClick('customers')} className={getButtonClasses('customers')}>
            <UserGroupIcon className="w-5 h-5 mr-2" />
            Customers
          </button>
          <button onClick={() => handleTabClick('inventory')} className={getButtonClasses('inventory')}>
            <ArchiveIcon className="w-5 h-5 mr-2" />
            Inventory
          </button>
          <button onClick={() => handleTabClick('conversations')} className={getButtonClasses('conversations')}>
            <ChatIcon className="w-5 h-5 mr-2" />
            Conversations
            <span className="ml-auto bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs">16</span>
          </button>
          <button onClick={() => handleTabClick('settings')} className={getButtonClasses('settings')}>
            <CogIcon className="w-5 h-5 mr-2" />
            Settings
          </button>
        </nav>
        <div className="mt-4 px-4">
          <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center">
            <SupportIcon className="w-5 h-5 mr-2" />
            Contact Support
          </button>
          <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 flex items-center mt-2">
            <GiftIcon className="w-5 h-5 mr-2" />
            Free Gift Awaits You!
          </button>
          <button className="block w-full text-left py-2 px-4 text-red-700 hover:bg-gray-200 flex items-center mt-2">
            <LogoutIcon className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"></div>}
    </div>
  );
}

export default Sidebars;