import React, { useState } from 'react';
import Sidebars from './Components/Sidebars/Sidebars';
import DashboardHeader from './Components/DashboardHeader/DashboardHeader';
import Dashboard from './Components/Dashboard/Dashboard';
import RecentOrders from './Components/RecentOrders/RecentOrders';


function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <RecentOrders />;
      // case 'customers':
      //   return <Customers />;
      // case 'inventory':
      //   return <Inventory />;
      // case 'conversations':
      //   return <Conversations />;
      // case 'settings':
      //   return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    // <div className="flex h-screen bg-gray-100">
    //   <Sidebar setActiveTab={setActiveTab} />
    //   <div className="flex-1 flex flex-col">
    //     <DashboardHeader/>
    //     {renderContent()}
    //   </div>
    // </div>

    <div className="flex h-screen bg-gray-100">
    <Sidebars setActiveTab={setActiveTab} />
    <div className="flex-1 flex flex-col">
      <DashboardHeader/>
      <div className="p-6 flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  </div>
  );
}

export default App;
