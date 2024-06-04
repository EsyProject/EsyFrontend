import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, Navbar, EventCard, MessageModal } from "../../components/index";
import AreaModal from "../../components/AreaModal/AreaModal";
import Footer from "../../components/Footer/Footer";
import "./Reservation.css";
import { useEventById } from "../../services/queries";
import { useGetTicket } from "../../services/mutations";
import Carousel from "../../components/Carousel/Carousel";

const Reservation = () => {
  const eventId = "13";
  const { data: eventFeed } = useEventById(eventId);
  const [eventFeedData, setEventFeedData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const navigate = useNavigate();
  const [qrCodeNumber, setQrCodeNumber] = useState(null);

  // Adicionando estado para armazenar o ID do evento e do ticket
  const [eventIdForTicket, setEventIdForTicket] = useState(null);
  
  useEffect(() => {
    if (eventFeed) {
      setEventFeedData(eventFeed);
    }
  }, [eventFeed]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // modal de informações da área
  const [isModalAreaOpen, setIsModalAreaOpen] = useState(false);
  const openModalArea = () => {
    setIsModalAreaOpen(true);
  };
  const closeModalArea = () => {
    setIsModalAreaOpen(false);
  };

  // imagens para o carrossel
  const images = [
    {
      src: "src/assets/images-reservation/img1.png",
      text: {
        title: "Bosch Uva",
        description: "2° Lugar - Hackathon 6ª Edição (janeiro de 2024)"
      }
    },
    {
      src: "src/assets/images-reservation/img2.png",
      text: {
        title: "Happdine",
        description: "1° Lugar - Hackathon 6ª Edição (janeiro de 2024)"
      }
    },
    {
      src: "src/assets/images-reservation/img3.png",
      text: {
        title: "Empathy Connect",
        description: "3° Lugar - Hackathon 6ª Edição (janeiro de 2024)"
      }
    },
    {
      src: "src/assets/images-reservation/img4.png",
      text: {
        title: "S.I.R. Arcade",
        description: "1° Lugar - Hackathon 5ª Edição (julho de 2023)"
      }
    },
    {
      src: "src/assets/images-reservation/img5.png",
      text: {
        title: "Motronic",
        description: "2° Lugar - Hackathon 5ª Edição (julho de 2023)"
      }
    },
    {
      src: "src/assets/images-reservation/img6.png",
      text: {
        title: "Eulle",
        description: "3° Lugar - Hackathon 5ª Edição (julho de 2023)"
      }
    },
    {
      src: "src/assets/images-reservation/img7.png",
      text: {
        title: "Greenbo",
        description: "1° Lugar - Hackathon 4ª Edição (janeiro de 2023)"
      }
    },
    {
      src: "src/assets/images-reservation/img8.png",
      text: {
        title: "Undefined",
        description: "Undefined description"
      }
    },
    {
      src: "src/assets/images-reservation/img9.png",
      text: {
        title: "Undefined",
        description: "Descrição Undefined"
      }
    },
  ];

  const { nameOfEvent, responsible_area, localEvent, description, initialTime, finishTime, initialDate } = eventFeedData || {};
  const displayResponsibleArea = responsible_area === "ETS" ? "ETS - Engineering Technical School" : responsible_area;

  // Função para formatar a hora
  const formatTime = (time) => {
    if (!time) return "";
    return time.slice(0, 5);
  };

  const { mutate: getTicket } = useGetTicket();

  const handleParticipateClick = () => {
    getTicket(eventId, {
      onSuccess: (data) => {
        setEventIdForTicket(eventId);
        setTicketId(data.ticket_id);
  
        setQrCodeNumber(data.qrCodeNumber);
        setShowPopup(true);
  
        console.log("ID do Evento:", eventId);
        console.log("ID do Ticket:", data.ticket_id);
        console.log("Qrcode Number:", data.qrCodeNumber);
      },
      onError: (error) => {
        console.error("Error acquiring ticket:", error);
      },
    });
  };
  

  const handleCloseModal = () => {
    setShowPopup(false);
    const code = `${qrCodeNumber}.${eventId}.${ticketId}`;
    console.log(`${code}`)
    navigate("/tickets", { state: { code: code } });
  };

  return (
    <div className={`feed-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        currentPageIcon="home"
        activePage="description"
        navigationText="Home"
        showNavigationTexts={true}
        tabs={[
          { name: "feed", text: "Feed de eventos", link: "/feed" },
          { name: "description", text: "Descrição", link: "/description" },
        ]}
      />

      <Sidebar
        activePage="home"
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="container-main container-main-local">
        <div className="container-child">
          <EventCard
            audience={displayResponsibleArea}
            title={nameOfEvent}
            subtitle="7ª Edição"
            date={initialDate}
            time={formatTime(initialTime)}
            location={localEvent}
          />

          <div className="description-content">
            <div className="description-row-title">
              <h1 className="description-title">{nameOfEvent} 7ª Edição</h1>
            </div>

            <p className="description-content-text description-main">{description}</p>

            <div className="description-infos">
              <div className="description-wrapper">
                <div className="description-date">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  <p>{initialDate}</p>
                </div>

                <div className="description-date">
                  <span className="material-symbols-outlined">schedule</span>
                  <p>{formatTime(initialTime)} às {formatTime(finishTime)}</p>
                </div>

                <div className="description-date">
                  <span className="material-symbols-outlined">location_on</span>
                  <p>{localEvent}</p>
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button onClick={handleParticipateClick} className="btn-primary">Participar</button>
              <button onClick={openModalArea} className="btn-link">Saiba mais sobre a área do evento</button>
              {isModalAreaOpen && <AreaModal onClose={closeModalArea} />}
            </div>
          </div>

          {showPopup && (
            <MessageModal
              title="Reserva concluída"
              text="Reserva no evento realizada com sucesso. Fique atento à data e horário do evento e visite a aba de calendário e a aba de tickets para realizar sua autenticação na entrada do evento."
              onClose={handleCloseModal}
              showModal={showPopup}
            />
          )}
        </div>

        <div className="container-child-column">
          <h1 className="description-title">Edições anteriores</h1>
          <p className="description-content-text">Confira os projetos que conquistaram o pódio nas edições anteriores do Hackathon</p>
          <Carousel images={images} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
