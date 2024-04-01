import { useState } from "react";
/* import PropTypes from "prop-types"; */
import { Sidebar, Navbar } from "../../pages/index";
import "./Tickets.css";

const Tickets = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`tickets-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="confirmation_number"
        activePage="tickets"
        navigationText="Meus eventos"
        showNavigationTexts={true}
      />

      <Sidebar
        activePage="confirmation_number"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="tickets-container-main">
        <div className="container-event">Tickets</div>
        <div className="container-next-event">Próximos eventos</div>
      </div>
    </div>
  );
};

export default Tickets;
