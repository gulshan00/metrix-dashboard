// src/components/DashboardContent.js
// import React from 'react';
// // import DashboardHeader from './DashboardHeader';
// // import DashboardCards from './DashboardCards';
// // import SalesSummary from './SalesSummary';
// // import RecentOrders from './RecentOrders';
// // import DashboardHeader from './Components/DashboardHeader/DashboardHeader'
// // import RecentOrders from './Components/RecentOrders/RecentOrders';
// const DashboardContent = () => {
//   return (
//     <div className="flex-1 p-6">
//       <DashboardHeader />
//       <RecentOrders />
//     </div>
//   );
// }

// export default DashboardContent;



import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RecentOrders from "../RecentOrders/RecentOrders"

const DashboardContent =() =>{

  return(
    <div className="flex-1 p-6">
    <DashboardHeader />
    <RecentOrders />
  </div>
  );
}

export default DashboardContent;