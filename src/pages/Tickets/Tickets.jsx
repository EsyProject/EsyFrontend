import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { useEventById } from "../../services/queries";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  Navbar,
  EventCard,
  ButtonLink,
  TicketsCard,
  MessageModal,
} from "../../components/index";
import { Qrcode } from "../index";
import "material-symbols";
import "./Tickets.css";

const Tickets = () => {
  const location = useLocation();
  const qrCodeNumber = location.state?.qrCodeNumber || "Nenhum QR Code Number encontrado.";
  const eventId = "14";
  const { data: eventFeed } = useEventById(eventId);
  const [eventFeedData, setEventFeedData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [authCode, setAuthCode] = useState("");

  useEffect(() => {
    if (eventFeed) {
      setEventFeedData(eventFeed);
    }
  }, [eventFeed]);

  useEffect(() => {
    setAuthCode(qrCodeNumber);
  }, [qrCodeNumber]);

  // Função para obter a URL da imagem do QR code
  const getQRCodeImageURL = () => {
    const canvas = document.createElement("canvas");
    const qrCode = (
      <QRCode value={authCode} renderAs="canvas" level="H" size={256} />
    );
    ReactDOM.render(qrCode, canvas, () => {
      const imageURL = canvas.toDataURL("image/png");
      ReactDOM.unmountComponentAtNode(canvas);
      return imageURL;
    });
  };

  const handleSaveQRCode = async () => {
    const imageUrl = getQRCodeImageURL();
    updateTicketImageMutation.mutate({
      eventId,
      ticketId,
      images: [imageUrl],
    });
  };

  // open popup when cancel button is pressed
  const handleCancel = () => {
    setShowPopup(true);
  };

  const handleCloseModal = () => {
    setShowPopup(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Função para formatar a hora
  const formatTime = (time) => {
    if (!time) return "";
    return time.slice(0, 5);
  };

  const { nameOfEvent, responsible_area, localEvent, initialTime, finishTime, initialDate } = eventFeedData || {};
  const displayResponsibleArea = responsible_area === "ETS" ? "ETS - Engineering Technical School" : responsible_area;

  return (
    <div className={`tickets-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="confirmation_number"
        activePage="tickets"
        navigationText="Meus eventos"
        showNavigationTexts={true}
        tabs={[
          { name: "schedule", text: "Próximos Eventos", link: "/schedule" },
          { name: "historic", text: "Histórico de eventos", link: "/historic" },
          { name: "tickets", text: "Tickets", link: "/tickets" },
        ]}
      />

      <Sidebar
        activePage="confirmation_number"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="tickets-container-main">
        <div className="tickets-content-left">
          <div className="left-column">
            <div className="container-event">
              <h1>{nameOfEvent}</h1>
              <div className="info-wrapper">
                <div className="info-date">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  <p>{initialDate}</p>
                </div>

                <div className="info-date">
                  <span className="material-symbols-outlined">schedule</span>
                  <p>{formatTime(initialTime)} às {formatTime(finishTime)}</p>
                </div>

                <div className="info-date">
                  <span className="material-symbols-outlined">location_on</span>
                  <p>{localEvent}</p>
                </div>
              </div>
            </div>

            <div className="container-details-event">
              <EventCard
                audience={displayResponsibleArea}
                title={nameOfEvent}
                subtitle="7ª Edição"
                date={initialDate}
                time={formatTime(initialTime)}
                location={localEvent}
              />

              <div className="container-qrcode">
                <div className="image-eventcard">
                  <QRCode value={authCode} className="custom-qr" />
                </div>

                <p>Código de autenticação</p>
                <h2>{authCode}</h2>
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
                onClose={handleCloseModal}
                showModal={showPopup}
              />
            )}
          </div>
        </div>

        <div className="right-column">
          <div className="tickets-content-right">
            <h2>Próximos eventos</h2>
            <div className="container-next-events">
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
    </div>
  );
};

export default Tickets;
