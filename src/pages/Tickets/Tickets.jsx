import { useState } from "react";

import {
  Sidebar,
  Navbar,
  EventCard,
  Qrcode,
  ButtonLink,
  TicketsCard,
  MessageModal,
} from "../../pages/index";
import "material-symbols";
import "./Tickets.css";

const Tickets = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // open popup when cancel button is pressed
  const handleCancel = () => {
    setShowPopup(true);
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
        <div className="left-column">
          <div className="container-event">
            <h1>Hackathon 7ª Edição</h1>
            <div className="info-wrapper">
              <div className="info-date">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                <p>10/07/2024</p>
              </div>

              <div className="info-date">
                <span className="material-symbols-outlined">schedule</span>
                <p>09:00 às 15:00</p>
              </div>

              <div className="info-date">
                <span className="material-symbols-outlined">location_on</span>
                <p>Ca300</p>
              </div>
            </div>
          </div>

          <div className="container-details-event">
            <EventCard
              audience="Público Principal - Digital Solutions e Mecatrônica"
              title="hackaton"
              subtitle="7ª Edição"
              date="10/07/2024"
              time="09h00"
              location="Ca300"
            />

            <div className="container-qrcode">
              <div className="image-eventcard">
                <img src={Qrcode} alt="qrcode" />
              </div>

              <p>Código de autenticação</p>
              <h2>3815296</h2>
            </div>
          </div>

          <div className="section-container-button">
            <div className="button-container-ticket">
              <button onClick={handleCancel}>
                <span>Cancelar participação</span>
              </button>
              <ButtonLink to="/historic">Autenticar</ButtonLink>
            </div>
          </div>

          {showPopup && (
            <MessageModal
              title="Sentiremos sua falta :("
              text="Cancelamento de reserva efetuado com sucesso, porém sentiremos falta de você. Esperamos que em uma próxima oportunidade você esteja presente junto conosco."
            />
          )}
        </div>

        <div className="right-column">
          <div className="container-next-events">
            <h2>Próximos eventos</h2>
            <TicketsCard
              date="02 Fev 2024"
              title="Ciclo de Saúde Mental"
              authCode="3815296"
              area="AMB - GE"
              qrcode={Qrcode}
            />

            <TicketsCard
              date="08 Fev 2024"
              title="Fórum da Sustentabilidade"
              authCode="3815296"
              area="HR - GE"
              qrcode={Qrcode}
            />

            <TicketsCard
              date="14 Fev 2024"
              title="Conferência da Inovação"
              authCode="3815296"
              area="BD - DEV"
              qrcode={Qrcode}
            />

            <TicketsCard
              date="22 - 26 Fev 2024"
              title="Jornada do Conhecimento"
              authCode="3815296"
              area="ETS - DS"
              qrcode={Qrcode}
            />

            <TicketsCard
              date="14 Fev 2024"
              title="Conferência da Inovação"
              authCode="3815296"
              area="BD - DEV"
              qrcode={Qrcode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
