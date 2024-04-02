import { useState } from "react";
/* import PropTypes from "prop-types"; */
import { Sidebar, Navbar, EventCard, Qrcode } from "../../pages/index";
import "material-symbols";
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
        <div className="container-event">
          <h1>Hackathon 7ª Edição</h1>
          <div className="info-wrapper">
            <div className="info-date">
              <span className="material-symbols-outlined">calendar_month</span>
              <h4>10/07/2024</h4>
            </div>

            <div className="info-date">
              <span className="material-symbols-outlined">schedule</span>
              <h4>09:00 às 15:00</h4>
            </div>

            <div className="info-date">
              <span className="material-symbols-outlined">location_on</span>
              <h4>Ca300</h4>
            </div>
          </div>
        </div>

        <EventCard
          audience="Público Principal - Digital Solutions e Mecatrônica"
          title="hackaton"
          subtitle="7ª Edição"
          date="10/07/2024"
          time="09h00"
          location="Ca300"
        />

        <div className="image-eventcard">
          <img src={Qrcode} alt="qrcode" />
        </div>

        <div className="container-next-event">Próximos eventos</div>
      </div>
    </div>
  );
};

export default Tickets;
