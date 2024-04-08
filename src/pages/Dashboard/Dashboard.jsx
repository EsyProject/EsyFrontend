import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="dashboard"
        activePage="dashboard"
        navigationText="Dashboard"
        showNavigationTexts={false}
      />

      <Sidebar
        activePage="dashboard"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      
    </div>
  );
};

export default Dashboard;
