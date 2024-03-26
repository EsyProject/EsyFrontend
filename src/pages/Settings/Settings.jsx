import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar currentPageIcon="settings" activePage="settings" />

      <Sidebar
        activePage="settings"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <h4>Conteudo aqui</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugiat
          quia magnam iure, doloribus expedita vero porro molestias maiores
        </span>
      </div>
    </div>
  );
};

export default Settings;
