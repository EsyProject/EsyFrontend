import { useState } from "react";
import { Sidebar, Navbar, EventCard } from "../../components/index";
import AreaModal from "../../components/AreaModal/AreaModal";
import "./Reservation.css"

// apenas para fins de teste
import ReactDOM from 'react-dom';
import Carousel from "../../components/Carousel/Carousel";

const Reservation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // teste do modal de informações da área

  const [isModalAreaOpen, setIsModalAreaOpen] = useState(false);
  const openModalArea = () => {
    setIsModalAreaOpen(true);
  };
  const closeModalArea = () => {
    setIsModalAreaOpen(false);
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
            audience="Público Principal - Digital Solutions e Mecatrônica"
            title="hackaton"
            subtitle="7ª Edição"
            date="10/07/2024"
            time="09h00"
            location="Ca300"
          />

          <div className="description-content">
            <div className="description-row-title">
              <h1 className="description-title">Hackathon 7ª Edição</h1>
            </div>

            <p className="description-content-text description-main">Hackathon é nosso evento semestral focado nas áreas
              de tecnologia e inovação e conta com os aprendizes dos cursos de Digital Solutions e
              Mecatrônica. Durante uma semana os aprendizes desenvolvem projetos reais que buscam
              trazer melhorias internas para algum processo ou setor da Bosch Campinas. Durante
              este período as equipes apredem de forma muito rápida e eficiente a trabalharem de
              modo ágil e exploram sua criatividade e capacidades técnicas e socioemocionais.
              Venha participar da apresentação dos projetos e descobrir pessoalmente o quão
              talentosos são os nossos jovens.</p>

            <div className="description-infos">
              <div className="description-wrapper">
                <div className="description-date">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  <p>10/07/2024</p>
                </div>

                <div className="description-date">
                  <span className="material-symbols-outlined">schedule</span>
                  <p>09:00 às 15:00</p>
                </div>

                <div className="description-date">
                  <span className="material-symbols-outlined">location_on</span>
                  <p>Ca300</p>
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn-primary">Participar</button>
              {/* link para acessar informações da área */}
              <button onClick={openModalArea} className="btn-link">Saiba mais sobre a área do evento</button>
              {isModalAreaOpen && <AreaModal onClose={closeModalArea} />}
            </div>
          </div>
        </div>

        <div className="container-child-column">
          <h1 className="description-title">Edições anteriores</h1>
          <p className="description-content-text">Confira os projetos que conquistaram o pódio nas edições anteriores do Hackathon</p>
          {/* <Carousel images={images} /> */}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
