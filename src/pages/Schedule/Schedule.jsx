import { useState } from "react";
import { Sidebar, Navbar } from "../../pages/index";


const Schedule = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`historic-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar currentPageIcon="calendar_month" activePage="schedule" />

      <Sidebar
        activePage="history"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main">
        <h1>Conteudo aqui</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugiat quia magnam iure, doloribus expedita vero porro molestias maiores</span>
      </div>
    </div>
  )
}

export default Schedule